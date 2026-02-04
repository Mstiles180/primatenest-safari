import { db } from "./db";
import {
  rooms,
  bookings,
  type Room,
  type InsertRoom,
  type Booking,
  type InsertBooking
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getRooms(): Promise<Room[]>;
  getRoom(id: number): Promise<Room | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  createRoom(room: InsertRoom): Promise<Room>; // Helper for seeding
  updateRoom(id: number, room: Partial<InsertRoom>): Promise<Room | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getRooms(): Promise<Room[]> {
    return await db.select().from(rooms);
  }

  async getRoom(id: number): Promise<Room | undefined> {
    const [room] = await db.select().from(rooms).where(eq(rooms.id, id));
    return room;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db.insert(bookings).values(insertBooking).returning();
    return booking;
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const [room] = await db.insert(rooms).values(insertRoom).returning();
    return room;
  }

  async updateRoom(id: number, roomUpdate: Partial<InsertRoom>): Promise<Room | undefined> {
    const [updatedRoom] = await db
      .update(rooms)
      .set(roomUpdate)
      .where(eq(rooms.id, id))
      .returning();
    return updatedRoom;
  }
}

export const storage = new DatabaseStorage();
