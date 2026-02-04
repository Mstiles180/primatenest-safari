import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Car, Users, Luggage, Fuel, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const vehicles = [
    {
        id: 1,
        name: "Safari Land Cruiser",
        type: "Premium 4x4 Safari Vehicle",
        capacity: "7 passengers",
        luggage: "6 large bags",
        fuel: "Diesel",
        features: [
            "Extended chassis for extra legroom",
            "Pop-up roof for 360° game viewing",
            "Fridge/Cool box included",
            "Inverter for charging devices",
            "High ground clearance",
            "Professional driver-guide"
        ],
        pricePerDay: "$180",
        image: "/images/landcruiser1.jpg",
    },
    {
        id: 2,
        name: "V8 Land Cruiser",
        type: "Luxury VIP Transport",
        capacity: "5 passengers",
        luggage: "4 large bags",
        fuel: "Petrol/Diesel",
        features: [
            "Premium leather interior",
            "Advanced climate control",
            "Superior suspension for comfort",
            "Tinted windows for privacy",
            "Powerful V8 engine",
            "Perfect for business or VIP tours"
        ],
        pricePerDay: "$200",
        image: "/images/landcruiser2.jpg",
    },
    {
        id: 3,
        name: "Safari Car",
        type: "Customized Adventure Vehicle",
        capacity: "5-7 passengers",
        luggage: "5 large bags",
        fuel: "Diesel",
        features: [
            "Customized specifically for safaris",
            "Wide sliding windows",
            "Pop-up roof",
            "Rugged durability",
            "Comfortable seating",
            "Experienced safari guide driver"
        ],
        pricePerDay: "$150",
        image: "/images/safari1.jpg",
    },
    {
        id: 4,
        name: "Extended Safari Cruiser",
        type: "Group Adventure Vehicle",
        capacity: "7-9 passengers",
        luggage: "8 large bags",
        fuel: "Diesel",
        features: [
            "Extra spacious interior",
            "Double pop-up roof",
            "Charging points at every seat",
            "Ideal for larger groups",
            "Refrigerator on board",
            "Experienced guide included"
        ],
        pricePerDay: "$190",
        image: "/images/safari2.jpg",
    },
    {
        id: 5,
        name: "Open-Roof Safari Jeep",
        type: "Photography Specialized",
        capacity: "4 passengers",
        luggage: "3 large bags",
        fuel: "Diesel",
        features: [
            "360° unobstructed views",
            "Bean bags for camera stability",
            "Rugged off-road capability",
            "Perfect for photographers",
            "Water & snacks included",
            "Specialized tracker guide"
        ],
        pricePerDay: "$160",
        image: "/images/safari3.png",
    },
    {
        id: 6,
        name: "Toyota Prado Land Cruiser",
        type: "Comfort 4x4 SUV",
        capacity: "4 passengers",
        luggage: "4 medium bags",
        fuel: "Diesel/Petrol",
        features: [
            "Air conditioned comfort",
            "Sunroof",
            "Smooth city & off-road drive",
            "Leather seats",
            "Good fuel economy",
            "Self-drive option available"
        ],
        pricePerDay: "$130",
        image: "/images/landcruiser1.jpg",
    },
];

export default function Vehicles() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Car className="h-5 w-5 text-secondary" />
                            <span className="text-sm font-medium">Premium Fleet</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Your Safari <span className="text-secondary">Chariots</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Experience the wild in our specialized Toyota Land Cruisers and Safari cars, designed for comfort, viewing, and rugged terrain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {vehicles.map((vehicle) => (
                            <div
                                key={vehicle.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/50
                         hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                {/* Vehicle Image */}
                                <div
                                    className="relative h-64 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage(vehicle.image)}
                                >
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                                        <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                                            View Full Size
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg z-10 pointer-events-none">
                                        {vehicle.pricePerDay}/day
                                    </div>
                                </div>

                                {/* Vehicle Details */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="font-display text-2xl font-bold text-primary mb-1">
                                            {vehicle.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">{vehicle.type}</p>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border/50">
                                        <div className="flex flex-col items-center text-center">
                                            <Users className="h-5 w-5 text-primary mb-2" />
                                            <span className="text-xs text-muted-foreground">Capacity</span>
                                            <span className="text-sm font-semibold text-foreground">{vehicle.capacity}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <Luggage className="h-5 w-5 text-primary mb-2" />
                                            <span className="text-xs text-muted-foreground">Luggage</span>
                                            <span className="text-sm font-semibold text-foreground">{vehicle.luggage}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <Fuel className="h-5 w-5 text-primary mb-2" />
                                            <span className="text-xs text-muted-foreground">Fuel</span>
                                            <span className="text-sm font-semibold text-foreground">{vehicle.fuel}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-foreground mb-3">Features & Amenities</h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {vehicle.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-full 
                                   font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-md">
                                        Request This Vehicle
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
                            Why Choose Our Vehicles?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Well Maintained</h3>
                                <p className="text-sm text-muted-foreground">
                                    All vehicles are regularly serviced and maintained to the highest standards
                                </p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Expert Drivers</h3>
                                <p className="text-sm text-muted-foreground">
                                    Professional driver-guides with extensive knowledge of the region
                                </p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Car className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Comfort & Safety</h3>
                                <p className="text-sm text-muted-foreground">
                                    Equipped with safety features and amenities for your comfort
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        Ready for Your Safari Adventure?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Contact us to book your vehicle and plan your perfect safari experience
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full 
                     font-semibold hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl w-[90vw] p-0 border-none bg-transparent shadow-none">
                    <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors">
                        <X className="h-6 w-6" />
                    </DialogClose>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Selected vehicle"
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
