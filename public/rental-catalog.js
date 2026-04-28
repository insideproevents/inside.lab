// ============================================================
// INSIDE:LAB - Catálogo de Equipos DJ Profesionales
// Archivo: rental-catalog.js
// Versión: 1.0.0 - Código limpio y funcional
// ============================================================ 

/**
 * Catálogo Ur: Arreglo de 12 productos de equipos DJ
 * Sin elementos vacíos, todos con id, nombre e imagen
 */
const Ur = [
  {
    id: 1,
    name: "Pioneer CDJ-3000",
    image: "/images/pioneer-cdj3000.jpg",
    category: "cdj"
  },
  {
    id: 2,
    name: "Pioneer CDJ2000nx2",
    image: "/images/pioneer-cdj2000nx2.jpg",
    category: "cdj"
  },
  {
    id: 3,
    name: "Pioneer DJM 900nx2",
    image: "/images/pioneer-djm900nx2.jpg",
    category: "mixer"
  },
  {
    id: 4,
    name: "Pioneer DJM-V10",
    image: "/images/pioneer-djm-v10.jpg",
    category: "mixer"
  },
  {
    id: 5,
    name: "Pioneer DJM-A9",
    image: "/images/pioneer-djm-a9.jpg",
    category: "mixer"
  },
  {
    id: 6,
    name: "Pioneer DJM-S11",
    image: "/images/pioneer-djm-s11.jpg",
    category: "mixer"
  },
  {
    id: 7,
    name: "Pioneer DJM S9",
    image: "/images/pioneer-djm-s9.jpg",
    category: "mixer"
  },
  {
    id: 8,
    name: "Pioneer DJM-900nxs2",
    image: "/images/pioneer-djm900nx2.jpg",
    category: "mixer"
  },
  {
    id: 9,
    name: "Playdifferently Model 1",
    image: "/images/model1.jpg",
    category: "mixer"
  },
  {
    id: 10,
    name: "Pioneer XDJ-XZ All in One",
    image: "/images/pioneer-xdj-xz.jpg",
    category: "cdj"
  },
  {
    id: 11,
    name: "Xone 96",
    image: "/images/xone96.png",
    category: "mixer"
  },
  {
    id: 12,
    name: "Allen Heath K2",
    image: "/images/xone-k2.webp",
    category: "mixer"
  }
];

/**
 * Objeto Pr: Descripciones detalladas de cada producto
 * Incluye descripción, especificaciones técnicas y galería de fotos
 */
