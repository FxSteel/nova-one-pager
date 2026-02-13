# 📋 Mapa de Secciones - NOVA Landing Page

Guía completa de todas las secciones, su contenido y ubicación en el código.

## 📑 Índice de Secciones

```
Inicio (Hero)
    ↓
Qué es NOVA
    ↓
Qué hacemos (Servicios)
    ↓
Cómo trabajamos (AI con Control)
    ↓
Servicios principales (Offerings)
    ↓
Proceso (4 pasos)
    ↓
Contacto (Formulario)
    ↓
Footer
```

---

## 1️⃣ NAVBAR (Sticky)

**Archivo**: `src/components/Navbar.tsx`

### Elementos:
- Logo NOVA (con gradiente)
- Links a todas las secciones
- Botón "Agendar conversación"
- Menú móvil responsivo

### Links internos:
- Inicio → `#inicio`
- Qué es NOVA → `#about`
- Qué hacemos → `#services`
- Cómo trabajamos → `#how-we-work`
- Servicios → `#offerings`
- Proceso → `#process`
- Contacto → `#contact`

### Características:
- ✨ Sticky (permanece al top)
- 🎨 Backdrop blur
- 📱 Menú hamburguesa en mobile
- 🔗 Scroll suave al hacer clic

---

## 2️⃣ HERO SECTION

**Archivo**: `src/sections/Hero.tsx`
**ID**: `#inicio`

### Contenido:
```
Título:
"Automatización real para empresas que quieren operar sin fricción."

Subtítulo:
"En NOVA nos enfocamos 100% en automatizar procesos empresariales..."

Botones:
- "Ver qué hacemos" → Scroll a #services
- "Hablemos de tu proceso" → Scroll a #contact

Cards de Beneficios:
- Menos fricción
- Menos errores
- Más velocidad
- Trazabilidad
```

### Responsivo:
- Desktop: Texto grande (4xl/6xl)
- Mobile: Texto más pequeño
- Grid de 4 columnas en desktop, 2 en mobile

---

## 3️⃣ QUÉ ES NOVA

**Archivo**: `src/sections/AboutSection.tsx`
**ID**: `#about`

### Contenido:
```
Texto corporativo que explica:
"NOVA existe para eliminar trabajo repetitivo y errores operativos.
Diseñamos automatizaciones que conectan herramientas como CRM,
WhatsApp, email, ERPs y bases de datos..."
```

### Diseño:
- Fondo gris (gray-50)
- Texto grande
- Máx 3 columnas
- Borrador superior

---

## 4️⃣ QUÉ HACEMOS (6 Servicios)

**Archivo**: `src/sections/ServicesSection.tsx`
**ID**: `#services`

### Grid de 6 Cards:
```
1. Automatización de procesos
   Icono: ⚡ Zap
   "Conectamos tus herramientas..."

2. Integraciones
   Icono: 🔌 Plug
   "Integramos CRM, email, WhatsApp..."

3. Software a medida
   Icono: 💻 Code
   "Desarrollamos soluciones personalizadas..."

4. AI aplicada con control
   Icono: 🧠 Brain
   "Integramos inteligencia artificial..."

5. Observabilidad
   Icono: 👁️ Eye
   "Dashboard y reportes en tiempo real..."

6. Mejora continua
   Icono: 📈 TrendingUp
   "Optimizamos constantemente..."
```

### Responsivo:
- 3 columnas en desktop
- 2 columnas en tablet
- 1 columna en mobile

---

## 5️⃣ CÓMO TRABAJAMOS (AI con Control)

**Archivo**: `src/sections/HowWeWorkSection.tsx`
**ID**: `#how-we-work`

### 4 Cards Explicativas:
```
1. La AI propone, reglas determinísticas validan
   Icono: ✓ CheckCircle
   
2. Aprobaciones humanas configurables
   Icono: 🔒 Lock
   
3. Trazabilidad y logs
   Icono: 📤 LogOut
   
4. Fallback y reintentos
   Icono: 🔄 RotateCcw
```

### Diseño:
- Fondo gris (gray-50)
- Grid 2x2
- Borrador superior

---

## 6️⃣ SERVICIOS PRINCIPALES (3 Bloques)

**Archivo**: `src/sections/OfferingsSection.tsx`
**ID**: `#offerings`

### Tres Servicios Principales:

#### 1. Automatización de procesos
- Descripción
- Highlights:
  - Flujos de trabajo automáticos
  - Integración de múltiples plataformas
  - Reglas de negocio personalizadas
  - Escalable y flexible

#### 2. Desarrollo de software a medida
- Descripción
- Highlights:
  - Aplicaciones web modernas
  - APIs robustas y seguras
  - Diseño responsivo
  - Mantenimiento y soporte

