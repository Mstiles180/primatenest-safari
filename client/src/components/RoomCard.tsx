import { type Room } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, Maximize } from "lucide-react";
import { Link } from "wouter";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  // Map standard amenities strings to icons
  const getAmenityIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return <Wifi className="w-3 h-3" />;
    if (lower.includes('breakfast')) return <Coffee className="w-3 h-3" />;
    return <Maximize className="w-3 h-3" />;
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-border/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-10 transition-opacity opacity-0 group-hover:opacity-20" />
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {room.type.toUpperCase()}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
            {room.name}
          </h3>
          <div className="text-right">
            <span className="block text-lg font-bold text-primary">
              ${(room.price / 100).toFixed(0)}
            </span>
            <span className="text-xs text-muted-foreground font-medium">/ night</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {room.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-primary text-xs font-medium">
              <Users className="w-3 h-3" />
              {room.capacity} Guests
            </span>
            {room.amenities?.slice(0, 2).map((amenity, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-primary text-xs font-medium"
              >
                {getAmenityIcon(amenity)}
                {amenity}
              </span>
            ))}
          </div>

          <Link href={`/rooms/${room.id}`}>
            <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-medium transition-transform active:scale-[0.98]">
              View Details & Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
