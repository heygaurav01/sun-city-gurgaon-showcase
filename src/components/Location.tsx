import { MapPin, Clock } from "lucide-react";

const Location = () => {
  const locationAdvantages = [
    { text: "Direct connectivity to NH-8 and SPR Road", time: null },
    { text: "10 mins from upcoming Global City, Gurgaon", time: null },
    { text: "Cyber City 2 business hub", time: "10 Mins" },
    { text: "Near premium schools like Moksh & St. Xavier's", time: null },
    { text: "Luxury hotels nearby including Hyatt & Radisson", time: null },
    { text: "Premium golf courses in Close Vicinity", time: null },
    { text: "Upcoming RRTS for high-speed intercity travel", time: null },
    { text: "25 mins drive to IGI and Domestic Airport", time: "20 Mins" },
    { text: "Easy access to Medanta, Artemis & top hospitals", time: null },
    { text: "Upcoming metro corridor to Delhi & Gurugram", time: null },
  ];

  return (
    <section id="location" className="py-20 px-6 bg-gradient-to-b from-background to-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Location <span className="text-primary">Advantages</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg mb-8">
            Discover Your Perfect Place in the Perfect Location
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {locationAdvantages.map((location, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-smooth group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-foreground/90 text-sm md:text-base">{location.text}</p>
                {location.time && (
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-semibold">{location.time}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder - you can integrate Google Maps here */}
        <div className="w-full h-96 rounded-2xl bg-card/30 border border-border/30 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-foreground/60">Map view integration coming soon</p>
            <p className="text-sm text-foreground/40 mt-2">Prime Location: Sector 78, Gurgaon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
