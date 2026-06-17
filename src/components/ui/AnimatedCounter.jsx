import { useRef } from 'react';
import { useCounterAnimation } from '../../hooks/useAnimations';

export default function AnimatedCounter({ value, suffix = '', label, className = '' }) {
  const ref = useRef(null);
  useCounterAnimation(ref, value, suffix);

  return (
    <div className={`text-center ${className}`}>
      <span
        ref={ref}
        className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white block mb-1"
      >
        0{suffix}
      </span>
      <span className="text-sm md:text-base text-body font-medium">{label}</span>
    </div>
  );
}
