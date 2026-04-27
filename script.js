// ═══════════════════════════════════════════
//  PURA VIDA FIT — script.js
// ═══════════════════════════════════════════

const WA_NUMBER = '50661396258';
const ADMIN_PASSWORD = 'PVF1T@99';

// ── PRODUCT DATABASE (from real inventory) ──
// Products are stored in localStorage so admins can add/edit them.
// On first load, we seed from the default list.

const DEFAULT_PRODUCTS = [
  // ── PROTEÍNAS ──
  {id:'ON001',cat:'proteinas',name:'ON Gold Standard Whey 5lb',desc:'La proteína más vendida del mundo. 24g de proteína por servicio, baja en grasa y carbohidratos.',flavors:'Chocolate, Double Rich Chocolate, Vanilla, Strawberry, Banana Cream, Cookies & Cream, Mocha Cappuccino',size:'5lb / 74 servicios',icon:'💪'},
  {id:'ON002',cat:'proteinas',name:'ON Gold Standard Whey 2lb',desc:'La clásica proteína ON Gold Standard en presentación de 2lb.',flavors:'Chocolate, Vanilla, Strawberry, Cookies & Cream',size:'2lb / 29 servicios',icon:'💪'},
  {id:'ON003',cat:'proteinas',name:'ON Gold Standard Whey 10lb',desc:'El mejor precio por gramo de proteína. Ideal para atletas que entrenan duro.',flavors:'Chocolate, Vanilla',size:'10lb / 148 servicios',icon:'💪'},
  {id:'BSN001',cat:'proteinas',name:'BSN Syntha-6 5lb',desc:'Mezcla de proteínas de liberación gradual. Ideal para cualquier momento del día.',flavors:'Chocolate Milkshake, Vanilla Ice Cream, Strawberry',size:'5lb / 48 servicios',icon:'💪'},
  {id:'BSN002',cat:'proteinas',name:'BSN True Mass 1200',desc:'Gainer de alta calidad para ganar masa muscular y peso.',flavors:'Chocolate, Vanilla',size:'5.75lb',icon:'💪'},
  {id:'DYM001',cat:'proteinas',name:'Dymatize ISO100 5lb',desc:'Proteína hidrolizada 100% pura. Digestión ultra rápida, ideal post-entreno.',flavors:'Chocolate Peanut Butter, Gourmet Vanilla, Birthday Cake',size:'5lb / 76 servicios',icon:'💪'},
  {id:'MMDS001',cat:'proteinas',name:'Carnivor Beef Protein 4lb',desc:'Proteína de carne de res, sin lactosa. Alta en creatina y BCAAs naturales.',flavors:'Chocolate Fudge, Strawberry, Vanilla Caramel',size:'4lb / 56 servicios',icon:'💪'},
  {id:'PS001',cat:'proteinas',name:'PS Protein 4lb',desc:'Proteína de suero premium con excelente perfil de aminoácidos.',flavors:'Chocolate, Vanilla, Strawberry',size:'4lb',icon:'💪'},
  {id:'AN001',cat:'proteinas',name:'AN Cookie Dough Protein 1kg',desc:'Proteína de sabor increíble con textura tipo cookie dough.',flavors:'Baklava Vanilla Ice Cream, Chocolate Bueno',size:'1kg / 25 servicios',icon:'💪'},
  {id:'BM001',cat:'proteinas',name:'Falcon Performance Proteína + Creatina + BCAAs',desc:'Fórmula completa: proteína, creatina y BCAAs en un solo producto.',flavors:'Chocolate, Vainilla',size:'19 servicios',icon:'💪'},
  {id:'RC001',cat:'proteinas',name:'RC Protein 5lb',desc:'Proteína de suero de alta calidad a excelente precio.',flavors:'Chocolate, Vanilla, Strawberry',size:'5lb',icon:'💪'},
  {id:'MT001',cat:'proteinas',name:'MT Phase 8 Protein 5lb',desc:'Proteína de 8 horas de liberación sostenida. Ideal antes de dormir.',flavors:'Chocolate, Vanilla, Strawberry',size:'5lb / 50 servicios',icon:'💪'},
  {id:'ULT001',cat:'proteinas',name:'Ultimate Nutrition Prostar 5lb',desc:'Proteína whey de alta calidad con excelente sabor y solubilidad.',flavors:'Chocolate, Vanilla, Strawberry',size:'5lb',icon:'💪'},

  // ── CREATINA ──
  {id:'NTX001',cat:'creatina',name:'NTX Creatine 1kg',desc:'Creatina monohidratada pura micronizada. 200 servicios para máxima fuerza y volumen.',flavors:'Sin sabor',size:'1kg / 200 servicios',icon:'⚡'},
  {id:'NTX002',cat:'creatina',name:'NTX Creatine 300g',desc:'Creatina monohidratada pura. Sin sabor, mezcla con cualquier bebida.',flavors:'Sin sabor',size:'300g / 60 servicios',icon:'⚡'},
  {id:'BIOSP001',cat:'creatina',name:'BioSport Creatine 1kg',desc:'Creatina monohidratada pura 200 servicios.',flavors:'Sin sabor',size:'1kg / 200 servicios',icon:'⚡'},
  {id:'BIOSP002',cat:'creatina',name:'BioSport Creatine 500g',desc:'Creatina monohidratada 100 servicios.',flavors:'Sin sabor',size:'500g / 100 servicios',icon:'⚡'},
  {id:'BIOSP003',cat:'creatina',name:'BioSport Creatine 300g',desc:'Presentación compacta de creatina monohidratada.',flavors:'Sin sabor',size:'300g / 60 servicios',icon:'⚡'},
  {id:'BM002',cat:'creatina',name:'BM Creatina Monohidratada 400g',desc:'Creatina monohidratada de alta pureza.',flavors:'Sin sabor',size:'400g / 80 servicios',icon:'⚡'},
  {id:'MT002',cat:'creatina',name:'MT Cell-TECH 3lb',desc:'Creatina + carbohidratos para máximo llenado muscular.',flavors:'Fruit Punch',size:'3lb',icon:'⚡'},
  {id:'MT003',cat:'creatina',name:'MT Cell-TECH 6lb',desc:'La versión grande del clásico Cell-Tech.',flavors:'Fruit Punch',size:'6lb',icon:'⚡'},
  {id:'MT004',cat:'creatina',name:'MT Creatine Platinum',desc:'Creatina monohidratada pura, 80 servicios.',flavors:'Sin sabor',size:'400g / 80 servicios',icon:'⚡'},
  {id:'MT005',cat:'creatina',name:'MT Creactor Creatine HCl',desc:'Creatina HCl, más concentrada y sin necesidad de carga.',flavors:'Sin sabor',size:'120 servicios',icon:'⚡'},
  {id:'CELL001',cat:'creatina',name:'Cellucor Creatine Monohydrate 50srv',desc:'Creatina monohidratada con sabores únicos.',flavors:'Fruit Punch, Blue Raspberry, Watermelon',size:'50 servicios',icon:'⚡'},
  {id:'IA001',cat:'creatina',name:'IA Creatine Creapure 300g',desc:'Creatina Creapure certificada, la más pura del mercado.',flavors:'Sin sabor',size:'300g / 100 servicios',icon:'⚡'},
  {id:'RC002',cat:'creatina',name:'RC Creatine 1kg',desc:'Creatina monohidratada 400 servicios al mejor precio.',flavors:'Sin sabor',size:'1kg / 400 servicios',icon:'⚡'},
  {id:'RC003',cat:'creatina',name:'RC Creatine 500g',desc:'Creatina monohidratada 200 servicios.',flavors:'Sin sabor',size:'500g / 200 servicios',icon:'⚡'},
  {id:'ULT002',cat:'creatina',name:'Ultimate Creatine Monohydrate 1kg',desc:'Creatina monohidratada de alta calidad.',flavors:'Sin sabor',size:'1kg / 200 servicios',icon:'⚡'},
  {id:'PS002',cat:'creatina',name:'PS Creatine 60srv',desc:'Creatina monohidratada sin sabor.',flavors:'Sin sabor',size:'60 servicios',icon:'⚡'},
  {id:'AN002',cat:'creatina',name:'AN Creatina 3000mg 120 caps',desc:'Creatina en cápsulas vegetales, 30 servicios.',flavors:'N/A',size:'120 cápsulas / 30 servicios',icon:'⚡'},

  // ── PRE-WORKOUT ──
  {id:'C4001',cat:'preworkout',name:'C4 Original Pre-Workout 30srv',desc:'El pre-workout más famoso. Energía explosiva, enfoque y pump increíble.',flavors:'Fruit Punch, Watermelon, Blue Raspberry, Pink Lemonade, Orange, Cherry Limeade',size:'30 servicios',icon:'🔥'},
  {id:'C4002',cat:'preworkout',name:'C4 Original Pre-Workout 60srv',desc:'Presentación grande de C4 Original.',flavors:'Fruit Punch, Watermelon, Blue Raspberry',size:'60 servicios',icon:'🔥'},
  {id:'C4003',cat:'preworkout',name:'C4 Extreme Pre-Workout',desc:'Mayor intensidad y enfoque que el C4 Original.',flavors:'Icy Blue Razz, Fruit Punch, Watermelon',size:'30 servicios',icon:'🔥'},
  {id:'C4004',cat:'preworkout',name:'C4 Ripped Pre-Workout',desc:'Pre-workout + quemador de grasa en uno.',flavors:'Cherry Limeade, Raspberry Lemonade',size:'30 servicios',icon:'🔥'},
  {id:'RC004',cat:'preworkout',name:'Redcon1 Total War Pre-Workout',desc:'Pre-workout de alta intensidad con beta-alanina, citrulina y cafeína.',flavors:'Strawberry Kiwi, Blue Lemonade, Sour Gummy Bear',size:'30 servicios',icon:'🔥'},
  {id:'MMDS002',cat:'preworkout',name:'Mr. Hyde NitroX Pre-Workout',desc:'Fórmula extrema con múltiples fuentes de cafeína.',flavors:'Fruit Punch, Blue Razz, Watermelon',size:'30 servicios',icon:'🔥'},
  {id:'BSN003',cat:'preworkout',name:'BSN N.O.-Xplode Pre-Workout',desc:'El clásico pre-workout de BSN con pump y energía.',flavors:'Fruit Punch, Grape, Watermelon',size:'30 servicios',icon:'🔥'},
  {id:'PS003',cat:'preworkout',name:'Bucked Up Pre-Workout',desc:'Pre-workout con deer antler velvet y beta-alanina.',flavors:'Grape Gainz, Blood Raz, Watermelon',size:'30 servicios',icon:'🔥'},

  // ── VITAMINAS & SUPLEMENTOS ──
  {id:'NT001',cat:'vitaminas',name:'NT Multivitamínico Hombres 70 Gummies',desc:'Multivitamínico completo para hombres con B12, D3 y Zinc. Sabor arándano.',flavors:'Blueberry',size:'70 gummies',icon:'🌿'},
  {id:'NT002',cat:'vitaminas',name:'NT Women Multivitamín + Colágeno 70 Gummies',desc:'Multivitamínico para mujeres con colágeno incluido.',flavors:'Varios',size:'70 gummies',icon:'🌿'},
  {id:'NT003',cat:'vitaminas',name:'NT Collagen Peptides Type 1+3 60 Gummies',desc:'Colágeno hidrolizado tipo 1 y 3 en gummies de fresa.',flavors:'Strawberry',size:'60 gummies',icon:'🌿'},
  {id:'NT004',cat:'vitaminas',name:'NT Multi Collagen Tipos I,II,III,V,X 60 Gummies',desc:'El colágeno más completo con 5 tipos en una sola gummy.',flavors:'Mixed Fruit',size:'60 gummies',icon:'🌿'},
  {id:'NT005',cat:'vitaminas',name:'NT Ultra Collagen 30srv',desc:'Colágeno en polvo de alta concentración.',flavors:'Sin sabor',size:'30 servicios',icon:'🌿'},
  {id:'NT006',cat:'vitaminas',name:'NT Ultra Collagen 3000mg 90 caps',desc:'Colágeno en cápsulas 3000mg.',flavors:'N/A',size:'90 cápsulas',icon:'🌿'},
  {id:'NT007',cat:'vitaminas',name:'NT Vitamin C 1000mg 60 caps',desc:'Vitamina C masticable de alta potencia.',flavors:'Sin sabor',size:'60 cápsulas',icon:'🌿'},
  {id:'NT008',cat:'vitaminas',name:'NT C+Zinc 60 Gummies',desc:'Vitamina C más Zinc para el sistema inmune.',flavors:'Lemon',size:'60 gummies',icon:'🌿'},
  {id:'NT009',cat:'vitaminas',name:'NT D3+B12 60 Gummies',desc:'Vitaminas D3 y B12 esenciales para energía y huesos.',flavors:'Strawberry',size:'60 gummies',icon:'🌿'},
  {id:'NT010',cat:'vitaminas',name:'NT Omega 3.6.7.9 50 Gummies',desc:'Omegas esenciales en deliciosas gummies de durazno.',flavors:'Peach',size:'50 gummies',icon:'🌿'},
  {id:'NT011',cat:'vitaminas',name:'NT Sleep Melatonin 10mg 70 Gummies',desc:'Melatonina para un sueño reparador.',flavors:'Mixed Berry',size:'70 gummies',icon:'🌿'},
  {id:'NT012',cat:'vitaminas',name:'NT Biotin 10000mg 50 Gummies',desc:'Biotina de alta potencia para cabello, piel y uñas.',flavors:'Peach',size:'50 gummies',icon:'🌿'},
  {id:'NT013',cat:'vitaminas',name:'NT Ashwagandha 60 Gummies',desc:'Adaptógeno natural para reducir el estrés y cortisol.',flavors:'Tropical',size:'60 gummies',icon:'🌿'},
  {id:'NT014',cat:'vitaminas',name:'NT Apple Cider Vinegar 600mg 75 Gummies',desc:'Vinagre de manzana en gummies para metabolismo.',flavors:'Apple',size:'75 gummies',icon:'🌿'},
  {id:'NT015',cat:'vitaminas',name:'NT Probiótico + Prebiótico 50 Gummies',desc:'Salud digestiva con probióticos y prebióticos.',flavors:'Tropical',size:'50 gummies',icon:'🌿'},
  {id:'NT016',cat:'vitaminas',name:'NT Melatonin + Magnesium 60 Gummies',desc:'Sueño profundo y muscular relajación.',flavors:'Berry Lemon',size:'60 gummies',icon:'🌿'},
  {id:'NT017',cat:'vitaminas',name:'NT Zinc 50mg 100 tabs',desc:'Zinc para sistema inmune, testosterona y recuperación.',flavors:'N/A',size:'100 tabletas',icon:'🌿'},
  {id:'NT018',cat:'vitaminas',name:'NT Turmeric + Ginger 70 Gummies',desc:'Cúrcuma y jengibre antiinflamatorio natural.',flavors:'Peach',size:'70 gummies',icon:'🌿'},
  {id:'NT019',cat:'vitaminas',name:'NT Garcinia Cambogia 3000mg 90 caps',desc:'Suplemento natural para control del apetito.',flavors:'N/A',size:'90 cápsulas',icon:'🌿'},
  {id:'NT020',cat:'vitaminas',name:'NT Calcium 1200mg + D3 5000IU 120 caps',desc:'Calcio y vitamina D3 para huesos fuertes.',flavors:'N/A',size:'120 cápsulas',icon:'🌿'},
  {id:'GAT001',cat:'vitaminas',name:'GAT Men Multi+Test 60 tabs',desc:'Multivitamínico para hombres con soporte de testosterona.',flavors:'N/A',size:'60 tabletas',icon:'🌿'},
  {id:'GAT002',cat:'vitaminas',name:'GAT ZMag-T 90 tabs',desc:'Zinc, magnesio y vitamina B6 para recuperación y sueño.',flavors:'N/A',size:'90 tabletas',icon:'🌿'},
  {id:'NOW001',cat:'vitaminas',name:'NOW Super Omega 3-6-9 90 softgels',desc:'Mezcla completa de ácidos grasos esenciales.',flavors:'N/A',size:'90 softgels',icon:'🌿'},
  {id:'NOW002',cat:'vitaminas',name:'NOW Magnesium Citrate 90 gels',desc:'Magnesio citrato de alta absorción.',flavors:'N/A',size:'90 geles',icon:'🌿'},
  {id:'NOW003',cat:'vitaminas',name:'NOW Tribulus 100 caps',desc:'Tribulus terrestris para soporte hormonal natural.',flavors:'N/A',size:'100 cápsulas',icon:'🌿'},

  // ── AMINOÁCIDOS ──
  {id:'XTEND001',cat:'aminoacidos',name:'Xtend Original BCAAs 30srv Blue Raspberry',desc:'7g de BCAAs por servicio con electrolitos. El mejor BCAA del mercado.',flavors:'Blue Raspberry Ice',size:'30 servicios',icon:'💧'},
  {id:'XTEND002',cat:'aminoacidos',name:'Xtend Original BCAAs 30srv Fruit Punch',desc:'7g de BCAAs por servicio con electrolitos.',flavors:'Knockout Fruit Punch',size:'30 servicios',icon:'💧'},
  {id:'XTEND003',cat:'aminoacidos',name:'Xtend Original BCAAs 30srv Strawberry Kiwi',desc:'7g de BCAAs por servicio con electrolitos.',flavors:'Strawberry Kiwi Splash',size:'30 servicios',icon:'💧'},
  {id:'XTEND004',cat:'aminoacidos',name:'Xtend Original BCAAs 30srv Watermelon',desc:'7g de BCAAs por servicio con electrolitos.',flavors:'Watermelon',size:'30 servicios',icon:'💧'},
  {id:'ON004',cat:'aminoacidos',name:'ON Amino Energy 30srv',desc:'Aminoácidos esenciales + energía natural. Perfecto pre o post entreno.',flavors:'Blue Raspberry, Grape, Watermelon, Fruit Fusion, Strawberry Lime, Green Apple, Orange, Tropical Sunrise, Blueberry Mojito',size:'30 servicios',icon:'💧'},
  {id:'ON005',cat:'aminoacidos',name:'ON Amino Energy 65srv',desc:'Presentación grande del clásico Amino Energy.',flavors:'Blue Raspberry, Watermelon, Grape',size:'65 servicios',icon:'💧'},
  {id:'ON006',cat:'aminoacidos',name:'ON Amino Energy Drink Can',desc:'Amino Energy en lata, listo para tomar.',flavors:'Juicy Cherry, Peach Bellini, Mango Pineapple Limeade',size:'12 fl oz por lata',icon:'💧'},
  {id:'PS004',cat:'aminoacidos',name:'PS HydroBCAA + Essentials 30srv',desc:'BCAAs con hidratación y vitaminas esenciales.',flavors:'Fruit Punch, Blue Raspberry, Watermelon',size:'30 servicios',icon:'💧'},
  {id:'PS005',cat:'aminoacidos',name:'PS HydroBCAA 90srv',desc:'BCAAs en presentación grande para más ahorro.',flavors:'Passion Fruit, Strawberry Kiwi',size:'90 servicios',icon:'💧'},
  {id:'AN003',cat:'aminoacidos',name:'AN BCAA Amino Hidratación 450g',desc:'BCAAs + electrolitos + hidratación en una sola fórmula.',flavors:'G-Apple, Icy Blue Raz, Fruit Burst, Lemon & Lime, Orange & Mango, Pineapple, Watermelon',size:'450g / 32 servicios',icon:'💧'},
  {id:'AN004',cat:'aminoacidos',name:'AN Hidratación + Electrolitos + Vitaminas 240g',desc:'Fórmula de hidratación completa con vitaminas.',flavors:'Blue Raspberry, Lemon & Lime, Strawberry Raspberry, Tropical Vibes',size:'240g / 30 servicios',icon:'💧'},
  {id:'BSN004',cat:'aminoacidos',name:'BSN Amino X 70srv',desc:'BCAAs en formato efervescente, sin estimulantes.',flavors:'Blue Razz',size:'70 servicios',icon:'💧'},
  {id:'MMDS003',cat:'aminoacidos',name:'MMDS Amino Decanate 30srv',desc:'Aminoácidos completos para recuperación muscular.',flavors:'Fruit Punch, Citrus Lime, Watermelon, Strawberry Kiwi',size:'30 servicios',icon:'💧'},
  {id:'NTX003',cat:'aminoacidos',name:'NTX Glutamine Pure Drive 300g',desc:'L-Glutamina pura para recuperación y sistema inmune.',flavors:'Sin sabor',size:'300g',icon:'💧'},
  {id:'UN001',cat:'aminoacidos',name:'Animal Aminos Muscle Recovery + Hydration',desc:'BCAAs y aminoácidos esenciales de Universal Nutrition.',flavors:'Strawberry Limeade, Fruit Punch',size:'44 paquetes',icon:'💧'},

  // ── ENERGY DRINKS ──
  {id:'BLOOM001',cat:'energia',name:'Bloom Sparkling Energy Peach Mango',desc:'Bebida energética con vitaminas y aminoácidos. Sin azúcar.',flavors:'Peach Mango',size:'12 fl oz',icon:'🥤'},
  {id:'BLOOM002',cat:'energia',name:'Bloom Sparkling Energy Juice Orange',desc:'Bebida energética con vitaminas y aminoácidos.',flavors:'Juice Orange',size:'12 fl oz',icon:'🥤'},
  {id:'BLOOM003',cat:'energia',name:'Bloom Sparkling Energy Cherry Lime',desc:'Bebida energética sabor cereza y limón.',flavors:'Cherry Lime',size:'12 fl oz',icon:'🥤'},
  {id:'BLOOM004',cat:'energia',name:'Bloom Sparkling Energy Raspberry Lemon',desc:'Bebida energética sabor frambuesa y limón.',flavors:'Raspberry Lemon',size:'12 fl oz',icon:'🥤'},
  {id:'BLOOM005',cat:'energia',name:'Bloom Sparkling Energy Strawberry Watermelon',desc:'Bebida energética sabor fresa y sandía.',flavors:'Strawberry Watermelon',size:'12 fl oz',icon:'🥤'},

  // ── ACCESORIOS ──
  {id:'SHA001',cat:'accesorios',name:'Shaker C4 Negro',desc:'Shaker oficial de Cellucor C4. Botella mezcladora con malla.',flavors:'N/A',size:'20 oz',icon:'🥤'},
  {id:'SHA002',cat:'accesorios',name:'Shaker C4 Amarillo',desc:'Shaker C4 edición amarilla.',flavors:'N/A',size:'20 oz',icon:'🥤'},
  {id:'SHA003',cat:'accesorios',name:'Shaker C4 Squeeze',desc:'Shaker C4 tipo squeeze bottle.',flavors:'N/A',size:'20 oz',icon:'🥤'},
  {id:'SHA004',cat:'accesorios',name:'Shaker ON',desc:'Shaker oficial de Optimum Nutrition.',flavors:'N/A',size:'20 oz',icon:'🥤'},
  {id:'SHA005',cat:'accesorios',name:'Shaker PS',desc:'Shaker oficial de Performax Labs.',flavors:'N/A',size:'28 oz',icon:'🥤'},
  {id:'SHA006',cat:'accesorios',name:'Shaker Xtend',desc:'Shaker oficial de Xtend BCAAs.',flavors:'N/A',size:'28 oz',icon:'🥤'},
  {id:'SHA007',cat:'accesorios',name:'Shaker Ultimate Nutrition',desc:'Shaker de Ultimate Nutrition.',flavors:'N/A',size:'20 oz',icon:'🥤'},
  {id:'SHA008',cat:'accesorios',name:'AN Life Style Sport Botella 1lt Azul',desc:'Botella deportiva de 1 litro.',flavors:'N/A',size:'1 litro',icon:'🥤'},
  {id:'SHA009',cat:'accesorios',name:'AN Flask Applied Nutrition 500ml',desc:'Botella Flask 500ml color azul.',flavors:'N/A',size:'500ml',icon:'🥤'},

  // ── COMBOS ──
  {id:'COMBO001',cat:'combos',name:'Combo Suplementos Deportivos',desc:'Combo especial con múltiples suplementos. Pregunta por disponibilidad y precio.',flavors:'Según disponibilidad',size:'Combo completo',icon:'🎯'},
  {id:'COMBO002',cat:'combos',name:'NTX Promo Creatina',desc:'Promo especial de creatina NTX.',flavors:'Sin sabor',size:'Promo',icon:'🎯'},
  {id:'COMBO003',cat:'combos',name:'NTX Promo CLA',desc:'Promo especial de CLA de NTX.',flavors:'N/A',size:'Promo',icon:'🎯'},
];

