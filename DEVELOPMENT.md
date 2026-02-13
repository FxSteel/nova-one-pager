# Instrucciones de Desarrollo - NOVA Landing Page

## 🚀 Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:5173
```

## 📁 Estructura de Componentes

### `/src/components`
Componentes reutilizables de nivel global:
- **Navbar.tsx** - Navegación principal sticky con scroll suave a secciones
- **Footer.tsx** - Pie de página con links y CTA final

### `/src/sections`
Secciones principales de la página:
- **Hero.tsx** - Sección inicial con título, subtítulo y benefits cards
- **AboutSection.tsx** - "Qué es NOVA"
- **ServicesSection.tsx** - "Qué hacemos" (grid de 6 servicios)
- **HowWeWorkSection.tsx** - "Cómo trabajamos" (AI + controles)
- **OfferingsSection.tsx** - "Servicios principales" (3 bloques grandes)
- **ProcessSection.tsx** - "Proceso" (4 pasos)
- **ContactSection.tsx** - Formulario de contacto

## 🎨 Sistema de Estilos

### Uso de Tailwind CSS
- Todos los estilos se definen con clases de Tailwind
- Variables de color customizadas en `tailwind.config.js`
- Componentes reutilizables en `src/index.css`

### Clases Personalizadas
```css
/* En index.css */
.btn-gradient  /* Botón con gradiente cyan→azul */
.btn-outline   /* Botón con borde */
```

### Spacing Estándar
- Secciones: `py-20` (80px padding vertical)
- Contenedor: `max-w-6xl mx-auto` (1536px max-width)
- Gaps entre elementos: `gap-8`

## 🔧 Configuración Importante

### TailwindCSS (`tailwind.config.js`)
```javascript
colors: {
  cyan: { 500: '#10B7FF' },
  blue: { 600: '#0B7CFF' }
}
```

### Vite (`vite.config.ts`)
- HMR habilitado para Fast Refresh
- React plugin para compilación rápida

## 📝 Convenciones de Código

### Naming
- Componentes: PascalCase (`Hero.tsx`, `Navbar.tsx`)
- Props interfaces: `${ComponentName}Props`
- Secciones: Sufijo `.tsx` en `/sections`

### Estructura de Componentes
```tsx
import React from 'react'
import { Icon } from 'lucide-react'

interface MyComponentProps {
  title: string
}

export function MyComponent({ title }: MyComponentProps) {
  return (
    <section id="section-id" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Content */}
      </div>
    </section>
  )
}
```

### Responsive Design
```
- sm: 640px (tablets)
- md: 768px (small laptops)
- lg: 1024px (desktops)
```

## 🛠️ Scripts Disponibles

```bash
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Previsualizar build de producción
npm run lint       # Ejecutar linter (ESLint)
```

## 🔗 Scroll Suave entre Secciones

El Navbar implementa navegación interna:
```tsx
// En Navbar.tsx
const handleNavClick = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
```

Cada sección tiene un `id` correspondiente:
```tsx
<section id="about" className="...">
```

## 📋 Checklist de Desarrollo

- [ ] Cambiar favicons y metadata
- [ ] Agregar logos/imágenes de NOVA
- [ ] Conectar formulario de contacto a backend
- [ ] Agregar Google Analytics
- [ ] SEO metadata (title, meta description, Open Graph)
- [ ] Testing responsivo en todos los devices
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Deploy a producción

## 🐛 Troubleshooting

### Tailwind CSS no se aplica
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Scroll suave no funciona
- Verificar que el `id` en la sección coincida con el `id` en el onclick
- Comprobar que el navegador soporta `scroll-behavior: smooth`

### Build fallando
```bash
# Limpiar y reconstruir
npm run build -- --clearScreen
```

## 📚 Recursos Útiles

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vite.dev)
