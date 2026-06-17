import { HiBadgeCheck, HiCog, HiShieldCheck, HiClock, HiStar, HiChartBar } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

const featuresData = [
  { title: 'Precision Manufacturing', description: 'Advanced laser systems with micron-level accuracy for every project, ensuring consistent quality across all deliveries.', icon: HiBadgeCheck },
  { title: 'Custom Engineering', description: 'Dedicated engineering team creating tailored identification solutions that meet your exact specifications and requirements.', icon: HiCog },
  { title: 'Durable Materials', description: 'Industrial-grade materials engineered for extreme environments, from aerospace-grade metals to chemical-resistant polymers.', icon: HiShieldCheck },
  { title: 'Fast Lead Times', description: 'Streamlined production processes ensuring rapid turnaround without compromising on quality or precision.', icon: HiClock },
  { title: 'Quality Assurance', description: 'ISO-compliant quality control at every production stage, with rigorous testing and inspection protocols.', icon: HiStar },
  { title: 'Technical Expertise', description: '40+ years of specialized knowledge in identification technology, laser systems, and industrial manufacturing.', icon: HiChartBar },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,194,255,0.03)_0%,_transparent_60%)]" />
      <div className="container-wide">
        <SectionTitle
          title="Why Choose Hallmarks"
          subtitle="Four decades of precision engineering, cutting-edge laser technology, and an unwavering commitment to quality."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuresData.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-bg-dark/60 border border-border hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-body/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-8 h-0.5 bg-accent/30 rounded-full mt-4 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