const CATEGORIES = [
  {id:'proteinas', label:'Proteínas & Gainers', icon:'💪', tag:'PROTEÍNAS', desc:'ON Gold Standard, BSN, Dymatize y más'},
  {id:'creatina',  label:'Creatina',             icon:'⚡', tag:'FUERZA',    desc:'NTX, BioSport, RC, Cell-Tech y más'},
  {id:'preworkout',label:'Pre-Workout',           icon:'🔥', tag:'ENERGÍA',   desc:'C4, Total War, Mr. Hyde y más'},
  {id:'vitaminas', label:'Vitaminas & Suplementos',icon:'🌿',tag:'SALUD',    desc:'NT, NOW, GAT, colágeno y más'},
  {id:'aminoacidos',label:'Aminoácidos & BCAAs',  icon:'💧', tag:'RECUPERACIÓN',desc:'Xtend, ON Amino Energy, AN BCAAs'},
  {id:'energia',   label:'Energy Drinks',          icon:'🥤', tag:'BEBIDAS',  desc:'Bloom Sparkling y más'},
  {id:'accesorios',label:'Shakers & Accesorios',  icon:'🥤', tag:'ACCESORIOS',desc:'C4, ON, PS, Ultimate y más'},
  {id:'combos',    label:'Combos & Promos',         icon:'🎯', tag:'OFERTAS',  desc:'Combos deportivos y promociones'},
];

