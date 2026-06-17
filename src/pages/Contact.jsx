import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiChevronDown } from 'react-icons/hi';
import Button from '../components/ui/Button';

const faqs = [
  { q: 'What types of materials can you laser mark?', a: 'We mark a wide range of materials including stainless steel, aluminum, brass, titanium, various plastics, ceramics, and composites. Our fiber laser systems can handle most industrial materials.' },
  { q: 'What is the typical turnaround time?', a: 'Standard orders ship within 5-7 business days. Rush orders can be completed in 24-48 hours. Complex custom projects typically require 10-15 business days depending on specifications.' },
  { q: 'Do you offer custom design services?', a: 'Yes, our engineering team provides full design support. We can work from your specifications, samples, or create custom designs to meet your exact requirements.' },
  { q: 'What file formats do you accept?', a: 'We accept PDF, DXF, DWG, AI, EPS, SVG, PNG, and JPEG formats. Our team can also convert your artwork to the appropriate format for laser marking.' },
  { q: 'Do you offer volume discounts?', a: 'Yes, we offer competitive pricing for volume orders. Contact our sales team for a custom quote based on your quantity requirements.' },
  { q: 'Are your products compliant with industry standards?', a: 'Yes, our products meet ANSI, ISO, MIL-SPEC, FDA, and UL standards as required. We maintain strict quality control and can provide certification documentation.' },
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9b03cdc7?w=1920&q=80')" }} />
        </div>
        <div className="container-wide relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Contact<br /><span className="text-gradient">Hallmarks</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Ready to discuss your project? Our expert team is here to help you find the perfect identification solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-8 rounded-2xl bg-bg-dark border border-border">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-section-alt border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-body/30" />
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-section-alt border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-body/30" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-section-alt border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-body/30" />
                  <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-3 bg-section-alt border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-body/30 resize-none" />
                  <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-6 mb-10">
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                <p className="text-body text-sm leading-relaxed">
                  Our team is available Monday through Friday to discuss your project requirements and provide expert guidance.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { icon: HiPhone, label: 'Phone', value: '+1 (800) 555-LASER', href: 'tel:+18005555273' },
                  { icon: HiMail, label: 'Email', value: 'info@hallmarkslaser.com', href: 'mailto:info@hallmarkslaser.com' },
                  { icon: HiLocationMarker, label: 'Address', value: '1234 Industrial Blvd, Detroit, MI 48201', href: '#' },
                  { icon: HiClock, label: 'Business Hours', value: 'Mon-Fri: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 12:00 PM' },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-dark transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-body/60 text-xs font-semibold tracking-wider uppercase">{item.label}</span>
                      <p className="text-white font-semibold text-sm mt-0.5 whitespace-pre-line">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9b03cdc7?w=800&q=80')" }} />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="w-10 h-10 text-accent mx-auto mb-2" />
                    <p className="text-white font-bold">Interactive Map</p>
                    <p className="text-body/60 text-xs">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-dark">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-section-alt border border-border overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                  <HiChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-body/70 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
