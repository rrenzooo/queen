const products = [
  {
    id: "camisa-siena",
    name: "Camisa Siena",
    subtitle: "Poplin de algodón · Crudo",
    price: 1990,
    tag: "MÁS ELEGIDO",
    rarity: "everyday",
    category: "camisas",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85",
    alt: "Camisa blanca de algodón de corte relajado",
  },
  {
    id: "vestido-luna",
    name: "Vestido Luna",
    subtitle: "Lino liviano · Chocolate",
    price: 2790,
    tag: "NUEVO",
    rarity: "special",
    category: "vestidos",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
    alt: "Vestido de temporada en tono chocolate",
  },
  {
    id: "blazer-amelia",
    name: "Blazer Amelia",
    subtitle: "Sastrero · Arena",
    price: 3490,
    tag: "",
    rarity: "special",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
    alt: "Blazer sastrero de tono neutro",
  },
  {
    id: "top-mora",
    name: "Top Mora",
    subtitle: "Tejido suave · Negro",
    price: 1490,
    tag: "ÚLTIMAS UNIDADES",
    rarity: "everyday",
    category: "tejidos",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85",
    alt: "Top negro de tejido suave",
  },
  {
    id: "tejido-nora",
    name: "Tejido Nora",
    subtitle: "Punto liviano · Avena",
    price: 2290,
    tag: "NUEVO",
    rarity: "everyday",
    category: "tejidos",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    alt: "Prenda de punto liviano en tono avena",
  },
  {
    id: "camisa-iris",
    name: "Camisa Iris",
    subtitle: "Algodón texturado · Celeste",
    price: 1890,
    tag: "",
    rarity: "everyday",
    category: "camisas",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    alt: "Camisa de algodón celeste",
  },
  {
    id: "pantalon-isa",
    name: "Pantalón Isa",
    subtitle: "Sastrero recto · Grafito",
    price: 2990,
    tag: "ESENCIAL",
    rarity: "special",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    alt: "Pantalón sastrero de corte recto",
  },
  {
    id: "vestido-olivia",
    name: "Vestido Olivia",
    subtitle: "Gasa suave · Estampado",
    price: 3190,
    tag: "",
    rarity: "special",
    category: "vestidos",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    alt: "Vestido estampado de silueta fluida",
  },
  {
    id: "blusa-vera",
    name: "Blusa Vera",
    subtitle: "Viscosa liviana · Marfil",
    price: 1790,
    tag: "ESENCIAL",
    rarity: "everyday",
    category: "camisas",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
    alt: "Blusa liviana en tono marfil",
  },
  {
    id: "remera-alba",
    name: "Remera Alba",
    subtitle: "Algodón pima · Blanco",
    price: 1490,
    tag: "",
    rarity: "everyday",
    category: "tejidos",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    alt: "Remera blanca de algodón",
  },
  {
    id: "pollera-roma",
    name: "Pollera Roma",
    subtitle: "Corte evasé · Negro",
    price: 2290,
    tag: "NUEVO",
    rarity: "everyday",
    category: "vestidos",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    alt: "Look de temporada con falda negra",
  },
  {
    id: "cardigan-mila",
    name: "Cardigan Mila",
    subtitle: "Punto trenzado · Avena",
    price: 2490,
    tag: "",
    rarity: "everyday",
    category: "tejidos",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
    alt: "Cardigan tejido en tono avena",
  },
  {
    id: "chaleco-alma",
    name: "Chaleco Alma",
    subtitle: "Sastrero liviano · Tostado",
    price: 2390,
    tag: "ESENCIAL",
    rarity: "everyday",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    alt: "Chaleco sastrero en tonos tierra",
  },
  {
    id: "camisa-vera",
    name: "Camisa Vera",
    subtitle: "Lino lavado · Rayas",
    price: 2190,
    tag: "",
    rarity: "everyday",
    category: "camisas",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    alt: "Camisa de lino a rayas",
  },
  {
    id: "top-cielo",
    name: "Top Cielo",
    subtitle: "Ribb de algodón · Azul",
    price: 1590,
    tag: "NUEVO",
    rarity: "everyday",
    category: "tejidos",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85",
    alt: "Top de algodón en tono azul",
  },
  {
    id: "pantalon-sol",
    name: "Pantalón Sol",
    subtitle: "Wide leg · Arena",
    price: 2690,
    tag: "",
    rarity: "everyday",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    alt: "Pantalón amplio de tono arena",
  },
  {
    id: "vestido-celeste",
    name: "Vestido Celeste",
    subtitle: "Lino premium · Azul profundo",
    price: 3590,
    tag: "PIEZA ESPECIAL",
    rarity: "special",
    category: "vestidos",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    alt: "Vestido elegante de temporada",
  },
  {
    id: "saco-eva",
    name: "Saco Eva",
    subtitle: "Sastrería italiana · Piedra",
    price: 3990,
    tag: "PIEZA ESPECIAL",
    rarity: "special",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
    alt: "Saco sastrero en tono piedra",
  },
  {
    id: "trench-valentina",
    name: "Trench Valentina",
    subtitle: "Edición limitada · Camel",
    price: 5590,
    tag: "EDICIÓN LIMITADA",
    rarity: "limited",
    category: "sastreria",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
    alt: "Trench camel de edición limitada",
  },
  {
    id: "vestido-gala",
    name: "Vestido Gala",
    subtitle: "Seda estampada · Edición limitada",
    price: 5990,
    tag: "EDICIÓN LIMITADA",
    rarity: "limited",
    category: "vestidos",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    alt: "Vestido estampado de edición limitada",
  },
];

const inspirationLooks = {
  camisas: [
    { image: "photo-1598033129183-c4f50c736f10", alt: "Camisa clara combinada en un look relajado", title: "Relajada, todos los días", detail: "Lino, luz suave y tiempo para vos." },
    { image: "photo-1483985988355-763728e1935b", alt: "Amigas compartiendo un momento y looks cotidianos", title: "A tu propio ritmo", detail: "Comodidad para salir y encontrarte." },
    { image: "photo-1529139574466-a303027c1d8b", alt: "Look urbano de inspiración contemporánea", title: "Un toque de ciudad", detail: "Capas simples, personalidad propia." },
  ],
  vestidos: [
    { image: "photo-1539109136881-3be0616acf4b", alt: "Look femenino de inspiración elegante", title: "Plan de día", detail: "Una silueta simple que lo cambia todo." },
    { image: "photo-1566174053879-31528523f8ae", alt: "Vestido fluido en un look especial", title: "Un momento para vos", detail: "Movimiento y detalles sin esfuerzo." },
    { image: "photo-1515886657613-9f3515b0c78f", alt: "Look de moda con accesorios discretos", title: "Después de las seis", detail: "Sumá accesorios y hacelo tuyo." },
  ],
  sastreria: [
    { image: "photo-1591047139829-d91aecb6caea", alt: "Look sastrero moderno en tonos neutros", title: "Clásicos nuevos", detail: "Estructura relajada, actitud propia." },
    { image: "photo-1525507119028-ed4c629a60a3", alt: "Look de moda urbano con prendas sastreras", title: "De acá para allá", detail: "Una capa liviana para todo el día." },
    { image: "photo-1594633312681-425c7b97ccd1", alt: "Pantalón de corte recto en un look versátil", title: "La base perfecta", detail: "Neutros que combinan con todo." },
  ],
  tejidos: [
    { image: "photo-1576566588028-4147f3842f27", alt: "Prendas tejidas suaves en tonos naturales", title: "Días tranquilos", detail: "Texturas suaves y cero apuro." },
    { image: "photo-1551163943-3f6a855d1153", alt: "Prenda de punto en un look cotidiano", title: "Un favorito de siempre", detail: "Ese tejido que va con vos." },
    { image: "photo-1551028719-00167b16eac5", alt: "Look de capas informales con tejido", title: "Un poco de abrigo", detail: "Capas fáciles para hacer a tu manera." },
  ],
};

const slides = [
  {
    kicker: "PRIMAVERA · 2026",
    title: "Un clásico<br>con otra mirada.",
    description: "Texturas que abrazan. Siluetas que hablan por vos.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=90",
    position: "center 37%",
  },
  {
    kicker: "HECHO PARA ACOMPAÑARTE",
    title: "Tu forma de ser,<br>tu forma de vestir.",
    description: "Piezas atemporales para días que son todo tuyos.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=90",
    position: "center 38%",
  },
  {
    kicker: "NUEVA TEMPORADA · QUEEN",
    title: "Lo simple<br>se vuelve especial.",
    description: "Una colección pensada para hacerla parte de tu historia.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=90",
    position: "center 35%",
  },
];

const cart = new Map();
const boxTiers = {
  essential: { price: 2490, count: 2 },
  signature: { price: 3990, count: 3 },
};
const localAmount = new Intl.NumberFormat("es-UY", {
  maximumFractionDigits: 0,
});
const formatCurrency = (amount) => `$U ${localAmount.format(amount)}`;
const freeShippingThreshold = 5000;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const stylistHistory = [];
let stylistBusy = false;
const adminStorageKeys = {
  products: "queen-admin-products-v1",
  orders: "queen-admin-orders-v1",
};
const productModelDatabaseName = "queen-product-models-v1";
const productModelStoreName = "models";
const maxProductModelBytes = 25 * 1024 * 1024;
const productModelIds = new Set();
let productModelDatabasePromise;

function readAdminStorage(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error(`No se pudo leer el almacenamiento de administración (${key}).`, error);
    return null;
  }
}

function saveAdminStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`No se pudo guardar el almacenamiento de administración (${key}).`, error);
    showToast("No pudimos guardar el cambio en este navegador.");
    return false;
  }
}

