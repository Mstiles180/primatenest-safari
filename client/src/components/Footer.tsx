import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group mb-4 block">
              <img
                src="/images/logo.png"
                alt="Primate Nest & Safari"
                className="h-24 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Primate Nest & <span className="text-secondary">Safari</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Your gateway to Rwanda's wonders. Experience comfort, affordability, and adventure in the heart of Kinigi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="text-white/70 hover:text-white transition-colors">Our Rooms</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-white/70">Gorilla Trekking Safaris</li>
              <li className="text-white/70">VIP Vehicle Transport</li>
              <li className="text-white/70">4x4 Safari Tours</li>
              <li className="text-white/70">Guided Rwanda Tours</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <span>Kinigi, Rwanda<br />3km from Volcanoes National Park</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+250 788 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@primatebedandsafaris.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Primate Nest & Safari. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
