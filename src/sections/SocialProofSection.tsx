import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: '+50', label: 'Procesos automatizados' },
  { value: '+30', label: 'Empresas confian en nosotros' },
  { value: '95%', label: 'Tasa de satisfaccion' },
  { value: '24/7', label: 'Monitoreo activo' },
];

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'NOVA automatizo nuestro proceso de onboarding y redujimos el tiempo de activacion de clientes en un 70%. El equipo es impecable.',
    name: 'Carolina M.',
    role: 'Head of Operations',
    company: 'Fintech Chile',
  },
  {
    quote:
      'Pasamos de gestionar todo manualmente en spreadsheets a tener un sistema integrado que nos ahorra horas cada semana.',
    name: 'Diego R.',
    role: 'CEO',
    company: 'Startup SaaS',
  },
  {
    quote:
      'Lo que mas valoro es el control. La AI nos ayuda, pero siempre con reglas claras y aprobaciones. Nunca perdimos visibilidad.',
    name: 'Valentina S.',
    role: 'COO',
    company: 'E-commerce LATAM',
  },
];

export function SocialProofSection() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  return (
    <section id="social-proof" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Metrics */}
        <div
          ref={metricsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-700 ${
            metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                {metric.value}
              </p>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef}>
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center transition-all duration-700 ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:shadow-md ${
                  testimonialsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: testimonialsVisible ? `${idx * 150}ms` : '0ms' }}
              >
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
