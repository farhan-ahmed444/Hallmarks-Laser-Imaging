import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import { industriesData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

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
          {industriesData.map((industry, i) => (
            <motion.a
              key={industry.id}
              href={`/industries#${industry.id}`}
              className="group relative p-8 rounded-2xl bg-section-alt border border-border overflow-hidden min-h-[280px] flex flex-col justify-end cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-full border border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-500" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <span className="text-4xl font-extrabold text-accent/20 mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {industry.title}
                </h3>
                <p className="text-body/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  Learn More <HiArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
