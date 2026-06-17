import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import RevealAnimation from '../ui/RevealAnimation';

const processSteps = [
  { step: '01', title: 'Consultation', description: 'We discuss your requirements, specifications, and application needs in detail to determine the optimal solution.' },
  { step: '02', title: 'Design & Approval', description: 'Our engineers create detailed designs, material samples, and prototypes for your review and approval.' },
  { step: '03', title: 'Production', description: 'Precision manufacturing using advanced laser technology with rigorous quality control at every stage.' },
  { step: '04', title: 'Delivery', description: 'Carefully packaged and shipped with full documentation, support, and ongoing customer service.' },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="container-wide">
        <SectionTitle
          title="Our Process"
          subtitle="From concept to delivery, our streamlined process ensures precision, quality, and efficiency at every stage of your project."
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-12 left-[60px] right-[60px] h-px bg-border hidden lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-highlight to-accent origin-left shadow-[0_0_8px_rgba(0,194,255,0.6)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <RevealAnimation key={i} delay={i * 0.15}>
                <div className="relative text-center lg:text-left group">
                  <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto lg:mx-0 mb-6 relative z-10 group-hover:bg-accent/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                    <span className="text-3xl font-extrabold text-accent">{step.step}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-8 h-px bg-accent/30 hidden lg:block" />
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="text-body/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-body/40 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse" />
              From consultation to delivery in record time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
