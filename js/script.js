/**
 * ==========================================================================
 * DROGUERÍA VIDA SANA — LÓGICA DE APLICACIÓN FRONTEND
 * Tecnologías: JavaScript Vanilla (ES6+)
 * Funcionalidades: Catálogo interactivo, Búsqueda en tiempo real, Filtros
 * dinámicos, Ordenamiento multicriterio, Carrito de compras con cálculo en COP,
 * Toasts de confirmación y Modal demostrativo.
 * ==========================================================================
 */

// --- 1. Base de Datos de Productos de Demostración (Catálogo Farmacéutico Colombiano) ---
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Acetaminofén 500 mg",
    category: "analgesicos",
    categoryLabel: "Analgésicos y Dolor",
    description: "Alivio eficaz de dolores de cabeza, musculares y control de la fiebre. Caja x 24 tabletas.",
    price: 8900,
    oldPrice: 11500,
    offer: true,
    prescription: false,
    badge: "-22% Dto",
    iconType: "pills",
    rating: 4.8
  },
  {
    id: 2,
    name: "Ibuprofeno 600 mg",
    category: "analgesicos",
    categoryLabel: "Analgésicos y Dolor",
    description: "Antiinflamatorio y analgésico de acción rápida. Caja x 30 cápsulas blandas.",
    price: 14500,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Venta libre",
    iconType: "capsule",
    rating: 4.7
  },
  {
    id: 3,
    name: "Dolex Gripa Multisíntomas",
    category: "analgesicos",
    categoryLabel: "Analgésicos y Dolor",
    description: "Alivia congestión nasal, dolor corporal, estornudos y fiebre. Caja x 12 tabletas.",
    price: 18200,
    oldPrice: 22000,
    offer: true,
    prescription: false,
    badge: "Oferta",
    iconType: "pills",
    rating: 4.9
  },
  {
    id: 4,
    name: "Gel Antiflamatorio Diclofenaco 1%",
    category: "analgesicos",
    categoryLabel: "Analgésicos y Dolor",
    description: "Alivio tópico para golpes, torceduras y dolores articulares. Tubo x 50g.",
    price: 16800,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Tópico",
    iconType: "tube",
    rating: 4.6
  },
  {
    id: 5,
    name: "Protector Solar Toque Seco SPF 50+",
    category: "cuidado-piel",
    categoryLabel: "Cuidado de la Piel",
    description: "Máxima protección UVA/UVB matificante, sin efecto graso. Frasco dispensador x 50ml.",
    price: 68000,
    oldPrice: 85000,
    offer: true,
    prescription: false,
    badge: "Más vendido",
    iconType: "bottle",
    rating: 4.9
  },
  {
    id: 6,
    name: "Gel Limpiador Facial Espumoso",
    category: "cuidado-piel",
    categoryLabel: "Cuidado de la Piel",
    description: "Limpia y purifica profundamente sin alterar la barrera cutánea. Frasco x 200ml.",
    price: 42500,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Dermatológico",
    iconType: "bottle",
    rating: 4.8
  },
  {
    id: 7,
    name: "Crema Hidratación Profunda con Ceramidas",
    category: "cuidado-piel",
    categoryLabel: "Cuidado de la Piel",
    description: "Restaura la hidratación natural de la piel seca y sensible. Pote x 400ml.",
    price: 34900,
    oldPrice: 41000,
    offer: true,
    prescription: false,
    badge: "-15% Dto",
    iconType: "jar",
    rating: 4.7
  },
  {
    id: 8,
    name: "Vitamina C 1000 mg + Zinc Efervescente",
    category: "vitaminas",
    categoryLabel: "Vitaminas y Bienestar",
    description: "Fortalece las defensas y el sistema inmunológico. Tubo x 20 tabletas sabor naranja.",
    price: 23500,
    oldPrice: 29000,
    offer: true,
    prescription: false,
    badge: "Inmunidad",
    iconType: "pills",
    rating: 4.9
  },
  {
    id: 9,
    name: "Multivitamínico Integral Adultos",
    category: "vitaminas",
    categoryLabel: "Vitaminas y Bienestar",
    description: "Energía y vitalidad diaria con complejo B y minerales esenciales. Frasco x 60 gomitas.",
    price: 48000,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Energía",
    iconType: "jar",
    rating: 4.6
  },
  {
    id: 10,
    name: "Colágeno Hidrolizado + Biotina y Vitamina E",
    category: "vitaminas",
    categoryLabel: "Vitaminas y Bienestar",
    description: "Favorece la elasticidad de la piel, articulaciones y cabello fuerte. Pote x 300g polvo.",
    price: 56000,
    oldPrice: 69900,
    offer: true,
    prescription: false,
    badge: "Oferta",
    iconType: "jar",
    rating: 4.8
  },
  {
    id: 11,
    name: "Alcohol Antiséptico al 70%",
    category: "primeros-auxilios",
    categoryLabel: "Primeros Auxilios",
    description: "Desinfección de heridas y elementos de curación. Frasco x 700ml con sello hermético.",
    price: 6500,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Botiquín",
    iconType: "bottle",
    rating: 4.9
  },
  {
    id: 12,
    name: "Termómetro Digital Infrarrojo Rápido",
    category: "primeros-auxilios",
    categoryLabel: "Primeros Auxilios",
    description: "Lectura precisa en 1 segundo con pantalla LCD iluminada. Unidad con estuche rígido.",
    price: 32000,
    oldPrice: 42000,
    offer: true,
    prescription: false,
    badge: "-24% Dto",
    iconType: "device",
    rating: 4.7
  },
  {
    id: 13,
    name: "Curitas Adhesivas Antibacteriales",
    category: "primeros-auxilios",
    categoryLabel: "Primeros Auxilios",
    description: "Protección impermeable y transpirable para raspones y heridas leves. Caja x 40 und.",
    price: 9500,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Botiquín",
    iconType: "plaster",
    rating: 4.8
  },
  {
    id: 14,
    name: "Suero Oral Electrolitos Sabor a Coco",
    category: "salud-digestiva",
    categoryLabel: "Salud Digestiva",
    description: "Solución de rehidratación oral para pérdida de líquidos y deshidratación. Botella x 500ml.",
    price: 9800,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Rehidratación",
    iconType: "bottle",
    rating: 4.8
  },
  {
    id: 15,
    name: "Antiácido Suspensión con Hidróxido de Magnesio",
    category: "salud-digestiva",
    categoryLabel: "Salud Digestiva",
    description: "Alivio rápido de la acidez estomacal, reflujo e indigestión. Frasco x 360ml sabor menta.",
    price: 17500,
    oldPrice: 21000,
    offer: true,
    prescription: false,
    badge: "Alivio gástrico",
    iconType: "bottle",
    rating: 4.7
  },
  {
    id: 16,
    name: "Pañales Etapa 3 Hipoalergénicos",
    category: "bebes",
    categoryLabel: "Bebés y Maternidad",
    description: "Hasta 12 horas de absorción con cubierta ultrasuave y barreras antiderrames. Paquete x 50 und.",
    price: 52000,
    oldPrice: 62000,
    offer: true,
    prescription: false,
    badge: "Oferta",
    iconType: "diaper",
    rating: 4.9
  },
  {
    id: 17,
    name: "Crema Protectora Antipañalitis con Óxido de Zinc",
    category: "bebes",
    categoryLabel: "Bebés y Maternidad",
    description: "Crea una barrera protectora calmante contra la irritación de la pañalitis. Tubo x 110g.",
    price: 19900,
    oldPrice: null,
    offer: false,
    prescription: false,
    badge: "Hipoalergénico",
    iconType: "tube",
    rating: 4.9
  },
  {
    id: 18,
    name: "Amoxicilina 500 mg (Uso bajo prescripción)",
    category: "analgesicos",
    categoryLabel: "Medicamentos Especiales",
    description: "Antibiótico bactericida de amplio espectro. Requiere fórmula médica vigente. Caja x 21 cápsulas.",
    price: 21000,
    oldPrice: null,
    offer: false,
    prescription: true,
    badge: "Requiere Fórmula",
    iconType: "capsule",
    rating: 4.9
  }
];

