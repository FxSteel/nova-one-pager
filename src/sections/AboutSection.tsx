import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Que es NOVA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            NOVA existe para eliminar trabajo repetitivo y errores operativos. Disenamos
            automatizaciones que conectan herramientas como CRM, WhatsApp, email, ERPs y bases
            de datos. Cuando es necesario, construimos software a medida para que el negocio
            opere con reglas claras y experiencia optimizada.
          </p>
        </div>
      </div>
    </section>
  );
}
