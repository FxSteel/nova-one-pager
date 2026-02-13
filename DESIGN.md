# NOVA Brand Guidelines

## 🎨 Color Palette

### Primary Colors
- **Cyan**: `#10B7FF` - Used for accents, icons, and highlights
- **Blue**: `#0B7CFF` - Used in gradients and secondary actions

### Gradient
```css
background: linear-gradient(90deg, #10B7FF, #0B7CFF);
```

### Neutral Colors
- **White**: `#FFFFFF` - Main background
- **Gray-50**: `#F9FAFB` - Section backgrounds
- **Gray-100**: `#F3F4F6` - Cards and borders
- **Gray-200**: `#E5E7EB` - Subtle dividers
- **Gray-600**: `#4B5563` - Secondary text
- **Gray-900**: `#111827` - Primary text

## 📐 Typography

### Font Family
```
Font: Inter (system-ui, Avenir, Helvetica, Arial, sans-serif)
```

### Font Sizes & Weights
- **Hero Title**: 3.75rem (60px) - Bold (900)
- **Section Title**: 2.25rem (36px) - Bold (700)
- **Subsection Title**: 1.5rem (24px) - Semibold (600)
- **Body**: 1rem (16px) - Regular (400)
- **Small**: 0.875rem (14px) - Regular (400)
- **Caption**: 0.75rem (12px) - Regular (400)

## 🎯 Components

### Buttons

#### Primary Button (Gradient)
```css
background: linear-gradient(90deg, #10B7FF, #0B7CFF);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 1rem;
font-weight: 600;
transition: box-shadow 0.3s ease;
```

#### Secondary Button (Outline)
```css
border: 2px solid #111827;
color: #111827;
background: transparent;
padding: 0.75rem 1.5rem;
border-radius: 1rem;
font-weight: 600;
```

### Cards
```css
background: white;
border: 1px solid #E5E7EB;
border-radius: 1rem;
padding: 2rem;
transition: box-shadow 0.3s ease;
```

## 📏 Spacing

- **Section Padding**: `py-20` (80px)
- **Section Padding (compact)**: `py-16` (64px)
- **Container**: `max-w-6xl` (1536px)
- **Gap (grid)**: `gap-8` (32px)
- **Gap (compact)**: `gap-4` (16px)

## 🔄 Responsive Breakpoints

```
- Mobile: < 640px
- Tablet: 640px - 1024px (sm: 640px, md: 768px, lg: 1024px)
- Desktop: > 1024px (xl: 1280px, 2xl: 1536px)
```

## ✨ Effects

### Shadows
- **Subtle**: `shadow-sm` - Light hover state
- **Medium**: `shadow-md` - Card hover state
- **None by default**: Keep designs clean and minimal

### Transitions
```css
transition-all duration-300 ease-in-out
```

## 🎬 Animations

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
}
```

### Hover Effects
- Buttons: Shadow + Opacity change
- Cards: Lift + Shadow
- Links: Color change

## 📱 Mobile Considerations

- **Large touch targets**: Min 44px × 44px
- **Spacing**: Increase padding on mobile
- **Typography**: Slightly smaller on mobile (responsive sizing)
- **Images**: Scale responsively with `max-w-full`

## 🚀 Performance

- Use semantic HTML
- Lazy load images when possible
- Minimize CSS/JS bundles
- Optimize images (WebP + fallback)
- Use system fonts when possible
