# 🚀 NOVA Landing Page - Guía Rápida de Inicio

¡Bienvenido a tu landing page de NOVA! Este documento te guiará para ejecutar el proyecto localmente.

## 📦 Requisitos Previos

- **Node.js 16+** (descarga desde [nodejs.org](https://nodejs.org))
- **npm 8+** (viene con Node.js)

## ✅ Verificar Instalación

```bash
node --version   # Deberías ver v16.0.0 o superior
npm --version    # Deberías ver 8.0.0 o superior
```

## 🏃 Ejecutar Localmente (3 Pasos)

### Paso 1: Navegar a la carpeta del proyecto
```bash
cd /Users/fer/Desktop/nova-one-pager
```

### Paso 2: Instalar dependencias
```bash
npm install
```
(Este paso ya está hecho si clonaste el proyecto)

### Paso 3: Iniciar el servidor de desarrollo
```bash
npm run dev
```

¡Listo! Deberías ver:
```
  VITE v7.3.1  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Paso 4: Abrir en navegador
- Haz clic en `http://localhost:5173/`
- O abre manualmente en tu navegador: http://localhost:5173

## 🎯 Lo que Verás

Una landing page completa con:
- ✨ Navbar sticky con navegación suave
- 🎨 Hero section con botones CTA
- 📚 Secciones sobre NOVA, servicios, proceso
- 📋 Formulario de contacto
- 🔗 Links internos con scroll suave
- 📱 Diseño completamente responsivo

## 🎮 Interactividad

### Navbar
- Haz clic en cualquier sección para scroll suave
- El navbar se queda arriba mientras navegas

### Botones
- **"Ver qué hacemos"** - Scroll a servicios
- **"Hablemos de tu proceso"** - Scroll a formulario
- **"Agendar conversación"** - Scroll a contacto

### Formulario
- Llena los campos (nombre, email, mensaje)
- Haz clic en "Enviar mensaje"
- Verás un mensaje de confirmación

## 📝 Editar Contenido

Todo está en la carpeta `src/`:

```
src/
├── App.tsx                    ← Archivo principal
├── sections/
│   ├── Hero.tsx              ← Sección hero
│   ├── AboutSection.tsx       ← "Qué es NOVA"
│   ├── ServicesSection.tsx    ← "Qué hacemos" (6 servicios)
│   ├── HowWeWorkSection.tsx   ← "Cómo trabajamos"
│   ├── OfferingsSection.tsx   ← "Servicios principales" (3 bloques)
│   ├── ProcessSection.tsx     ← "Proceso" (4 pasos)
│   └── ContactSection.tsx     ← Formulario
└── components/
    ├── Navbar.tsx
    └── Footer.tsx
```

### Ejemplo: Cambiar el título del hero

Abre `src/sections/Hero.tsx` y busca:
```tsx
<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
  Automatización real para empresas que quieren operar sin fricción.
</h1>
```

Cambia el texto y verás el cambio **al instante** (HMR - Hot Module Replacement).

## 🎨 Customización

### Cambiar Colores

En `tailwind.config.js`:
```javascript
colors: {
  cyan: { 500: '#10B7FF' },  // Cambia estos valores
  blue: { 600: '#0B7CFF' }
}
```

### Cambiar Estilos de Botones

En `src/index.css`:
```css
.btn-gradient {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl hover:shadow-lg transition-shadow duration-300;
}
```

### Agregar una Nueva Sección

```tsx
// src/sections/NewSection.tsx
export function NewSection() {
  return (
    <section id="new-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Tu contenido aquí */}
      </div>
    </section>
  )
}
```

Luego agrégala en `src/App.tsx`:
```tsx
import { NewSection } from './sections/NewSection'

// Dentro del return:
<NewSection />
```

## 📦 Scripts Disponibles

```bash
npm run dev       # ▶️  Iniciar servidor (desarrollo)
npm run build     # 🏗️  Compilar para producción
npm run preview   # 👀  Previsualizar build
npm run lint      # ✓  Verificar código
```

## 🔌 Próximos Pasos

### 1. Conectar Formulario de Contacto
En `src/sections/ContactSection.tsx`, actualiza:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Enviar a tu backend
  const response = await fetch('https://tu-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    alert('Gracias por tu mensaje!')
    setFormData({ name: '', email: '', message: '' })
  }
}
```

### 2. Agregar Analytics
En `src/App.tsx`:
```tsx
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Agregar Google Analytics aquí
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID'
    document.head.appendChild(script)
  }, [])
  
  return (...)
}
```

### 3. Desplegar a Producción
Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para:
- Vercel (recomendado)
- Netlify
- Firebase Hosting
- AWS Amplify

## 🐛 Troubleshooting

### "Port 5173 already in use"
```bash
# Usa un puerto diferente
npm run dev -- --port 3000
```

### "Module not found"
```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### "Tailwind CSS no funciona"
```bash
# Verifica que los imports estén correctos en App.tsx:
import './index.css'
```

## 📚 Documentación Adicional

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Guía completa de desarrollo
- **[DESIGN.md](./DESIGN.md)** - Brand guidelines y especificaciones
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Opciones de despliegue
- **[README.md](./README.md)** - Información general del proyecto

## 🤝 Soporte Técnico

Si tienes problemas:
1. Revisa la carpeta de logs: `npm run dev` muestra errores en tiempo real
2. Verifica que Node.js esté actualizado: `node --version`
3. Limpia cache: `npm cache clean --force`
4. Reinstala todo:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🎉 ¡Listo!

Tu landing page está lista para customizar. Los cambios se reflejan en tiempo real gracias a HMR.

**¿Dudas sobre Tailwind CSS?** → https://tailwindcss.com
**¿Dudas sobre React?** → https://react.dev
**¿Dudas sobre Vite?** → https://vitejs.dev

---

**Hecho con ❤️ para NOVA**