const BESTSELLERS_DEFAULT = [
  {name:'ON Gold Standard Whey',prod:'ON001',desc:'Proteína #1 del mundo',icon:'🏆',badge:'Top Pick',rank:'#1'},
  {name:'NTX Creatina 1K',prod:'NTX001',desc:'200 servicios',icon:'💎',badge:'Trending',rank:'#2'},
  {name:'C4 Original Pre-Workout',prod:'C4001',desc:'Energía explosiva',icon:'🔥',badge:'Clásico',rank:'#3'},
  {name:'ON Amino Energy 30srv',prod:'ON004',desc:'Energía + recuperación',icon:'💧',badge:'Favorito',rank:'#4'},
];

// ── STATE ──
let products = [];
let cart = [];
let currentCatId = '';
let currentProd = null;
let selectedVariant = '';
let adminAction = '';
let editingProdId = null;

// ── INIT ──
function init() {
  loadProducts();
  renderCategories();
  renderBestSellers();
  setupNavScroll();
  setupHamburger();
  setupScrollReveal();
  setTimeout(() => startChat(), 800);
}

// ── STORAGE ──
function loadProducts() {
  try {
    const saved = localStorage.getItem('pvfit_products');
    products = saved ? JSON.parse(saved) : [...DEFAULT_PRODUCTS];
  } catch(e) {
    products = [...DEFAULT_PRODUCTS];
  }
}
function saveProducts() {
  localStorage.setItem('pvfit_products', JSON.stringify(products));
}

