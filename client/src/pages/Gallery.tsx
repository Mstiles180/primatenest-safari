import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Camera, ImageIcon } from "lucide-react";

const galleryImages = [
    // Vehicles
    {
        id: 1,
        category: "Vehicles",
        title: "Safari Land Cruiser",
        description: "Rugged and ready for adventure",
        image: "/images/landcruiser1.jpg",
    },
    {
        id: 2,
        category: "Vehicles",
        title: "V8 Luxury Cruiser",
        description: "Comfort meets wilderness",
        image: "/images/landcruiser2.jpg",
    },
    {
        id: 3,
        category: "Vehicles",
        title: "Safari Adventure Car",
        description: "Open roof for best views",
        image: "/images/safari1.jpg",
    },
    {
        id: 4,
        category: "Vehicles",
        title: "Extended Cruiser",
        description: "Spacious group travel",
        image: "/images/safari2.jpg",
    },
    {
        id: 5,
        category: "Vehicles",
        title: "Open Jeep",
        description: "Photography specialized vehicle",
        image: "/images/safari3.png",
    },
    // Wildlife
    {
        id: 6,
        category: "Wildlife",
        title: "Mountain Gorillas",
        description: "Close encounters in the mist",
        image: "/images/wildlife1.jpg",
    },
    {
        id: 7,
        category: "Wildlife",
        title: "Gorilla National Park",
        description: "Guidance through the park",
        image: "/images/wildlife2.jpg",
    },
    {
        id: 8,
        category: "Wildlife",
        title: "Mountain Hiking",
        description: "Viewing the top of the mountains",
        image: "/images/wildlife3.jpg",
    },
    {
        id: 9,
        category: "Wildlife",
        title: "Monkeys",
        description: "Rwanda monkeys",
        image: "/images/wildlife4.jpg",
    },
    {
        id: 10,
        category: "Wildlife",
        title: "Gorillas",
        description: "Mountain gorillas in their natural habitat",
        image: "/images/wildlife5.jpg",
    },
    {
        id: 11,
        category: "Wildlife",
        title: "Travels",
        description: "Comfortable travels with mountain views",
        image: "/images/wildlife6.jpg",
    },
    // Accommodations
    {
        id: 12,
        category: "Accommodations",
        title: "Luxury Lodge",
        description: "Comfort in the heart of nature",
        image: "/images/room1.jpg",
    },
    {
        id: 13,
        category: "Accommodations",
        title: "Cozy Bedroom",
        description: "Rest after a defined adventure",
        image: "/images/room2.jpg",
    },
    {
        id: 14,
        category: "Accommodations",
        title: "Scenic View",
        description: "Wake up to the mountains",
        image: "/images/room3.jpg",
    },
];

import { useState, useMemo } from "react";

export default function Gallery() {
    const categories = ["All", "Vehicles", "Wildlife", "Accommodations"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = useMemo(() => {
        if (activeCategory === "All") {
            // Shuffle images for "All" view
            return [...galleryImages].sort(() => Math.random() - 0.5);
        }
        return galleryImages.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Camera className="h-5 w-5 text-secondary" />
                            <span className="text-sm font-medium">Our Gallery</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Moments Worth <span className="text-secondary">Capturing</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Explore stunning images of our fleet, wildlife encounters, and luxurious accommodations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 border-b border-border/50 sticky top-0 bg-white/95 backdrop-blur-md z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all hover:scale-105 border
                                ${activeCategory === category
                                        ? "bg-primary text-white border-primary"
                                        : "bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 hover:border-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer
                         shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-6">
                                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-display text-2xl font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/90 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        Ready to Create Your Own Memories?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Book your stay and embark on an unforgettable safari adventure
                    </p>
                    <a
                        href="/rooms"
                        className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full 
                     font-semibold hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
                    >
                        Book Your Stay
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
