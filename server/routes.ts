import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.rooms.list.path, async (req, res) => {
    const rooms = await storage.getRooms();
    res.json(rooms);
  });

  app.get(api.rooms.get.path, async (req, res) => {
    const room = await storage.getRoom(Number(req.params.id));
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  });

  app.post(api.bookings.create.path, async (req, res) => {
    try {
      const input = api.bookings.create.input.parse(req.body);
      // Basic validation: ensure check-out is after check-in
      if (new Date(input.checkOut) <= new Date(input.checkIn)) {
        return res.status(400).json({ message: "Check-out must be after check-in" });
      }

      const booking = await storage.createBooking(input);
      res.status(201).json(booking);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

export async function seedDatabase() {
  const existingRooms = await storage.getRooms();

  // Update existing rooms if they have old amenities
  if (existingRooms.length > 0) {
    for (const room of existingRooms) {
      if (room.amenities) {
        let changed = false;
        const newAmenities = room.amenities.map(a => {
          if (["Garden View", "City View", "Single Bed"].includes(a)) {
            changed = true;
            return "Hot Shower";
          }
          return a;
        });

        if (changed) {
          await storage.updateRoom(room.id, { amenities: [...new Set(newAmenities)] });
        }
      }
    }
  }

  if (existingRooms.length === 0) {
    await storage.createRoom({
      name: "Deluxe Garden Suite",
      description: "A spacious suite with a private garden view, king-sized bed, and modern amenities.",
      price: 15000, // $150.00
      capacity: 2,
      imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1000",
      type: "suite",
      amenities: ["WiFi", "Hot Shower", "King Bed", "Breakfast Included"]
    });

    await storage.createRoom({
      name: "Cozy Double Room",
      description: "Perfect for couples, featuring a comfortable queen bed and city views.",
      price: 9500, // $95.00
      capacity: 2,
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
      type: "double",
      amenities: ["WiFi", "Hot Shower", "Queen Bed"]
    });

    await storage.createRoom({
      name: "Standard Single",
      description: "Ideal for solo travelers, offering a cozy atmosphere and essential comforts.",
      price: 6500, // $65.00
      capacity: 1,
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
      type: "single",
      amenities: ["WiFi", "Hot Shower", "Work Desk"]
    });

    await storage.createRoom({
      name: "Family Suite",
      description: "Spacious accommodation for the whole family with two bedrooms and a living area.",
      price: 22000, // $220.00
      capacity: 4,
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      type: "suite",
      amenities: ["WiFi", "2 Bedrooms", "Kitchenette", "Living Area"]
    });
  }
}
