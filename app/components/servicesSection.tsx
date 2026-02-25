import { Scissors, TreePine, Leaf, Sparkles } from "lucide-react";

const services = [
    {
        icon: Scissors,
        title: "Sekání trávy",
        description: "Pravidelné i jednorázové sečení trávníků — vaše zahrada zůstane upravená, zdravá a jako z obrázku po celou sezónu.",
    },
    {
        icon: TreePine,
        title: "Údržba sadů",
        description: "Kompletní péče o ovocné sady — řez, odstraňování náletů a udržování stromů zdravých a plodných.",
    },
    {
        icon: Leaf,
        title: "Čištění pozemků",
        description: "Zarostlé parcely, zanedbané dvory nebo divoké plochy — vyčistíme, uklidíme a zregenerujeme jakýkoli pozemek.",
    },
    {
        icon: Sparkles,
        title: "Úklid zahrady",
        description: "Stříhání živých plotů, odvoz odpadu, pletí a obecný úklid pro proměnu vašich venkovních prostor.",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 px-6 bg-mist-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Co nabízíme</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Naše služby</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-mist-100/80 rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-mist-200 group"
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