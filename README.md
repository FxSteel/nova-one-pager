# NOVA - Landing Page One-Pager

Sitio web profesional para NOVA, enfocado en automatización de procesos empresariales, desarrollo de software personalizado e implementaciones de AI controlada.

## 🚀 Características

- **One-pager responsive** con scroll suave entre secciones
- **Navbar sticky** con navegación interna mediante anchors
- **Diseño minimalista moderno** con inspiración en Notion/Pinterest
- **Identidad visual coherente** con gradiente cyan → azul
- **Formulario de contacto** listo para conectar backend
- **Componentes reutilizables** bien estructurados

## 🛠️ Stack Tecnológico

- **React 18** + TypeScript
- **Vite** - Build tool rápido
- **TailwindCSS 4** - Estilos utilidad
- **Lucide React** - Iconos SVG
- **Responsive Design** - Mobile-first

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Navegación sticky
│   └── Footer.tsx      # Pie de página
├── sections/           # Secciones de la página
│   ├── Hero.tsx        # Sección hero principal
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── HowWeWorkSection.tsx
│   ├── OfferingsSection.tsx
│   ├── ProcessSection.tsx
│   └── ContactSection.tsx
├── App.tsx            # Componente principal
├── index.css          # Estilos globales con Tailwind
└── main.tsx           # Entry point
```

## 🏃 Cómo ejecutar

### Requisitos previos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# Clonar o navegar al proyecto
cd nova-one-pager

# Instalar dependencias (ya están instaladas si usas este proyecto)
npm install
```

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. La página se actualiza automáticamente al editar los archivos.

### Build para producción

```bash
npm run build
```

Los archivos compilados se encontrarán en la carpeta `dist/`.

### Preview de producción

```bash
npm run preview
```

## 📝 Secciones de la Página

1. **Navbar** - Navegación sticky con links a todas las secciones
2. **Hero** - Título principal, subtítulo y CTA buttons
3. **Qué es NOVA** - Descripción corporativa
4. **Qué hacemos** - Grid de 6 servicios
5. **Cómo trabajamos** - AI con control y validaciones
6. **Servicios principales** - 3 bloques grandes de oferta
7. **Proceso** - 4 pasos del proceso de implementación
8. **Contacto** - Formulario simple (listo para backend)
9. **Footer** - Enlaces y CTA final

## 🎨 Paleta de Colores

- **Cyan**: `#10B7FF`
- **Azul**: `#0B7CFF`
- **Blanco**: `#FFFFFF` (fondo)
- **Gris neutr**: `#6B7280` (textos secundarios)

## 🔌 Próximos pasos

- [ ] Conectar formulario de contacto a backend
- [ ] Agregar analytics (Google Analytics / Plausible)
- [ ] Optimizar imágenes y assets
- [ ] SEO metadata y Open Graph tags
- [ ] Deploy a producción (Vercel / Netlify / etc)

## 📦 Dependencias principales

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^4.1.18",
  "lucide-react": "^latest"
}
```

## 📖 Documentación

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📄 Licencia

Copyright © 2026 NOVA. Todos los derechos reservados.
      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
