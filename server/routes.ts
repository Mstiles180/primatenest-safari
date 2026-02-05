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

  // Defining image mapping for consistent updates
  const roomImages: Record<string, string> = {
    "Deluxe Garden Suite": "/images/room1.jpg",
    "Cozy Double Room": "/images/room2.jpg",
    "Standard Single": "/images/room3.jpg",
    "Family Suite": "/images/room4.jpg",
    "Safari Luxury Tent": "/images/room5.jpg",
    "Treehouse Experience": "/images/room6.jpg"
  };

  // Update existing rooms if they have old amenities or old images
  if (existingRooms.length > 0) {
    for (const room of existingRooms) {
      const updates: Partial<typeof room> = {};

      // Update image if defined in mapping and currently different
      if (roomImages[room.name] && room.imageUrl !== roomImages[room.name]) {
        updates.imageUrl = roomImages[room.name];
      } else if (!roomImages[room.name] && room.imageUrl === "/images/room_updated.jpg") {
        // Fallback for unknown rooms if they were set to the previous single image
        updates.imageUrl = "/images/room1.jpg";
      }

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
          updates.amenities = Array.from(new Set(newAmenities));
        }
      }

      if (Object.keys(updates).length > 0) {
        await storage.updateRoom(room.id, updates);
      }
    }
  }

  // Ensure all base rooms exist
  const ensureRoom = async (name: string, description: string, price: number, capacity: number, imageUrl: string, type: string, amenities: string[]) => {
    const exists = existingRooms.find(r => r.name === name);
    if (!exists) {
      await storage.createRoom({ name, description, price, capacity, imageUrl, type, amenities });
    }
  };

  await ensureRoom(
    "Deluxe Garden Suite",
    "A spacious suite with a private garden view, king-sized bed, and modern amenities.",
    15000,
    2,
    "/images/room1.jpg",
    "suite",
    ["WiFi", "Hot Shower", "King Bed", "Breakfast Included"]
  );

  await ensureRoom(
    "Cozy Double Room",
    "Perfect for couples, featuring a comfortable queen bed and city views.",
    9500,
    2,
    "/images/room2.jpg",
    "double",
    ["WiFi", "Hot Shower", "Queen Bed"]
  );

  await ensureRoom(
    "Standard Single",
    "Ideal for solo travelers, offering a cozy atmosphere and essential comforts.",
    6500,
    1,
    "/images/room3.jpg",
    "single",
    ["WiFi", "Hot Shower", "Work Desk"]
  );

  await ensureRoom(
    "Family Suite",
    "Spacious accommodation for the whole family with two bedrooms and a living area.",
    22000,
    4,
    "/images/room4.jpg",
    "suite",
    ["WiFi", "2 Bedrooms", "Kitchenette", "Living Area"]
  );

  await ensureRoom(
    "Safari Luxury Tent",
    "Experience the wild in comfort with our luxury tents featuring en-suite bathrooms.",
    18000,
    2,
    "/images/room5.jpg",
    "luxury",
    ["WiFi", "En-suite Bathroom", "Private Deck", "Nature View"]
  );

  await ensureRoom(
    "Treehouse Experience",
    "Elevated living amidst the canopy, offering a unique perspective of the surroundings.",
    25000,
    2,
    "/images/room6.jpg",
    "unique",
    ["WiFi", "Panoramic View", "Mini Bar", "Stargazing Deck"]
  );
}
