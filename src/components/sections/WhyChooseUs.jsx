import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiBadgeCheck, HiCog, HiShieldCheck, HiClock, HiStar, HiChartBar } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import { whyChooseUsData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = [HiBadgeCheck, HiCog, HiShieldCheck, HiClock, HiStar, HiChartBar];

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
          toggleActions: 'play none none reverse',
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
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-xl p-6">
                  <span className="text-accent text-3xl font-extrabold">40+</span>
                  <span className="text-white text-sm block mt-1">Years of Laser Innovation</span>
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
              {whyChooseUsData.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all">
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
