import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-16 bg-primary text-white text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team is available 24/7 to assist with reservations and inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Location</h3>
                    <p className="text-muted-foreground">Kinigi, Rwanda<br />3km from Volcanoes National Park</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Phone</h3>
                    <p className="text-muted-foreground">+250 788 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Email</h3>
                    <p className="text-muted-foreground">info@primatebedandsafaris.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-muted rounded-2xl overflow-hidden border border-border">
              {/* Placeholder for Map - using an image for now */}
              <iframe
                src="https://maps.google.com/maps?q=-1.447025,29.589983&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50">
            <h2 className="font-display text-3xl font-bold text-primary mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">First Name</label>
                  <Input placeholder="Jane" className="h-12 rounded-xl bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Last Name</label>
                  <Input placeholder="Doe" className="h-12 rounded-xl bg-muted/30" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Email</label>
                <Input type="email" placeholder="jane@example.com" className="h-12 rounded-xl bg-muted/30" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <Textarea placeholder="Tell us about your inquiry..." className="min-h-[150px] rounded-xl bg-muted/30 resize-none" />
              </div>

              <Button className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
