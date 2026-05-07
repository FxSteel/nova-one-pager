import { useEffect, useState } from 'react';

const SECTION_IDS = ['inicio', 'about', 'services', 'how-we-work', 'process', 'social-proof', 'contact'];

export function useActiveSection() {
  const [activeId, setActiveId] = useState('inicio');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeId;
}
