import { useRef } from 'react';
import { useParallax } from '../../hooks/useAnimations';

export default function ParallaxImage({ src, alt, className = '', speed = 0.3 }) {
  const ref = useRef(null);
  useParallax(ref, speed);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={ref}
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
