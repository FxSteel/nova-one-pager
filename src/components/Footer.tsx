
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/nova-logo.svg"
              alt="NOVA"
              className="h-10 w-auto mb-3"
            />
            <p className="text-gray-600 text-sm">
              Automatización real para empresas que quieren operar sin fricción.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#inicio" className="hover:text-gray-900 transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-gray-900 transition-colors">Qué es NOVA</a></li>
              <li><a href="#services" className="hover:text-gray-900 transition-colors">Servicios</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
            <p className="text-sm text-gray-600 mb-2">
              ¿Listo para transformar tu operación?
            </p>
            <a
              href="#contact"
              className="btn-gradient text-sm inline-block"
            >
              Agendar conversación
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600">
            <p>
              © 2026 NOVA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
