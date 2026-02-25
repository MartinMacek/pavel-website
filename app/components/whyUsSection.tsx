import { CheckCircle } from "lucide-react";

const reasons = [
    "Spolehlivý, včasný servis při každé návštěvě",
    "Dostupné ceny bez skrytých poplatků",
    "Zkušený tým s profesionálním vybavením",
    "Po nás zůstane váš pozemek jako nový",
    "Flexibilní termíny — týdně, čtrnáctidenně nebo jednorázově",
    "Služby pro zahrady, sady i velké plochy",
];

const WhyUsSection = () => {
    return (
        <section className="py-24 px-6 bg-olive-200">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                    <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Proč si vybrat nás</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                        Důvěřují nám majitelé domů i pozemků
                    </h2>
                    <ul className="space-y-4">
                        {reasons.map((reason) => (
                            <li key={reason} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-800 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground text-lg">{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="brandGreen rounded-2xl p-10 text-center max-w-sm text-white">
                        <p className="text-mist-100/80 text-sm uppercase tracking-widest mb-2">Začněte</p>
                        <h3 className="text-3xl font-bold text-primary-foreground mb-4">Nabídka zdarma</h3>
                        <p className="text-mist-100/80 mb-8">
                            Popište nám váš pozemek a do 24 hodin vám zašleme nezávaznou nabídku.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-yellow-600 text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Kontaktujte nás
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
