import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Home, Mountain } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/suncity-logo.webp";
import buildingHero from "@/assets/building-hero.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Thank you! We'll contact you soon.");
    
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with building image and overlay */}
      <div className="absolute inset-0">
        <img 
          src={buildingHero} 
          alt="Suncity Monarch Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark/95 via-background/90 to-luxury-dark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,149,28,0.15),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Suncity Projects" className="h-12 md:h-16 object-contain" />
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-2 transition-smooth shadow-luxury"
          >
            Enquire Now
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Project Info */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-block">
              <span className="text-primary text-sm md:text-base font-medium tracking-wider uppercase border border-primary/30 px-4 py-2 rounded-full">
                Prime Location Sector 78, Gurgaon
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Suncity Monarch
              <span className="block text-primary mt-2">New Launch</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 text-foreground/90">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">3 & 4 BHK Apartments</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <Mountain className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">Panoramic Views</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">5 Towers G+45</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm md:text-base text-foreground/80">Luxury Amenities</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">₹3.60 Cr</div>
                <div className="text-sm md:text-base text-foreground/80">Onwards</div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-base px-8 py-6 transition-smooth"
              >
                Explore Project
              </Button>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="relative">
            <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 shadow-luxury">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center">
                Register for <span className="text-primary">Exclusive Offers</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-smooth h-12"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Mobile No *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-smooth h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="E-Mail Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary transition-smooth h-12"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base transition-smooth shadow-luxury h-12"
                >
                  Register Now
                </Button>

                <p className="text-xs text-foreground/60 text-center leading-relaxed">
                  I authorize company representatives to call, SMS, email or WhatsApp me about its products and offers.
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-border/30 text-center">
                <p className="text-sm text-foreground/70">
                  Channel Partner RERA No: GGM/284/2017/IR/514/Ext1/2023/21/1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
