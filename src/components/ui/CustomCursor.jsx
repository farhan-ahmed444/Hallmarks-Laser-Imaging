import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.style.cursor = 'none';

    let rafId;
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorRef.current.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px)`;
    };

    const onOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select');
      if (target) {
        cursorRef.current.style.width = '48px';
        cursorRef.current.style.height = '48px';
        cursorRef.current.style.borderColor = '#00C2FF';
        cursorRef.current.style.backgroundColor = 'rgba(0, 194, 255, 0.08)';
      }
    };

    const onOut = () => {
      cursorRef.current.style.width = '24px';
      cursorRef.current.style.height = '24px';
      cursorRef.current.style.borderColor = 'rgba(0, 194, 255, 0.5)';
      cursorRef.current.style.backgroundColor = 'transparent';
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trailRef.current.style.transform = `translate(${trailX - 3}px, ${trailY - 3}px)`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1.5px solid rgba(0, 194, 255, 0.5)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          transform: 'translate(-12px, -12px)',
          willChange: 'transform',
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#00C2FF',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-3px, -3px)',
          willChange: 'transform',
        }}
      />
    </>
  );
}