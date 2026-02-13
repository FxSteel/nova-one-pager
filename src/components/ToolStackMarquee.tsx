import { useEffect, useState } from 'react';

interface Tool {
  name: string;
  logo: string;
}

const TOOLS: Tool[] = [
  { name: 'n8n', logo: '/logos/n8n.png' },
  { name: 'GHL', logo: '/logos/ghl.png' },
  { name: 'ClickUp', logo: '/logos/clickup.png' },
  { name: 'Supabase', logo: '/logos/supabase.png' },
  { name: 'Stripe', logo: '/logos/stripe.png' },
  { name: 'Vercel', logo: '/logos/vercel.png' },
  { name: 'Notion', logo: '/logos/notion.png' },
  { name: 'Jira', logo: '/logos/jira.png' },
];

export function ToolStackMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const duplicatedTools = [...TOOLS, ...TOOLS];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-zinc-200 dark:border-zinc-800 mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Título y descripción */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Herramientas que integramos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En NOVA integramos herramientas líderes de automatización, CRM y gestión
            para construir soluciones robustas y escalables.
          </p>
        </div>

        {/* Marquee / Static Grid */}
        {prefersReducedMotion ? (
          // Static grid para usuarios con reduce-motion activo
          <div className="overflow-x-auto mb-8">
            <div className="flex gap-10 min-w-max px-4 md:px-0 justify-center">
              {TOOLS.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-[28px] flex-shrink-0"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-[28px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Marquee infinito con animación CSS
          <div className="mb-8 overflow-hidden relative">
            <style>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .marquee-track {
                animation: marquee 15s linear infinite;
                width: max-content;
              }

              .marquee-container {
                mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
                -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              }
            `}</style>
            <div className="marquee-container overflow-hidden max-w-md md:max-w-2xl mx-auto">
              <div className="marquee-track flex gap-10 whitespace-nowrap">
                {duplicatedTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-[28px] flex-shrink-0"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-[28px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer Legal */}
        <div className="text-center mt-6">
          <p className="text-xs text-zinc-500 max-w-4xl mx-auto leading-relaxed">
            NOVA es una empresa independiente y no está afiliada oficialmente ni
            representa a estas marcas. Todos los nombres y logotipos pertenecen a sus
            respectivos propietarios.
          </p>
        </div>
      </div>
    </section>
  );
}
