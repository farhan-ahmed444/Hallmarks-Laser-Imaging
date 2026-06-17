import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import RevealAnimation from '../ui/RevealAnimation';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: HiPhone, label: 'Phone', value: '+1 (800) 555-LASER', href: 'tel:+18005555273' },
  { icon: HiMail, label: 'Email', value: 'info@hallmarkslaser.com', href: 'mailto:info@hallmarkslaser.com' },
  { icon: HiLocationMarker, label: 'Address', value: '1234 Industrial Blvd\nDetroit, MI 48201', href: '#' },
  { icon: HiClock, label: 'Business Hours', value: 'Mon-Fri: 7AM–6PM\nSat: 8AM–12PM', href: '#' },
];

export default function ContactPreview() {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(mapRef.current, {
        scale: 1.05,
        duration: 10,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(0,194,255,0.02)_0%,_transparent_60%)]" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealAnimation>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-body text-base leading-relaxed mb-10">
                Ready to discuss your project? Our team of experts is here to help you find the perfect identification solution for your specific needs.
              </p>
            </RevealAnimation>

            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl hover:bg-secondary/30 transition-all group border border-transparent hover:border-border/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-body/50 text-xs font-semibold tracking-wider uppercase">{item.label}</span>
                    <p className="text-white font-semibold text-sm mt-0.5 whitespace-pre-line">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <RevealAnimation direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border group">
              <div
                ref={mapRef}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9b03cdc7?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <HiLocationMarker className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-white font-bold text-lg">Visit Our Facility</p>
                  <p className="text-body/70 text-sm">Detroit Manufacturing Hub</p>
                  <span className="inline-block mt-4 text-accent text-xs font-semibold tracking-wider uppercase border border-accent/30 rounded-full px-4 py-1.5">
                    Schedule a Tour
                  </span>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