function openProductModelDatabase() {
  if (productModelDatabasePromise) return productModelDatabasePromise;
  if (!("indexedDB" in window)) {
    return Promise.reject(new Error("Este navegador no permite guardar modelos 3D localmente."));
  }
  productModelDatabasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(productModelDatabaseName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(productModelStoreName)) {
        request.result.createObjectStore(productModelStoreName, { keyPath: "productId" });
      }
    };
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
    request.onerror = () => {
      productModelDatabasePromise = null;
      reject(request.error || new Error("No pudimos abrir el almacenamiento de modelos 3D."));
    };
    request.onblocked = () => {
      productModelDatabasePromise = null;
      reject(new Error("Cerrá otras pestañas de Queen y volvé a intentar."));
    };
  });
  return productModelDatabasePromise;
}

async function loadProductModelIds() {
  const database = await openProductModelDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(productModelStoreName, "readonly");
    const request = transaction.objectStore(productModelStoreName).getAllKeys();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("No pudimos leer los modelos 3D guardados."));
    transaction.onabort = () => reject(transaction.error || new Error("No pudimos leer los modelos 3D guardados."));
  });
}

async function getProductModel(productId) {
  const database = await openProductModelDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(productModelStoreName, "readonly");
    const request = transaction.objectStore(productModelStoreName).get(productId);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("No pudimos abrir el modelo 3D."));
    transaction.onabort = () => reject(transaction.error || new Error("No pudimos abrir el modelo 3D."));
  });
}

async function saveProductModel(productId, file) {
  const database = await openProductModelDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(productModelStoreName, "readwrite");
    transaction.objectStore(productModelStoreName).put({
      productId,
      fileName: file.name,
      blob: file,
      updatedAt: new Date().toISOString(),
    });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error("No pudimos guardar el archivo 3D."));
    transaction.onabort = () => reject(transaction.error || new Error("No pudimos guardar el archivo 3D."));
  });
}

async function deleteProductModel(productId) {
  const database = await openProductModelDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(productModelStoreName, "readwrite");
    transaction.objectStore(productModelStoreName).delete(productId);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error("No pudimos quitar el modelo 3D."));
    transaction.onabort = () => reject(transaction.error || new Error("No pudimos quitar el modelo 3D."));
  });
}

async function validateGlbFile(file) {
  if (!file.name.toLocaleLowerCase("es").endsWith(".glb")) {
    throw new Error("Elegí un archivo .glb.");
  }
  if (file.size < 20 || file.size > maxProductModelBytes) {
    throw new Error("El archivo debe pesar menos de 25 MB y ser un GLB válido.");
  }
  const header = new DataView(await file.slice(0, 12).arrayBuffer());
  if (
    header.getUint32(0, true) !== 0x46546c67 ||
    header.getUint32(4, true) !== 2 ||
    header.getUint32(8, true) !== file.size
  ) {
    throw new Error("El archivo no parece ser un modelo GLB 2.0 válido.");
  }
}

async function handleProductModelUpload(input) {
  const product = products.find((item) => item.id === input.dataset.adminModelUpload);
  const file = input.files[0];
  if (!product || !file) return;
  input.disabled = true;
  try {
    await validateGlbFile(file);
    await saveProductModel(product.id, file);
    productModelIds.add(product.id);
    refreshPublicCatalog();
    renderAdminProducts();
    showToast(`Modelo 3D de ${product.name} guardado en este navegador.`);
  } catch (error) {
    console.error("No se pudo guardar el modelo 3D del producto.", error);
    showToast(error.message || "No pudimos guardar el modelo 3D.");
  } finally {
    input.value = "";
    input.disabled = false;
  }
}

async function removeProductModel(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || !window.confirm(`¿Quitar el modelo 3D de ${product.name}?`)) return;
  try {
    await deleteProductModel(productId);
    productModelIds.delete(productId);
    refreshPublicCatalog();
    renderAdminProducts();
    showToast(`Quitamos el modelo 3D de ${product.name}.`);
  } catch (error) {
    console.error("No se pudo quitar el modelo 3D del producto.", error);
    showToast(error.message || "No pudimos quitar el modelo 3D.");
  }
}

async function openProductModel(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (!customElements.get("model-viewer")) {
    throw new Error("El visor 3D no está disponible. Revisá la conexión a internet e intentá de nuevo.");
  }
  const record = await getProductModel(productId);
  if (!record || !(record.blob instanceof Blob)) {
    productModelIds.delete(productId);
    refreshPublicCatalog();
    renderAdminProducts();
    throw new Error("No encontramos el archivo 3D guardado para esta prenda.");
  }
  const dialog = $("[data-model-viewer-dialog]");
  const viewer = $("[data-model-viewer]", dialog);
  if (dialog.open) dialog.close();
  releaseProductModelViewer();
  const objectUrl = URL.createObjectURL(record.blob);
  viewer.dataset.objectUrl = objectUrl;
  viewer.src = objectUrl;
  viewer.alt = `Modelo 3D de ${product.name}`;
  $("[data-model-viewer-title]", dialog).textContent = product.name;
  dialog.showModal();
}

function releaseProductModelViewer() {
  const viewer = $("[data-model-viewer]");
  const objectUrl = viewer.dataset.objectUrl;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  delete viewer.dataset.objectUrl;
  viewer.removeAttribute("src");
}

function isValidProduct(product) {
  return product &&
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.subtitle === "string" &&
    typeof product.image === "string" &&
    typeof product.alt === "string" &&
    Number.isFinite(product.price) &&
    Number.isInteger(product.stock) &&
    ["camisas", "vestidos", "sastreria", "tejidos"].includes(product.category) &&
    ["everyday", "special", "limited"].includes(product.rarity);
}

function isValidOrder(order) {
  return order &&
    typeof order.id === "string" &&
    typeof order.createdAt === "string" &&
    Number.isFinite(Date.parse(order.createdAt)) &&
    Number.isFinite(order.total) &&
    Array.isArray(order.items) &&
    ["Pendiente", "Preparando", "Enviado", "Entregado"].includes(order.status);
}

const originalProducts = products.map((product, index) => ({
  ...product,
  stock: 8 + ((index * 7) % 23),
  active: true,
}));
products.splice(0, products.length, ...originalProducts);
const storedProducts = readAdminStorage(adminStorageKeys.products);

const sampleOrders = [
  { id: "Q-2048", daysAgo: 0, total: 4780, status: "Pendiente", items: ["Camisa Siena", "Vestido Luna"] },
  { id: "Q-2047", daysAgo: 1, total: 3990, status: "Preparando", items: ["Caja Queen Signature"] },
  { id: "Q-2046", daysAgo: 3, total: 3490, status: "Enviado", items: ["Blazer Amelia"] },
  { id: "Q-2045", daysAgo: 5, total: 4880, status: "Entregado", items: ["Pantalón Isa", "Camisa Iris"] },
].map((order) => {
  const createdAt = new Date();
  createdAt.setDate(createdAt.getDate() - order.daysAgo);
  return {
    id: order.id,
    createdAt: createdAt.toISOString(),
    total: order.total,
    status: order.status,
    items: order.items,
    source: "sample",
  };
});
const storedOrders = readAdminStorage(adminStorageKeys.orders);
const adminCurrencyMigrationKey = "queen-admin-currency-migration-uyu-v1";
let adminOrders = sampleOrders;

function migrateLegacyAdminPrices() {
  let migrationCompleted;
  try {
    migrationCompleted = localStorage.getItem(adminCurrencyMigrationKey) === "done";
  } catch (error) {
    console.error("No se pudo revisar la migración de moneda del panel.", error);
    showToast("No pudimos comprobar la moneda de los datos guardados.");
    return;
  }

  if (migrationCompleted) {
    if (Array.isArray(storedProducts)) {
      const validProducts = storedProducts
        .filter(isValidProduct)
        .map((product) => ({ ...product, active: product.active !== false, tag: product.tag || "" }));
      if (validProducts.length !== storedProducts.length) {
        console.error("Se ignoraron productos inválidos guardados en el navegador.");
      }
      products.splice(0, products.length, ...validProducts);
    }
    if (Array.isArray(storedOrders)) {
      adminOrders = storedOrders.filter(isValidOrder);
      if (adminOrders.length !== storedOrders.length) {
        console.error("Se ignoraron pedidos inválidos guardados en el navegador.");
      }
    }
    return;
  }

  if (!Array.isArray(storedProducts) && !Array.isArray(storedOrders)) {
    try {
      localStorage.setItem(adminCurrencyMigrationKey, "done");
    } catch (error) {
      console.error("No se pudo guardar la versión de moneda del panel.", error);
      showToast("No pudimos guardar la configuración de moneda.");
    }
    return;
  }

  const legacyDefaultPrices = {
    "camisa-siena": 58900,
    "vestido-luna": 74900,
    "blazer-amelia": 89900,
    "top-mora": 42900,
    "tejido-nora": 63900,
    "camisa-iris": 54900,
    "pantalon-isa": 78900,
    "vestido-olivia": 82900,
    "blusa-vera": 48900,
    "remera-alba": 42900,
    "pollera-roma": 54900,
    "cardigan-mila": 67900,
    "chaleco-alma": 58900,
    "camisa-vera": 61900,
    "top-cielo": 45900,
    "pantalon-sol": 69900,
    "vestido-celeste": 89900,
    "saco-eva": 99900,
    "trench-valentina": 139900,
    "vestido-gala": 159900,
  };
  const newDefaultPrices = new Map(originalProducts.map((product) => [product.id, product.price]));
  // Legacy demo amounts are approximated at 40 ARS per UYU; backups preserve the originals.
  const convertLegacyAmount = (amount) => amount === 0 ? 0 : Math.round(amount / 40 / 10) * 10;
  const validStoredProducts = Array.isArray(storedProducts)
    ? storedProducts.filter(isValidProduct)
    : null;
  const validStoredOrders = Array.isArray(storedOrders)
    ? storedOrders.filter(isValidOrder)
    : null;
  const migratedProducts = validStoredProducts?.map((product) => ({
    ...product,
    price: product.price === legacyDefaultPrices[product.id]
      ? newDefaultPrices.get(product.id)
      : convertLegacyAmount(product.price),
  }));
  const migratedOrders = validStoredOrders?.map((order) => ({
    ...order,
    total: convertLegacyAmount(order.total),
  }));

  try {
    if (Array.isArray(storedProducts)) {
      if (!localStorage.getItem("queen-admin-products-ars-backup-v1")) {
        localStorage.setItem("queen-admin-products-ars-backup-v1", JSON.stringify(storedProducts));
      }
      localStorage.setItem(adminStorageKeys.products, JSON.stringify(migratedProducts));
      products.splice(0, products.length, ...migratedProducts.map((product) => ({
        ...product,
        active: product.active !== false,
        tag: product.tag || "",
      })));
    }
    if (Array.isArray(storedOrders)) {
      if (!localStorage.getItem("queen-admin-orders-ars-backup-v1")) {
        localStorage.setItem("queen-admin-orders-ars-backup-v1", JSON.stringify(storedOrders));
      }
      localStorage.setItem(adminStorageKeys.orders, JSON.stringify(migratedOrders));
      adminOrders = migratedOrders;
    }
    localStorage.setItem(adminCurrencyMigrationKey, "done");
    showToast("Adaptamos tus precios guardados a UYU como referencia. Revisalos en administración.");
  } catch (error) {
    console.error("No se pudieron adaptar los precios guardados a UYU.", error);
    showToast("No pudimos convertir todos los precios guardados. Revisalos en administración.");
    if (migratedProducts) products.splice(0, products.length, ...migratedProducts);
    if (migratedOrders) adminOrders = migratedOrders;
  }
}
let slideIndex = 0;
let slideTimer;
let toastTimer;
let revealObserver;
let catalogCategory = "all";
let catalogSort = "featured";
let catalogPrice = "all";
let productSearch = "";
let currentBoxTier = "essential";
let currentBoxResult = null;
let openingBox = false;
let loginMode = "customer";
let activeAdminPage = "overview";
let adminProductSearch = "";
let adminProductFilter = "all";
let adminOrderSearch = "";
let adminOrderFilter = "all";

