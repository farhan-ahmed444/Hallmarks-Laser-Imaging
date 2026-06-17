import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiBadgeCheck, HiClock, HiCog, HiShieldCheck, HiStar, HiChartBar } from 'react-icons/hi';
import { trustBarData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const icons = {
  precision: HiBadgeCheck,
  speed: HiClock,
  custom: HiCog,
  durable: HiShieldCheck,
  expertise: HiStar,
  quality: HiChartBar,
};

export default function TrustBar() {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(counterRef.current.children, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-section-alt border-y border-border">
      <div className="container-wide">
        <div ref={counterRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBarData.map((item, i) => {
            const Icon = icons[item.icon] || HiBadgeCheck;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-secondary/30 transition-all group cursor-default"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white text-sm font-semibold">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
