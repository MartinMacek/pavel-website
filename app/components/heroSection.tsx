import heroImage from "@/public/orchard.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-70 contrast-70"
                style={{ backgroundImage: `url(${heroImage.src})` }}
            />
            <div className="absolute inset-0 " />
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up text-white">
                <p className="text-primary-foreground/80 font-body tracking-widest uppercase text-sm mb-4">
                    Profesionální péče o zahrady a pozemky
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                    Spolehlivý partner pro vaši <span className="italic">zeleň</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/85 font-light mb-10 max-w-xl mx-auto">
                    Odborné čištění pozemků, sečení trávy a údržba zahrad pro domy i sady.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="inline-block bg-green-800 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                    >
                        Získejte nabídku zdarma
                    </a>
                    <a
                        href="#services"
                        className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
                    >
                        Naše služby
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