migrateLegacyAdminPrices();

function observeReveals() {
  if (!revealObserver) return;
  $$(".reveal-on-scroll:not([data-reveal-observed])").forEach((element) => {
    element.dataset.revealObserved = "true";
    revealObserver.observe(element);
  });
}

function productCard(product, index, listName) {
  const sizeSelectId = `${listName}-size-${product.id}`;
  const stockLabel = product.stock === 0 ? "SIN STOCK" : product.stock <= 5 ? "ÚLTIMAS UNIDADES" : product.tag;
  const escapedId = escapeHTML(product.id);
  return `
    <article class="product-card reveal-on-scroll" style="animation-delay:${index * 70}ms">
      <div class="product-image-wrap">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.alt)}" loading="lazy">
        ${stockLabel ? `<span class="product-tag">${escapeHTML(stockLabel)}</span>` : ""}
        <button class="favorite-button" type="button" data-favorite="${escapedId}" aria-label="Guardar ${escapeHTML(product.name)} en favoritos" aria-pressed="false">♡</button>
      </div>
      <div class="product-info">
        <div class="product-name-line"><h3 class="product-name">${escapeHTML(product.name)}</h3><p class="product-price">${formatCurrency(product.price)}</p></div>
        <p class="product-subtitle">${escapeHTML(product.subtitle)}</p>
        <div class="product-action">
          <label class="sr-only" for="${sizeSelectId}">Talle para ${escapeHTML(product.name)}</label>
          <select id="${sizeSelectId}" aria-label="Elegir talle para ${escapeHTML(product.name)}">
            <option value="S">S</option><option value="M" selected>M</option><option value="L">L</option>
          </select>
          <button type="button" data-add-product="${escapedId}" ${product.stock === 0 ? "disabled" : ""}>${product.stock === 0 ? "Sin stock" : "Agregar al carrito"}</button>
        </div>
        <button class="inspiration-link" type="button" data-inspiration-product-link="${escapedId}">Ver ideas de look <span aria-hidden="true">↗</span></button>
        ${productModelIds.has(product.id) ? `<button class="inspiration-link product-model-link" type="button" data-view-product-model="${escapedId}">Ver prenda en 3D <span aria-hidden="true">↗</span></button>` : ""}
      </div>
    </article>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function isPublicProduct(product) {
  return product.active !== false;
}

function matchesSearch(product) {
  return `${product.name} ${product.subtitle} ${product.category}`
    .toLocaleLowerCase("es")
    .includes(productSearch.trim().toLocaleLowerCase("es"));
}

function renderProducts() {
  const featuredProducts = products.filter(isPublicProduct).slice(0, 4).filter(matchesSearch);
  $("[data-products]").innerHTML = featuredProducts.length
    ? featuredProducts.map((product, index) => productCard(product, index, "featured")).join("")
    : '<p class="no-results">No encontramos esa prenda. Probá con otra búsqueda.</p>';
  observeReveals();
}

function renderCatalog() {
  let visibleProducts = products.filter((product) => {
    if (!isPublicProduct(product)) return false;
    const matchesCategory = catalogCategory === "all" || product.category === catalogCategory;
    const matchesPrice =
      catalogPrice === "all" ||
      (catalogPrice === "under-2000" && product.price <= 2000) ||
      (catalogPrice === "under-3000" && product.price <= 3000) ||
      (catalogPrice === "over-3000" && product.price >= 3000);
    return matchesCategory && matchesPrice && matchesSearch(product);
  });

  if (catalogSort === "price-asc") visibleProducts.sort((a, b) => a.price - b.price);
  if (catalogSort === "price-desc") visibleProducts.sort((a, b) => b.price - a.price);
  if (catalogSort === "name") visibleProducts.sort((a, b) => a.name.localeCompare(b.name, "es"));

  $("[data-catalog-count]").textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "prenda" : "prendas"}`;
  $("[data-catalog-grid]").innerHTML = visibleProducts.length
    ? visibleProducts.map((product, index) => productCard(product, index, "catalog")).join("")
    : '<p class="no-results">No encontramos prendas con esos filtros. Probá otra combinación.</p>';
  observeReveals();
}

function renderInspiration(productId = $("[data-inspiration-product]").value) {
  const product = products.find((item) => item.id === productId && isPublicProduct(item)) || products.find(isPublicProduct);
  if (!product) {
    $("[data-inspiration-product]").innerHTML = "";
    $("[data-inspiration-label]").textContent = "No hay productos publicados";
    $("[data-inspiration-grid]").innerHTML = '<p class="no-results">Publicá un producto para ver ideas de look.</p>';
    return;
  }
  const looks = inspirationLooks[product.category];
  $("[data-inspiration-product]").value = product.id;
  $("[data-inspiration-label]").textContent = `Inspiración para ${product.name}`;
  $("[data-inspiration-grid]").innerHTML = looks
    .map(
      (look, index) => `
        <article class="inspiration-card reveal-on-scroll" style="animation-delay:${index * 80}ms">
          <div class="inspiration-image-wrap">
            <img src="https://images.unsplash.com/${look.image}?auto=format&fit=crop&w=800&q=85" alt="${look.alt}" loading="lazy" />
            <span class="inspiration-index">0${index + 1} / 03</span>
          </div>
          <div class="inspiration-card-copy">
            <div><p class="eyebrow">IDEA DE LOOK · ${escapeHTML(product.name.toLocaleUpperCase("es"))}</p><h3>${escapeHTML(look.title)}</h3></div>
            <p>${look.detail}</p>
          </div>
        </article>`,
    )
    .join("");
  observeReveals();
}

function setSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  const slide = slides[slideIndex];
  const image = $("[data-hero-image]");
  image.classList.add("changing");
  image.style.backgroundImage = `url("${slide.image}")`;
  image.style.backgroundPosition = slide.position;
  image.style.animation = "none";
  void image.offsetWidth;
  image.style.animation = "";
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => image.classList.remove("changing")));
  $("[data-hero-kicker]").textContent = slide.kicker;
  $("[data-hero-title]").innerHTML = slide.title;
  $("[data-hero-description]").textContent = slide.description;
  $("[data-slide-current]").textContent = String(slideIndex + 1).padStart(2, "0");
  $$(".hero-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === slideIndex);
    dot.setAttribute("aria-current", dotIndex === slideIndex ? "true" : "false");
  });
}

function restartSlideTimer() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => setSlide(slideIndex + 1), 6500);
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setStylistOpen(open) {
  const panel = $("[data-stylist-panel]");
  $("[data-stylist-toggle]").setAttribute("aria-expanded", String(open));
  panel.hidden = !open;
  panel.setAttribute("aria-hidden", String(!open));
  if (open) $("#stylist-input").focus();
}

function appendStylistMessage(role, text) {
  const message = document.createElement("p");
  message.className = `stylist-message ${role}`;
  message.textContent = text;
  $("[data-stylist-messages]").append(message);
  message.scrollIntoView({ block: "nearest" });
}