// --- 2. Estado de la Aplicación ---
const state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  cart: [],
  filters: {
    searchQuery: "",
    category: "todos",
    onlyOffers: false,
    sortBy: "recommended"
  },
  freeShippingThreshold: 50000,
  shippingCost: 5500
};

// --- 3. Generador de Iconos SVG Específicos para Farmacia ---
function getProductSvg(type) {
  const icons = {
    pills: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#E8F5E9"/>
        <rect x="25" y="25" width="50" height="50" rx="14" fill="#A5D6A7"/>
        <rect x="35" y="32" width="30" height="15" rx="7.5" fill="#2E7D32"/>
        <rect x="35" y="53" width="30" height="15" rx="7.5" fill="#4CAF50"/>
        <line x1="50" y1="32" x2="50" y2="47" stroke="#ffffff" stroke-width="2"/>
        <line x1="50" y1="53" x2="50" y2="68" stroke="#ffffff" stroke-width="2"/>
      </svg>`,
    capsule: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#E0F2FE"/>
        <g transform="rotate(45 50 50)">
          <rect x="32" y="22" width="36" height="56" rx="18" fill="#0284C7"/>
          <path d="M32 40H68V60C68 69.9411 59.9411 78 50 78C40.0589 78 32 69.9411 32 60V40Z" fill="#38BDF8"/>
          <circle cx="44" cy="32" r="3" fill="#ffffff" opacity="0.6"/>
        </g>
      </svg>`,
    bottle: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#F0FDF4"/>
        <rect x="42" y="16" width="16" height="10" rx="3" fill="#047857"/>
        <rect x="30" y="26" width="40" height="58" rx="8" fill="#10B981"/>
        <rect x="34" y="40" width="32" height="30" rx="4" fill="#ffffff"/>
        <path d="M46 51H54M50 47V55" stroke="#047857" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    tube: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#FEF3C7"/>
        <g transform="rotate(25 50 50)">
          <polygon points="36,75 64,75 58,28 42,28" fill="#F59E0B"/>
          <rect x="40" y="20" width="20" height="8" rx="2" fill="#B45309"/>
          <rect x="42" y="44" width="16" height="18" rx="2" fill="#ffffff"/>
          <circle cx="50" cy="53" r="4" fill="#F59E0B"/>
        </g>
      </svg>`,
    jar: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#F3E8FF"/>
        <rect x="30" y="25" width="40" height="12" rx="4" fill="#7E22CE"/>
        <rect x="25" y="37" width="50" height="45" rx="8" fill="#A855F7"/>
        <rect x="32" y="48" width="36" height="22" rx="4" fill="#ffffff"/>
        <circle cx="50" cy="59" r="5" fill="#7E22CE"/>
      </svg>`,
    device: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#E2E8F0"/>
        <rect x="44" y="18" width="12" height="64" rx="6" fill="#0284C7"/>
        <rect x="47" y="36" width="6" height="18" rx="2" fill="#E0F2FE"/>
        <circle cx="50" cy="74" r="8" fill="#0369A1"/>
      </svg>`,
    plaster: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#FEE2E2"/>
        <g transform="rotate(30 50 50)">
          <rect x="24" y="38" width="52" height="24" rx="8" fill="#F87171"/>
          <rect x="42" y="38" width="16" height="24" fill="#ffffff"/>
          <circle cx="50" cy="50" r="3" fill="#DC2626"/>
        </g>
      </svg>`,
    diaper: `
      <svg class="product-card__visual" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="20" fill="#ECFDF5"/>
        <path d="M26 35C26 30 35 28 50 28C65 28 74 30 74 35V45C74 65 60 76 50 76C40 76 26 65 26 45V35Z" fill="#34D399"/>
        <path d="M30 38H70" stroke="#ffffff" stroke-width="4" stroke-dasharray="4 4"/>
      </svg>`
  };
  return icons[type] || icons.pills;
}

