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

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServicesSection() {
  const services: ServiceCard[] = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Automatización de procesos',
      description:
        'Conectamos tus herramientas existentes para eliminar tareas repetitivas y mejorar eficiencia.',
    },
    {
      icon: <Plug className="w-8 h-8 text-purple-600" />,
      title: 'Integraciones',
      description:
        'Integramos CRM, email, WhatsApp, ERPs y cualquier herramienta que uses en tu operación.',
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: 'Software a medida',
      description:
        'Desarrollamos soluciones personalizadas que se adaptan exactamente a tus procesos y reglas.',
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'AI aplicada con control',
      description:
        'Integramos inteligencia artificial con validaciones, aprobaciones humanas y trazabilidad completa.',
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: 'Observabilidad',
      description:
        'Dashboard y reportes en tiempo real para entender qué está pasando en cada proceso.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Mejora continua',
      description:
        'Optimizamos constantemente tus procesos basándonos en datos y casos de uso reales.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qué hacemos
          </h2>
          <p className="text-lg text-gray-600">
            Nuestros servicios están diseñados para transformar la operación de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <ToolStackMarquee />
      </div>
    </section>
  );
}
