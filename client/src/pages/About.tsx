import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 bg-primary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 relative z-10">About Primate Nest & Safari</h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
          Primate Nest and Safari welcomes you to Kinigi, the home of the world's endangered mountain gorillas. Located just 3 kilometers from Volcanoes National Park headquarters.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Your Gateway to Rwanda's Wonders</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer the perfect blend of comfort, affordability, and adventure. Our boutique lodge features 8 luxury self-contained rooms—available in single, double, and twin options—designed to suit every traveler's needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With rates ranging from $10 to $50 per night, we make it possible for everyone to experience the beauty of Rwanda without compromising on quality. Guests may order delicious breakfast or dinner separately, enjoying fresh local flavors in a cozy setting.
              </p>
            </div>
            <div className="relative">
              {/* Forest path image */}
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
                alt="Forest Path"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative">
              {/* Team/People image */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Adventure Awaits</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond accommodation, Primate Nest and Safari is your trusted partner for unforgettable adventures. We provide VIP vehicles for those seeking extra comfort, as well as specialized safari 4x4 vehicles designed to take you across Rwanda's breathtaking landscapes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From gorilla trekking in Volcanoes National Park to exploring Rwanda's lakes, savannahs, and cultural treasures, our guided safaris promise authentic and memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
