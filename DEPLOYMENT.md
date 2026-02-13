# Guía de Despliegue - NOVA Landing Page

Esta guía te ayudará a desplegar tu landing page NOVA en producción.

## 🚀 Opciones de Despliegue

### 1. Vercel (Recomendado - Más fácil)

Vercel es la plataforma creada por los desarrolladores de Next.js y ofrece la mejor experiencia para aplicaciones Vite + React.

#### Pasos:
```bash
# 1. Inicia sesión en Vercel o crea cuenta
# https://vercel.com

# 2. Conecta tu repositorio GitHub/GitLab/Bitbucket
# Vercel detectará automáticamente que es un proyecto Vite

# 3. Deploy automático
# Cada push a main/master se despliega automáticamente
```

#### Configuración Automática:
- Build: `npm run build`
- Output: `dist`
- Install: `npm install`

### 2. Netlify

Otra excelente opción con integración con GitHub.

#### Pasos:
```bash
# 1. Conecta tu repositorio en https://netlify.com
# 2. Configura:
# - Build command: npm run build
# - Publish directory: dist
# 3. Deploy automático
```

### 3. AWS Amplify

Para proyectos con requisitos más complejos.

```bash
# 1. Instala Amplify CLI
npm install -g @aws-amplify/cli

# 2. Inicializa el proyecto
amplify init

# 3. Agrega hosting
amplify add hosting

# 4. Deploy
amplify publish
```

### 4. Firebase Hosting

Opción rápida si ya usas Firebase.

```bash
# 1. Instala Firebase CLI
npm install -g firebase-tools

# 2. Autentica
firebase login

# 3. Inicializa
firebase init hosting

# 4. Build
npm run build

# 5. Deploy
firebase deploy
```

### 5. GitHub Pages (Gratis pero limitado)

Solo si el dominio es `username.github.io`.

```bash
# 1. Actualiza vite.config.ts
# base: '/nova-one-pager/' (si es un repositorio)

# 2. Build
npm run build

# 3. Deploy
npm install gh-pages --save-dev
# Agrega a package.json:
# "deploy": "gh-pages -d dist"

npm run deploy
```

## 📋 Checklist Antes de Desplegar

- [ ] Actualizar metadata (title, description)
- [ ] Agregar favicon (`/public/favicon.ico`)
- [ ] Probar en navegadores modernos
- [ ] Validar responsive en mobile
- [ ] Comprobar performance (Lighthouse)
- [ ] Actualizar robots.txt si necesario
- [ ] Configurar dominio personalizado
- [ ] Agregar SSL/HTTPS (automático en Vercel/Netlify)
- [ ] Configurar Google Analytics
- [ ] Conectar formulario de contacto a backend

## 🔧 Optimizaciones Pre-Deploy

### 1. Minificar y Optimizar

```bash
npm run build
# Vite ya optimiza automáticamente
```

### 2. Verificar Performance

```bash
# Instala Lighthouse
npm install -g lighthouse

# Ejecuta
lighthouse http://localhost:5173
```

### 3. SEO Metadata

En `index.html`, agrega:
```html
<meta name="description" content="Automatización real para empresas que quieren operar sin fricción.">
<meta name="og:title" content="NOVA">
<meta name="og:description" content="...">
<meta name="og:image" content="https://nova.com/og-image.png">
```

## 🌐 Configuración de Dominio

### Con Vercel/Netlify:
1. Compra dominio en GoDaddy, Namecheap, etc.
2. En la plataforma de hosting:
   - Settings → Domains
   - Agrega tu dominio
   - Sigue las instrucciones para actualizar DNS

### Registros DNS típicos:
```
CNAME: www.nova.com → tuproyecto.vercel.app
A: nova.com → IP de servidor
```

## 📊 Monitoreo Post-Deploy

### Analytics
```javascript
// En src/main.tsx, agrega Google Analytics
import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=GA_ID"
    document.head.appendChild(script)
    
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'GA_ID')
  }, [])
  return null
}
```

### Uptime Monitoring
- Uptime Robot (gratuito)
- StatusPage.io
- Datadog

## 🔐 Seguridad

- [ ] Habilitar HTTPS (automático en plataformas modernas)
- [ ] Agregar CSP headers
- [ ] Validar formularios en backend
- [ ] Sanitizar inputs
- [ ] Usar CORS correctamente

## 📝 Variables de Entorno en Producción

### Vercel:
```bash
# .env.production
VITE_API_URL=https://api.nova.com
```

### Netlify:
```
En Settings → Build & Deploy → Environment
```

### General:
```bash
# .env
VITE_CONTACT_FORM_ENDPOINT=https://api.nova.com/contact
VITE_GOOGLE_ANALYTICS_ID=G-XXXXX
```

## 🔄 CI/CD Pipeline

### GitHub Actions (ejemplo):
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🐛 Troubleshooting

### 404 en rutas (SPA)
Configura `_redirects` en Netlify o vercel.json en Vercel:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Slow Performance
- Optimiza imágenes (comprime con TinyPNG)
- Lazy load componentes no críticos
- Minifica CSS/JS (Vite lo hace automáticamente)
- Usa CDN para assets estáticos

### CORS Errors
Asegúrate que tu backend tenga CORS habilitado:
```javascript
res.headers['Access-Control-Allow-Origin'] = '*'
```

## 📞 Soporte

Para dudas sobre despliegue:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