// --- 4. Funciones de Utilidad y Formato ---
/**
 * Formatea un valor numérico a Pesos Colombianos (COP)
 * Ejemplo: 18200 -> "$ 18.200"
 */
function formatCOP(amount) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace("COP", "").trim();
}

/**
 * Normaliza cadenas de texto para búsqueda insensible a acentos
 */
function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// --- 5. Lógica del Catálogo (Filtros, Búsqueda y Ordenamiento) ---
function applyFiltersAndSorting() {
  const query = normalizeText(state.filters.searchQuery.trim());
  const category = state.filters.category;
  const onlyOffers = state.filters.onlyOffers;
  const sortBy = state.filters.sortBy;

  // Filtrado
  let result = state.products.filter(product => {
    // 1. Filtro de búsqueda
    const matchesQuery =
      !query ||
      normalizeText(product.name).includes(query) ||
      normalizeText(product.categoryLabel).includes(query) ||
      normalizeText(product.description).includes(query);

    // 2. Filtro de categoría
    const matchesCategory =
      category === "todos" || product.category === category;

    // 3. Filtro de ofertas
    const matchesOffers = !onlyOffers || product.offer === true;

    return matchesQuery && matchesCategory && matchesOffers;
  });

  // Ordenamiento
  result.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "recommended":
      default:
        // Prioriza ofertas y calificaciones
        return (b.offer ? 1 : 0) - (a.offer ? 1 : 0) || b.rating - a.rating;
    }
  });

  state.filteredProducts = result;
  renderProducts();
}

