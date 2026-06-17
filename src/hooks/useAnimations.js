import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimation() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return { gsap, ScrollTrigger };
}

export function useRevealAnimation(ref, options = {}) {
  const { delay = 0, duration = 0.8, y = 60, stagger = 0.1 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    const ctx = gsap.context(() => {
      if (children.length > 1) {
        gsap.from(children, {
          y,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      } else {
        gsap.from(el, {
          y,
          opacity: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    return () => ctx.revert();
  }, [ref, delay, duration, y, stagger]);
}

export function useCounterAnimation(ref, target, suffix = '') {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [ref, target, suffix]);
}

export function useParallax(ref, speed = 0.5) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => window.innerHeight * speed * -0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
}
