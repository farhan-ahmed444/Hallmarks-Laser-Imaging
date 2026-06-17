import { forwardRef } from 'react';
import { cn } from '../../utils/animations';

const Button = forwardRef(({ children, variant = 'primary', size = 'md', href, className, ...props }, ref) => {
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

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {content}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
