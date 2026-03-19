import { useState } from "react";
import { Phone, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Eddie Ball Construction site at golden hour in Newport, Tennessee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>
      <div className="container mx-auto relative z-10 py-16 px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "fill-primary/40 text-primary/40"}`} />
            ))}
            <span className="text-secondary-foreground/70 text-sm ml-1">3.8 / 5 (10 reviews)</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground uppercase leading-[0.95] mb-6">
            Building Dreams<br />
            <span className="text-primary">Since Day One</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Newport, Tennessee's trusted construction company. From custom homes to full renovations — we build it right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="tel:4236253796" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-lg hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="https://maps.google.com/?q=101+Smoky+View+Ln+Newport+TN+37821" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded font-bold text-lg hover:border-primary hover:text-primary transition">
              <MapPin className="w-5 h-5" /> Get Directions
            </a>
          </div>
          <p className="text-secondary-foreground/50 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4" /> 101 Smoky View Ln, Newport, TN 37821
          </p>
        </div>

        <div className="bg-background/95 backdrop-blur rounded-lg p-8 shadow-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground uppercase mb-2">Get a Free Estimate</h2>
          <p className="text-muted-foreground mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Tell us about your project..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded font-bold text-lg uppercase tracking-wide hover:brightness-110 transition">
                Request Free Estimate
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
