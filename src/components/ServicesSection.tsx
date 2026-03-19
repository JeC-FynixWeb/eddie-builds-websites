import { Home, Hammer, PaintBucket, Building2, Wrench, TreePine } from "lucide-react";

const services = [
  { icon: Home, title: "Custom Homes", desc: "From foundation to finish, we build your dream home exactly how you envision it." },
  { icon: Hammer, title: "Renovations", desc: "Transform your existing space with expert remodeling and renovation services." },
  { icon: PaintBucket, title: "Kitchen & Bath", desc: "Complete kitchen and bathroom remodels that add value and beauty to your home." },
  { icon: Building2, title: "Commercial", desc: "Professional commercial construction for businesses throughout East Tennessee." },
  { icon: Wrench, title: "Repairs & Maintenance", desc: "From minor fixes to major repairs, we keep your property in top condition." },
  { icon: TreePine, title: "Decks & Outdoor", desc: "Custom decks, patios, and outdoor living spaces built to last." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mt-3">Our Services</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
