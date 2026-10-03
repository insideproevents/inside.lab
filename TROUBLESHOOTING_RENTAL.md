# 🔍 TROUBLESHOOTING - Título No Visible

## Síntoma
La página rental carga pero **no se ve el título** (INSIDE:LAB / Equipos DJ Profesionales).

## Pasos de Diagnóstico

### 1. Abrir Consola del Navegador (F12)

Presiona `F12` → pestaña **Console**.

Deberías ver logs como:

```
🏪 Hr() component called
React version: 18.2.0
✅ INSIDE:LAB Rental App - Montada correctamente
```

Si NO ves esos mensajes, significa que React no está montando.

### 2. Verificar Errores

Busca en rojo:
- `❌ React o ReactDOM no cargaron`
- `Uncaught ReferenceError: React is not defined`
- `Failed to load resource: net::ERR_BLOCKED_BY_CLIENT`

### 3. Pasos Rápidos

#### A. Limpiar caché y recargar
```
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

#### B. Verificar que React CDN carga
En consola, escribe:
```javascript
console.log('React:', typeof React, React?.version);
console.log('ReactDOM:', typeof ReactDOM);
```
Debería decir: `React: function 18.2.0` y `ReactDOM: function`.

#### C. Verificar que #root existe
```javascript
console.log(document.getElementById('root'));
```
Debería mostrar `<div id="root"></div>`.

#### D. Verificar que Hr está definido
```javascript
console.log(typeof Hr);
```
Debería decir `function`.

### 4. Si React NO está definido

Causa: CDN bloqueado (adblocker, red corporativa, sin internet).

**Solución:** Cambiar a versión local de React (descargar) o usar CDN alternativo.

Editar `public/rental/index.html`:

```html
<!-- Cambiar estos scripts -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Por: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
```

### 5. Si Hr NO está definido

Causa: `rental-catalog.js` no se cargó o falló.

**Verificar:**
- Network tab → Filtrar por JS → `rental-catalog.js` debe ser 200 OK
- Verificar path: `src="../rental-catalog.js"` (desde `/rental/` sube a `/public/`)

**Solución:** Asegurar que el archivo exista en `/public/rental-catalog.js`.

### 6. Si el root NO existe

Causa: HTML mal formado o `#root` eliminado.

**Verificar:**
- Elements tab → Buscar `<div id="root">`
- Debe estar justo después del mobile menu

### 7. Logs Esperados

**Éxito:**
```
🏪 Hr() component called
React version: 18.2.0
✅ INSIDE:LAB Rental App - Montada correctamente
```

**Fallo común:**
```
❌ React o ReactDOM no cargaron
React: undefined ReactDOM: undefined
```
→ React CDN bloqueado/no conectado.

```
Uncaught ReferenceError: Ur is not defined
```
→ rental-catalog.js no cargó.

```
Target container is not a DOM element
```
→ #root no existe (HTML malformado).

### 8. Prueba de Conexión CDN

En consola, pegar:
```javascript
fetch('https://unpkg.com/react@18/umd/react.production.min.js')
  .then(r => console.log('React CDN status:', r.status))
  .catch(e => console.error('CDN error:', e));
```

Debería devolver `200`. Si falla, hay problema de red.

### 9. Solución Rápida (Modo Desarrollo)

Cambiar a React development (para mejor logging):

En `index.html`:
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Esto dará errores más detallados en consola.

### 10. Si Todo Falla - Modo Emergencia

Reemplazar `rental-app.js` con un render estático simple:

```javascript
// En rental-app.js, reemplazar todo el contenido con:
const rootEl = document.getElementById('root');
if (rootEl) {
  rootEl.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: #73f7b7;">
      <h1>INSIDE:LAB</h1>
      <h2>Equipos DJ Profesionales</h2>
      <p>React no pudo cargar. Revisa consola.</p>
    </div>
  `;
}
```

Esto mostraría al menos el título como respaldo.

---

## Resumen de Archivos a Verificar

| Archivo | Ruta | Debe existir |
|---------|------|-------------|
| index.html | `/public/rental/index.html` | ✅ |
| rental-catalog.js | `/public/rental-catalog.js` | ✅ |
| rental-app.js | `/public/rental-app.js` | ✅ |
| rental-app.css | `/public/rental-app.css` | ✅ |
| styles.css | `/public/styles.css` | ✅ |

## Contacto

Si el problema persiste, captura:
1. Pantalla completa de la consola (F12 → Console)
2. Pantalla de la pestaña Network (filtrar JS/CSS)
3. Versión de navegador y sistema operativo

---

**Creado:** 28 Abril 2026  
**Estado:** En debugging
