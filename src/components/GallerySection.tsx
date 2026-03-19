import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Custom home exterior", label: "Custom Home" },
  { src: gallery2, alt: "Kitchen renovation", label: "Kitchen Remodel" },
  { src: gallery3, alt: "Deck construction", label: "Custom Deck" },
  { src: gallery4, alt: "Bathroom remodel", label: "Bathroom Remodel" },
  { src: gallery5, alt: "Commercial construction", label: "Commercial Build" },
  { src: gallery6, alt: "Home addition", label: "Home Addition" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Work</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mt-3">Project Gallery</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.label} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/70 transition-all duration-300 flex items-center justify-center">
              <span className="font-heading text-xl font-bold text-secondary-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