async function checkStylistHealth() {
  const status = $("[data-stylist-status]");
  try {
    const response = await fetch("/api/health", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Estado del servidor: ${response.status}`);
    const health = await response.json();
    status.textContent = health.configured
      ? "Clave cargada en este servidor · probá una consulta."
      : "Agregá la clave de Gemini en server.py y reiniciá el servidor.";
    status.classList.toggle("ready", Boolean(health.configured));
  } catch (error) {
    console.error("No se pudo consultar el estado de Queen Stylist.", error);
    status.textContent = "Servidor de IA desconectado.";
    status.classList.remove("ready");
  }
}

async function sendStylistMessage(event) {
  event.preventDefault();
  if (stylistBusy) return;
  const input = $("#stylist-input");
  const message = input.value.trim();
  if (!message) return;

  appendStylistMessage("user", message);
  input.value = "";
  stylistBusy = true;
  const sendButton = $("[data-stylist-send]");
  const status = $("[data-stylist-status]");
  sendButton.disabled = true;
  status.textContent = "Queen está pensando...";

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch("/api/stylist", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        message,
        history: stylistHistory.slice(-8),
        products: products.filter((product) => isPublicProduct(product) && product.stock > 0).slice(0, 40).map((product) => ({
          name: product.name,
          description: product.subtitle,
          category: product.category,
          price: product.price,
          stock: product.stock,
        })),
      }),
      signal: controller.signal,
    });
    let result;
    try {
      result = await response.json();
    } catch (error) {
      throw new Error("El servidor devolvió una respuesta inválida.");
    }
    if (!response.ok) throw new Error(result.error || "No pudimos consultar a la asesora.");
    if (typeof result.reply !== "string" || !result.reply.trim()) {
      throw new Error("La asesora devolvió una respuesta vacía. Probá de nuevo.");
    }

    stylistHistory.push({ role: "user", content: message }, { role: "assistant", content: result.reply });
    if (stylistHistory.length > 8) stylistHistory.splice(0, stylistHistory.length - 8);
    appendStylistMessage("assistant", result.reply);
    status.textContent = "Lista para ayudarte · IA conectada";
    status.classList.add("ready");
  } catch (error) {
    const errorMessage = error.name === "AbortError"
      ? "La consulta está tardando demasiado. Intentá nuevamente en un momento."
      : error.message || "No pudimos conectar con Queen Stylist.";
    appendStylistMessage("error", errorMessage);
    status.textContent = "No se pudo completar la consulta.";
    status.classList.remove("ready");
    console.error("No se pudo enviar la consulta a Queen Stylist.", error);
  } finally {
    window.clearTimeout(timeoutId);
    stylistBusy = false;
    sendButton.disabled = false;
    input.focus();
  }
}

function openOverlay() {
  $("[data-overlay]").classList.add("open");
  document.body.classList.add("locked");
}

function closeOverlay() {
  $("[data-overlay]").classList.remove("open");
  $("[data-login-modal]").classList.remove("open");
  $("[data-checkout-modal]").classList.remove("open");
  $("[data-login-modal]").setAttribute("aria-hidden", "true");
  $("[data-checkout-modal]").setAttribute("aria-hidden", "true");
  if (!$(".cart-drawer").classList.contains("open")) document.body.classList.remove("locked");
}

function openCart() {
  closeOverlay();
  openOverlay();
  $(".cart-drawer").classList.add("open");
  $(".cart-drawer").setAttribute("aria-hidden", "false");
}

function closeCart() {
  $(".cart-drawer").classList.remove("open");
  $(".cart-drawer").setAttribute("aria-hidden", "true");
  if (!$(".modal.open")) document.body.classList.remove("locked");
  if (!$(".modal.open")) $("[data-overlay]").classList.remove("open");
}

function openModal(modal) {
  closeCart();
  openOverlay();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const firstInput = $("input", modal);
  if (firstInput) window.setTimeout(() => firstInput.focus(), 150);
}

function addToCart(productId, size) {
  const product = products.find((item) => item.id === productId);
  if (!product || !isPublicProduct(product) || product.stock < 1) {
    showToast("Esta prenda no está disponible en este momento.");
    return;
  }
  const key = `${productId}:${size}`;
  const existing = cart.get(key);
  if (existing && existing.quantity >= product.stock) {
    showToast("No quedan más unidades disponibles de esta prenda.");
    return;
  }
  if (existing) existing.quantity += 1;
  else cart.set(key, { product, size, quantity: 1 });
  renderCart();
  showToast(`${product.name} se agregó a tu carrito.`);
}

function updateQuantity(key, amount) {
  const item = cart.get(key);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart.delete(key);
  renderCart();
}

function renderCart() {
  const entries = [...cart.entries()];
  const count = entries.reduce((total, [, item]) => total + item.quantity, 0);
  const total = entries.reduce((sum, [, item]) => sum + item.product.price * item.quantity, 0);
  $(".cart-count").textContent = count;
  $("[data-cart-heading-count]").textContent = `(${count})`;
  $("[data-cart-subtotal]").textContent = formatCurrency(total);
  $("[data-checkout-total]").textContent = formatCurrency(total);
  $("[data-cart-footer]").classList.toggle("hidden", count === 0);
  $("[data-cart-empty]").classList.toggle("visible", count === 0);
  $("[data-shipping-message]").textContent =
    total >= freeShippingThreshold
      ? "¡Genial! Tu envío es gratis."
      : `¡Te faltan ${formatCurrency(freeShippingThreshold - total)} para el envío gratis!`;
  $("[data-shipping-progress]").style.width = `${Math.min((total / freeShippingThreshold) * 100, 100)}%`;

  const cartItems = $("[data-cart-items]");
  cartItems.innerHTML = entries
    .map(([key, item]) => {
      const boxDetails = item.product.mysteryBox
        ? `<p class="cart-box-contents">Empaque ${item.product.packageOptions.style} · Lazo ${item.product.packageOptions.ribbon}</p><p class="cart-box-contents">${item.product.packageOptions.sticker ? "Sticker Queen" : "Sin sticker"}</p>${item.product.packageOptions.dedication ? '<p class="cart-box-contents" data-cart-dedication></p>' : ""}`
        : "";
      return `
        <article class="cart-item">
          <img src="${item.product.image}" alt="${item.product.alt}">
          <div class="cart-item-details">
            <h3>${item.product.name}</h3><p>Talle ${item.size}${item.product.mysteryBox ? ` · ${item.product.contents.length} prendas sorpresa` : ""}</p>
            ${item.product.mysteryBox ? `<p class="cart-box-contents">${item.product.contents.map((product) => product.name).join(" · ")}</p>` : ""}
            ${boxDetails}
            <div class="quantity-control">
              <button type="button" data-quantity="${key}" data-change="-1" aria-label="Quitar una unidad">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-quantity="${key}" data-change="1" aria-label="Agregar una unidad">+</button>
            </div>
          </div>
          <div class="cart-item-side"><strong>${formatCurrency(item.product.price * item.quantity)}</strong><button class="remove-item" type="button" data-remove="${key}">Quitar</button></div>
        </article>`;
    })
    .join("");
  entries.forEach(([, item], index) => {
    if (!item.product.mysteryBox || !item.product.packageOptions.dedication) return;
    $("[data-cart-dedication]", $$(".cart-item", cartItems)[index]).textContent = `Tarjeta: ${item.product.packageOptions.dedication}`;
  });
}

function closeSearch() {
  $("[data-search-bar]").classList.remove("open");
}

function updateBoxStyle() {
  const scene = $("[data-box-scene]");
  scene.dataset.style = $("[data-package-style]").value;
  scene.dataset.ribbon = $("[data-ribbon-color]").value;
  scene.dataset.ribbonEnabled = String($("[data-ribbon-toggle]").checked);
  scene.dataset.stickerEnabled = String($("[data-sticker-toggle]").checked);
  const note = $("[data-gift-note]").value.trim();
  const isGift = $("[data-gift-toggle]").checked;
  $("[data-gift-field]").hidden = !isGift;
  $("[data-box-gift-card]").hidden = !isGift;
  $("[data-box-dedication]").textContent = note || "Tu dedicatoria va acá";
  $("[data-gift-count]").textContent = $("[data-gift-note]").value.length;
}

function updateBoxTier() {
  const selectedTier = $('input[name="box-tier"]:checked').value;
  currentBoxTier = selectedTier;
  const config = boxTiers[currentBoxTier];
  $("[data-mystery-price]").textContent = formatCurrency(config.price);
  $("[data-box-count]").textContent = currentBoxResult ? `${currentBoxResult.items.length} PRENDAS` : "0 PRENDAS";
  $("[data-add-mystery]").disabled = !currentBoxResult || openingBox;
  $$("[data-tier-card]").forEach((card) => card.classList.toggle("active", card.dataset.tierCard === currentBoxTier));
  if (currentBoxResult) {
    currentBoxResult = null;
    $("[data-add-mystery]").disabled = true;
    $("[data-box-items]").innerHTML = "";
    $("[data-box-count]").textContent = "0 PRENDAS";
    $("[data-box-scene]").dataset.opened = "false";
    $("[data-box-scene]").classList.remove("has-items");
    $("[data-box-scene]").setAttribute("aria-label", "Caja Queen cerrada, arrastrá para girarla");
    $("[data-mystery-size]").disabled = false;
    $("[data-box-caption]").textContent = "Tu sorpresa espera adentro.";
    $("[data-reel-caption]").textContent = "Prendas del catálogo, seleccionadas al azar.";
    $("[data-reel-status]").textContent = "PREPARADA PARA VOS";
  }
}

function chooseBoxItems(count) {
  const weights = { everyday: 72, special: 23, limited: 5 };
  const remaining = products.filter((product) => isPublicProduct(product) && product.stock > 0);
  const selected = [];
  while (selected.length < count) {
    const availableWeights = Object.entries(weights).filter(([rarity]) => remaining.some((item) => item.rarity === rarity));
    const weightTotal = availableWeights.reduce((total, [, weight]) => total + weight, 0);
    let roll = Math.random() * weightTotal;
    const rarity = availableWeights.find(([, weight]) => {
      roll -= weight;
      return roll < 0;
    })[0];
    const pool = remaining.filter((item) => item.rarity === rarity);
    const winner = pool[Math.floor(Math.random() * pool.length)];
    selected.push(winner);
    remaining.splice(remaining.findIndex((item) => item.id === winner.id), 1);
  }
  return selected;
}

function createReel(winner) {
  const track = $("[data-reel-track]");
  const reelWindow = $("[data-reel-window]");
  track.getAnimations().forEach((animation) => animation.cancel());
  const reelItems = Array.from({ length: 19 }, () => products[Math.floor(Math.random() * products.length)]);
  const stopIndex = 15;
  reelItems[stopIndex] = winner;
  track.innerHTML = reelItems
    .map((item) => `<div class="reel-card"><img src="${item.image}" alt=""><span>${item.name}</span></div>`)
    .join("");
  track.style.transform = "translateX(0)";
  const target = track.children[stopIndex];
  const offset = reelWindow.clientWidth / 2 - target.offsetLeft - target.offsetWidth / 2;
  return track.animate(
    [{ transform: "translateX(0)" }, { transform: `translateX(${offset}px)` }],
    { duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 2600, easing: "cubic-bezier(.08,.72,.12,1)", fill: "forwards" },
  ).finished.then(() => {
    track.style.transform = `translateX(${offset}px)`;
  });
}

async function storeBoxItem(item, index) {
  const destinations = [
    "translate3d(-50%, -25px, 22px) rotateX(68deg) rotate(-5deg) scale(.92)",
    "translate3d(-50%, -18px, 12px) rotateX(68deg) rotate(4deg) scale(.92)",
    "translate3d(-50%, -30px, 32px) rotateX(68deg) rotate(-2deg) scale(.92)",
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animation = item.animate(
    [
      { opacity: 0, transform: "translate3d(-50%, -95px, 150px) rotate(-5deg) scale(.72)" },
      { opacity: 1, transform: destinations[index] },
    ],
    { duration: reducedMotion ? 1 : 760, easing: "cubic-bezier(.2,.7,.25,1)", fill: "forwards" },
  );
  await animation.finished;
  item.classList.add("stored");
  animation.cancel();
}

async function openMysteryBox() {
  if (openingBox) return;
  openingBox = true;
  currentBoxResult = null;
  const config = boxTiers[currentBoxTier];
  const winners = chooseBoxItems(config.count);
  const boxSize = $("[data-mystery-size]").value;
  const openButton = $("[data-open-mystery]");
  const addButton = $("[data-add-mystery]");
  const scene = $("[data-box-scene]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lidDuration = reducedMotion ? 1 : 980;
  const wasOpen = scene.dataset.opened === "true";
  $("[data-mystery-size]").disabled = true;
  openButton.disabled = true;
  addButton.disabled = true;
  $$('input[name="box-tier"]').forEach((input) => { input.disabled = true; });
  $("[data-box-items]").innerHTML = "";
  scene.classList.remove("has-items");
  scene.dataset.opened = "false";
  if (wasOpen) await new Promise((resolve) => window.setTimeout(resolve, lidDuration));
  $("[data-box-count]").textContent = "0 PRENDAS";
  $("[data-reel-status]").textContent = "LA RULETA ESTÁ GIRANDO";
  $("[data-unboxing-status]").textContent = "Preparando tu caja…";
  scene.dataset.opened = "true";
  scene.setAttribute("aria-label", "Caja Queen abierta, las prendas se están guardando adentro");
  $("[data-box-caption]").textContent = "La caja se está abriendo…";
  await new Promise((resolve) => window.requestAnimationFrame(resolve));
  await new Promise((resolve) => window.setTimeout(resolve, lidDuration));

  const foundItems = [];
  for (const [index, winner] of winners.entries()) {
    $("[data-reel-status]").textContent = `PRENDA ${index + 1} DE ${config.count}`;
    $("[data-unboxing-status]").textContent = `Buscando la prenda ${index + 1} de ${config.count}…`;
    try {
      await createReel(winner);
    } catch (error) {
      openingBox = false;
      openButton.disabled = false;
      $("[data-mystery-size]").disabled = false;
      $$('input[name="box-tier"]').forEach((input) => { input.disabled = false; });
      addButton.disabled = true;
      $("[data-unboxing-status]").textContent = "No se pudo completar la animación. Probá de nuevo.";
      throw error;
    }
    foundItems.push(winner);
    const boxItem = document.createElement("figure");
    boxItem.className = `box-item box-item-${index + 1}`;
    boxItem.innerHTML = `<img src="${winner.image}" alt=""><figcaption>${winner.name}</figcaption>`;
    $("[data-box-items]").append(boxItem);
    await storeBoxItem(boxItem, index);
    $("[data-box-count]").textContent = `${foundItems.length} ${foundItems.length === 1 ? "PRENDA" : "PRENDAS"}`;
    scene.setAttribute("aria-label", `Caja Queen abierta con ${foundItems.length} ${foundItems.length === 1 ? "prenda" : "prendas"} guardadas adentro`);
    $("[data-reel-caption]").textContent = `${winner.name} · Talle ${boxSize} · ${formatCurrency(winner.price)}`;
    $("[data-box-caption]").textContent = `${winner.name} · Talle ${boxSize}`;
    scene.classList.add("has-items");
  }

  currentBoxResult = {
    items: foundItems,
    size: boxSize,
    tier: currentBoxTier,
    style: $("[data-package-style]").value,
    price: config.price,
  };
  const retailValue = foundItems.reduce((total, item) => total + item.price, 0);
  $("[data-reel-status]").textContent = "¡TU CAJA ESTÁ LISTA!";
  $("[data-unboxing-status]").textContent = `¡Sorpresa! ${foundItems.length} prendas · valor de lista ${formatCurrency(retailValue)}.`;
  openButton.disabled = false;
  $("[data-mystery-size]").disabled = false;
  $$('input[name="box-tier"]').forEach((input) => { input.disabled = false; });
  addButton.disabled = false;
  openingBox = false;
  updateBoxStyle();
}

function addMysteryBoxToCart() {
  if (!currentBoxResult || currentBoxResult.addedToCart) return;
  const { items, size, price, tier } = currentBoxResult;
  const style = $("[data-package-style]").value;
  const ribbon = $("[data-ribbon-color]").value;
  const ribbonEnabled = $("[data-ribbon-toggle]").checked;
  const sticker = $("[data-sticker-toggle]").checked;
  const dedication = $("[data-gift-toggle]").checked ? $("[data-gift-note]").value.trim() : "";
  const product = {
    id: `caja-queen-${Date.now()}`,
    name: `Caja Queen ${tier === "essential" ? "Esencial" : "Signature"}`,
    subtitle: `${items.length} prendas · empaque ${style === "eco" ? "eco natural" : "premium"}`,
    price,
    image: items[0].image,
    alt: `Prendas sorpresa de la caja Queen: ${items.map((item) => item.name).join(", ")}`,
    mysteryBox: true,
    contents: items,
    packageOptions: {
      style: style === "eco" ? "Eco natural" : "Queen premium",
      ribbon: ribbonEnabled ? ({ terracotta: "terracota", wine: "bordó", olive: "oliva" })[ribbon] : "sin lazo",
      sticker,
      dedication,
    },
  };
  const key = `${product.id}:${size}`;
  cart.set(key, { product, size, quantity: 1 });
  currentBoxResult.addedToCart = true;
  $("[data-add-mystery]").disabled = true;
  renderCart();
  showToast("Tu caja de muestra se agregó al carrito. No se realizará ningún cobro.");
}

function updateAdminNavigation(pageName) {
  activeAdminPage = pageName;
  $$("[data-admin-nav]").forEach((button) => {
    const active = button.dataset.adminNav === pageName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  $$(".admin-view").forEach((view) => {
    const active = view.dataset.adminPage === pageName;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
}

function openAdminPanel() {
  closeOverlay();
  closeCart();
  const panel = $("[data-admin-panel]");
  panel.hidden = false;
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  updateAdminNavigation("overview");
  renderAdminDashboard();
  requestAnimationFrame(() => panel.classList.add("active"));
}

function closeAdminPanel() {
  const panel = $("[data-admin-panel]");
  closeAdminEditor();
  panel.classList.remove("active");
  panel.setAttribute("aria-hidden", "true");
  panel.hidden = true;
  document.body.classList.remove("locked");
  setLoginMode("customer");
  showToast("Saliste del panel de administración de muestra.");
}

function openAdminEditor(product = null) {
  const form = $("[data-admin-product-form]");
  form.reset();
  $("[data-admin-form-error]").textContent = "";
  form.elements.id.value = product?.id || "";
  form.elements.name.value = product?.name || "";
  form.elements.subtitle.value = product?.subtitle || "";
  form.elements.category.value = product?.category || "camisas";
  form.elements.rarity.value = product?.rarity || "everyday";
  form.elements.price.value = product?.price ?? "";
  form.elements.stock.value = product?.stock ?? 12;
  form.elements.tag.value = product?.tag || "";
  form.elements.image.value = product?.image || "";
  form.elements.alt.value = product?.alt || "";
  form.elements.active.checked = product ? isPublicProduct(product) : true;
  $("[data-admin-editor-title]").textContent = product ? "Editar producto" : "Agregar producto";
  const backdrop = $("[data-admin-editor-backdrop]");
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("active"));
  $(".admin-editor").setAttribute("aria-hidden", "false");
  form.elements.name.focus();
}

function closeAdminEditor() {
  const backdrop = $("[data-admin-editor-backdrop]");
  if (!backdrop) return;
  backdrop.classList.remove("active");
  backdrop.hidden = true;
  $(".admin-editor").setAttribute("aria-hidden", "true");
}

function categoryName(category) {
  return ({ camisas: "Camisas", vestidos: "Vestidos", sastreria: "Sastrería", tejidos: "Tejidos" })[category] || category;
}

function statusClass(status) {
  return status.toLocaleLowerCase("es").replaceAll(" ", "-");
}

function orderDate(date) {
  return new Intl.DateTimeFormat("es-UY", { day: "2-digit", month: "short" }).format(new Date(date));
}

function getAdminMetrics() {
  const totalSales = adminOrders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = adminOrders.filter((order) => ["Pendiente", "Preparando"].includes(order.status)).length;
  const activeProducts = products.filter(isPublicProduct);
  const lowStock = activeProducts.filter((product) => product.stock <= 5).length;
  const stockUnits = products.reduce((sum, product) => sum + product.stock, 0);
  return { totalSales, pendingOrders, activeProducts, lowStock, stockUnits };
}

function adminProductModelControl(product) {
  const escapedId = escapeHTML(product.id);
  const escapedName = escapeHTML(product.name);
  const hasModel = productModelIds.has(product.id);
  return `
    <div class="admin-model-control">
      <span class="admin-model-status${hasModel ? " available" : ""}">${hasModel ? "Cargado" : "Sin modelo"}</span>
      <label class="admin-model-upload"><span>${hasModel ? "Cambiar .glb" : "Subir .glb"}</span><input type="file" accept=".glb,model/gltf-binary" data-admin-model-upload="${escapedId}" aria-label="${hasModel ? "Cambiar" : "Subir"} modelo 3D de ${escapedName}"></label>
      ${hasModel ? `<button class="admin-model-remove" type="button" data-admin-model-remove="${escapedId}">Quitar</button>` : ""}
      <small>Máx. 25 MB</small>
    </div>`;
}

function renderAdminProducts() {
  const search = adminProductSearch.trim().toLocaleLowerCase("es");
  const filtered = products
    .filter((product) => {
      const matchesSearch = `${product.name} ${product.subtitle} ${product.category}`.toLocaleLowerCase("es").includes(search);
      const matchesFilter =
        adminProductFilter === "all" ||
        (adminProductFilter === "active" && isPublicProduct(product)) ||
        (adminProductFilter === "paused" && !isPublicProduct(product)) ||
        (adminProductFilter === "low-stock" && product.stock <= 5);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "es"));

  const rows = filtered.map((product) => `
    <tr>
      <td><div class="admin-product-identity"><img src="${escapeHTML(product.image)}" alt="" loading="lazy"><span><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.subtitle)}</small></span></div></td>
      <td><span class="admin-status-pill ${isPublicProduct(product) ? "published" : "paused"}"><i></i>${isPublicProduct(product) ? "Publicado" : "Pausado"}</span></td>
      <td class="admin-price-cell">${formatCurrency(product.price)}</td>
      <td><div class="admin-stock-control"><button type="button" data-stock-change="-1" data-stock-product="${escapeHTML(product.id)}" aria-label="Quitar una unidad de ${escapeHTML(product.name)}" ${product.stock === 0 ? "disabled" : ""}>−</button><strong class="${product.stock <= 5 ? "low" : ""}">${product.stock}</strong><button type="button" data-stock-change="1" data-stock-product="${escapeHTML(product.id)}" aria-label="Agregar una unidad a ${escapeHTML(product.name)}">+</button></div></td>
      <td><span class="admin-category-tag">${escapeHTML(categoryName(product.category))}</span></td>
      <td>${adminProductModelControl(product)}</td>
      <td><div class="admin-row-actions"><button type="button" data-admin-edit="${escapeHTML(product.id)}" aria-label="Editar ${escapeHTML(product.name)}">Editar</button><button type="button" data-admin-delete="${escapeHTML(product.id)}" aria-label="Eliminar ${escapeHTML(product.name)}">×</button></div></td>
    </tr>`)
    .join("");

  const mobileCards = filtered.map((product) => `
    <article class="admin-mobile-product">
      <img src="${escapeHTML(product.image)}" alt="" loading="lazy">
      <div class="admin-mobile-product-copy"><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.subtitle)}</small><span>${escapeHTML(categoryName(product.category))} · ${formatCurrency(product.price)}</span></div>
      <span class="admin-status-pill ${isPublicProduct(product) ? "published" : "paused"}"><i></i>${isPublicProduct(product) ? "Publicado" : "Pausado"}</span>
      <div class="admin-mobile-model">${adminProductModelControl(product)}</div>
      <div class="admin-mobile-stock"><span>Stock</span><div class="admin-stock-control"><button type="button" data-stock-change="-1" data-stock-product="${escapeHTML(product.id)}" aria-label="Quitar una unidad de ${escapeHTML(product.name)}" ${product.stock === 0 ? "disabled" : ""}>−</button><strong class="${product.stock <= 5 ? "low" : ""}">${product.stock}</strong><button type="button" data-stock-change="1" data-stock-product="${escapeHTML(product.id)}" aria-label="Agregar una unidad a ${escapeHTML(product.name)}">+</button></div><div class="admin-row-actions"><button type="button" data-admin-edit="${escapeHTML(product.id)}">Editar</button><button type="button" data-admin-delete="${escapeHTML(product.id)}">Eliminar</button></div></div>
    </article>`)
    .join("");

  $("[data-admin-products]").innerHTML = rows;
  $("[data-admin-mobile-products]").innerHTML = mobileCards;
  $("[data-admin-product-results]").textContent = `${filtered.length} ${filtered.length === 1 ? "producto" : "productos"}`;
  $("[data-admin-empty-products]").hidden = filtered.length !== 0;
  $("[data-admin-product-count]").textContent = products.length;
}

function renderAdminOrders() {
  const search = adminOrderSearch.trim().toLocaleLowerCase("es");
  const filtered = adminOrders
    .filter((order) => {
      const matchesSearch = `${order.id} ${order.items.join(" ")}`.toLocaleLowerCase("es").includes(search);
      return matchesSearch && (adminOrderFilter === "all" || order.status === adminOrderFilter);
    })
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  const rows = filtered.map((order) => `
    <tr>
      <td><strong class="admin-order-id">${escapeHTML(order.id)}</strong><small class="admin-order-source">Pedido de muestra</small></td>
      <td>Cliente demo</td>
      <td class="admin-order-items">${order.items.map(escapeHTML).join(", ")}</td>
      <td>${orderDate(order.createdAt)}</td>
      <td class="admin-price-cell">${formatCurrency(order.total)}</td>
      <td><label class="sr-only" for="order-status-${escapeHTML(order.id)}">Estado de ${escapeHTML(order.id)}</label><select class="admin-order-status ${statusClass(order.status)}" id="order-status-${escapeHTML(order.id)}" data-admin-order-status="${escapeHTML(order.id)}"><option${order.status === "Pendiente" ? " selected" : ""}>Pendiente</option><option${order.status === "Preparando" ? " selected" : ""}>Preparando</option><option${order.status === "Enviado" ? " selected" : ""}>Enviado</option><option${order.status === "Entregado" ? " selected" : ""}>Entregado</option></select></td>
    </tr>`)
    .join("");
  const mobileCards = filtered.map((order) => `
    <article class="admin-mobile-order"><div><strong>${escapeHTML(order.id)}</strong><span>${orderDate(order.createdAt)} · Cliente demo</span></div><strong>${formatCurrency(order.total)}</strong><p>${order.items.map(escapeHTML).join(" · ")}</p><label>Estado<select class="admin-order-status ${statusClass(order.status)}" data-admin-order-status="${escapeHTML(order.id)}"><option${order.status === "Pendiente" ? " selected" : ""}>Pendiente</option><option${order.status === "Preparando" ? " selected" : ""}>Preparando</option><option${order.status === "Enviado" ? " selected" : ""}>Enviado</option><option${order.status === "Entregado" ? " selected" : ""}>Entregado</option></select></label></article>`)
    .join("");
  $("[data-admin-orders]").innerHTML = rows;
  $("[data-admin-mobile-orders]").innerHTML = mobileCards;
  $("[data-admin-empty-orders]").hidden = filtered.length !== 0;
  $("[data-admin-order-count]").textContent = adminOrders.length;
  $("[data-orders-view-count]").textContent = adminOrders.length;
}

function renderAdminOverview() {
  const metrics = getAdminMetrics();
  $$("[data-admin-sales]").forEach((node) => { node.textContent = formatCurrency(metrics.totalSales); });
  $$("[data-admin-total-orders]").forEach((node) => { node.textContent = adminOrders.length; });
  $$("[data-admin-active-products]").forEach((node) => { node.textContent = metrics.activeProducts.length; });
  $$("[data-admin-total-products]").forEach((node) => { node.textContent = products.length; });
  $$("[data-admin-low-stock]").forEach((node) => { node.textContent = metrics.lowStock; });
  $$("[data-admin-low-stock-inline]").forEach((node) => { node.textContent = metrics.lowStock; });
  $$("[data-admin-pending-orders]").forEach((node) => { node.textContent = metrics.pendingOrders; });
  $$("[data-admin-pending-inline]").forEach((node) => { node.textContent = metrics.pendingOrders; });
  $$("[data-admin-stock-units]").forEach((node) => { node.textContent = metrics.stockUnits; });
  $$("[data-admin-average]").forEach((node) => { node.textContent = formatCurrency(adminOrders.length ? Math.round(metrics.totalSales / adminOrders.length) : 0); });

  const chartDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    const total = adminOrders
      .filter((order) => {
        const orderDay = new Date(order.createdAt);
        orderDay.setHours(0, 0, 0, 0);
        return orderDay.getTime() === date.getTime();
      })
      .reduce((sum, order) => sum + order.total, 0);
    return { date, total };
  });
  const maxDailySales = Math.max(...chartDays.map((day) => day.total), 1);
  $("[data-admin-chart]").innerHTML = chartDays
    .map((day, index) => `<div class="admin-chart-column"><span class="admin-chart-tooltip">${formatCurrency(day.total)}</span><div class="admin-chart-bar${index === chartDays.length - 1 ? " today" : ""}" style="--bar-height:${Math.max(day.total ? 9 : 2, (day.total / maxDailySales) * 100)}%" role="img" aria-label="${formatCurrency(day.total)}"></div></div>`)
    .join("");
  $("[data-admin-chart-total]").textContent = formatCurrency(chartDays.reduce((sum, day) => sum + day.total, 0));

  const latestOrders = [...adminOrders].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).slice(0, 4);
  $("[data-admin-recent-orders]").innerHTML = latestOrders.map((order) => `
    <tr><td><strong class="admin-order-id">${escapeHTML(order.id)}</strong></td><td class="admin-order-items">${order.items.map(escapeHTML).join(", ")}</td><td>${orderDate(order.createdAt)}</td><td class="admin-price-cell">${formatCurrency(order.total)}</td><td><span class="admin-order-badge ${statusClass(order.status)}">${escapeHTML(order.status)}</span></td></tr>`)
    .join("");

  const itemCounts = new Map();
  adminOrders.forEach((order) => order.items.forEach((name) => itemCounts.set(name, (itemCounts.get(name) || 0) + 1)));
  const topItems = [...itemCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxItemCount = Math.max(...topItems.map(([, count]) => count), 1);
  $("[data-admin-top-products]").innerHTML = topItems.length
    ? topItems.map(([name, count]) => `<div class="admin-top-product"><span>${escapeHTML(name)}</span><span class="admin-top-product-track"><i style="--product-share:${(count / maxItemCount) * 100}%"></i></span><strong>${count} ${count === 1 ? "unidad" : "unidades"}</strong></div>`).join("")
    : '<p class="admin-no-data">Todavía no hay pedidos de muestra.</p>';
}

function renderAdminDashboard() {
  renderAdminOverview();
  renderAdminProducts();
  renderAdminOrders();
}

function refreshPublicCatalog() {
  renderProducts();
  renderCatalog();
  const inspirationSelect = $("[data-inspiration-product]");
  const selectedProductId = inspirationSelect.value;
  const publicProducts = products.filter(isPublicProduct);
  inspirationSelect.innerHTML = publicProducts.map((product) => `<option value="${escapeHTML(product.id)}">${escapeHTML(product.name)}</option>`).join("");
  const nextProductId = publicProducts.some((product) => product.id === selectedProductId) ? selectedProductId : publicProducts[0]?.id;
  renderInspiration(nextProductId);
}

function setLoginMode(mode) {
  loginMode = mode;
  $$("[data-login-mode]").forEach((button) => {
    const active = button.dataset.loginMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  $("[data-login-submit]").innerHTML = mode === "admin"
    ? 'Entrar al panel demo <span aria-hidden="true">↗</span>'
    : 'Iniciar sesión <span aria-hidden="true">↗</span>';
  $("[data-login-demo-note]").hidden = mode !== "admin";
  $("[data-login-footnote]").hidden = mode === "admin";
  $("[data-login-message]").textContent = "";
}

function saveAdminProduct(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const existingId = String(formData.get("id") || "");
  const name = String(formData.get("name") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const formError = $("[data-admin-form-error]");
  formError.textContent = "";
  let imageUrl;
  try {
    imageUrl = new URL(image);
  } catch (error) {
    formError.textContent = "Ingresá una URL de imagen válida.";
    return;
  }
  if (!["http:", "https:"].includes(imageUrl.protocol)) {
    formError.textContent = "La imagen debe usar una dirección HTTPS o HTTP.";
    return;
  }
  if (!name || !Number.isFinite(price) || price <= 0 || !Number.isInteger(stock) || stock < 0) {
    formError.textContent = "Revisá el nombre, el precio y las unidades en stock.";
    return;
  }
  const id = existingId || `${name.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;
  if (products.some((product) => product.id === id && product.id !== existingId)) {
    formError.textContent = "Ya existe un producto con ese identificador.";
    return;
  }
  const product = {
    id,
    name,
    subtitle: String(formData.get("subtitle") || "").trim(),
    category: String(formData.get("category")),
    rarity: String(formData.get("rarity")),
    price,
    stock,
    tag: String(formData.get("tag") || "").trim(),
    image: imageUrl.href,
    alt: String(formData.get("alt") || "").trim(),
    active: form.elements.active.checked,
  };
  if (!isValidProduct(product)) {
    formError.textContent = "Los datos del producto no son válidos.";
    return;
  }
  const previousProducts = products.map((item) => ({ ...item }));
  const existingIndex = products.findIndex((item) => item.id === existingId);
  if (existingIndex < 0) products.push(product);
  else products.splice(existingIndex, 1, product);
  if (!saveAdminStorage(adminStorageKeys.products, products)) {
    products.splice(0, products.length, ...previousProducts);
    return;
  }
  cart.forEach((item) => {
    if (item.product.id === product.id) item.product = product;
  });
  refreshPublicCatalog();
  renderAdminDashboard();
  closeAdminEditor();
  showToast(existingId ? "Actualizamos el producto en tu tienda." : "Agregamos el producto a tu tienda.");
}

