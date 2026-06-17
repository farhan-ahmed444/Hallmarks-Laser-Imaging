import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight, HiOutlineSparkles, HiOutlineTag, HiOutlineShieldCheck, HiOutlineClipboardList, HiOutlineCog, HiOutlineCube } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const iconMap = [
  HiOutlineSparkles,
  HiOutlineTag,
  HiOutlineShieldCheck,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCube,
];

const servicesData = [
  {
    id: 'laser-engraving',
    title: 'Laser Marking & Engraving',
    description: 'High-precision laser marking and engraving solutions for industrial applications. Permanent, high-contrast marks on metals, plastics, and composites.',
    features: ['Permanent marking', 'High contrast', 'Micro-precision'],
  },
  {
    id: 'nameplates',
    title: 'Nameplates & Data Plates',
    description: 'Custom engineered nameplates and data plates built to your exact specifications. ANSI, ISO, and military standard compliant.',
    features: ['Custom specs', 'Weather resistant', 'Barcode integration'],
  },
  {
    id: 'asset-tags',
    title: 'Asset Tags & Barcode Labels',
    description: 'Durable asset tracking solutions with integrated barcode, QR code, and RFID capabilities for comprehensive inventory management.',
    features: ['Barcode integration', 'RFID ready', 'Custom sequences'],
  },
  {
    id: 'industrial-labels',
    title: 'Industrial Signage',
    description: 'Heavy-duty industrial signage and identification systems designed for harsh environments, extreme temperatures, and demanding conditions.',
    features: ['Heavy duty', 'Weatherproof', 'Chemical resistant'],
  },
  {
    id: 'control-panels',
    title: 'Control Panels & Overlays',
    description: 'Precision engineered control panel overlays, membrane switches, and graphic panels with tactile feedback and backlighting options.',
    features: ['Tactile feedback', 'Backlight options', 'EMI shielding'],
  },
  {
    id: 'custom-manufacturing',
    title: 'Custom Manufacturing',
    description: 'End-to-end custom manufacturing solutions from concept to production. Engineering support, prototyping, and volume production.',
    features: ['Engineering support', 'Rapid prototyping', 'Volume production'],
  },
];

export default function ServicesSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,194,255,0.03)_0%,_transparent_70%)]" />
      <div className="container-wide relative z-10">
        <SectionTitle
          title="Industrial Identification Solutions"
          subtitle="Comprehensive laser marking, engraving, and identification services engineered for the most demanding industrial applications."
        />

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = iconMap[i];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative p-8 rounded-2xl bg-section-alt border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 30px rgba(0,194,255,0.1), inset 0 0 30px rgba(0,194,255,0.05)' }} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full border border-border text-body/60 bg-bg-dark/50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <motion.span
                    className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Learn More <HiArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
