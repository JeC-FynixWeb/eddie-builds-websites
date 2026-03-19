import { Phone, ArrowUp } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase leading-tight mb-6">
        Ready to Start<br />
        <span className="text-primary">Your Project?</span>
      </h2>
      <p className="text-secondary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Don't wait — get your free estimate today. Whether it's a new build, renovation, or repair, Eddie Ball Construction is ready to bring your vision to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:4236253796" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded font-bold text-lg uppercase tracking-wide hover:brightness-110 transition">
          <Phone className="w-5 h-5" /> Call (423) 625-3796
        </a>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-10 py-5 rounded font-bold text-lg uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition">
          <ArrowUp className="w-5 h-5" /> Get Free Estimate
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