// --- 6. Renderizado de Productos ---
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countDisplay = document.getElementById("resultsCount");
  if (!grid) return;

  const total = state.filteredProducts.length;
  if (countDisplay) {
    countDisplay.innerHTML = `Mostrando <strong>${total}</strong> ${total === 1 ? 'producto' : 'productos'}`;
  }

  // Si no hay productos, mostrar Estado Vacío
  if (total === 0) {
    grid.innerHTML = `
      <div class="empty-state" role="status" aria-live="polite">
        <div class="empty-state__icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h3 class="empty-state__title">No encontramos productos coincidentes</h3>
        <p class="empty-state__text">Intenta ajustar tu búsqueda, cambiar de categoría o quitar el filtro de ofertas.</p>
        <button type="button" class="btn btn--primary" id="btnResetFilters">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          Restablecer filtros y ver todos
        </button>
      </div>
    `;

    document.getElementById("btnResetFilters")?.addEventListener("click", resetAllFilters);
    return;
  }

  // Renderizado de tarjetas de producto
  grid.innerHTML = state.filteredProducts.map(product => {
    const isOffer = product.offer && product.oldPrice;
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card__badges">
          ${isOffer ? `<span class="badge badge--offer">${product.badge || 'Oferta'}</span>` : ''}
          ${product.prescription ? `<span class="badge badge--rx">Fórmula Médica</span>` : ''}
          ${product.price >= 45000 ? `<span class="badge badge--free-delivery">Envío Gratis</span>` : ''}
        </div>

        <div class="product-card__media">
          ${getProductSvg(product.iconType)}
        </div>

        <span class="product-card__category">${product.categoryLabel}</span>
        <h3 class="product-card__title" title="${product.name}">${product.name}</h3>
        <p class="product-card__desc">${product.description}</p>

        <div class="product-card__pricing">
          <span class="product-card__price">${formatCOP(product.price)}</span>
          ${isOffer ? `<span class="product-card__old-price">${formatCOP(product.oldPrice)}</span>` : ''}
        </div>

        <button 
          type="button" 
          class="product-card__btn js-add-to-cart" 
          data-id="${product.id}"
          aria-label="Agregar ${product.name} al carrito"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Agregar al carrito
        </button>
      </article>
    `;
  }).join("");

  // Enlazar eventos de botones agregar
  grid.querySelectorAll(".js-add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.dataset.id, 10);
      addToCart(productId);
    });
  });
}

// --- 7. Lógica del Carrito de Compras ---
function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      quantity: 1
    });
  }

  showToast(`Agregaste "${product.name}" al carrito`, "success");
  updateCartUI();
  animateCartBadge();
}

function updateItemQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  const item = state.cart[itemIndex];
  const newQty = item.quantity + delta;

  if (newQty <= 0) {
    state.cart.splice(itemIndex, 1);
    showToast(`Eliminaste "${item.name}" del carrito`, "remove");
  } else {
    item.quantity = newQty;
  }

  updateCartUI();
}

function calculateCartTotals() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeShipping = subtotal >= state.freeShippingThreshold || subtotal === 0;
  const shipping = isFreeShipping ? 0 : state.shippingCost;
  const total = subtotal + shipping;

  return {
    totalItems,
    subtotal,
    shipping,
    isFreeShipping,
    total
  };
}

function updateCartUI() {
  const { totalItems, subtotal, shipping, isFreeShipping, total } = calculateCartTotals();

  // Actualizar badges y etiquetas de la barra superior / header
  const badge = document.getElementById("cartCountBadge");
  const totalHeader = document.getElementById("cartHeaderTotal");
  const drawerCount = document.getElementById("cartDrawerCount");
  
  if (badge) badge.textContent = totalItems;
  if (totalHeader) totalHeader.textContent = formatCOP(subtotal);
  if (drawerCount) drawerCount.textContent = `(${totalItems})`;

  // Actualizar cuerpo del carrito
  const cartBody = document.getElementById("cartDrawerBody");
  const cartFooter = document.getElementById("cartDrawerFooter");
  if (!cartBody || !cartFooter) return;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h4 class="cart-empty__title">Tu carrito está vacío</h4>
        <p class="cart-empty__text">Explora nuestro catálogo y agrega los productos de salud y bienestar que necesitas.</p>
        <button type="button" class="btn btn--primary" id="btnExploreFromCart">
          Explorar productos
        </button>
      </div>
    `;
    cartFooter.style.display = "none";

    document.getElementById("btnExploreFromCart")?.addEventListener("click", closeCart);
    return;
  }

  // Renderizar ítems con controles de incremento y decremento
  cartFooter.style.display = "block";
  cartBody.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__media">
        ${getProductSvg(item.iconType)}
      </div>
      <div class="cart-item__details">
        <div class="cart-item__name" title="${item.name}">${item.name}</div>
        <div class="cart-item__price">${formatCOP(item.price)} c/u</div>
        <div class="cart-item__controls">
          <button 
            type="button" 
            class="qty-btn js-qty-minus" 
            data-id="${item.id}"
            aria-label="Disminuir una unidad de ${item.name}"
          >−</button>
          <span class="qty-display" aria-label="Cantidad">${item.quantity}</span>
          <button 
            type="button" 
            class="qty-btn js-qty-plus" 
            data-id="${item.id}"
            aria-label="Aumentar una unidad de ${item.name}"
          >+</button>
        </div>
      </div>
      <div class="cart-item__subtotal">
        ${formatCOP(item.price * item.quantity)}
      </div>
    </div>
  `).join("");

  // Actualizar totales en el pie del carrito
  const subtotalDisplay = document.getElementById("cartSubtotalDisplay");
  const shippingDisplay = document.getElementById("cartShippingDisplay");
  const totalDisplay = document.getElementById("cartTotalDisplay");
  const freeShippingAlert = document.getElementById("cartFreeShippingAlert");

  if (subtotalDisplay) subtotalDisplay.textContent = formatCOP(subtotal);
  if (shippingDisplay) shippingDisplay.textContent = isFreeShipping ? "¡Gratis!" : formatCOP(shipping);
  if (totalDisplay) totalDisplay.textContent = formatCOP(total);

  if (freeShippingAlert) {
    if (isFreeShipping) {
      freeShippingAlert.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>¡Felicitaciones! Calificas para <strong>Envío Gratis</strong> en tu zona.</span>
      `;
    } else {
      const remaining = state.freeShippingThreshold - subtotal;
      freeShippingAlert.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Agrega <strong>${formatCOP(remaining)}</strong> más para obtener <strong>Envío Gratis</strong>.</span>
      `;
    }
  }

  // Event listeners para controles de cantidad
  cartBody.querySelectorAll(".js-qty-plus").forEach(btn => {
    btn.addEventListener("click", () => {
      updateItemQuantity(parseInt(btn.dataset.id, 10), 1);
    });
  });

  cartBody.querySelectorAll(".js-qty-minus").forEach(btn => {
    btn.addEventListener("click", () => {
      updateItemQuantity(parseInt(btn.dataset.id, 10), -1);
    });
  });
}

// --- 8. Gestión del Drawer (Abrir / Cerrar Carrito) ---
function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  drawer.classList.add("is-active");
  overlay.classList.add("is-active");
  document.body.classList.add("cart-open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("cartCloseBtn")?.focus();
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  drawer.classList.remove("is-active");
  overlay.classList.remove("is-active");
  document.body.classList.remove("cart-open");
  drawer.setAttribute("aria-hidden", "true");
}

function animateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  if (!badge) return;
  badge.classList.remove("animate-pop");
  void badge.offsetWidth; // Trigger reflow
  badge.classList.add("animate-pop");
}

// --- 9. Modal Demostrativo de Finalización de Pedido ---
function openDemoCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío. Agrega productos primero.", "remove");
    return;
  }

  const modal = document.getElementById("demoModal");
  const ticket = document.getElementById("demoModalTicket");
  if (!modal) return;

  const { totalItems, subtotal, shipping, isFreeShipping, total } = calculateCartTotals();

  // Generar desglose en ticket
  if (ticket) {
    ticket.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 0.5rem; color: var(--primary-800);">Resumen del Pedido Simulado (${totalItems} unidades):</div>
      <ul style="margin-bottom: 0.75rem; padding-left: 1.25rem; list-style: disc;">
        ${state.cart.map(i => `<li>${i.quantity}x ${i.name} — <strong>${formatCOP(i.price * i.quantity)}</strong></li>`).join("")}
      </ul>
      <div style="display: flex; justify-content: space-between; border-top: 1px dashed var(--border-medium); padding-top: 0.4rem;">
        <span>Subtotal:</span> <strong>${formatCOP(subtotal)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>Envío:</span> <strong>${isFreeShipping ? 'Gratis' : formatCOP(shipping)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 1rem; font-weight: 800; color: var(--primary-700); margin-top: 0.4rem;">
        <span>Total Estimado:</span> <span>${formatCOP(total)} COP</span>
      </div>
    `;
  }

  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
}

