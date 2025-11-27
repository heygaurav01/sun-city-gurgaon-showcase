import { Check } from "lucide-react";

const Overview = () => {
  const highlights = [
    "5 Iconic Towers spread across 16 acres of prime land",
    "45 Storeys High - Soaring luxury high-rise living",
    "Spacious 3 & 4 BHK Apartments with premium layouts",
    "70% Open Green Spaces with mesmerizing Aravalli views",
    "Ultra-Premium Layouts with wide decks and cross ventilation",
    "Strategic Location on NH-48 near Dwarka Expressway",
    "Modern Architecture with sustainable and eco-friendly design",
    "Ideal for discerning homebuyers and investors in the Gurgaon market",
    "Excellent investment potential with expected appreciation in property values",
  ];

  return (
    <section id="overview" className="py-20 px-6 bg-gradient-to-b from-background to-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Suncity Monarch Sector 78
            <span className="block text-primary mt-2">Luxury Residences in Gurgaon</span>
          </h2>
          <div className="max-w-4xl mx-auto text-foreground/80 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Suncity Monarch Sector 78 Gurgaon redefines ultra-luxury living in the heart of New Gurgaon. 
              This iconic residential masterpiece by Suncity Group offers meticulously crafted 3 & 4 BHK 
              luxury apartments that seamlessly blend contemporary architecture with world-class amenities. 
              Spread across 16 acres of pristine land, Suncity Monarch features 5 majestic towers soaring 
              45 storeys high, creating a distinguished skyline landmark in Sector 78.
            </p>
            <p>
              Designed for discerning homeowners who seek elegance and convenience, each residence at 
              Suncity Monarch showcases thoughtful layouts with spacious balconies, abundant natural light, 
              and premium finishes. The project emphasizes sustainable living with over 70% open green spaces, 
              offering residents a serene sanctuary while maintaining proximity to Gurgaon's key business 
              districts and social infrastructure.
            </p>
            <p>
              With its strategic location near NH-48 and Dwarka Expressway, Suncity Monarch Sector 78 
              Gurgaon provides the perfect balance between urban connectivity and tranquil residential 
              living, making it an ideal address for modern families and astute investors.
            </p>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl md:text-3xl font-serif mb-8 text-center">
            Spread across <span className="text-primary">16-acre</span> premium land parcel
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-smooth group"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-foreground/90 text-sm md:text-base">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
