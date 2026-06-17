import AnimatedCounter from '../ui/AnimatedCounter';
import RevealAnimation from '../ui/RevealAnimation';
import LaserLine from '../ui/LaserLine';

const stats = [
  { value: 40, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Custom Solutions' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(0,194,255,0.03)_0%,_transparent_60%)]" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 backdrop-blur-xl">
                    <span className="text-accent text-sm font-semibold tracking-wider">Est. 1984</span>
                    <p className="text-white text-lg font-bold">Four Decades of Precision</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-accent/30 rounded-2xl -z-10" />
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right">
            <div>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                About Hallmarks
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Precision, Durability<br /><span className="text-gradient">&amp; Performance</span>
            </h2>
            <LaserLine />
            <p className="text-body text-base leading-relaxed mb-6 mt-6">
              For over 40 years, Hallmarks Laser Imaging has been at the forefront of industrial identification technology. We combine advanced laser systems with precision manufacturing to deliver solutions that meet the most demanding specifications across aerospace, defense, medical, energy, and commercial industries.
            </p>
            <p className="text-body/70 text-sm leading-relaxed mb-8">
              Our expertise spans fiber laser marking, CO2 engraving, UV laser processing, industrial manufacturing, identification systems, and custom fabrication. From mission-critical aerospace components to life-saving medical devices, our markings are built to last in the harshest environments on Earth and beyond.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
          </RevealAnimation>
        </div>
    </section>
  );
}