const Pr = {
  1: {
    desc: "El estándar profesional absoluto para DJ. Pantalla táctil LCD de 7 pulgadas con respuesta táctil precisa, jog wheels mejorados y rendimiento impecable. Reproduce música desde USB, rekordbox library o streaming con calidad de estudio. Incluye funciones avanzadas de hot cues, loops, Beat FX y soporte para múltiples formatos de audio profesionales.",
    specs: [
      "Pantalla táctil LCD de alta resolución (7 pulgadas)",
      "2 canales con 4 zonas de hot cues por canal",
      "Respuesta de frecuencia: 4Hz ~ 20kHz (±1.5dB)",
      "Separación de canales: 105dB (USB/CD)",
      "Soporta formatos: MP3, AAC, WAV, AIFF, FLAC, ALAC",
      "Entradas: 2 USB tipo A (frontal), 1 USB tipo B (trasero)",
      "Salidas balanceadas XLR y TRS",
      "Procesador multicore para rendimiento fluido"
    ],
    gallery: [
      "/images/pioneer-cdj3000-1.jpg",
      "/images/pioneer-cdj3000-2.jpg",
      "/images/pioneer-cdj3000-3.jpg",
      "/images/pioneer-cdj3000-4.jpg"
    ]
  },
  2: {
    desc: "Sistema todo en uno premium con controles de gran formato y pantalla táctil intuitiva de 10.1 pulgadas. Ideal para sets de alto impacto visual con respuesta táctil excepcional. Combina 2 reproductores profesionales con mezclador de 2 canales integrado, pads de rendimiento RGB, efectos integrados y conectividad versátil para producción profesional.",
    specs: [
      "2 canales + pads de rendimiento RGB (16 pads)",
      "Pantalla táctil LCD de 10.1 pulgadas",
      "2 puertos USB tipo A para rekordbox y reproducción directa",
      "Salida XLR balanceada para PA profesional",
      "Procesador de efectos integrado con 6 tipos",
      "Soporta MIDI, DVS y control MIDI avanzado",
      "2 salidas balanceadas principales (XLR/TRS)",
      "Pantalla táctil para navegación y control directo"
    ],
    gallery: [
      "/images/pioneer-cdj2000nx2-1.jpg",
      "/images/pioneer-cdj2000nx2-2.jpg",
      "/images/pioneer-cdj2000nx2-3.jpg",
      "/images/pioneer-cdj2000nx2-4.jpg"
    ]
  },
  3: {
    desc: "Mezclador profesional de 4 canales para DJ, la referencia absoluta en clubs y festivales de todo el mundo. Circuitos de audio de grado audiófilo con conversores de alta calidad, faders de precisión absoluta y procesamiento de efectos de alta gama. Diseñado y probado para soportar el uso intensivo profesional en entornos exigentes.",
    specs: [
      "4 canales de entrada (2 MIC/LINE, 2 LINE)",
      "Faders de canal de 60 mm de precisión absoluta",
      "Procesador de efectos BeatFX de alta calidad",
      "Salida booth balanceada y booth mono/stereo",
      "EQ de 3 bandas con función ISO por canal",
      "Filtro de alta/baja frecuencia por canal",
      "Conversores de 24-bit/96kHz incorporados",
      "Construcción de chasis metálico de alta rigidez"
    ],
    gallery: [
      "/images/pioneer-djm900nx2-1.jpg",
      "/images/pioneer-djm900nx2-2.jpg",
      "/images/pioneer-djm900nx2-3.jpg",
      "/images/pioneer-djm900nx2-4.jpg"
    ]
  },
  4: {
    desc: "El tope de gama absoluto de Pioneer. Mezclador de 6 canales con motor FX avanzado, sampler de 6 slots y pantalla táctil a color. Diseñado para artistas exigentes que requieren máxima creatividad, control directo y rendimiento profesional. El sistema definitivo para producción y actuación en vivo de alto nivel.",
    specs: [
      "6 canales (2 MIC/LINE, 2 LINE, 2 PHONO)",
      "Pantalla táctil a color de 3.5 pulgadas",
      "Sampler de 6 slots con controles dedicados",
      "Efectos Sound Color FX y Beat FX simultáneos",
      "Reloj de cuarzo dual para máxima estabilidad",
      "Pre-amplificadores discretos de ultra baja distorsión",
      "Salidas balanceadas XLR y TRS",
      "Grabación directa integrada a USB"
    ],
    gallery: [
      "/images/pioneer-djm-v10-1.jpg",
      "/images/pioneer-djm-v10-2.jpg",
      "/images/pioneer-djm-v10-3.jpg",
      "/images/pioneer-djm-v10-4.jpg"
    ]
  },
  5: {
    desc: "Mezclador flagship de 4 canales con interfaz de audio profesional integrada de 24-bit/96kHz. Calidad de estudio en formato compacto ideal para streaming, grabación profesional y actuaciones en vivo con máxima calidad. Preamplificadores transparentes y circuitos de ultra baja distorsión para captura perfecta de audio.",
    specs: [
      "4 canales + 2 puertos USB tipo A/B de alta velocidad",
      "Interfaz de audio 24-bit/96kHz integrada",
      "Inserción de efectos por canal auxiliar",
      "Alimentación phantom en ambos canales MIC (+48V)",
      "Procesador de efectos de alta calidad con 6 tipos",
      "Mezcla independiente para DJ y streaming",
      "Salidas balanceadas XLR y TRS",
      "Monitorización directa con control de nivel"
    ],
    gallery: [
      "/images/pioneer-djm-a9-1.jpg",
      "/images/pioneer-djm-a9-2.jpg",
      "/images/pioneer-djm-a9-3.jpg",
      "/images/pioneer-djm-a9-4.jpg"
    ]
  },
  6: {
    desc: "Compacto pero extremadamente poderoso. Ideal para espacios pequeños y configuraciones móviles sin sacrificar calidad profesional. 2 canales con todo lo necesario para sesiones creativas, incluyendo pads de rendimiento dedicados, efectos versátiles y conectividad completa para producción y streaming profesional.",
    specs: [
      "2 canales + 2 puertos USB para grabación y reproducción",
      "2 canales PHONO con faders curvos optimizados",
      "Procesador de efectos completos con 13 tipos",
      "Salida booth dedicada y grabación directa USB",
      "Pads de rendimiento para cues y samples dedicados",
      "Diseño ultra-compacto optimizado para escritorio",
      "Construcción robusta para transporte frecuente",
      "Mezcla flexible para diferentes configuraciones"
    ],
    gallery: [
      "/images/pioneer-djm-s11-1.jpg",
      "/images/pioneer-djm-s11-2.jpg",
      "/images/pioneer-djm-s11-3.jpg",
      "/images/pioneer-djm-s11-4.jpg"
    ]
  },
  7: {
    desc: "El clásico legendario modernizado. 4 canales con diseño icónico y tecnología actualizada para el DJ contemporáneo. Circuito de fono mejorado con preamplificación optimizada para máxima respuesta en vinilos analógicos, faders de alta precisión y conectividad moderna que respeta y evoluciona la herencia de los clásicos.",
    specs: [
      "4 canales (2 PHONO / 2 LINE) balanceados",
      "Faders de canal de 60 mm de precisión absoluta",
      "Circuito de fono mejorado con ganancia óptima",
      "Salida de grabación USB dedicada y booth",
      "EQ de 3 bandas con función Kill switch por canal",
      "Construcción de chasis de aluminio robusto",
      "Pre-amplificación discreta de baja ruido",
      "Capacidad de carga para cartuchos MC/MM"
    ],
    gallery: [
      "/images/pioneer-djm-s9-1.jpg",
      "/images/pioneer-djm-s9-2.jpg",
      "/images/pioneer-djm-s9-3.jpg",
      "/images/pioneer-djm-s9-4.jpg"
    ]
  },
  8: {
    desc: "Versión mejorada del clásico 900nxs2 con características adicionales para producción y streaming. Mantiene el flujo de trabajo intuitivo y la calidad de audio legendaria, añadiendo capacidades avanzadas de grabación multicanal y procesamiento de señales digitales de alta resolución.",
    specs: [
      "4 canales con entradas balanceadas y PHONO",
      "Procesador de efectos versátil con 13 tipos",
      "Grabación directa multicanal a USB 2.0",
      "Send/Return para procesamiento externo de efectos",
      "Salidas booth, master y recording balanceadas",
      "Faders de canal reemplazables y ajustables",
      "Conversores de 24-bit/96kHz por canal",
      "Módulo de pre-amplificación independiente"
    ],
    gallery: [
      "/images/pioneer-djm900nxs2-1.jpg",
      "/images/pioneer-djm900nxs2-2.jpg",
      "/images/pioneer-djm900nxs2-3.jpg",
      "/images/pioneer-djm900nxs2-4.jpg"
    ]
  },
  9: {
    desc: "Obra maestra de la ingeniería analógica pura. Mezclador de 4 canales totalmente analógico con circuitos discretos de grado audiófilo premium. Sin procesamiento digital ni conversión, ofrece la ruta de señal más transparente y directa posible. La elección de puristas, ingenieros de sonido y coleccionistas que buscan la perfección analógica absoluta.",
    specs: [
      "4 canales totalmente analógicos sin procesamiento digital",
      "Circuitos discretos premium sin amplificadores operacionales",
      "Transformadores de entrada y salida de grado audiófilo",
      "EQ Pasivo de 4 bandas por canal con inductores",
      "Ruta de señal 100% transparente y directa",
      "Construcción premium con componentes discretos seleccionados",
      "Capacidad de salida excepcional con headroom masivo",
      "Cero latencia digital ni procesamiento por DSP"
    ],
    gallery: [
      "/images/model1-1.jpg",
      "/images/model1-2.jpg",
      "/images/model1-3.jpg",
      "/images/model1-4.jpg"
    ]
  },
  10: {
    desc: "Sistema todo en uno definitivo con 4 canales independientes, pantalla táctil de 10 pulgadas, pads de rendimiento profesional y sistema de sonido integrado. Perfecto para DJ móviles y artistas que necesitan un setup completo profesional en un solo equipo compacto. Combina portabilidad extrema con características de gama alta absoluta.",
    specs: [
      "4 canales completos en un solo equipo compacto",
      "Pantalla táctil de 10 pulgadas integrada",
      "16 pads de rendimiento RGB multicolor programables",
      "Procesador de efectos completo e integrado",
      "2 puertos USB para rekordbox, Serato y Traktor",
      "Sistema de sonido interno de 2 vías con amplificación",
      "Grabación directa y streaming integrado",
      "Batería opcional para operación completamente móvil"
    ],
    gallery: [
      "/images/pioneer-xdj-xz-1.jpg",
      "/images/pioneer-xdj-xz-2.jpg",
      "/images/pioneer-xdj-xz-3.jpg",
      "/images/pioneer-xdj-xz-4.jpg"
    ]
  },
  11: {
    desc: "Mezclador analógico de 4 canales premium con EQ rotatorio musical excepcional y filtros de alta calidad de diseño propio. Diseñado para audiófilos y profesionales que prefieren el control táctil preciso de los knobs rotatorios y una ruta de señal puramente analógica con color armónico característico y musicalidad única.",
    specs: [
      "4 canales con EQ rotatorio de 3 bandas de alta precisión",
      "Filtro de paso alto/bajo por canal con switches dedicados",
      "Circuitos analógicos discretos premium seleccionados",
      "Salida booth y grabación USB de alta resolución",
      "Faders de canal de 60 mm con amortiguación ajustable",
      "Construcción de chasis metálico monobloque robusto",
      "Transformadores de salida de grado audiófilo",
      "Capacidad de inserción de efectos externos por canal"
    ],
    gallery: [
      "/images/xone96-1.jpg",
      "/images/xone96-2.jpg",
      "/images/xone96-3.jpg",
      "/images/xone96-4.jpg"
    ]
  },
  12: {
    desc: "Mezclador híbrido de 4 canales premium que combina lo mejor del control analógico clásico con procesamiento digital moderno de alta calidad. 4 bandas de EQ por canal con switches Kill dedicados, entradas múltiples para máxima flexibilidad profesional y procesamiento de señales de 24-bit con una interfaz intuitiva táctil y control físico completo.",
    specs: [
      "4 canales premium (2 MIC/LINE, 2 PHONO de alta calidad)",
      "EQ de 4 bandas por canal con Kill switches retroiluminados",
      "Pantalla táctil a color de 3.5 pulgadas para navegación",
      "2 entradas USB de alta resolución 24-bit/96kHz",
      "Efectos dedicados por canal con control profundo",
      "Salidas balanceadas XLR y TRS de grado estudio",
      "Preamplificación discreta de ultra baja distorsión",
      "Procesamiento DSP de 32-bit punto flotante"
    ],
    gallery: [
      "/images/xone-k2-1.jpg",
      "/images/xone-k2-2.jpg",
      "/images/xone-k2-3.jpg",
      "/images/xone-k2-4.jpg"
    ]
  }
};

