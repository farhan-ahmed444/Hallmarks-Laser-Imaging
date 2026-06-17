import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiBadgeCheck, HiEye, HiFlag } from 'react-icons/hi';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import RevealAnimation from '../components/ui/RevealAnimation';
import LaserLine from '../components/ui/LaserLine';
import QuoteCTA from '../components/sections/QuoteCTA';
import { statsData, teamData } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const storyRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(storyRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: storyRef.current,
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
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }}
          />
        </div>
        <div className="container-wide relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">About Us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Precision Manufacturing<br /><span className="text-gradient">Since 1985</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Four decades of laser innovation, precision engineering, and unwavering commitment to industrial identification excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={storyRef} className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
                />
              </div>
            </div>
            <div>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">A Legacy of Laser Precision</h2>
              <LaserLine />
              <p className="text-body text-base leading-relaxed mt-6 mb-6">
                Founded in 1985, Hallmarks Laser Imaging began with a simple mission: provide the highest quality industrial identification solutions backed by cutting-edge laser technology. What started as a small precision engraving shop has grown into a leading manufacturing facility serving global industries.
              </p>
              <p className="text-body/70 text-sm leading-relaxed mb-8">
                Today, we combine advanced fiber laser systems, computer-controlled manufacturing, and decades of metallurgical expertise to create identification products that withstand the most extreme environments. From aerospace components to deep-sea equipment, our markings are built to last.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {statsData.slice(0, 4).map((stat) => (
                  <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-dark">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HiFlag, title: 'Our Mission', text: 'To deliver precision identification solutions that enhance safety, efficiency, and compliance across global industries through advanced laser technology and manufacturing excellence.' },
              { icon: HiEye, title: 'Our Vision', text: 'To be the world\'s most trusted provider of industrial identification solutions, setting the standard for quality, innovation, and reliability.' },
              { icon: HiBadgeCheck, title: 'Our Values', text: 'Precision, integrity, innovation, and customer partnership drive every decision we make and every product we deliver.' },
            ].map((item, i) => (
              <RevealAnimation key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-section-alt border border-border hover:border-accent/30 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-body/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionTitle title="Our Leadership Team" subtitle="Meet the experienced professionals driving Hallmarks Laser Imaging forward." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, i) => (
              <RevealAnimation key={i} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl bg-bg-dark border border-border hover:border-accent/30 transition-all duration-500 text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/20 mx-auto mb-5 flex items-center justify-center group-hover:border-accent/50 transition-all">
                    <span className="text-2xl font-extrabold text-accent">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-body/60 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
