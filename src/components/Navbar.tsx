import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Why Us", "Gallery", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-heading text-2xl font-bold text-primary uppercase tracking-wider">
          Eddie Ball Construction
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wide">
              {l}
            </a>
          ))}
          <a href="tel:4236253796" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-bold text-sm hover:brightness-110 transition">
            <Phone className="w-4 h-4" /> (423) 625-3796
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-secondary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary pb-4 px-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="block py-3 text-secondary-foreground/80 hover:text-primary transition-colors font-semibold uppercase tracking-wide text-sm">
              {l}
            </a>
          ))}
          <a href="tel:4236253796" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-bold text-sm mt-2 justify-center">
            <Phone className="w-4 h-4" /> (423) 625-3796
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
