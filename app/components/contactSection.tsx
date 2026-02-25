import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Ready for a Cleaner Property?
                </h2>
                <p className="text-green-900 text-lg mb-12 max-w-2xl mx-auto">
                    Reach out today for a free consultation. We'll assess your property and provide a fair, transparent quote.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Call Us</h4>
                        <p className="text-green-900">(555) 123-4567</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <Mail className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Email Us</h4>
                        <p className="text-green-900">info@greenclean.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6">
                        <div className="w-14 h-14 rounded-full bg-mist-100 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-green-800" />
                        </div>
                        <h4 className="font-bold text-foreground">Service Area</h4>
                        <p className="text-green-900">Your City & Surrounding Areas</p>
                    </div>
                </div>
                <a
                    href=""
                    className="inline-block bg-green-800 text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                >
                    Call Now for a Free Quote
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
