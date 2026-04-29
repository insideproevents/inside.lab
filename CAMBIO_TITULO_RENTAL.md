# 🎨 CAMBIO DE DISEÑO - Título Rental Page

## Cambio Solicitado
Formato de título de 2 líneas en página rental:

**Línea 1:** `INSIDE:LAB` (con los `:` en verde menta/accent)
**Línea 2:** `Equipos DJ Profesionales` (centrado)

## Implementación

### 1. HTML/JSX (rental-app.js)

**Antes:**
```javascript
// Header con título en una línea
React.createElement('header', { className: 'app-header' },
  React.createElement('div', { className: 'container' },
    React.createElement('h1', null, 'INSIDE:LAB - Equipos DJ Profesionales'),
    // ...
  )
)
```

**Después:**
```javascript
// Título en 2 líneas, sin header (header viene del HTML estático)
React.createElement('div', { className: 'section-header' },
  // Línea 1: INSIDE:LAB con ":" en verde
  React.createElement('span', { className: 'logo-main' },
    React.createElement('span', null, 'INSIDE'),
    React.createElement('span', { className: 'accent' }, ':'),
    React.createElement('span', null, 'LAB')
  ),
  // Línea 2: Subtitle
  React.createElement('span', { className: 'subtitle' }, 'Equipos DJ Profesionales')
)
```

### 2. CSS (rental-app.css)

```css
/* Contenedor del título */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

/* Línea 1: INSIDE:LAB */
.section-header .logo-main {
  display: block;
  font-family: 'Sora', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);  /* Responsive: 2.5rem a 4rem */
  font-weight: 800;
  color: var(--text-primary);  /* #F4F6FF */
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

/* Los ":" en verde menta */
.section-header .logo-main .accent {
  color: var(--accent);  /* #73f7b7 */
}

/* Línea 2: Equipos DJ Profesionales */
.section-header .subtitle {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);  /* Responsive */
  font-weight: 500;
  color: var(--text-secondary);  /* #A6A9B6 */
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 0.5rem;
}
```

## Características

✅ **Dos líneas separadas**
- `logo-main` → INSIDE:LAB (80% del tamaño, bold, sin mayúsculas forzadas)
- `subtitle` → Equipos DJ Profesionales (más pequeño, gris claro, mayúsculas)

✅ **Centrado**
- `text-align: center` en `.section-header`
- Ambos `display: block` para ocupar línea completa

✅ **Color de acento**
- Los `:` envueltos en `<span className="accent">` → verde #73f7b7

✅ **Responsive**
- `clamp()` ajusta tamaños entre móvil y desktop
- En móvil: logo ~2.5rem, subtitle ~1rem
- En desktop: logo ~4rem, subtitle ~1.5rem

✅ **Tipografía coherente**
- Logo: `Sora` (display font, extra bold)
- Subtitle: `Inter` (body font, medium weight)

## Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `public/rental-app.js` | Líneas 281-289: Structura JSX nueva para título de 2 líneas |
| `public/rental-app.css` | Añadido bloque `.section-header` con estilos |

## Preview Visual

```
┌─────────────────────────────────────┐
│         INSIDE:LAB                  │  ← (logo-main, #F4F6FF, ":" en #73f7b7)
│    EQUIPOS DJ PROFESIONALES         │  ← (subtitle, #A6A9B6, uppercase)
│                                     │
│  [Todos] [CDJs] [Mezcladores]       │
│                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐         │
│  │ IMG │  │ IMG │  │ IMG │         │
│  └─────┘  └─────┘  └─────┘         │
│  Pioneer  Pioneer  Pioneer          │
│  CDJ-3000  CDJ2000  XDJ-XZ          │
└─────────────────────────────────────┘
```

## Notas

- Los `:` están en un `<span className="accent">` por separado para aplicar color
- `letter-spacing: -0.02em` en logo para que "INSIDE" y "LAB" se vean más unidos
- `text-transform: uppercase` en subtitle para que sea consistente con otros textos del sitio
- `letter-spacing: 0.05em` en subtitle para dar aire entre letras (estilo técnica)

---

**Aplicado:** 28 Abril 2026
**Commit:** (no requiere commit, cambios locales)
**Prueba:** Abrir `http://localhost:8080/rental/` y verificar título en 2 líneas
