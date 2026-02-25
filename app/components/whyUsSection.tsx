import { CheckCircle } from "lucide-react";

const reasons = [
    "Reliable, on-time service every visit",
    "Affordable pricing with no hidden fees",
    "Experienced team with professional equipment",
    "We leave your property spotless",
    "Flexible scheduling — weekly, biweekly, or one-time",
    "Serving gardens, orchards, and large plots",
];

const WhyUsSection = () => {
    return (
        <section className="py-24 px-6 bg-olive-200">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                    <p className="text-green-900 font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                        Trusted by Homeowners & Landowners
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
                    <div className="bg-green-800 rounded-2xl p-10 text-center max-w-sm text-white">
                        <p className="text-mist-100/80 text-sm uppercase tracking-widest mb-2">Get started</p>
                        <h3 className="text-3xl font-bold text-primary-foreground mb-4">Free Estimate</h3>
                        <p className="text-mist-100/80 mb-8">
                            Tell us about your property and we'll give you a no-obligation quote within 24 hours.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-yellow-600 text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