// ── RENDER CATEGORIES ──
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = products.filter(p => p.cat === cat.id).length;
    return `<div class="cat-card reveal" onclick="openCategory('${cat.id}')">
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-info">
        <span class="cat-tag">${cat.tag}</span>
        <h3>${cat.label}</h3>
        <p>${cat.desc}</p>
        <span class="cat-count">${count} productos</span>
      </div>
      <i class="fas fa-chevron-right cat-arrow"></i>
    </div>`;
  }).join('');
  observeReveal();
}

// ── RENDER BESTSELLERS ──
function renderBestSellers() {
  const grid = document.getElementById('bsGrid');
  grid.innerHTML = BESTSELLERS_DEFAULT.map((bs,i) => {
    const prod = products.find(p => p.id === bs.prod) || {name:bs.name, desc:bs.desc, cat:'proteinas', icon:bs.icon, flavors:'', size:''};
    return `<div class="bs-card reveal" style="transition-delay:${i*0.08}s" onclick="openProductModal('${bs.prod}')">
      <span class="bs-rank">${bs.rank}</span>
      <div class="bs-icon">${bs.icon}</div>
      <h4>${bs.name}</h4>
      <p>${bs.desc}</p>
      <span class="bs-badge">${bs.badge}</span>
    </div>`;
  }).join('');
  observeReveal();
}

