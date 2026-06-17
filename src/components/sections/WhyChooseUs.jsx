import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiBadgeCheck, HiCog, HiShieldCheck, HiClock, HiStar, HiChartBar } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  { title: 'Precision Manufacturing', description: 'Advanced laser systems with micron-level accuracy for every project, ensuring consistent quality across all deliveries.', icon: HiBadgeCheck },
  { title: 'Custom Engineering', description: 'Dedicated engineering team creating tailored identification solutions that meet your exact specifications and requirements.', icon: HiCog },
  { title: 'Durable Materials', description: 'Industrial-grade materials engineered for extreme environments, from aerospace-grade metals to chemical-resistant polymers.', icon: HiShieldCheck },
  { title: 'Fast Lead Times', description: 'Streamlined production processes ensuring rapid turnaround without compromising on quality or precision.', icon: HiClock },
  { title: 'Quality Assurance', description: 'ISO-compliant quality control at every production stage, with rigorous testing and inspection protocols.', icon: HiStar },
  { title: 'Technical Expertise', description: '40+ years of specialized knowledge in identification technology, laser systems, and industrial manufacturing.', icon: HiChartBar },
];

export default function WhyChooseUs() {
  const featuresRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(featuresRef.current.children, {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(0,194,255,0.03)_0%,_transparent_60%)]" />
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <div
                className="w-full h-full bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-10000"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-xl p-6">
                  <span className="text-accent text-4xl font-extrabold">40+</span>
                  <span className="text-white text-sm block mt-1 font-semibold">Years of Laser Innovation</span>
                  <div className="mt-3 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                  <p className="text-body/70 text-xs mt-3">Trusted by industry leaders worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              title="Why Choose Hallmarks"
              subtitle="Four decades of precision engineering, cutting-edge laser technology, and an unwavering commitment to quality."
              center={false}
            />

            <div ref={featuresRef} className="space-y-4 mt-8">
              {featuresData.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">{feature.title}</h4>
                      <p className="text-body/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
