import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Luxury Living Room with Balcony View" },
    { src: gallery2, alt: "Modern Interior with Natural Light" },
    { src: gallery3, alt: "Contemporary Dining Space" },
    { src: gallery4, alt: "Elegant Living Area" },
    { src: gallery5, alt: "Spacious Modern Living Room" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            An Unforgettable Once-in-a-Lifetime Experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border/30 hover:border-primary/50 transition-smooth shadow-card"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
