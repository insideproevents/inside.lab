// Catálogo Ur: 12 productos de equipos de DJ profesionales
const Ur = [
  { id: 1, name: "Pioneer CDJ-3000", image: "/images/pioneer-cdj3000.jpg" },
  { id: 2, name: "Pioneer CDJ2000nx2", image: "/images/pioneer-cdj2000nx2.jpg" },
  { id: 3, name: "Pioneer DJM 900nx2", image: "/images/pioneer-djm900nx2.jpg" },
  { id: 4, name: "Pioneer DJM-V10", image: "/images/pioneer-djm-v10.jpg" },
  { id: 5, name: "Pioneer DJM-A9", image: "/images/pioneer-djm-a9.jpg" },
  { id: 6, name: "Pioneer DJM-S11", image: "/images/pioneer-djm-s11.jpg" },
  { id: 7, name: "Pioneer DJM S9", image: "/images/pioneer-djm-s9.jpg" },
  { id: 8, name: "Pioneer DJM-900nxs2", image: "/images/pioneer-djm900nx2.jpg" },
  { id: 9, name: "Playdifferently Model 1", image: "/images/model1.jpg" },
  { id: 10, name: "Pioneer XDJ-XZ All in One", image: "/images/pioneer-xdj-xz.jpg" },
  { id: 11, name: "Xone 96", image: "/images/xone96.png" },
  { id: 12, name: "Allen Heath K2", image: "/images/xone-k2.webp" }
];

