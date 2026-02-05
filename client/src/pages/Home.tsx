import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { useRooms } from "@/hooks/use-lodging";
import { ArrowRight, Star, Leaf, Utensils, Wifi, Calendar, CheckCircle2, Hotel, Car, Mountain, Compass, Users } from "lucide-react";
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
        <div className="absolute inset-0 z-0 bg-primary/30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 z-10" />
        </div>

        <div className="container mx-auto px-4 z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-primary font-bold text-sm mb-6 shadow-lg backdrop-blur-sm">
              Complete Safari Experience
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Your Gateway to <br />
              <span className="text-secondary italic">Adventure</span> in Rwanda
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Premium accommodations, expert safari guides, and comfortable transport—everything you need for an unforgettable gorilla trekking and wildlife adventure in Kinigi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button className="h-14 px-8 rounded-full bg-secondary text-primary-foreground hover:bg-white hover:text-primary font-bold text-lg transition-all shadow-xl shadow-black/10">
                  Explore Our Services
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white font-bold text-lg backdrop-blur-sm transition-all">
                  Plan Your Adventure
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">What We Offer</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Safari Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From comfortable accommodations to expert-guided adventures and reliable transport, we provide everything you need for an unforgettable Rwanda experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Accommodations Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl border-2 border-border hover:border-primary overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/room1.jpg"
                  alt="Comfortable Accommodations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                  <Hotel className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">Accommodations</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comfortable rooms just 3km from Volcanoes National Park. Affordable luxury from $10-$50/night with stunning forest views.
                </p>
                <Link href="/rooms">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12">
                    View Rooms
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Vehicles & Transport Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl border-2 border-border hover:border-primary overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/landcruiser1.jpg"
                  alt="Safari Vehicles"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                  <Car className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">Vehicles & Transport</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  VIP comfort vehicles and rugged safari 4x4s ready to take you across Rwanda's stunning landscapes and national parks.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12">
                    Inquire About Vehicles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Safari Experiences Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl border-2 border-border hover:border-primary overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/wildlife1.jpg"
                  alt="Gorilla Trekking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                  <Mountain className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">Safari Experiences</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Expert-guided gorilla trekking, mountain hiking, wildlife safaris, and cultural tours across Rwanda's treasures.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12">
                    Book Your Adventure
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Accommodations Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Stay With Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Our Accommodations</h2>
            <p className="text-muted-foreground text-lg">
              Each room is thoughtfully designed with locally sourced timber, bespoke furnishings, and stunning views of the surrounding forest.
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

      {/* Safari Experiences Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Adventures Await</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Unforgettable Experiences
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From tracking mountain gorillas to exploring volcanic landscapes and immersing yourself in local culture—we curate authentic Rwandan adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gorilla Trekking Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/wildlife1.jpg"
                  alt="Gorilla Trekking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-5 h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm">Signature Experience</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2">Gorilla Trekking</h3>
                  <p className="text-white/90 leading-relaxed">
                    Track endangered mountain gorillas in Volcanoes National Park—an encounter you'll treasure forever.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mountain Hiking Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/wildlife3.jpg"
                  alt="Mountain Hiking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Mountain className="w-5 h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm">Adventure</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2">Mountain Hiking</h3>
                  <p className="text-white/90 leading-relaxed">
                    Conquer the volcanic peaks of the Virunga mountains with breathtaking panoramic views at every turn.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cultural Tours Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/wildlife4.jpg"
                  alt="Cultural Tours"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm">Cultural</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2">Cultural Tours</h3>
                  <p className="text-white/90 leading-relaxed">
                    Visit local communities, traditional villages, and cultural sites to experience Rwanda's rich heritage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wildlife Safaris Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/wildlife2.jpg"
                  alt="Wildlife Safaris"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-5 h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm">Exploration</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2">Wildlife Safaris</h3>
                  <p className="text-white/90 leading-relaxed">
                    Discover Rwanda's diverse ecosystems from savannahs to rainforests, spotting incredible wildlife.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-12 h-14">
                Plan Your Safari Experience
                <ArrowRight className="ml-2 w-5 h-5" />
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
              <h3 className="font-display text-xl font-bold mb-3">Gorilla Trekking</h3>
              <p className="text-white/60">Your gateway to tracking the gentle giants of the Virunga mountains.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Utensils className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Delicious Dining</h3>
              <p className="text-white/60">Order delicious breakfast or dinner separately, enjoying fresh local flavors.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Wifi className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Transport</h3>
              <p className="text-white/60">VIP vehicles and specialized safari 4x4 vehicles available for your comfort.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Calendar className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">Guided Tours</h3>
              <p className="text-white/60">Explore Rwanda's lakes, savannahs, and cultural treasures with our guides.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
