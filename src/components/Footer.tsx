import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary uppercase mb-4">Eddie Ball Construction</h3>
          <p className="text-background/50 leading-relaxed">
            Quality construction services in Newport, Tennessee. Licensed, insured, and dedicated to excellence.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-background/60">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>101 Smoky View Ln, Newport, TN 37821</span>
          </div>
          <div className="flex items-center gap-3 text-background/60">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a href="tel:4236253796" className="hover:text-primary transition">(423) 625-3796</a>
          </div>
          <div className="flex items-center gap-3 text-background/60">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <span>Mon-Fri: 7am - 5pm</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold text-background/80 uppercase mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Why Us", "Gallery", "FAQ", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-background/50 hover:text-primary transition text-sm">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
        © {new Date().getFullYear()} Eddie Ball Construction LLC. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
