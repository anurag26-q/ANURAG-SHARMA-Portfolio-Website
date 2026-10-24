import React, { useEffect, useRef, useState } from 'react';

/** Adds the `in` class once the element scrolls into view (triggers blueprint line-drawing). */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); ob.disconnect(); } },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`rvl ${inView ? 'in' : ''} ${className}`}>{children}</div>;
};
