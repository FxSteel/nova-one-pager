import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  url: string;
  video?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Turismo Antilen',
    category: 'Desarrollo web + Integraciones',
    description:
      'Plataforma completa para agencia de turismo en Chile. Sistema de reservas por WhatsApp, catalogo de tours con filtros por destino y actividad, y landing optimizada para conversion.',
    highlights: ['Reservas via WhatsApp', 'Catalogo de tours', 'Responsive', 'SEO optimizado'],
    url: 'https://www.turismoantilen.com/',
    video: '/vide-antilen.mp4',
  },
  {
    title: 'WorkFlow',
    category: 'Desarrollo de software a medida',
    description:
      'Aplicacion web de gestion de proyectos con tableros, tareas y seguimiento de progreso. Disenada para equipos que necesitan organizar su operacion de forma simple y visual.',
    highlights: ['Gestion de proyectos', 'Tableros interactivos', 'Seguimiento de tareas', 'Trabajo colaborativo', 'App web moderna'],
    url: 'https://work-flow-lemon.vercel.app/',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos destacados
          </h2>
          <p className="text-lg text-gray-600">
            Algunos de los proyectos que hemos construido para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} isVisible={isVisible} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, idx, isVisible }: { project: Project; idx: number; isVisible: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media */}
      <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={`Proyecto ${project.title}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
            {project.category}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.highlights.map((h, i) => (
            <span
              key={i}
              className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-medium"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
