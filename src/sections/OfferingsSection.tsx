

interface OfferingCard {
  title: string;
  description: string;
  highlights: string[];
}

export function OfferingsSection() {
  const offerings: OfferingCard[] = [
    {
      title: 'Automatización de procesos',
      description:
        'Conectamos tus herramientas para eliminar trabajo manual y errores operativos.',
      highlights: [
        'Flujos de trabajo automáticos',
        'Integración de múltiples plataformas',
        'Reglas de negocio personalizadas',
        'Escalable y flexible',
      ],
    },
    {
      title: 'Desarrollo de software a medida',
      description:
        'Construimos soluciones personalizadas que se adaptan perfectamente a tu operación.',
      highlights: [
        'Aplicaciones web modernas',
        'APIs robustas y seguras',
        'Diseño responsivo',
        'Mantenimiento y soporte',
      ],
    },
    {
      title: 'AI aplicada con control',
      description:
        'Implementamos inteligencia artificial con validaciones, aprobaciones y trazabilidad.',
      highlights: [
        'Modelos de AI seguros',
        'Aprobaciones humanas configurables',
        'Logs y auditoría completa',
        'Fallbacks automáticos',
      ],
    },
  ];

  return (
    <section id="offerings" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios principales
          </h2>
          <p className="text-lg text-gray-600">
            Tres pilares que transforman tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                {offering.description}
              </p>
              <div className="space-y-3 border-t border-gray-200 pt-6">
                {offering.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
