import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from '../ui/AnimatedCounter';
import RevealAnimation from '../ui/RevealAnimation';
import LaserLine from '../ui/LaserLine';
import { statsData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-accent/30 rounded-2xl -z-10" />
            </div>
          </RevealAnimation>

          <div ref={contentRef}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">About Hallmarks</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Precision, Durability<br /><span className="text-gradient">&amp; Performance</span>
            </h2>
            <LaserLine />
            <p className="text-body text-base leading-relaxed mb-6 mt-6">
              For over 40 years, Hallmarks Laser Imaging has been at the forefront of industrial identification technology. We combine advanced laser systems with precision manufacturing to deliver solutions that meet the most demanding specifications.
            </p>
            <p className="text-body/70 text-sm leading-relaxed mb-8">
              Our expertise spans laser technologies, industrial manufacturing, identification systems, and custom fabrication. From aerospace components to medical devices, our markings are built to last in the harshest environments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
