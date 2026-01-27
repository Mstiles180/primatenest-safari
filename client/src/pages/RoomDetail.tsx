import { useRoute } from "wouter";
import { useRoom } from "@/hooks/use-lodging";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Wifi, Users, Coffee, Maximize, ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

export default function RoomDetail() {
  const [, params] = useRoute("/rooms/:id");
  const id = parseInt(params?.id || "0");
  const { data: room, isLoading } = useRoom(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <Skeleton className="w-full h-[50vh] rounded-3xl mb-12" />
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <Skeleton className="h-[400px] rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Room Not Found</h1>
          <Link href="/rooms">
            <Button>Back to Rooms</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
          <div className="container mx-auto px-4">
            <Link href="/rooms">
              <Button variant="ghost" className="text-white hover:text-secondary hover:bg-white/10 mb-6 pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rooms
              </Button>
            </Link>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 shadow-sm">
              {room.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90 font-medium">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
                <Users className="w-4 h-4" /> {room.capacity} Guests
              </span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
                <Maximize className="w-4 h-4" /> {room.type.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">About this Space</h2>
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {room.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {room.amenities?.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="bg-white p-2 rounded-full text-primary shadow-sm">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-primary">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">House Rules</h3>
              <ul className="space-y-3 relative z-10 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1.5">•</span>
                  <span>Check-in after 3:00 PM, Check-out before 11:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1.5">•</span>
                  <span>Quiet hours are between 10:00 PM and 7:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1.5">•</span>
                  <span>No smoking inside the cabins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1.5">•</span>
                  <span>Pets are welcome in designated pet-friendly cabins</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm room={room} />
              
              <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border/50 text-center">
                <h4 className="font-display font-bold text-lg text-primary mb-2">Need Help?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our concierge team is available 24/7 to assist with your booking or answer any questions.
                </p>
                <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
