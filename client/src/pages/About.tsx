import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-primary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 relative z-10">Our Story</h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
          Founded in 2010, SerenityLodge began with a simple dream: to create a space where people could disconnect from the noise of the world and reconnect with themselves.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Rooted in Nature</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every beam in our lodge tells a story. We worked with local artisans to build structures that blend seamlessly into the forest canopy, minimizing our impact on the land while maximizing the breathtaking views.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that luxury shouldn't come at the cost of the environment. That's why we operate on 100% renewable energy and maintain a zero-waste kitchen that sources ingredients from our own organic gardens.
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
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hospitality is an art form. From the moment you arrive, our dedicated team is here to ensure every detail of your stay is perfect. Whether it's arranging a surprise private dinner or guiding you to the best hidden trails.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't just offer a place to sleep; we offer a place to dream, to breathe, and to be.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
