import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";
import { useRooms } from "@/hooks/use-lodging";
import { Skeleton } from "@/components/ui/skeleton";

export default function Rooms() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <div className="min-h-screen bg-muted/20">
      <Navigation />
      
      <div className="pt-32 pb-12 bg-primary text-white text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Accommodations</h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg">
          From cozy single cabins to expansive family suites, find the perfect space for your getaway.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[250px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