renderProducts();
renderCatalog();
renderCart();
updateBoxStyle();
updateBoxTier();
$("[data-inspiration-product]").innerHTML = products
  .map((product) => `<option value="${product.id}">${product.name}</option>`)
  .join("");
renderInspiration(products[0].id);
if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document.body.classList.add("motion-ready");
  observeReveals();
}
$("[data-slide-total]").textContent = String(slides.length).padStart(2, "0");
$("[data-hero-image]").style.backgroundImage = `url("${slides[0].image}")`;
$("[data-hero-image]").style.backgroundPosition = slides[0].position;
$("[data-hero-kicker]").textContent = slides[0].kicker;
$("[data-hero-title]").innerHTML = slides[0].title;
$("[data-hero-description]").textContent = slides[0].description;
$("[data-hero-image]").style.animation = "hero-zoom 9s ease forwards";

$(".hero-dots").innerHTML = slides
  .map((_, index) => `<button class="hero-dot${index === 0 ? " active" : ""}" type="button" aria-label="Ir a diapositiva ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`)
  .join("");
restartSlideTimer();

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  if (target.closest("[data-stylist-toggle]")) setStylistOpen(true);
  if (target.closest("[data-stylist-close]")) setStylistOpen(false);

  const addButton = target.closest("[data-add-product]");
  if (addButton) {
    const card = addButton.closest(".product-card");
    const size = $("select", card).value;
    addToCart(addButton.dataset.addProduct, size);
  }

  const adminNav = target.closest("[data-admin-nav], [data-admin-nav-target]");
  if (adminNav) {
    updateAdminNavigation(adminNav.dataset.adminNav || adminNav.dataset.adminNavTarget);
  }
  if (target.closest("[data-admin-create]")) openAdminEditor();
  if (target.closest("[data-admin-editor-close]")) closeAdminEditor();
  if (target === $("[data-admin-editor-backdrop]")) closeAdminEditor();
  if (target.closest("[data-admin-logout]")) closeAdminPanel();
  if (target.closest("[data-admin-dismiss-notice]")) $("[data-admin-dismiss-notice]").closest(".admin-demo-banner").hidden = true;
  if (target.closest("[data-admin-help]")) showToast("Panel de demostración: los cambios se guardan en este navegador.");

  const editProductButton = target.closest("[data-admin-edit]");
  if (editProductButton) {
    const product = products.find((item) => item.id === editProductButton.dataset.adminEdit);
    if (product) openAdminEditor(product);
  }

  const deleteProductButton = target.closest("[data-admin-delete]");
  if (deleteProductButton) {
    const product = products.find((item) => item.id === deleteProductButton.dataset.adminDelete);
    if (product && window.confirm(`¿Eliminar ${product.name} del catálogo de muestra?`)) {
      const previousProducts = products.map((item) => ({ ...item }));
      products.splice(products.indexOf(product), 1);
      if (saveAdminStorage(adminStorageKeys.products, products)) {
        if (productModelIds.has(product.id)) {
          deleteProductModel(product.id)
            .then(() => productModelIds.delete(product.id))
            .catch((error) => {
              console.error("No se pudo borrar el modelo 3D del producto eliminado.", error);
              showToast("El producto se eliminó, pero no pudimos borrar su archivo 3D.");
            });
        }
        refreshPublicCatalog();
        renderAdminDashboard();
        showToast("El producto se eliminó del catálogo de muestra.");
      } else {
        products.splice(0, products.length, ...previousProducts);
      }
    }
  }

  const stockButton = target.closest("[data-stock-change]");
  if (stockButton) {
    const product = products.find((item) => item.id === stockButton.dataset.stockProduct);
    const change = Number(stockButton.dataset.stockChange);
    if (product && Number.isInteger(change) && product.stock + change >= 0) {
      const previousStock = product.stock;
      product.stock += change;
      if (saveAdminStorage(adminStorageKeys.products, products)) {
        refreshPublicCatalog();
        renderAdminDashboard();
      } else {
        product.stock = previousStock;
      }
    }
  }

  if (target.closest("[data-open-mystery]")) openMysteryBox();
  if (target.closest("[data-add-mystery]")) addMysteryBoxToCart();

  const inspirationButton = target.closest("[data-inspiration-product-link]");
  if (inspirationButton) {
    renderInspiration(inspirationButton.dataset.inspirationProductLink);
    $("#inspiracion").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }
  const productModelButton = target.closest("[data-view-product-model]");
  if (productModelButton) {
    openProductModel(productModelButton.dataset.viewProductModel).catch((error) => {
      console.error("No se pudo abrir el visor 3D del producto.", error);
      showToast(error.message || "No pudimos abrir el modelo 3D.");
    });
  }
  const removeProductModelButton = target.closest("[data-admin-model-remove]");
  if (removeProductModelButton) removeProductModel(removeProductModelButton.dataset.adminModelRemove);

  const filterButton = target.closest("[data-filter-type]");
  if (filterButton) {
    catalogCategory = filterButton.dataset.filterType;
    $$("[data-filter-type]").forEach((button) => {
      const active = button === filterButton;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderCatalog();
  }

  const categoryLink = target.closest("[data-category-link]");
  if (categoryLink) {
    catalogCategory = categoryLink.dataset.categoryLink;
    $$("[data-filter-type]").forEach((button) => {
      const active = button.dataset.filterType === catalogCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderCatalog();
  }

  const favorite = target.closest("[data-favorite]");
  if (favorite) {
    const isFavorite = favorite.getAttribute("aria-pressed") !== "true";
    favorite.setAttribute("aria-pressed", String(isFavorite));
    favorite.classList.toggle("active", isFavorite);
    favorite.textContent = isFavorite ? "♥" : "♡";
    showToast(isFavorite ? "Guardamos esta prenda en tus favoritos." : "La quitamos de tus favoritos.");
  }

  const quantityButton = target.closest("[data-quantity]");
  if (quantityButton) updateQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));

  const removeButton = target.closest("[data-remove]");
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }

  if (target.closest("[data-continue-shopping]")) closeCart();
  if (target.closest("[data-close-cart]")) closeCart();
  if (target === $("[data-overlay]")) {
    closeCart();
    closeOverlay();
  }
  if (target.closest("[data-close-modal]")) closeOverlay();
  if (target.closest("[data-checkout]")) {
    closeCart();
    openModal($("[data-checkout-modal]"));
  }
  if (target.closest(".cart-toggle")) openCart();
  if (target.closest(".account-toggle")) openModal($("[data-login-modal]"));
  if (target.closest(".search-toggle")) {
    $(".main-nav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    const bar = $("[data-search-bar]");
    bar.classList.toggle("open");
    if (bar.classList.contains("open")) $("#product-search").focus();
  }
  if (target.closest("[data-close-search]")) closeSearch();
  if (target.closest(".hero-next")) {
    setSlide(slideIndex + 1);
    restartSlideTimer();
  }
  if (target.closest(".hero-prev")) {
    setSlide(slideIndex - 1);
    restartSlideTimer();
  }
  const dot = target.closest(".hero-dot");
  if (dot) {
    setSlide($$(".hero-dot").indexOf(dot));
    restartSlideTimer();
  }
  if (target.closest(".menu-toggle")) {
    closeSearch();
    const nav = $(".main-nav");
    const isOpen = nav.classList.toggle("open");
    target.closest(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
  }
  if (target.closest(".main-nav a")) {
    $(".main-nav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("change", (event) => {
  if (event.target instanceof HTMLInputElement && event.target.matches("[data-admin-model-upload]")) {
    handleProductModelUpload(event.target);
  }
});

$$('input[name="box-tier"]').forEach((input) => input.addEventListener("change", updateBoxTier));
$("[data-login-mode]").closest("[role='tablist']").addEventListener("click", (event) => {
  const button = event.target.closest("[data-login-mode]");
  if (button) setLoginMode(button.dataset.loginMode);
});
$("[data-admin-product-form]").addEventListener("submit", saveAdminProduct);
const productModelDialog = $("[data-model-viewer-dialog]");
$("[data-model-viewer-close]").addEventListener("click", () => productModelDialog.close());
productModelDialog.addEventListener("click", (event) => {
  if (event.target === productModelDialog) productModelDialog.close();
});
productModelDialog.addEventListener("close", () => {
  if (!productModelDialog.open) releaseProductModelViewer();
});
loadProductModelIds()
  .then((ids) => {
    ids.forEach((productId) => productModelIds.add(productId));
    refreshPublicCatalog();
    renderAdminProducts();
  })
  .catch((error) => {
    console.error("No se pudieron cargar los modelos 3D guardados.", error);
    showToast("No pudimos cargar los modelos 3D de este navegador.");
  });
$("[data-admin-product-search]").addEventListener("input", (event) => {
  adminProductSearch = event.target.value;
  renderAdminProducts();
});
$("[data-admin-product-filter]").addEventListener("change", (event) => {
  adminProductFilter = event.target.value;
  renderAdminProducts();
});
$("[data-admin-order-search]").addEventListener("input", (event) => {
  adminOrderSearch = event.target.value;
  renderAdminOrders();
});
$("[data-admin-order-filter]").addEventListener("change", (event) => {
  adminOrderFilter = event.target.value;
  renderAdminOrders();
});
$("[data-admin-orders]").addEventListener("change", (event) => {
  const statusControl = event.target.closest("[data-admin-order-status]");
  if (!statusControl) return;
  const order = adminOrders.find((item) => item.id === statusControl.dataset.adminOrderStatus);
  if (!order) return;
  const previousStatus = order.status;
  order.status = statusControl.value;
  if (saveAdminStorage(adminStorageKeys.orders, adminOrders)) {
    renderAdminDashboard();
    showToast(`Actualizamos el estado del pedido ${order.id}.`);
  } else {
    order.status = previousStatus;
  }
});
$("[data-admin-mobile-orders]").addEventListener("change", (event) => {
  const statusControl = event.target.closest("[data-admin-order-status]");
  if (!statusControl) return;
  const order = adminOrders.find((item) => item.id === statusControl.dataset.adminOrderStatus);
  if (!order) return;
  const previousStatus = order.status;
  order.status = statusControl.value;
  if (saveAdminStorage(adminStorageKeys.orders, adminOrders)) {
    renderAdminDashboard();
    showToast(`Actualizamos el estado del pedido ${order.id}.`);
  } else {
    order.status = previousStatus;
  }
});
$("[data-mystery-size]").addEventListener("change", (event) => {
  if (!currentBoxResult || currentBoxResult.addedToCart) return;
  currentBoxResult.size = event.target.value;
  const lastItem = currentBoxResult.items[currentBoxResult.items.length - 1];
  $("[data-reel-caption]").textContent = `${lastItem.name} · Talle ${currentBoxResult.size} · ${formatCurrency(lastItem.price)}`;
  $("[data-box-caption]").textContent = `Caja lista · Talle ${currentBoxResult.size}`;
});
["[data-package-style]", "[data-ribbon-color]", "[data-ribbon-toggle]", "[data-sticker-toggle]", "[data-gift-toggle]", "[data-gift-note]"]
  .forEach((selector) => $(selector).addEventListener("input", updateBoxStyle));
["[data-package-style]", "[data-ribbon-color]", "[data-ribbon-toggle]", "[data-sticker-toggle]", "[data-gift-toggle]"]
  .forEach((selector) => $(selector).addEventListener("change", updateBoxStyle));

const boxScene = $("[data-box-scene]");
const boxRotation = $("[data-box-rotation]");
let dragStartX = 0;
let dragStartYaw = 0;
boxScene.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  dragStartX = event.clientX;
  dragStartYaw = Number(boxRotation.value);
  boxScene.setPointerCapture(event.pointerId);
});
boxScene.addEventListener("pointermove", (event) => {
  if (!boxScene.hasPointerCapture(event.pointerId)) return;
  const yaw = Math.max(-45, Math.min(45, dragStartYaw + (event.clientX - dragStartX) * 0.45));
  boxRotation.value = String(yaw);
  boxScene.style.setProperty("--box-yaw", `${yaw}deg`);
});
boxRotation.addEventListener("input", () => boxScene.style.setProperty("--box-yaw", `${boxRotation.value}deg`));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!$("[data-admin-editor-backdrop]").hidden) closeAdminEditor();
    else if (!$("[data-admin-panel]").hidden) closeAdminPanel();
    closeCart();
    closeOverlay();
    closeSearch();
    $(".main-nav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  }
});

