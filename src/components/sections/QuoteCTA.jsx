import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function QuoteCTA() {
  const sectionRef = useRef(null);
  const beamRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(beamRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center 60%',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div className="absolute top-1/2 left-0 right-0 h-px">
        <div
          ref={beamRef}
          className="h-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div ref={contentRef} className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 border border-accent/20 rounded-full px-4 py-1.5">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Need Custom Identification<br />
            <span className="text-gradient">Products?</span>
          </h2>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Let our experts create the perfect marking and identification solution for your operation. From concept to delivery, we deliver precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/request-quote" variant="primary" size="lg">
              Request a Quote <HiArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <HiPhone className="w-5 h-5" /> Speak With Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
