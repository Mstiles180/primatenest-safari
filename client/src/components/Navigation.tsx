import { Link, useLocation } from "wouter";
import { Menu, X, Hotel } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Our Rooms" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? "bg-primary text-secondary" : "bg-white text-primary"}`}>
            <Hotel className="h-6 w-6" />
          </div>
          <span
            className={`font-display font-bold text-2xl tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"
              }`}
          >
            Primate Bed & <span className="text-secondary">Safaris</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-secondary ${isScrolled ? "text-primary" : "text-white/90"
                } ${location === link.href ? "text-secondary font-bold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/rooms">
            <Button
              className={`
                rounded-full font-semibold transition-all hover:scale-105
                ${isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-black/10"
                }
              `}
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary border-none text-white w-[300px]">
            <div className="flex flex-col gap-8 mt-12">
              <Link href="/" className="text-2xl font-display font-bold text-secondary">
                Primate Bed & Safaris
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/rooms" className="mt-4">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                    Book Your Stay
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
