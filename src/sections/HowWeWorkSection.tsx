import React from 'react';
import {
  CheckCircle,
  Lock,
  RotateCcw,
  LogOut,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function HowWeWorkSection() {
  const { ref, isVisible } = useScrollAnimation();

  const features: FeatureCard[] = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: 'La AI propone, pero reglas deterministicas validan',
      description:
        'Nuestros sistemas inteligentes sugieren acciones, pero siempre estan sujetos a reglas de negocio claras y predefinidas.',
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Aprobaciones humanas configurables',
      description:
        'Defines quien necesita aprobar cada tipo de decision. Control total en tus manos.',
    },
    {
      icon: <LogOut className="w-8 h-8 text-purple-600" />,
      title: 'Trazabilidad y logs',
      description:
        'Cada accion queda registrada. Sabes exactamente que hizo el sistema, cuando y por que.',
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-purple-600" />,
      title: 'Fallback y reintentos',
      description:
        'Si algo falla, el sistema tiene protocolos para recuperarse automaticamente o alertarte.',
    },
  ];

  return (
    <section
      id="how-we-work"
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
            Como trabajamos
          </h2>
          <p className="text-lg text-gray-600">
            AI con limites: control total sin sacrificar la eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
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
