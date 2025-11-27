import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <FloorPlans />
      <Amenities />
      <Gallery />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
