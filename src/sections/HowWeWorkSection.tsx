import React from 'react';
import {
  CheckCircle,
  Lock,
  RotateCcw,
  LogOut,
} from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function HowWeWorkSection() {
  const features: FeatureCard[] = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: 'La AI propone, pero reglas determinísticas validan',
      description:
        'Nuestros sistemas inteligentes sugieren acciones, pero siempre están sujetos a reglas de negocio claras y predefinidas.',
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Aprobaciones humanas configurables',
      description:
        'Defines quién necesita aprobar cada tipo de decisión. Control total en tus manos.',
    },
    {
      icon: <LogOut className="w-8 h-8 text-purple-600" />,
      title: 'Trazabilidad y logs',
      description:
        'Cada acción queda registrada. Sabes exactamente qué hizo el sistema, cuándo y por qué.',
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-purple-600" />,
      title: 'Fallback y reintentos',
      description:
        'Si algo falla, el sistema tiene protocolos para recuperarse automáticamente o alertarte.',
    },
  ];

  return (
    <section
      id="how-we-work"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-gray-600">
            AI con límites: control total sin sacrificar la eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
