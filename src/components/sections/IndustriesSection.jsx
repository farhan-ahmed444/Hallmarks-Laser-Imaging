import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight, HiCog, HiAcademicCap, HiShieldCheck, HiHeart, HiLightningBolt, HiBriefcase } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const iconMap = [HiCog, HiAcademicCap, HiShieldCheck, HiHeart, HiLightningBolt, HiBriefcase];

const industriesData = [
  { id: 'manufacturing', title: 'Manufacturing', description: 'Comprehensive identification solutions for manufacturing operations, production lines, and inventory management.' },
  { id: 'aerospace', title: 'Aerospace', description: 'MIL-SPEC compliant identification for aerospace components, assemblies, and maintenance tracking.' },
  { id: 'defense', title: 'Defense', description: 'Secure, durable marking solutions for defense equipment, weapon systems, and logistics.' },
  { id: 'medical', title: 'Medical', description: 'FDA compliant identification for medical devices, instruments, and equipment.' },
  { id: 'energy', title: 'Energy', description: 'Extreme environment identification solutions for oil, gas, power, and renewable energy.' },
  { id: 'commercial-equipment', title: 'Commercial Equipment', description: 'Branding, compliance, and tracking solutions for commercial equipment manufacturers.' },
];

const bgImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
];

export default function IndustriesSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 60,
        opacity: 0,
        rotation: 3,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,194,255,0.03)_0%,_transparent_70%)]" />
      <div className="container-wide relative z-10">
        <SectionTitle
          title="Industries We Serve"
          subtitle="From aerospace to energy, our precision identification solutions meet the rigorous standards of the world's most demanding industries."
        />

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry, i) => {
            const Icon = iconMap[i];
            return (
              <motion.a
                key={industry.id}
                href={`/industries#${industry.id}`}
                className="group relative p-8 rounded-2xl bg-section-alt border border-border overflow-hidden min-h-[300px] flex flex-col justify-end cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-25 transition-all duration-700 scale-110 group-hover:scale-100"
                  style={{ backgroundImage: `url('${bgImages[i]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 group-hover:via-primary/40 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-full border border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-4xl font-extrabold text-accent/10 absolute top-0 right-0 -mt-8 -mr-4">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-body/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-2">
                    Learn More <HiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
