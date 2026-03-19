import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What areas do you serve?", a: "We primarily serve Newport, Cocke County, and the surrounding East Tennessee area including Sevierville, Morristown, and Dandridge." },
  { q: "Do you offer free estimates?", a: "Yes! We provide free, no-obligation estimates for all projects. Just give us a call at (423) 625-3796 or fill out our contact form." },
  { q: "Are you licensed and insured?", a: "Absolutely. Eddie Ball Construction LLC is fully licensed and insured for your protection and peace of mind." },
  { q: "How long does a typical project take?", a: "Timelines vary by project scope. A bathroom remodel may take 2-4 weeks, while a custom home build can take 4-8 months. We'll provide a detailed timeline during your estimate." },
  { q: "Do you handle permits and inspections?", a: "Yes, we handle all necessary permits and coordinate inspections throughout the construction process so you don't have to worry about it." },
  { q: "Can I see examples of your past work?", a: "Of course! Check out our gallery above, and we're happy to provide references and show you completed projects in person." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Got Questions?</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mt-3">FAQ</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-lg px-6">
            <AccordionTrigger className="font-heading text-lg font-semibold text-foreground uppercase hover:text-primary py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
