import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiChip, HiLightningBolt, HiQrcode, HiCube, HiIdentification, HiTag } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const capabilitiesData = [
  { title: 'Laser Engraving', description: 'High-precision CO2 and fiber laser engraving systems for permanent marking on metals, plastics, ceramics, and composites.' },
  { title: 'Fiber Laser Marking', description: 'Deep engraving and high-contrast marking on metals including steel, aluminum, titanium, and brass.' },
  { title: 'Barcode Systems', description: 'Custom barcode, QR code, and data matrix integration for comprehensive asset tracking and inventory management.' },
  { title: 'Metal Fabrication', description: 'Precision cutting, forming, welding, and finishing capabilities for custom metal components and assemblies.' },
  { title: 'Custom Identification', description: 'End-to-end custom identification product manufacturing from concept through design, prototyping, and production.' },
  { title: 'Industrial Label Production', description: 'High-volume industrial label manufacturing with UV, chemical, and weather-resistant materials.' },
];

const capabilityIcons = [HiChip, HiLightningBolt, HiQrcode, HiCube, HiIdentification, HiTag];

const blueprintSVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

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
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: blueprintSVG }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />

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
                className="group p-8 rounded-2xl bg-section-alt/80 border border-border hover:border-accent/30 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-body/70 text-sm leading-relaxed mb-4">
                  {cap.description}
                </p>
                <div className="w-8 h-0.5 bg-accent/30 rounded-full group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
