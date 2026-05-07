import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Diagnostico',
      description:
        'Analizamos tu operacion actual, identificamos fricciones, oportunidades de automatizacion y requisitos clave.',
    },
    {
      number: 2,
      title: 'Diseno',
      description:
        'Disenamos la solucion considerando tus procesos, herramientas existentes y objetivos de negocio.',
    },
    {
      number: 3,
      title: 'Implementacion',
      description:
        'Construimos e integramos el sistema. Testing exhaustivo y capacitacion de tu equipo.',
    },
    {
      number: 4,
      title: 'Monitoreo',
      description:
        'Monitoreamos continuamente, optimizamos segun datos reales y ajustamos segun necesites.',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro proceso
          </h2>
          <p className="text-lg text-gray-600">
            Cuatro fases para transformar tu operacion.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8 border-b border-gray-200 last:border-b-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
