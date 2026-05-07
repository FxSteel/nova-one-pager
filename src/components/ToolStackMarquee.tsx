import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Tool {
  name: string;
  logo: string;
}

const TOOLS: Tool[] = [
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/1a1a1a' },
  { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6d00cc' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/ff4a00' },
  { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18bfff' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ecf8e' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/635bff' },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/1a1a1a' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/1a1a1a' },
  { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira/0052cc' },
  { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello/0052cc' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/ff7a59' },
  { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets/34a853' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169e1' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/1a1a1a' },
  { name: 'ClickUp', logo: 'https://cdn.simpleicons.org/clickup/7b68ee' },
  { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25d366' },
];

export function ToolStackMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Herramientas que integramos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Integramos herramientas lideres de automatizacion, CRM, AI y desarrollo
            para construir soluciones robustas y escalables.
          </p>
        </div>

        {prefersReducedMotion ? (
          <div className="overflow-x-auto mb-8">
            <div className="flex flex-wrap gap-10 px-4 md:px-0 justify-center">
              {TOOLS.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-2 flex-shrink-0"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-[36px] w-[36px] opacity-60 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <span className="text-xs text-gray-500">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`mb-8 overflow-hidden relative transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }

              .marquee-track {
                animation: marquee 25s linear infinite;
                width: max-content;
              }

              .marquee-track:hover {
                animation-play-state: paused;
              }

              .marquee-container {
                mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
              }
            `}</style>
            <div className="marquee-container overflow-hidden max-w-xl md:max-w-4xl mx-auto">
              <div className="marquee-track flex gap-14 whitespace-nowrap">
                {duplicatedTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-2 flex-shrink-0"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-[36px] w-[36px] opacity-50 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                    <span className="text-[11px] text-gray-400 font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <p className="text-xs text-zinc-500 max-w-4xl mx-auto leading-relaxed">
            NOVA es una empresa independiente y no esta afiliada oficialmente ni
            representa a estas marcas. Todos los nombres y logotipos pertenecen a sus
            respectivos propietarios.
          </p>
        </div>
      </div>
    </section>
  );
}
