import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { HiArrowRight, HiShieldCheck, HiClock, HiCog, HiBadgeCheck } from 'react-icons/hi';
import Button from '../ui/Button';

const metrics = [
  { icon: HiBadgeCheck, label: '40+ Years Experience' },
  { icon: HiClock, label: 'Fast Turnaround' },
  { icon: HiCog, label: 'Custom Manufacturing' },
  { icon: HiShieldCheck, label: 'Quality Assured' },
];

export default function HeroSection() {
  const headlineRef = useRef(null);
  const laserRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current.children,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.5 }
      )
        .fromTo(
          '.hero-sub',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-buttons > *',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.3'
        );

      gsap.to(laserRef.current, {
        x: '100%',
        duration: 3,
        repeat: -1,
        ease: 'power2.inOut',
      });

      gsap.fromTo(
        metricsRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 1.5 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,194,255,0.08)_0%,_transparent_70%)]" />
      </div>

      <div ref={laserRef} className="absolute top-1/3 left-0 w-32 h-px bg-accent/60 blur-sm" />

      <div className="container-wide relative z-20 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={headlineRef}>
              <span className="inline-block text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 border border-accent/20 rounded-full px-4 py-1.5">
                Precision Laser Technology
              </span>
              <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[1.1] text-white mb-6">
                <span className="block">Precision Laser Marking</span>
                <span className="block text-gradient">&amp; Industrial Identification</span>
              </h1>
            </div>

            <p className="hero-sub text-lg md:text-xl text-body leading-relaxed max-w-xl mb-8">
              Custom nameplates, labels, asset tags, barcode systems, industrial signage, and precision engraving solutions built for demanding industries.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Button href="/request-quote" variant="primary" size="lg">
                Request a Quote <HiArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/products" variant="outline" size="lg">
                View Products
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { title: 'Metal Nameplates', color: 'from-accent/30 to-transparent' },
                  { title: 'Asset Tags', color: 'from-highlight/30 to-transparent' },
                  { title: 'Barcode Labels', color: 'from-accent/20 to-transparent' },
                  { title: 'Engraved Parts', color: 'from-highlight/20 to-transparent' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${card.color} border border-border backdrop-blur-sm hover:border-accent/40 transition-all group cursor-default`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-all">
                      <div className="w-4 h-4 rounded-sm bg-accent/60" />
                    </div>
                    <h3 className="text-white font-bold text-sm">{card.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/40">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <metric.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white text-sm font-semibold">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
