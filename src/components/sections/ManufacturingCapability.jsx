import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiChip, HiLightningBolt, HiQrcode, HiCube, HiIdentification, HiTag } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import { capabilitiesData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const capabilityIcons = [HiChip, HiLightningBolt, HiQrcode, HiCube, HiIdentification, HiTag];

export default function ManufacturingCapability() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide relative z-10">
        <SectionTitle
          title="Manufacturing Capabilities"
          subtitle="State-of-the-art laser technology and precision manufacturing capabilities to meet the most demanding specifications."
        />

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesData.map((cap, i) => {
            const Icon = capabilityIcons[i];
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-section-alt border border-border hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-all">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-body/70 text-sm leading-relaxed">{cap.description}</p>
                <div className="mt-4 w-8 h-1 bg-accent/30 rounded-full group-hover:w-12 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
