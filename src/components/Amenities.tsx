import { Dumbbell, Home, Film, Baby, Trees, Flower2, MapPin, Music, Users, Heart } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Dumbbell, name: "Gymnasium" },
    { icon: Home, name: "Club House" },
    { icon: Film, name: "Mini Theatre" },
    { icon: Baby, name: "Creche/Day Care" },
    { icon: Users, name: "Children's Play Area" },
    { icon: Flower2, name: "Terrace Garden" },
    { icon: Trees, name: "Park" },
    { icon: Music, name: "Amphitheatre" },
    { icon: MapPin, name: "Kids Play Area" },
    { icon: Heart, name: "Yoga & Meditation" },
  ];

  return (
    <section id="amenities" className="py-20 px-6 bg-gradient-to-b from-background to-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            World-class <span className="text-primary">Amenities</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Over 50+ luxury amenities designed for your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-smooth group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-medium">{amenity.name}</h3>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-sm">And many more luxury amenities...</p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