#### 3. AI aplicada con control
- Descripción
- Highlights:
  - Modelos de AI seguros
  - Aprobaciones humanas configurables
  - Logs y auditoría completa
  - Fallbacks automáticos

### Diseño:
- 3 columnas en desktop
- 1 columna en mobile
- Cards grandes con bullets

---

## 7️⃣ PROCESO (4 Pasos)

**Archivo**: `src/sections/ProcessSection.tsx`
**ID**: `#process`

### Pasos:

#### 1️⃣ Diagnóstico
"Analizamos tu operación actual, identificamos fricciones, oportunidades de automatización y requisitos clave."

#### 2️⃣ Diseño
"Diseñamos la solución considerando tus procesos, herramientas existentes y objetivos de negocio."

#### 3️⃣ Implementación
"Construimos e integramos el sistema. Testing exhaustivo y capacitación de tu equipo."

#### 4️⃣ Monitoreo
"Monitoreamos continuamente, optimizamos según datos reales y ajustamos según necesites."

### Diseño:
- Timeline vertical
- Números en circles gradientes
- Borrador entre pasos
- Fondo gris (gray-50)

---

## 8️⃣ CONTACTO (Formulario)

**Archivo**: `src/sections/ContactSection.tsx`
**ID**: `#contact`

### Formulario:
```
Título: "Hablemos de tu proceso"
Subtítulo: "Cuéntanos sobre tu operación..."

Campos:
1. Nombre (text input)
2. Email (email input)
3. Mensaje (textarea - 6 filas)

Botón: "Enviar mensaje" (gradient)
```

### Estados:
- Vacío (inputs sin llenar)
- Filled (con datos)
- Success (después de enviar)

### Validación:
```javascript
- Nombre: required
- Email: required + valid email
- Mensaje: required
```

---

## 9️⃣ FOOTER

**Archivo**: `src/components/Footer.tsx`

### Secciones:
```
1. Brand (Logo + Descripción)
2. Navegación (Links rápidos)
3. Contacto (CTA final)

Bottom:
- Copyright
- Made with ❤️
```

### Links:
- Inicio → `#inicio`
- Qué es NOVA → `#about`
- Servicios → `#services`
- Contacto → `#contact`

---

## 🎨 Paleta de Colores Usados

| Elemento | Color | Código |
|----------|-------|--------|
| Primario (Botones) | Cyan → Azul | #10B7FF → #0B7CFF |
| Fondo | Blanco | #FFFFFF |
| Fondo Alt | Gris claro | #F9FAFB |
| Texto Primario | Gris oscuro | #111827 |
| Texto Secundario | Gris | #4B5563 |
| Bordes | Gris claro | #E5E7EB |
| Iconos | Cyan | #10B7FF |

---

## 📏 Espaciado Estándar

| Elemento | Padding/Margin |
|----------|-----------------|
| Secciones | py-20 (80px) |
| Contenedor | max-w-6xl (1536px) |
| Gap (Grid) | gap-8 (32px) |
| Gap (Compact) | gap-4 (16px) |

---

## 📱 Breakpoints Responsivos

| Dispositivo | Ancho | Clase |
|------------|-------|-------|
| Mobile | < 640px | (default) |
| Tablet | 640px+ | sm: |
| Laptop Pequeño | 768px+ | md: |
| Desktop | 1024px+ | lg: |
| Ancho | 1280px+ | xl: |

---

## 🔗 Flujo de Navegación

```
┌─────────────┐
│   NAVBAR    │ ← Siempre visible (sticky)
├─────────────┤
│    HERO     │ ← Primer scroll
├─────────────┤
│   ABOUT     │
├─────────────┤
│  SERVICES   │ ← Destino "Ver qué hacemos"
├─────────────┤
│ HOW WE WORK │
├─────────────┤
│ OFFERINGS   │
├─────────────┤
│  PROCESS    │
├─────────────┤
│  CONTACT    │ ← Destino "Contacto" / "Hablemos"
├─────────────┤
│   FOOTER    │
└─────────────┘
```

---

## 💡 Tips para Customización

### Cambiar textos:
1. Abre el archivo de la sección
2. Busca el `<h2>` o `<p>` con el contenido
3. Edita y guarda
4. Los cambios se ven al instante (HMR)

### Agregar más servicios:
En `ServicesSection.tsx`:
```tsx
const services: ServiceCard[] = [
  // Existing services...
  {
    icon: <NewIcon className="w-8 h-8 text-cyan-500" />,
    title: 'Nuevo Servicio',
    description: 'Descripción...',
  },
]
```

### Cambiar orden de secciones:
En `App.tsx`, reorganiza el orden de importes y componentes.

### Agregar imágenes:
```tsx
<img 
  src="/images/your-image.png" 
  alt="Descripción"
  className="w-full max-w-2xl"
/>
```

---

**Última actualización**: 11 de febrero de 2026