// ── OPEN CATEGORY MODAL ──
function openCategory(catId) {
  currentCatId = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  document.getElementById('catModalTitle').textContent = `${cat.icon} ${cat.label}`;
  document.getElementById('catSearch').value = '';
  renderCatProducts(products.filter(p => p.cat === catId));
  document.getElementById('catModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCatModal(e) {
  if (e && e.target !== document.getElementById('catModal')) return;
  document.getElementById('catModal').classList.remove('open');
  document.body.style.overflow = '';
}
function filterCat(q) {
  const filtered = products.filter(p => p.cat === currentCatId && p.name.toLowerCase().includes(q.toLowerCase()));
  renderCatProducts(filtered);
}
function renderCatProducts(list) {
  const container = document.getElementById('catProducts');
  if (!list.length) {
    container.innerHTML = '<p style="padding:20px;color:var(--gray);grid-column:1/-1;text-align:center">No se encontraron productos</p>';
    return;
  }
  container.innerHTML = list.map(p => `
    <div class="mprod" onclick="openProductModal('${p.id}')">
      <div class="mprod-cat">${p.icon} ${CATEGORIES.find(c=>c.id===p.cat)?.tag||p.cat}</div>
      <div class="mprod-name">${p.name}</div>
      ${p.size ? `<div class="mprod-code">${p.size}</div>` : ''}
      <button class="btn-add-prod" onclick="event.stopPropagation();addToCartQuick('${p.id}')">
        <i class="fas fa-plus"></i> Agregar
      </button>
    </div>`).join('');
}

// ── OPEN PRODUCT DETAIL MODAL ──
function openProductModal(prodId) {
  const p = products.find(x => x.id === prodId);
  if (!p) return;
  currentProd = p;
  selectedVariant = '';
  const variants = p.flavors ? p.flavors.split(',').map(f=>f.trim()).filter(Boolean) : [];
  const detail = document.getElementById('prodDetail');
  detail.innerHTML = `
    <div class="prod-detail">
      <div class="prod-detail-icon">${p.icon}</div>
      <div class="prod-detail-cat">${CATEGORIES.find(c=>c.id===p.cat)?.tag||p.cat}</div>
      <div class="prod-detail-name">${p.name}</div>
      ${p.size ? `<div class="prod-detail-code">📦 ${p.size}</div>` : ''}
      <div class="prod-detail-desc">${p.desc}</div>
      ${variants.length > 1 ? `
        <div class="variants-label">Sabores / Opciones disponibles:</div>
        <div class="variants-grid" id="varGrid">
          ${variants.map(v=>`<span class="vpill" onclick="selectVariant(this,'${v.replace(/'/g,"&#39;")}')">${v}</span>`).join('')}
        </div>` : variants.length === 1 ? `<div class="prod-detail-code">🍫 ${variants[0]}</div>` : ''}
      <div class="prod-actions">
        <button class="btn-add-cart" onclick="addToCartFromModal()">
          <i class="fas fa-shopping-bag"></i> Agregar al pedido
        </button>
        <button class="btn-wa-direct" onclick="orderDirectWA('${prodId}')">
          <i class="fab fa-whatsapp"></i> Pedir este producto por WhatsApp
        </button>
      </div>
    </div>`;
  document.getElementById('prodModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProdModal(e) {
  if (e && e.target !== document.getElementById('prodModal')) return;
  document.getElementById('prodModal').classList.remove('open');
  document.body.style.overflow = '';
}
function selectVariant(el, v) {
  document.querySelectorAll('#varGrid .vpill').forEach(p=>p.classList.remove('sel'));
  el.classList.add('sel');
  selectedVariant = v;
}
function addToCartFromModal() {
  if (!currentProd) return;
  const p = currentProd;
  const variants = p.flavors ? p.flavors.split(',').map(f=>f.trim()).filter(Boolean) : [];
  if (variants.length > 1 && !selectedVariant) {
    showToast('Por favor selecciona un sabor/opción');
    return;
  }
  const variant = selectedVariant || (variants[0] || '');
  addToCart(p, variant);
  document.getElementById('prodModal').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => toggleCart(), 200);
}
function addToCartQuick(prodId) {
  const p = products.find(x => x.id === prodId);
  if (!p) return;
  addToCart(p, '');
  showToast(`${p.icon} ${p.name.split(' ').slice(0,3).join(' ')} agregado`);
}
function orderDirectWA(prodId) {
  const p = products.find(x => x.id === prodId);
  if (!p) return;
  const variant = selectedVariant ? ` (${selectedVariant})` : '';
  const msg = encodeURIComponent(`¡Hola Pura Vida Fit! 🏋️‍♂️\n\nEstoy interesado/a en:\n• *${p.name}${variant}*\n\n¿Podría darme información sobre precio, disponibilidad y si hay alguna promo activa? 💪\n\n¡Pura vida! 🇨🇷`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ── CART ──
function addToCart(prod, variant) {
  const key = prod.id + (variant ? `__${variant}` : '');
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty++; }
  else { cart.push({key, id:prod.id, name:prod.name, icon:prod.icon, variant, qty:1}); }
  updateCartUI();
}
function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}
function updateCartUI() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    itemsEl.innerHTML = `<div class="cart-empty"><i class="fas fa-bag-shopping"></i><p>Tu carrito está vacío</p><small>Agrega productos para comenzar</small></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="ci-icon">${item.icon}</span>
      <div class="ci-info">
        <h5>${item.name}</h5>
        <small>${item.variant ? item.variant + ' · ' : ''}Cantidad: ${item.qty}</small>
      </div>
      <button class="ci-remove" onclick="removeFromCart('${item.key}')"><i class="fas fa-times"></i></button>
    </div>`).join('');
}
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}
function checkoutWA() {
  if (!cart.length) return;
  const lines = cart.map(i => `• *${i.name}*${i.variant ? ' - ' + i.variant : ''} (x${i.qty})`).join('\n');
  const msg = encodeURIComponent(
    `¡Hola Pura Vida Fit! 🏋️‍♂️\n\nQuiero hacer el siguiente pedido:\n\n${lines}\n\n¿Podría confirmarme disponibilidad, precio total y si hay alguna *promo o combo* disponible? 💪\n\n¡Pura vida! 🇨🇷`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ── ADMIN ──
function openAdminLogin(action) {
  adminAction = action;
  document.getElementById('adminPwInput').value = '';
  document.getElementById('adminPwError').textContent = '';
  document.getElementById('adminLoginModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('adminPwInput').focus(), 300);
}
function closeAdminLogin(e) {
  if (e && e.target !== document.getElementById('adminLoginModal')) return;
  document.getElementById('adminLoginModal').classList.remove('open');
  document.body.style.overflow = '';
}
function checkAdminPw() {
  const val = document.getElementById('adminPwInput').value;
  if (val === ADMIN_PASSWORD) {
    document.getElementById('adminLoginModal').classList.remove('open');
    openAdminPanel(adminAction);
  } else {
    document.getElementById('adminPwError').textContent = 'Contraseña incorrecta. Intenta de nuevo.';
    document.getElementById('adminPwInput').value = '';
    document.getElementById('adminPwInput').focus();
  }
}
function openAdminPanel(action) {
  editingProdId = null;
  const inner = document.getElementById('adminPanelInner');
  if (action === 'prod_add' || action === 'cat_add') {
    inner.innerHTML = buildAdminForm(null);
  } else if (action === 'bs_add') {
    inner.innerHTML = buildAdminEditList();
  }
  document.getElementById('adminPanelModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAdminPanel(e) {
  if (e && e.target !== document.getElementById('adminPanelModal')) return;
  document.getElementById('adminPanelModal').classList.remove('open');
  document.body.style.overflow = '';
}
function buildAdminForm(prod) {
  const cats = CATEGORIES.map(c => `<option value="${c.id}" ${prod&&prod.cat===c.id?'selected':''}>${c.label}</option>`).join('');
  return `
    <h2><i class="fas fa-${prod?'pen':'plus'}"></i> ${prod ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
    <p>${prod ? `Editando: ${prod.name}` : 'Completa los campos para agregar un nuevo producto al catálogo.'}</p>
    <div class="admin-form">
      <label>Nombre del producto *</label>
      <input type="text" id="af_name" value="${prod?.name||''}" placeholder="Ej: ON Gold Standard Whey 5lb"/>
      <label>Categoría *</label>
      <select id="af_cat">${cats}</select>
      <label>Descripción</label>
      <textarea id="af_desc" placeholder="Descripción del producto...">${prod?.desc||''}</textarea>
      <label>Sabores / Opciones disponibles</label>
      <input type="text" id="af_flavors" value="${prod?.flavors||''}" placeholder="Ej: Chocolate, Vanilla, Strawberry"/>
      <p class="hint">Separa los sabores con comas.</p>
      <label>Tamaño / Servicios</label>
      <input type="text" id="af_size" value="${prod?.size||''}" placeholder="Ej: 5lb / 74 servicios"/>
      <label>Ícono (emoji)</label>
      <input type="text" id="af_icon" value="${prod?.icon||'💪'}" placeholder="💪" maxlength="4"/>
      <div class="admin-form-actions">
        <button class="btn-admin-save" onclick="saveAdminProduct('${prod?.id||''}')">
          <i class="fas fa-save"></i> Guardar producto
        </button>
        <button class="btn-admin-cancel" onclick="closeAdminPanel()">Cancelar</button>
      </div>
      <div class="admin-success" id="adminSuccess">✅ Producto guardado correctamente</div>
    </div>`;
}
function buildAdminEditList() {
  return `
    <h2><i class="fas fa-list"></i> Editar Productos</h2>
    <p>Selecciona un producto para editarlo o agrega uno nuevo.</p>
    <div style="margin-bottom:16px">
      <input type="text" class="admin-pw-input" placeholder="Buscar producto..." oninput="filterAdminList(this.value)" id="adminListSearch"/>
    </div>
    <div class="admin-prod-list" id="adminProdList">
      ${buildAdminListItems(products)}
    </div>
    <button class="btn-admin-save" style="width:100%" onclick="document.getElementById('adminPanelInner').innerHTML=buildAdminForm(null)">
      <i class="fas fa-plus"></i> Agregar producto nuevo
    </button>`;
}
function buildAdminListItems(list) {
  return list.slice(0,50).map(p => `
    <div class="admin-prod-row">
      <span>${p.icon} ${p.name}</span>
      <small>${CATEGORIES.find(c=>c.id===p.cat)?.label||p.cat}</small>
      <button class="btn-edit-prod" onclick="editProduct('${p.id}')"><i class="fas fa-pen"></i> Editar</button>
    </div>`).join('');
}
function filterAdminList(q) {
  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById('adminProdList').innerHTML = buildAdminListItems(filtered);
}
function editProduct(id) {
  editingProdId = id;
  const prod = products.find(p => p.id === id);
  document.getElementById('adminPanelInner').innerHTML = buildAdminForm(prod);
}
function saveAdminProduct(existingId) {
  const name = document.getElementById('af_name').value.trim();
  const cat = document.getElementById('af_cat').value;
  const desc = document.getElementById('af_desc').value.trim();
  const flavors = document.getElementById('af_flavors').value.trim();
  const size = document.getElementById('af_size').value.trim();
  const icon = document.getElementById('af_icon').value.trim() || '💪';
  if (!name) { alert('El nombre del producto es obligatorio.'); return; }
  if (existingId) {
    const idx = products.findIndex(p => p.id === existingId);
    if (idx > -1) { products[idx] = {...products[idx], name, cat, desc, flavors, size, icon}; }
  } else {
    const newId = cat.toUpperCase().slice(0,3) + Date.now().toString().slice(-5);
    products.push({id:newId, cat, name, desc, flavors, size, icon});
  }
  saveProducts();
  renderCategories();
  const suc = document.getElementById('adminSuccess');
  if (suc) { suc.style.display='block'; setTimeout(()=>{suc.style.display='none';},3000); }
}

// ── CHATBOT ──
let chatOpen = false, chatStarted = false;
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatBox').classList.toggle('open', chatOpen);
  document.getElementById('chatFabIcon').className = chatOpen ? 'fas fa-times' : 'fas fa-robot';
  if (chatOpen && !chatStarted) { chatStarted = true; setTimeout(startChat, 400); }
}
function addMsg(text, who='bot') {
  const el = document.createElement('div');
  el.className = `msg ${who}`;
  el.innerHTML = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  document.getElementById('chatMessages').appendChild(el);
  document.getElementById('chatMessages').scrollTop = 99999;
}
function setChatBtns(btns) {
  const area = document.getElementById('chatInputArea');
  area.innerHTML = '';
  btns.forEach(b => {
    const el = document.createElement('button');
    el.className = `chat-btn ${b.cls||''}`;
    el.textContent = b.label;
    el.onclick = b.fn;
    area.appendChild(el);
  });
}
const chatRecs = {
  muscle: {label:'💪 Ganar músculo', prods:['ON001','NTX001'], msg:'Para ganar músculo lo mejor es **Proteína Whey + Creatina**. La ON Gold Standard es nuestra proteína #1 y la NTX Creatina 1K es la más popular.'},
  energy: {label:'⚡ Más energía',   prods:['C4001'],          msg:'Para energía explosiva te recomendamos el **C4 Original Pre-Workout**. El más vendido del mercado.'},
  recovery:{label:'🔄 Recuperación', prods:['XTEND001','AN004'],msg:'Para recuperación lo mejor son **BCAAs Xtend + Electrolitos AN Hidratación**. Repara músculo y repone minerales.'},
  fat:    {label:'🔥 Bajar grasa',   prods:['NT001','NT014'],   msg:'Para apoyar la pérdida de grasa te recomendamos **Multivitamínico + Apple Cider Vinegar gummies**. Nutrición inteligente.'},
  wellness:{label:'🌿 Bienestar',    prods:['NT001','NT003'],   msg:'Para bienestar general, **Multivitamínico Hombres/Mujeres + Colágeno Péptidos**. Salud completa desde adentro.'},
};
function startChat() {
  addMsg('👋 ¡Hola! Bienvenido/a a **Pura Vida Fit**. ¿Cuál es tu meta fitness?');
  setTimeout(() => {
    setChatBtns([
      {label:'💪 Ganar músculo',  fn:()=>chatGoal('muscle')},
      {label:'⚡ Más energía',    fn:()=>chatGoal('energy')},
      {label:'🔄 Recuperación',   fn:()=>chatGoal('recovery')},
      {label:'🔥 Bajar grasa',    fn:()=>chatGoal('fat')},
      {label:'🌿 Bienestar',      fn:()=>chatGoal('wellness'), cls:'full'},
    ]);
  }, 500);
}
function chatGoal(goal) {
  const rec = chatRecs[goal];
  addMsg(rec.label, 'user');
  document.getElementById('chatInputArea').innerHTML = '';
  setTimeout(() => {
    addMsg(rec.msg);
    setTimeout(() => {
      addMsg('¿Quieres hacer tu pedido por **WhatsApp** ahora? 📲');
      setTimeout(() => {
        const names = rec.prods.map(id=>products.find(p=>p.id===id)?.name||id).join(' + ');
        setChatBtns([
          {label:'✅ Sí, pedir ahora', cls:'green full', fn:()=>{
            addMsg('¡Perfecto! Abriendo WhatsApp... 🚀','user');
            document.getElementById('chatInputArea').innerHTML='';
            setTimeout(()=>{
              const msg = encodeURIComponent(`¡Hola Pura Vida Fit! 🏋️\n\nMi meta es: ${rec.label}\n\nEstoy interesado/a en:\n${rec.prods.map(id=>`• *${products.find(p=>p.id===id)?.name||id}*`).join('\n')}\n\n¿Me pueden ayudar con precio, disponibilidad y si hay alguna *promo*? 💪\n\n¡Pura vida! 🇨🇷`);
              window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,'_blank');
              addMsg('¡Listo! 🎉 Cualquier otra consulta estamos aquí.');
              setChatBtns([{label:'🔄 Consultar otra meta', cls:'full', fn:()=>{addMsg('¡Claro! ¿Cuál es tu meta?');setTimeout(()=>setChatBtns([
                {label:'💪 Ganar músculo',fn:()=>chatGoal('muscle')},
                {label:'⚡ Más energía',  fn:()=>chatGoal('energy')},
                {label:'🔄 Recuperación', fn:()=>chatGoal('recovery')},
                {label:'🔥 Bajar grasa',  fn:()=>chatGoal('fat')},
                {label:'🌿 Bienestar',    fn:()=>chatGoal('wellness'),cls:'full'},
              ]),300);}}]);
            }, 800);
          }},
          {label:'❌ Ahora no', cls:'full', fn:()=>{
            addMsg('Sin problema 😊','user');
            setTimeout(()=>{addMsg('¡Aquí estaré cuando lo necesites! 💪');
              setChatBtns([{label:'🔄 Ver otras opciones',cls:'full',fn:()=>{addMsg('¿Cuál es tu meta?');setTimeout(()=>setChatBtns([
                {label:'💪 Ganar músculo',fn:()=>chatGoal('muscle')},
                {label:'⚡ Más energía',  fn:()=>chatGoal('energy')},
                {label:'🔄 Recuperación', fn:()=>chatGoal('recovery')},
                {label:'🔥 Bajar grasa',  fn:()=>chatGoal('fat')},
                {label:'🌿 Bienestar',    fn:()=>chatGoal('wellness'),cls:'full'},
              ]),300);}}]);
            },600);
          }},
        ]);
      }, 400);
    }, 600);
  }, 400);
}

// ── NAV SCROLL ──
function setupNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── HAMBURGER ──
function setupHamburger() {
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    links.classList.toggle('open');
    const spans = ham.querySelectorAll('span');
    const open = links.classList.contains('open');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity = open ? '0' : '';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
    document.body.style.overflow = open ? 'hidden' : '';
  });
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity='';});
  document.body.style.overflow = '';
}

// ── SCROLL REVEAL ──
function setupScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, {threshold:0.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ── SMOOTH SCROLL ──
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a) {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  }
});

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── CLOSE MODALS ON ESC ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    document.body.style.overflow = '';
  }
});

// ── START ──
document.addEventListener('DOMContentLoaded', init);