// Objeto Pr: Descripciones detalladas de cada producto
const Pr = {
  1: {
    desc: "El estándar profesional absoluto para DJ. Pantalla de alta definición de 7 pulgadas, jog wheels mejorados con respuesta táctil precisa y rendimiento impecable. Reproduce música desde USB, rekordbox library o streaming. Incluye funciones avanzadas de hot cues, loops y Beat FX.",
    specs: [
      "Pantalla táctil LCD de 7 pulgadas con alta resolución",
      "2 canales, 4 zonas de hot cues por canal",
      "Respuesta de frecuencia: 4Hz ~ 20kHz (±1.5dB)",
      "Separación de canales: 105dB (USB/CD)",
      "Soporta formatos: MP3, AAC, WAV, AIFF, FLAC, ALAC",
      "Entradas: 2 USB tipo A (frontal), 1 USB tipo B (rear)"
    ],
    gallery: [
      "/images/pioneer-cdj3000-1.jpg",
      "/images/pioneer-cdj3000-2.jpg",
      "/images/pioneer-cdj3000-3.jpg",
      "/images/pioneer-cdj3000-4.jpg"
    ]
  },
  2: {
    desc: "Sistema todo en uno con controles de gran formato y pantalla táctil intuitiva. Ideal para sets de alto impacto visual y respuesta táctil excepcional. Combina 2 reproductores profesionales con mezclador de 2 canales integrado, pads de rendimiento RGB y efectos integrados.",
    specs: [
      "2 canales + pads de rendimiento RGB de 16 pads",
      "Pantalla táctil LCD de 10.1 pulgadas",
      "2 x USB tipo A para rekordbox y reproducción directa",
      "Salida XLR balanceada para PA profesional",
      "Procesador de efectos integrado con 6 tipos",
      "Soporta MIDI y control DVS"
    ],
    gallery: [
      "/images/pioneer-cdj2000nx2-1.jpg",
      "/images/pioneer-cdj2000nx2-2.jpg",
      "/images/pioneer-cdj2000nx2-3.jpg",
      "/images/pioneer-cdj2000nx2-4.jpg"
    ]
  },
  3: {
    desc: "Mezclador profesional de 4 canales para DJ, la referencia absoluta en clubs y festivales de todo el mundo. Circuitos de audio de grado audiófilo, faders de precisión y procesamiento de efectos de alta calidad. Diseñado para soportar el uso intensivo profesional.",
    specs: [
      "4 canales de entrada (2 MIC/LINE, 2 LINE)",
      "Faders de canal de 60 mm de precisión",
      "Procesador de efectos BeatFX integrado",
      "Salida booth y booth mono/stereo",
      "EQ de 3 bandas con función ISO",
      "Filtro de alta/baja frecuencia por canal"
    ],
    gallery: [
      "/images/pioneer-djm900nx2-1.jpg",
      "/images/pioneer-djm900nx2-2.jpg",
      "/images/pioneer-djm900nx2-3.jpg",
      "/images/pioneer-djm900nx2-4.jpg"
    ]
  },
  4: {
    desc: "El tope de gama Pioneer. Mezclador de 6 canales con motor FX avanzado y sampler de 6 slots. Diseñado para artistas que exigen lo máximo en creatividad y control. Pantalla táctil a color para navegación intuitiva y acceso rápido a todas las funciones.",
    specs: [
      "6 canales (2 MIC/LINE, 2 LINE, 2 PHONO)",
      "Pantalla táctil a color de 3.5 pulgadas",
      "Sampler de 6 slots con controles dedicados",
      "Efectos Sound Color FX y Beat FX simultáneos",
      "Reloj de cuarzo dual para máxima estabilidad",
      "Salidas balanceadas XLR y TRS"
    ],
    gallery: [
      "/images/pioneer-djm-v10-1.jpg",
      "/images/pioneer-djm-v10-2.jpg",
      "/images/pioneer-djm-v10-3.jpg",
      "/images/pioneer-djm-v10-4.jpg"
    ]
  },
  5: {
    desc: "Mezclador flagship de 4 canales con interfaz de audio profesional integrada de 24-bit/96kHz. Calidad de estudio en un formato compacto ideal para streaming, grabación y actuaciones en vivo. Preamplificadores transparentes y circuitos de audio de ultra baja distorsión.",
    specs: [
      "4 canales + 2 puertos USB tipo A/B",
      "Interfaz de audio 24-bit/96kHz integrada",
      "Inserción de efectos por canal auxiliar",
      "Alimentación phantom en ambos canales MIC",
      "Procesador de efectos de alta calidad",
      "Mezcla independiente para DJ y streaming"
    ],
    gallery: [
      "/images/pioneer-djm-a9-1.jpg",
      "/images/pioneer-djm-a9-2.jpg",
      "/images/pioneer-djm-a9-3.jpg",
      "/images/pioneer-djm-a9-4.jpg"
    ]
  },
  6: {
    desc: "Compacto pero poderoso. Ideal para espacios pequeños sin sacrificar calidad profesional. 2 canales con todo lo necesario para sesiones creativas, incluyendo pads de rendimiento, efectos dedicados y conectividad versátil para producción y streaming.",
    specs: [
      "2 canales + 2 puertos USB para grabación",
      "2 canales PHONO con faders curvos optimizados",
      "Procesador de efectos de 13 tipos diferentes",
      "Salida booth y grabación directa USB",
      "Pads de rendimiento RGB para cues y samples",
      "Diseño compacto optimizado para escritorio"
    ],
    gallery: [
      "/images/pioneer-djm-s11-1.jpg",
      "/images/pioneer-djm-s11-2.jpg",
      "/images/pioneer-djm-s11-3.jpg",
      "/images/pioneer-djm-s11-4.jpg"
    ]
  },
  7: {
    desc: "El clásico modernizado. 4 canales con diseño legendario y tecnología actualizada para el DJ contemporáneo. Circuito de fono mejorado para máxima respuesta en vinilos, faders de alta precisión y conectividad moderna que respeta la herencia de los clásicos.",
    specs: [
      "4 canales (2 PHONO / 2 LINE) balanceados",
      "Faders de canal de 60 mm de alta precisión",
      "Circuito de fono mejorado con ganancia óptima",
      "Salida de grabación USB y booth dedicada",
      "EQ de 3 bandas con función Kill switch",
      "Construcción de chasis de aluminio robusto"
    ],
    gallery: [
      "/images/pioneer-djm-s9-1.jpg",
      "/images/pioneer-djm-s9-2.jpg",
      "/images/pioneer-djm-s9-3.jpg",
      "/images/pioneer-djm-s9-4.jpg"
    ]
  },
  8: {
    desc: "Versión mejorada del clásico 900nxs2 con características adicionales para producción. Mantiene el flujo de trabajo intuitivo y la calidad de audio legendaria, añadiendo capacidades avanzadas de grabación y procesamiento de señales digitales.",
    specs: [
      "4 canales con entradas balanceadas",
      "Procesador de efectos de 13 tipos",
      "Grabación directa a USB de alta calidad",
      "Send/Return para efectos externos",
      "Salidas booth y master balanceadas",
      "Faders de canal reemplazables y ajustables"
    ],
    gallery: [
      "/images/pioneer-djm900nxs2-1.jpg",
      "/images/pioneer-djm900nxs2-2.jpg",
      "/images/pioneer-djm900nxs2-3.jpg",
      "/images/pioneer-djm900nxs2-4.jpg"
    ]
  },
  9: {
    desc: "Obra maestra de la ingeniería analógica. Mezclador de 4 canales puro con circuitos discretos de grado audiófilo. Sin procesamiento digital, ofrece la ruta de señal más transparente posible. La elección de puristas y coleccionistas que buscan la perfección analógica absoluta.",
    specs: [
      "4 canales totalmente analógicos",
      "Circuitos discretos sin procesamiento digital",
      "Transformadores de entrada de grado audiófilo",
      "EQ Pasivo de 4 bandas por canal",
      "Ruta de señal 100% transparente",
      "Construcción premium con componentes discretos"
    ],
    gallery: [
      "/images/model1-1.jpg",
      "/images/model1-2.jpg",
      "/images/model1-3.jpg",
      "/images/model1-4.jpg"
    ]
  },
  10: {
    desc: "Sistema todo en uno definitivo con 4 canales, pantalla táctil, pads de rendimiento y efectos integrados. Perfecto para DJ móviles y artistas que necesitan un setup completo en un solo equipo. Combina portabilidad profesional con características de gama alta.",
    specs: [
      "4 canales en un solo equipo compacto",
      "Pantalla táctil de 10 pulgadas integrada",
      "16 pads de rendimiento RGB multicolor",
      "Procesador de efectos completo integrado",
      "2 puertos USB para rekordbox y reproducción",
      "Sistema de sonido integrado de 2 vías"
    ],
    gallery: [
      "/images/pioneer-xdj-xz-1.jpg",
      "/images/pioneer-xdj-xz-2.jpg",
      "/images/pioneer-xdj-xz-3.jpg",
      "/images/pioneer-xdj-xz-4.jpg"
    ]
  },
  11: {
    desc: "Mezclador analógico de 4 canales con EQ rotatorio musical y filtros de alta calidad. Diseñado para audiófilos que prefieren el control táctil de los knobs rotatorios y una ruta de señal puramente analógica con color armónico característico.",
    specs: [
      "4 canales con EQ rotatorio de 3 bandas",
      "Filtro de paso alto/bajo por canal",
      "Circuitos analógicos discretos premium",
      "Salida booth y grabación USB",
      "Faders de canal de alta precisión",
      "Construcción de chasis metálico robusto"
    ],
    gallery: [
      "/images/xone96-1.jpg",
      "/images/xone96-2.jpg",
      "/images/xone96-3.jpg",
      "/images/xone96-4.jpg"
    ]
  },
  12: {
    desc: "Mezclador híbrido de 4 canales que combina lo mejor del control analógico y digital. 4 bandas de EQ por canal con filtros dedicados, entradas múltiples para máxima flexibilidad y procesamiento de alta calidad con una interfaz intuitiva y táctil.",
    specs: [
      "4 canales (2 MIC/LINE, 2 PHONO)",
      "EQ de 4 bandas por canal con Kill switches",
      "Pantalla táctil a color para navegación",
      "2 entradas USB de alta resolución",
      "Efectos dedicados por canal",
      "Salidas balanceadas XLR y TRS"
    ],
    gallery: [
      "/images/xone-k2-1.jpg",
      "/images/xone-k2-2.jpg",
      "/images/xone-k2-3.jpg",
      "/images/xone-k2-4.jpg"
    ]
  }
};

