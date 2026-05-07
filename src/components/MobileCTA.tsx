import { useEffect, useState } from 'react';

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) {
        setVisible(window.scrollY > 500);
        return;
      }
      const rect = contactSection.getBoundingClientRect();
      setVisible(window.scrollY > 500 && rect.top > window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-3 transition-all duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <button onClick={handleClick} className="btn-gradient w-full text-sm">
        Agendar conversacion
      </button>
    </div>
  );
}
