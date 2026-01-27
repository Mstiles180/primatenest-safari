import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { useRooms } from "@/hooks/use-lodging";
import { ArrowRight, Star, Leaf, Utensils, Wifi, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Scenic mountain landscape background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10 mix-blend-multiply" />
          <img
            src="https://pixabay.com/get/g83056f38cf8f24ed2013a178cb813e99d7be93fc3b4d15c63e5c02ff5b0cd53ebfcaf690ea233c2cf0e639a9f063e986429302cd23acdbda77fce5d109d8ee32_1280.jpg"
            alt="Mountain Lodge Landscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-primary font-bold text-sm mb-6 shadow-lg backdrop-blur-sm">
              Welcome to Paradise
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Experience <br />
              <span className="text-secondary italic">Nature's</span> Luxury
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Escape to a sanctuary where modern comfort meets untouched wilderness. 
              Discover our forest retreats designed for peace and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rooms">
                <Button className="h-14 px-8 rounded-full bg-secondary text-primary-foreground hover:bg-white hover:text-primary font-bold text-lg transition-all shadow-xl shadow-black/10">
                  Find Your Room
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white font-bold text-lg backdrop-blur-sm transition-all">
                  Explore Lodge
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              {/* Cozy interior cabin shot */}
              <img 
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop" 
                alt="Cozy Cabin Interior" 
                className="relative rounded-3xl shadow-2xl z-10 object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-primary">4.9/5</p>
                    <p className="text-muted-foreground text-sm">Guest Ratings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                  A Sanctuary for the Soul
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nestled in the heart of the ancient pine forest, SerenityLodge offers more than just accommodation. We provide an immersive experience that reconnects you with the rhythm of nature while wrapping you in uncompromising comfort.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Sustainable eco-friendly architecture",
                  "Farm-to-table organic dining",
                  "Guided forest therapy walks",
                  "Premium spa & wellness facilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="link" className="text-primary font-bold p-0 text-lg hover:text-secondary transition-colors group">
                  Learn more about our story 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Accommodations</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Choose Your Retreat</h2>
            <p className="text-muted-foreground text-lg">
              Each room is thoughtfully designed to frame the forest views, featuring locally sourced timber and bespoke furnishings.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[500px] bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms?.slice(0, 3).map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Link href="/rooms">
              <Button size="lg" className="rounded-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-bold px-10 h-14 transition-all">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Leaf className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Eco-Conscious</h3>
              <p className="text-white/60">Powered by renewable energy with zero-waste policies in place.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Utensils className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Organic Dining</h3>
              <p className="text-white/60">Seasonal menus featuring ingredients from our own gardens.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Wifi className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Digital Detox</h3>
              <p className="text-white/60">High-speed WiFi available, or unplug completely in our quiet zones.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Calendar className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Concierge</h3>
              <p className="text-white/60">24/7 service to arrange local tours, hiking guides, and transport.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