// Función Hr(): Renderiza el catálogo y modal (sin header, el header está en el HTML)
function Hr() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [filter, setFilter] = React.useState('all');

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

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

  const filteredProducts = filter === 'all'
    ? Ur
    : Ur.filter(p => p.category === filter);

  return React.createElement('div', { className: 'rental-app' },
    // Catálogo principal (sin header, el header está en el HTML estático)
    React.createElement('main', { className: 'catalog' },
      React.createElement('div', { className: 'container' },
        // Header del catálogo con título en 2 líneas
        React.createElement('div', { className: 'section-header' },
          React.createElement('span', { className: 'logo-main' },
            React.createElement('span', null, 'INSIDE'),
            React.createElement('span', { className: 'accent' }, ':'),
            React.createElement('span', null, 'LAB')
          ),
          React.createElement('span', { className: 'subtitle' }, 'Equipos DJ Profesionales')
        ),

        // Filtros
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
        ),

        // Grid de productos
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
    )
  );
}
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
      );
    }
  };

  // Maneja teclado
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedProduct) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProduct]);

  // Filtra productos por categoría
  const filteredProducts = filter === 'all' 
    ? Ur 
    : Ur.filter(p => p.category === filter);

  return React.createElement('div', { className: 'rental-app' },
    // Header
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
          Ur.map((product) => {
            const details = Pr[product.id];
            return React.createElement('div', { 
              key: product.id, 
              className: 'product-card',
              onClick: () => setSelectedProduct({ ...product, ...details })
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

    // Modal interactivo
    selectedProduct && React.createElement('div', { 
      className: 'modal-overlay',
      onClick: closeModal
    },
      React.createElement('div', { 
        className: 'modal-content',
        onClick: e => e.stopPropagation()
      },
        // Botón cerrar
        React.createElement('button', { 
          className: 'modal-close',
          onClick: closeModal,
          'aria-label': 'Cerrar modal'
        }, '×'),

        // Galería de fotos
        React.createElement('div', { className: 'modal-gallery' },
          React.createElement('div', { className: 'gallery-main' },
            selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
              React.createElement('img', {
                src: selectedProduct.gallery[currentImageIndex],
                alt: selectedProduct.name,
                onError: (e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjRGNEY0Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkZGRkYiPklkZWEgZGUgbGFzIGltYWdlc1w8L3RleHQ+Cjwvc3ZnPg==';
                }
              })
            )
          ),
          
          // Miniaturas
          selectedProduct.gallery && selectedProduct.gallery.length > 1 && React.createElement('div', { className: 'gallery-thumbs' },
            selectedProduct.gallery.map((img, idx) =>
              React.createElement('img', {
                key: idx,
                src: img,
                alt: `${selectedProduct.name} - miniatura ${idx + 1}`,
                className: currentImageIndex === idx ? 'active' : '',
                onClick: () => setCurrentImageIndex(idx),
                onError: (e) => {
                  e.target.style.display = 'none';
                }
              })
            )
          ),

          // Controles carrusel
          selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
            React.createElement('div', { className: 'gallery-controls' },
              React.createElement('button', { 
                className: 'gallery-nav prev',
                onClick: (e) => { e.stopPropagation(); prevImage(); }
              }, '‹'),
              React.createElement('button', { 
                className: 'gallery-nav next',
                onClick: (e) => { e.stopPropagation(); nextImage(); }
              }, '›')
            )
          )
        ),

        // Información del producto
        React.createElement('div', { className: 'modal-info' },
          React.createElement('h2', null, selectedProduct.name),
          React.createElement('p', { className: 'product-desc' }, selectedProduct.desc),
          
          React.createElement('div', { className: 'product-specs' },
            React.createElement('h3', null, 'Especificaciones'),
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

// Render final
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(Hr)
  ));
} else {
  console.error('No se encontró el elemento #root en el DOM');
  // Crear elemento root si no existe
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  const root = ReactDOM.createRoot(newRoot);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(Hr)
  ));
}