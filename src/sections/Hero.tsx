
import { ArrowRight, Zap, AlertCircle, Gauge } from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: AlertCircle, label: 'Menos fricción' },
    { icon: AlertCircle, label: 'Menos errores' },
    { icon: Gauge, label: 'Más velocidad' },
    { icon: Zap, label: 'Trazabilidad' },
  ];

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Automatización real para empresas que quieren operar sin fricción.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            En NOVA nos enfocamos 100% en automatizar procesos empresariales y desarrollar software personalizado según las necesidades reales de cada operación. Combinamos automatizaciones + AI de forma controlada para reducir errores, acelerar tiempos y mejorar la experiencia del equipo y del cliente final.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => handleScroll('services')}
              className="btn-gradient flex items-center justify-center gap-2"
            >
              Ver qué hacemos
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="btn-outline flex items-center justify-center gap-2"
            >
              Hablemos de tu proceso
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <Icon className="w-6 h-6 text-purple-600 mb-3" />
                <p className="text-sm md:text-base font-semibold text-gray-900">
                  {benefit.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
