import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight, HiBadgeCheck } from 'react-icons/hi';
import RevealAnimation from '../components/ui/RevealAnimation';
import QuoteCTA from '../components/sections/QuoteCTA';
import { industriesData } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }} />
        </div>
        <div className="container-wide relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">Our Markets</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Industries We<br /><span className="text-gradient">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              From aerospace to energy, our precision identification solutions meet the rigorous standards of the most demanding industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div ref={gridRef} className="space-y-24">
            {industriesData.map((industry, i) => (
              <div key={industry.id} id={industry.id} className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
                <RevealAnimation direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-6xl font-extrabold text-accent/20">0{i + 1}</span>
                    </div>
                  </div>
                </RevealAnimation>
                <RevealAnimation direction={i % 2 === 0 ? 'right' : 'left'}>
                  <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">{industry.title}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">{industry.title} Solutions</h2>
                  <p className="text-body text-base leading-relaxed mb-6">{industry.description}</p>
                  <div className="space-y-3 mb-8">
                    {['Precision engineered for compliance', 'Custom solutions for your specifications', 'Rapid prototyping and production', 'Quality assured manufacturing'].map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <HiBadgeCheck className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/request-quote" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                    Request a Quote <HiArrowRight className="w-4 h-4" />
                  </a>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