$("#product-search").addEventListener("input", (event) => {
  productSearch = event.target.value;
  renderProducts();
  renderCatalog();
});

$("#product-search").addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  closeSearch();
  $("#catalogo").scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
});

$("[data-sort-products]").addEventListener("change", (event) => {
  catalogSort = event.target.value;
  renderCatalog();
});

$("[data-filter-price]").addEventListener("change", (event) => {
  catalogPrice = event.target.value;
  renderCatalog();
});

$("[data-inspiration-product]").addEventListener("change", (event) => {
  renderInspiration(event.target.value);
});

$("[data-newsletter-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  $("[data-newsletter-message]").textContent = "¡Gracias! Esta es una demostración; no guardamos tu correo.";
  event.currentTarget.reset();
});

$("[data-contact-form]").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const result = $("[data-contact-result]");
  result.hidden = false;
  result.textContent = "Enviando tu consulta…";
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonMarkup = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.textContent = "Enviando…";
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      signal: controller.signal,
    });
    let responseBody;
    try {
      responseBody = await response.json();
    } catch {
      throw new Error("El servidor devolvió una respuesta inválida.");
    }
    if (!response.ok || responseBody.sent !== true) {
      throw new Error(responseBody.error || "No pudimos confirmar el envío de tu consulta.");
    }
    result.textContent = "¡Consulta enviada! Te responderemos en cuanto podamos.";
    form.reset();
  } catch (error) {
    console.error("No se pudo enviar la consulta a Queen.", error);
    result.textContent = error.name === "AbortError"
      ? "El envío tardó demasiado. Intentá nuevamente o escribinos a mongitouwu@gmail.com."
      : error.message || "No pudimos enviar tu consulta. Intentá nuevamente.";
  } finally {
    window.clearTimeout(timeoutId);
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonMarkup;
  }
});

