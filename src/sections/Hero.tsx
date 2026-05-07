
import { ArrowRight, Zap, AlertCircle, Gauge } from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: AlertCircle, label: 'Menos friccion' },
    { icon: AlertCircle, label: 'Menos errores' },
    { icon: Gauge, label: 'Mas velocidad' },
    { icon: Zap, label: 'Trazabilidad' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 md:mb-20 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Automatizacion real para empresas que quieren operar sin friccion.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            En NOVA nos enfocamos 100% en automatizar procesos empresariales y desarrollar software personalizado segun las necesidades reales de cada operacion. Combinamos automatizaciones + AI de forma controlada para reducir errores, acelerar tiempos y mejorar la experiencia del equipo y del cliente final.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => handleScroll('services')}
              className="btn-gradient flex items-center justify-center gap-2"
            >
              Ver que hacemos
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
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'backwards' }}
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
