import logo from "@/assets/suncity-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img src={logo} alt="Suncity Projects" className="h-12 mb-6" />
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Suncity Projects Pvt. Ltd. is one of India's leading real estate developers, known for 
              creating premium residential and commercial spaces across major cities. With a vision to 
              design modern, sustainable, and high-quality developments, Suncity Developer has earned a 
              strong reputation for trust, innovation, and excellence in the real estate industry.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <a href="#overview" className="block hover:text-primary transition-smooth">Overview</a>
              <a href="#floor-plans" className="block hover:text-primary transition-smooth">Floor Plans</a>
              <a href="#amenities" className="block hover:text-primary transition-smooth">Amenities</a>
              <a href="#gallery" className="block hover:text-primary transition-smooth">Gallery</a>
              <a href="#location" className="block hover:text-primary transition-smooth">Location</a>
              <a href="#contact" className="block hover:text-primary transition-smooth">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 space-y-4">
          <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
            <span>Project Rera: Upcoming Launch-Rera Awaited</span>
            <span>|</span>
            <span>AGENT RERA No.: GGM/284/2017/IR/514/Ext1/2023/21/1</span>
          </div>
          
          <p className="text-xs text-foreground/50 leading-relaxed">
            Disclaimer: The content is for information purposes only and does not constitute an offer to 
            avail of any service. Prices mentioned are subject to change without notice and properties 
            mentioned are subject to availability. Images for representation purposes only. This website 
            belongs to authorized marketing partner.
          </p>

          <div className="flex flex-wrap justify-between items-center gap-4 pt-4 text-xs text-foreground/50">
            <p>© 2024 Suncity Projects. All rights reserved.</p>
            <p>Designed with excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
