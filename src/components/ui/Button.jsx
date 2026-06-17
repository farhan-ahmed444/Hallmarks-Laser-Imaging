import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/animations';

const MagneticWrapper = ({ children, className }) => {
  const ref = useRef(null);

  const handleMouse = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleReset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      className={className}
      style={{ transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', href, className, ...props }) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group cursor-pointer border-none outline-none';

  const variants = {
    primary: 'bg-accent text-primary hover:bg-white',
    secondary: 'border border-accent text-accent hover:bg-accent hover:text-primary',
    ghost: 'text-white hover:text-accent',
    dark: 'bg-primary text-white hover:bg-secondary border border-border',
    outline: 'border border-white/20 text-white hover:border-accent hover:text-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
    </>
  );

  const Tag = href ? 'a' : 'button';

  return (
    <MagneticWrapper>
      <Tag href={href} className={classes} {...props}>
        {content}
      </Tag>
    </MagneticWrapper>
  );
};

export default Button;
