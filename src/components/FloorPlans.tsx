import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import floorPlan1 from "@/assets/floor-plan-1.png";
import floorPlan2 from "@/assets/floor-plan-2.png";

const FloorPlans = () => {
  const plans = [
    {
      image: floorPlan1,
      type: "3 BHK",
      area: "On Request",
    },
    {
      image: floorPlan2,
      type: "4 BHK",
      area: "On Request",
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="floor-plans" className="py-20 px-6 bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Floor <span className="text-primary">Plans</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Thoughtfully designed spaces for modern living
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/50 transition-smooth shadow-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={`${plan.type} Floor Plan`}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Type</div>
                    <div className="text-xl font-semibold">{plan.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-foreground/60 mb-1">Area</div>
                    <div className="text-xl font-semibold">{plan.area}</div>
                  </div>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  Price: On Request
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 transition-smooth shadow-luxury"
          >
            Download Unit Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
