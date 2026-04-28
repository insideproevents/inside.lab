# 🚀 INSTRUCCIONES - Cómo Ver la Página Rental Funcional

## Paso 1: Iniciar Servidor Local

```bash
cd /Users/sanezza/Desktop/INSIDELAB/insidelab_kimi_v2/public
live-server --port=8080 --spa
```

**Nota:** Si `live-server` no está instalado globalmente, usa:
```bash
npx live-server --port=8080 --spa
```

## Paso 2: Abrir en Navegador

El servidor iniciará en: **http://localhost:8080/**

Navega a:
- http://localhost:8080/rental/
- O directamente: http://localhost:8080/rental/index.html

## Paso 3: Verificar que Funciona

### Deberías ver:

1. **HEADER** (negro #070A12 con texto blanco)
   - Logo: `INSIDE:LAB` (verde #73f7b7)
   - Menú: Inicio | Servicios | Rental | Marcas | Contacto
   - Botón "Cotizar" (borde verde)
   - Al hacer scroll → header se queda fijo y se oscurece

2. **CATÁLOGO DE PRODUCTOS** (fondo oscuro #070A12)
   - Título grande: "INSIDE:LAB - Equipos DJ Profesionales"
   - 3 botones de filtro: `Todos` `CDJs` `Mezcladores`
   - Grid de **12 productos** en tarjetas:
     - Fondo semi-transparente blanco (rgba 0.05)
     - Borde sutil
     - Hover: se eleva + borde verde + sombra
     - Cada tarjeta tiene imagen y nombre

3. **MODAL** (pop-up)
   - Al hacer clic en cualquier producto
   - Fondo oscurecido con blur
   - Galería de 4 imágenes (navegación con flechas ← →)
   - Título, descripción, especificaciones técnicas
   - Botones: "Solicitar cotización" (verde), "Ver disponibilidad" (outline)

4. **FOOTER**
   - "© 2026 INSIDE:LAB - Todos los derechos reservados"

### Probar funcionalidad:

- ✅ **Filtros:** Click en "CDJs" → solo 3 productos; "Mezcladores" → 9; "Todos" → 12
- ✅ **Modal:** Click en tarjeta → se abre; click fuera o en X → cierra
- ✅ **Teclado en modal:** `ESC` cierra; `←` y `→` navegan imágenes
- ✅ **Hover:** Tarjetas se elevan; overlay aparece
- ✅ **Responsive:** Reducir ventana → grid se adapta (1 columna en móvil)
- ✅ **Menú móvil:** En pantalla pequeña, hamburguesa abre menú fullscreen

## Paso 4: Consola de Depuración (F12)

Abre DevTools → pestaña **Console**. Deberías ver:

```
INSIDE:LAB Rental App - Cargada correctamente
```

**No debería haber errores** como:
- `React is not defined`
- `Uncaught ReferenceError: Ur is not defined`
- `Failed to load resource`

Si hay errores 404, verifica que el servidor sirva los archivos:
- `../rental-catalog.js`
- `../rental-app.js`
- `rental-app.css`
- `../styles.css`
- `../script.js`

## Solución de Problemas

### Problema: Pantalla en blanco
**Solución:**
1. F12 → Console → buscar errores
2. Si dice `React is not defined` → revisar conexión a internet (CDN)
3. Si dice `Ur is not defined` → `rental-catalog.js` no cargó (¿path incorrecto?)
4. Si hay 404 → verificar que la ruta sea `../rental-catalog.js` (subir un nivel desde `/rental/`)

### Problema: Sin estilos (solo texto plano)
**Solución:**
1. Network tab → filtrar CSS
2. Verificar que `rental-app.css` devuelva 200
3. Verificar que `styles.css` devuelva 200
4. Refrescar con `Ctrl+Shift+R` (Mac: `Cmd+Shift+R`)

### Problema: No se abre el modal
**Solución:**
1. Console → ¿hay errores JavaScript?
2. Verificar que `selectedProduct` se setea (agregar `console.log` en `rental-app.js:327`)
3. Verificar que `React` y `ReactDOM` estén definidos

## Arquitectura de Archivos

```
public/
├── rental/
│   ├── index.html          ← Página rental (header + #root)
│   ├── rental-app.css      ← Estilos de la app React
│   ├── rental-catalog.js   ← Datos: Ur[12], Pr[12], Hr()
│   ├── rental-app.js       ← Componente React + montaje
│   └── images/             ← Fotos de productos
├── styles.css              ← Estilos globales del sitio
└── script.js               ← Lógica global (menú, scroll)
```

## Diferencias clave vs versión original

| Aspecto | Original (dañado) | Corregido |
|---------|------------------|-----------|
| HTML | Solo `<style>` (66 líneas) | HTML completo (70 líneas) |
| CSS bundle | `assets/index-CHzd7RjS.css` corrupto | `rental-app.css` con colores correctos |
| Header | Duplicado (HTML + React) | Solo header estático (HTML) |
| React | Usaba bundle minificado | Usa scripts fuente claros |
| Estilos | Colores genéricos (#1a1a2e) | Paleta INSIDE:LAB (#070A12, #73f7b7) |

## Código de Montaje React

`rental-app.js` monta automáticamente:

```javascript
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(Hr)
  ));
}
```

**Importante:** No remover este código, es el que renderiza el catálogo en `#root`.

## Variables CSS Usadas

Todas definidas en `styles.css` y reutilizadas en `rental-app.css`:

```css
--bg-primary: #070A12;       /* Fondo principal */
--bg-secondary: #0E1220;     /* Header, modal, footer */
--accent: #73f7b7;           /* Verde neón (logo, botones) */
--accent-hover: #9dfecd;     /* Verde claro hover */
--text-primary: #F4F6FF;     /* Texto principal */
--text-secondary: #A6A9B6;   /* Texto secundario */
--border: rgba(244,246,255,0.1); /* Bordes sutiles */
```

## Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Móvil (iOS Safari, Chrome Android)

## Contacto para Debugging

Si persisten problemas:

1. Captura pantalla completa de consola (F12 → Console)
2. Captura pantalla de Network tab (filtrar por JS/CSS)
3. Envía ambos screenshots con descripción del problema

---

**Listo.** La página debería cargar correctamente ahora.
