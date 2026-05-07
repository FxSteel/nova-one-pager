import React from 'react';
import {
  Zap,
  Plug,
  Code,
  Brain,
  Eye,
  TrendingUp,
} from 'lucide-react';
import { ToolStackMarquee } from '../components/ToolStackMarquee';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const services: ServiceCard[] = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Automatizacion de procesos',
      description:
        'Conectamos tus herramientas existentes para eliminar tareas repetitivas y mejorar eficiencia.',
      highlights: ['Flujos automaticos', 'Reglas de negocio', 'Escalable'],
    },
    {
      icon: <Plug className="w-8 h-8 text-purple-600" />,
      title: 'Integraciones',
      description:
        'Integramos CRM, email, WhatsApp, ERPs y cualquier herramienta que uses en tu operacion.',
      highlights: ['APIs robustas', 'Multi-plataforma', 'Sincronizacion'],
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: 'Software a medida',
      description:
        'Desarrollamos soluciones personalizadas que se adaptan exactamente a tus procesos y reglas.',
      highlights: ['Apps web modernas', 'Diseno responsivo', 'Soporte continuo'],
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'AI aplicada con control',
      description:
        'Integramos inteligencia artificial con validaciones, aprobaciones humanas y trazabilidad completa.',
      highlights: ['Modelos seguros', 'Aprobaciones humanas', 'Logs completos'],
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: 'Observabilidad',
      description:
        'Dashboard y reportes en tiempo real para entender que esta pasando en cada proceso.',
      highlights: ['Metricas en vivo', 'Alertas', 'Reportes automaticos'],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Mejora continua',
      description:
        'Optimizamos constantemente tus procesos basandonos en datos y casos de uso reales.',
      highlights: ['Data-driven', 'Iteraciones rapidas', 'Optimizacion'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Que hacemos
          </h2>
          <p className="text-lg text-gray-600">
            Nuestros servicios estan disenados para transformar la operacion de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ToolStackMarquee />
      </div>
    </section>
  );
}
