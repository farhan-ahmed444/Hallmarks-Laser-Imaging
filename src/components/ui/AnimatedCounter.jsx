import { useRef } from 'react';
import { useCounterAnimation } from '../../hooks/useAnimations';

export default function AnimatedCounter({ value, suffix = '', label, className = '' }) {
  const ref = useRef(null);
  useCounterAnimation(ref, value, suffix);

  return (
    <div className={`text-center ${className}`}>
      <span
        ref={ref}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white block mb-2"
      >
        0{suffix}
      </span>
      <span className="text-sm md:text-base text-body font-medium">{label}</span>
    </div>
  );
}
