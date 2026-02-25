import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-mist-50">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Napište nám</p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Chcete mít čistší pozemek?
                </h2>
                <p className="text-green-900 text-lg mb-12 max-w-2xl mx-auto">
                    Ozvěte se ještě dnes pro konzultaci zdarma. Prohlédneme váš pozemek a připravíme férovou, transparentní nabídku.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Zavolejte nám</h4>
                        <p className="text-green-900">(555) 123-4567</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <Mail className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Napište e-mail</h4>
                        <p className="text-green-900">info@greenclean.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Oblast působnosti</h4>
                        <p className="text-green-900">Vaše město a okolí</p>
                    </div>
                </div>
                <a
                    href=""
                    className="inline-block bg-green-800 text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                >
                    Zavolejte pro nabídku zdarma
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
