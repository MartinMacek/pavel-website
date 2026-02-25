import { Scissors, TreePine, Leaf, Sparkles } from "lucide-react";

const services = [
    {
        icon: Scissors,
        title: "Grass Cutting",
        description: "Regular and one-time lawn mowing to keep your garden neat, healthy, and picture-perfect all season long.",
    },
    {
        icon: TreePine,
        title: "Orchard Maintenance",
        description: "Complete care for fruit orchards — trimming, clearing undergrowth, and keeping trees healthy and productive.",
    },
    {
        icon: Leaf,
        title: "Land Cleaning",
        description: "Overgrown plots, neglected yards, or wild areas — we clear, clean, and restore any piece of land.",
    },
    {
        icon: Sparkles,
        title: "Garden Tidy-Up",
        description: "Hedge trimming, debris removal, weeding, and general cleanup to transform your outdoor spaces.",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-mist-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-mist-200 group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-mist-100 flex items-center justify-center group-hover:bg-mist-200 transition-colors">
                                <service.icon className="w-7 h-7 text-green-800" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-green-900 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;