$("[data-stylist-form]").addEventListener("submit", sendStylistMessage);
checkStylistHealth();

$("[data-login-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  if (loginMode === "admin") {
    closeOverlay();
    openAdminPanel();
    event.currentTarget.reset();
    return;
  }
  const email = new FormData(event.currentTarget).get("email");
  $("[data-login-message]").textContent = `¡Hola! El inicio de sesión de ${email} es una demostración.`;
  event.currentTarget.reset();
});

$("[data-checkout-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const order = {
    id: `Q-${orderNumber}`,
    createdAt: new Date().toISOString(),
    total: [...cart.values()].reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    items: [...cart.values()].map((item) => `${item.quantity} × ${item.product.name}`),
    status: "Pendiente",
    source: "checkout-demo",
  };
  adminOrders.unshift(order);
  saveAdminStorage(adminStorageKeys.orders, adminOrders);
  $("[data-checkout-message]").textContent = `¡Pedido de demostración #${orderNumber} listo! No se realizó ningún pago.`;
  event.currentTarget.reset();
  cart.clear();
  renderCart();
  window.setTimeout(() => {
    closeOverlay();
    showToast("Gracias por elegir Queen. ¡Hasta pronto!");
    renderAdminDashboard();
  }, 2400);
});

function expandLinkedInfo() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}

window.addEventListener("hashchange", expandLinkedInfo);
expandLinkedInfo();