function closeDemoCheckoutModal() {
  const modal = document.getElementById("demoModal");
  if (!modal) return;
  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
}

// --- 10. Sistema de Notificaciones Toast ---
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === 'remove' ? 'toast--remove' : ''}`;
  toast.setAttribute("role", "alert");
  toast.innerHTML = `
    <div class="toast__icon">
      ${type === 'remove' ? `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      ` : `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `}
    </div>
    <div class="toast__content">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(1rem)";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// --- 11. Limpieza y Reseteo de Filtros ---
function resetAllFilters() {
  state.filters.searchQuery = "";
  state.filters.category = "todos";
  state.filters.onlyOffers = false;
  state.filters.sortBy = "recommended";

  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const sortSelect = document.getElementById("sortSelect");
  const offerToggle = document.getElementById("offerFilterToggle");

  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.remove("is-visible");
  if (sortSelect) sortSelect.value = "recommended";
  if (offerToggle) offerToggle.checked = false;

  // Actualizar botones de categoría activa
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.category === "todos");
  });

  applyFiltersAndSorting();
}

// --- 12. Inicialización y Vinculación de Eventos ---
document.addEventListener("DOMContentLoaded", () => {
  // Elementos DOM principales
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const offerFilterToggle = document.getElementById("offerFilterToggle");
  const sortSelect = document.getElementById("sortSelect");
  const cartTrigger = document.getElementById("cartTrigger");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartOverlay = document.getElementById("cartOverlay");
  const checkoutBtn = document.getElementById("btnCheckout");
  const closeDemoModalBtn = document.getElementById("closeDemoModalBtn");
  const okDemoModalBtn = document.getElementById("okDemoModalBtn");
  const demoModal = document.getElementById("demoModal");

  // 1. Evento de Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle("is-visible", e.target.value.length > 0);
      }
      applyFiltersAndSorting();
    });
  }

  // 2. Botón para limpiar campo de búsqueda
  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.filters.searchQuery = "";
      searchClearBtn.classList.remove("is-visible");
      searchInput.focus();
      applyFiltersAndSorting();
    });
  }

  // 3. Filtro por Categorías
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.filters.category = btn.dataset.category || "todos";
      applyFiltersAndSorting();
    });
  });

  // 4. Filtro Toggle de Ofertas
  if (offerFilterToggle) {
    offerFilterToggle.addEventListener("change", (e) => {
      state.filters.onlyOffers = e.target.checked;
      applyFiltersAndSorting();
    });
  }

  // Enlace rápido a ofertas desde la barra de navegación
  const navOfferLink = document.querySelector(".nav-bar__link--offer");
  if (navOfferLink) {
    navOfferLink.addEventListener("click", () => {
      if (offerFilterToggle) {
        offerFilterToggle.checked = true;
        state.filters.onlyOffers = true;
        applyFiltersAndSorting();
      }
    });
  }

  // 5. Selector de Ordenamiento
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.filters.sortBy = e.target.value;
      applyFiltersAndSorting();
    });
  }

  // 6. Apertura y Cierre del Carrito
  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // 7. Botón Continuar Pedido (Aviso Demostrativo)
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      openDemoCheckoutModal();
    });
  }

  if (closeDemoModalBtn) closeDemoModalBtn.addEventListener("click", closeDemoCheckoutModal);
  if (okDemoModalBtn) okDemoModalBtn.addEventListener("click", closeDemoCheckoutModal);

  if (demoModal) {
    demoModal.addEventListener("click", (e) => {
      if (e.target === demoModal) closeDemoCheckoutModal();
    });
  }

  // 8. Accesibilidad de teclado: tecla Escape para cerrar modales y drawers
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeDemoCheckoutModal();
    }
  });

  // Render inicial
  applyFiltersAndSorting();
  updateCartUI();
});