/**
 * Función Hr(): Renderiza la UI completa con catálogo y modal interactivo
 * Incluye: catálogo de productos, filtros, galería de fotos y modal detallado
 */
function Hr() {
  // Estados del componente
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [filter, setFilter] = React.useState('all');

  // Cierra el modal y resetea el carrusel
  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  // Navegación del carrusel de imágenes
  const nextImage = () => {
    if (selectedProduct && selectedProduct.gallery && selectedProduct.gallery.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.gallery && selectedProduct.gallery.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
      );
    }
  };

  // Manejo de teclado para accesibilidad
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedProduct) return;
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProduct]);

  // Filtra productos por categoría
  const filteredProducts = filter === 'all' 
    ? Ur 
    : Ur.filter(p => p.category === filter);

  // Render principal
  return React.createElement('div', { className: 'rental-app' },
    // Header con filtros
    React.createElement('header', { className: 'app-header' },
      React.createElement('div', { className: 'container' },
        React.createElement('h1', null, 'INSIDE:LAB - Equipos DJ Profesionales'),
        React.createElement('div', { className: 'filters' },
          React.createElement('button', {
            className: filter === 'all' ? 'active' : '',
            onClick: () => setFilter('all')
          }, 'Todos'),
          React.createElement('button', {
            className: filter === 'cdj' ? 'active' : '',
            onClick: () => setFilter('cdj')
          }, 'CDJs'),
          React.createElement('button', {
            className: filter === 'mixer' ? 'active' : '',
            onClick: () => setFilter('mixer')
          }, 'Mezcladores')
        )
      )
    ),

    // Catálogo principal
    React.createElement('main', { className: 'catalog' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'product-grid' },
          filteredProducts.map((product) => {
            const details = Pr[product.id];
            return React.createElement('div', { 
              key: product.id, 
              className: 'product-card',
              onClick: () => setSelectedProduct({ ...product, ...details }),
              role: 'button',
              tabIndex: 0,
              'aria-label': `Ver detalles de ${product.name}`
            },
              React.createElement('div', { className: 'product-image' },
                React.createElement('img', { 
                  src: product.image, 
                  alt: product.name,
                  onError: (e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjRGNEY0Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNGRkZGRkYiPllvdXIgSW1hZ2VcLjwvdGV4dD4KPC9zdmc+';
                  }
                }),
                React.createElement('div', { className: 'product-overlay' },
                  React.createElement('span', { className: 'view-details' }, 'Ver detalles →')
                )
              ),
              React.createElement('div', { className: 'product-info' },
                React.createElement('h3', null, product.name)
              )
            );
          })
        )
      )
    ),

    // Modal interactivo con galería
    selectedProduct && React.createElement('div', { 
      className: 'modal-overlay',
      onClick: closeModal,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': 'modal-title'
    },
      React.createElement('div', { 
        className: 'modal-content',
        onClick: e => e.stopPropagation()
      },
        // Botón cerrar modal
        React.createElement('button', { 
          className: 'modal-close',
          onClick: closeModal,
          'aria-label': 'Cerrar modal'
        }, '×'),

        // Galería de fotos interactiva
        React.createElement('div', { className: 'modal-gallery' },
          React.createElement('div', { className: 'gallery-main' },
            selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
              React.createElement('img', {
                src: selectedProduct.gallery[currentImageIndex],
                alt: `${selectedProduct.name} - Imagen ${currentImageIndex + 1}`,
                onError: (e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjRGNEY0Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkZGRkYiPklkZWEgZGUgbGFzIGltYWdlc1w8L3RleHQ+Cjwvc3ZnPg==';
                }
              })
            )
          ),
          
          // Miniaturas de la galería
          selectedProduct.gallery && selectedProduct.gallery.length > 1 && React.createElement('div', { className: 'gallery-thumbs' },
            selectedProduct.gallery.map((img, idx) =>
              React.createElement('img', {
                key: idx,
                src: img,
                alt: `${selectedProduct.name} - miniatura ${idx + 1}`,
                className: currentImageIndex === idx ? 'active' : '',
                onClick: (e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                },
                onError: (e) => {
                  e.target.style.display = 'none';
                }
              })
            )
          ),

          // Controles de navegación del carrusel
          selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
            React.createElement('div', { className: 'gallery-controls' },
              React.createElement('button', { 
                className: 'gallery-nav prev',
                onClick: (e) => { e.stopPropagation(); prevImage(); },
                'aria-label': 'Imagen anterior'
              }, '‹'),
              React.createElement('button', { 
                className: 'gallery-nav next',
                onClick: (e) => { e.stopPropagation(); nextImage(); },
                'aria-label': 'Imagen siguiente'
              }, '›')
            )
          )
        ),

        // Información detallada del producto
        React.createElement('div', { className: 'modal-info' },
          React.createElement('h2', { id: 'modal-title' }, selectedProduct.name),
          React.createElement('p', { className: 'product-desc' }, selectedProduct.desc),
          
          React.createElement('div', { className: 'product-specs' },
            React.createElement('h3', null, 'Especificaciones Técnicas'),
            React.createElement('ul', null,
              selectedProduct.specs.map((spec, idx) =>
                React.createElement('li', { key: idx }, spec)
              )
            )
          ),

          React.createElement('div', { className: 'modal-actions' },
            React.createElement('button', { className: 'btn-primary' }, 'Solicitar cotización'),
            React.createElement('button', { className: 'btn-secondary' }, 'Ver disponibilidad')
          )
        )
      )
    ),

    // Footer
    React.createElement('footer', { className: 'app-footer' },
      React.createElement('div', { className: 'container' },
        React.createElement('p', null, '© 2026 INSIDE:LAB - Todos los derechos reservados')
      )
    )
  );
}

// Render final: Monta la aplicación React en el DOM
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(Hr)
  ));
} else {
  console.error('No se encontró el elemento #root en el DOM');
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  const root = ReactDOM.createRoot(newRoot);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(Hr)
  ));
}

console.log('INSIDE:LAB Rental App - Cargada correctamente');