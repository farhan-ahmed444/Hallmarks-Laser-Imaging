import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function SectionTitle({ title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}
    >
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="h-px w-12 bg-accent" />
        <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Hallmarks Laser Imaging</span>
        <div className="h-px w-12 bg-accent" />
      </div>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
