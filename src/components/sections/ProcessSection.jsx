import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import { processSteps } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const beamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(beamRef.current, {
        scaleX: 1,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle
          title="Our Process"
          subtitle="From concept to delivery, our streamlined process ensures precision, quality, and efficiency at every stage."
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-12 left-[60px] right-[60px] h-px bg-border hidden lg:block">
            <div
              ref={beamRef}
              className="h-full bg-gradient-to-r from-accent via-highlight to-accent origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          <div ref={timelineRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center lg:text-left">
                <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto lg:mx-0 mb-6 relative z-10">
                  <span className="text-3xl font-extrabold text-accent">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-body/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
