import ContactSection from "./components/contactSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import ServicesSection from "./components/servicesSection";
import WhyUsSection from "./components/whyUsSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
