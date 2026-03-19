import { Shield, Clock, Award, Users } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your complete peace of mind on every project." },
  { icon: Clock, title: "On Time, On Budget", desc: "We respect your timeline and budget — no surprises, no hidden costs." },
  { icon: Award, title: "Quality Craftsmanship", desc: "Every nail, every board, every detail matters. We don't cut corners." },
  { icon: Users, title: "Local & Trusted", desc: "Proudly serving Newport and Cocke County. Your neighbors trust us — you can too." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase mt-3">Built on Trust</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <r.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-secondary-foreground uppercase mb-3">{r.title}</h3>
            <p className="text-secondary-foreground/60 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-secondary-foreground/10 pt-16">
        {[
          { num: "10+", label: "Years Experience" },
          { num: "200+", label: "Projects Completed" },
          { num: "100%", label: "Satisfaction Goal" },
          { num: "24hr", label: "Response Time" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-heading text-4xl md:text-5xl font-bold text-primary">{s.num}</div>
            <div className="text-secondary-foreground/60 mt-2 font-semibold uppercase text-sm tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
