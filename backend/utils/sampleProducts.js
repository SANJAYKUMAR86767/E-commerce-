const Product = require("../models/productModel");
const mongoose = require("mongoose");

// ═════════════════════════════════════════════════════════════════
// FLIPKART MEGA CATALOG ARCHETYPES (Duniya ka Har Ek Saman - 14 Departments)
// ═════════════════════════════════════════════════════════════════
const masterArchetypes = [
  // ── 1. MOBILES & TABLETS ──
  {
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "SmartPhones",
    basePrice: 144900,
    rating: 4.9,
    reviews: 8420,
    desc: "A18 Pro Bionic chip, Grade 5 Titanium design, 48MP Fusion camera with 5x telephoto, Camera Control button.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Apple iPhone 15",
    brand: "Apple",
    category: "SmartPhones",
    basePrice: 65999,
    rating: 4.8,
    reviews: 14200,
    desc: "Dynamic Island, 48MP main camera, A16 Bionic processor, USB-C connectivity, Ceramic Shield front.",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "SmartPhones",
    basePrice: 129999,
    rating: 4.8,
    reviews: 6920,
    desc: "Galaxy AI live translation & Circle to Search, Snapdragon 8 Gen 3, 200MP Quad Telephoto, built-in S-Pen.",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Samsung Galaxy Z Fold 5 5G",
    brand: "Samsung",
    category: "SmartPhones",
    basePrice: 154999,
    rating: 4.7,
    reviews: 3100,
    desc: "7.6-inch Dynamic AMOLED 2X foldable display, Flex Hinge, Snapdragon 8 Gen 2, Multi-window multitasking.",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Google Pixel 9 Pro XL 5G",
    brand: "Google",
    category: "SmartPhones",
    basePrice: 124999,
    rating: 4.7,
    reviews: 2950,
    desc: "Google Tensor G4 with Gemini Nano, Super Actua display, Pro triple camera system with 30x Super Res Zoom.",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "SmartPhones",
    basePrice: 64999,
    rating: 4.7,
    reviews: 7850,
    desc: "Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, 5400mAh battery with 100W SUPERVOOC charging.",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Xiaomi 14 Ultra 5G",
    brand: "Xiaomi",
    category: "SmartPhones",
    basePrice: 99999,
    rating: 4.8,
    reviews: 2180,
    desc: "Leica Quad Camera with 1-inch LYT-900 sensor, stepless variable aperture, Snapdragon 8 Gen 3.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "SmartPhones",
    basePrice: 36999,
    rating: 4.5,
    reviews: 5410,
    desc: "Unique transparent Glyph Interface, Snapdragon 8+ Gen 1, dual 50MP Sony sensors, Nothing OS 2.5.",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Motorola Edge 50 Ultra 5G",
    brand: "Motorola",
    category: "SmartPhones",
    basePrice: 54999,
    rating: 4.6,
    reviews: 3200,
    desc: "Real Wood finish back, Snapdragon 8s Gen 3, 144Hz pOLED curved display, 125W TurboPower.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
  },

  // ── 2. LAPTOPS & COMPUTING ──
  {
    name: "Apple MacBook Pro M3 Max 16-inch",
    brand: "Apple",
    category: "Laptop",
    basePrice: 249900,
    rating: 4.9,
    reviews: 1840,
    desc: "16-core CPU, 40-core GPU, Liquid Retina XDR display with 1600 nits peak brightness, 22-hour battery life.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Apple MacBook Air M3 15-inch",
    brand: "Apple",
    category: "Laptop",
    basePrice: 134900,
    rating: 4.8,
    reviews: 4120,
    desc: "Strikingly thin design, M3 chip with 8-core CPU and 10-core GPU, MagSafe 3, 1080p FaceTime HD camera.",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Dell XPS 16 OLED Laptop",
    brand: "Dell",
    category: "Laptop",
    basePrice: 219990,
    rating: 4.7,
    reviews: 1100,
    desc: "Intel Core Ultra 9, NVIDIA RTX 4070, 4K+ InfinityEdge OLED touch display, capacitive touch function row.",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "ASUS ROG Zephyrus G16 Gaming Laptop",
    brand: "ASUS",
    category: "Laptop",
    basePrice: 189990,
    rating: 4.8,
    reviews: 2350,
    desc: "ROG Nebula 2.5K 240Hz OLED display, Intel Core Ultra 9 185H, RTX 4080 12GB, Slash Lighting aluminum chassis.",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Lenovo Legion Pro 7i AI Gaming Laptop",
    brand: "Lenovo",
    category: "Laptop",
    basePrice: 198990,
    rating: 4.7,
    reviews: 1890,
    desc: "Intel Core i9-14900HX, RTX 4080 GPU, Legion ColdFront 5.0 vapor chamber cooling, 240Hz WQXGA panel.",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "HP Spectre x360 2-in-1 Touch Laptop",
    brand: "HP",
    category: "Laptop",
    basePrice: 154990,
    rating: 4.6,
    reviews: 1450,
    desc: "Intel Core Ultra 7 with AI Boost, 2.8K 120Hz OLED touchscreen, 360-degree convertible hinge, HP Tilt Pen.",
    img: "https://images.unsplash.com/photo-1544731612-de2f96407ad9?w=800&auto=format&fit=crop&q=80"
  },

  // ── 3. AUDIO & HEADPHONES ──
  {
    name: "Sony WH-1000XM5 Wireless ANC Headphones",
    brand: "Sony",
    category: "Audio",
    basePrice: 28990,
    rating: 4.9,
    reviews: 12400,
    desc: "Industry leading noise canceling with 8 microphones, Auto NC Optimizer, LDAC High-Res audio, 30h battery.",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Apple AirPods Pro 2 (USB-C)",
    brand: "Apple",
    category: "Audio",
    basePrice: 22990,
    rating: 4.8,
    reviews: 18900,
    desc: "H2 chip, 2x more Active Noise Cancellation, Adaptive Audio, Conversation Awareness, MagSafe Case with Speaker.",
    img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Bose QuietComfort Ultra Headphones",
    brand: "Bose",
    category: "Audio",
    basePrice: 35900,
    rating: 4.8,
    reviews: 3200,
    desc: "World-class spatialized Bose Immersive Audio, CustomTune technology, Custom ultra soft ear cushions.",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Marshall Stanmore III Wireless Bluetooth Speaker",
    brand: "Marshall",
    category: "Audio",
    basePrice: 34999,
    rating: 4.8,
    reviews: 2150,
    desc: "Iconic rock 'n' roll vintage design, outward-angled tweeters, updated waveguides, Dynamic Loudness.",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "JBL PartyBox 310 Portable Bluetooth Party Speaker",
    brand: "JBL",
    category: "Audio",
    basePrice: 38999,
    rating: 4.7,
    reviews: 4300,
    desc: "240 Watts massive JBL Pro Sound, dynamic synchronized light show, dual mic and guitar inputs, IPX4 splashproof.",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
  },

  // ── 4. SMARTWATCHES & WEARABLES ──
  {
    name: "Apple Watch Ultra 2 GPS + Cellular",
    brand: "Apple",
    category: "Smartwatches",
    basePrice: 89900,
    rating: 4.9,
    reviews: 3400,
    desc: "49mm aerospace grade titanium case, S9 SiP with Double Tap gesture, 3000 nits display, precision dual GPS.",
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Samsung Galaxy Watch 6 Classic 47mm",
    brand: "Samsung",
    category: "Smartwatches",
    basePrice: 34999,
    rating: 4.7,
    reviews: 4100,
    desc: "Signature rotating bezel, Sapphire Crystal glass, Body Composition BIA sensor, ECG and Blood Pressure tracking.",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Garmin Fenix 7X Pro Solar Smartwatch",
    brand: "Garmin",
    category: "Smartwatches",
    basePrice: 84990,
    rating: 4.9,
    reviews: 1200,
    desc: "Power Sapphire solar charging lens, built-in LED flashlight, endurance score, multi-band GNSS with SatIQ.",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
  },

  // ── 5. TV & APPLIANCES ──
  {
    name: "LG 65-inch 4K OLED evo C3 Smart TV",
    brand: "LG",
    category: "Appliances",
    basePrice: 154990,
    rating: 4.9,
    reviews: 3800,
    desc: "Self-lit OLED pixels with Brightness Booster, α9 AI Processor 4K Gen6, Dolby Vision & Atmos, 120Hz gaming.",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Samsung 75-inch The Frame QLED 4K Art TV",
    brand: "Samsung",
    category: "Appliances",
    basePrice: 199990,
    rating: 4.8,
    reviews: 2100,
    desc: "Matte Display transforms into a work of art when off, customizable bezel, Quantum Processor 4K, Art Store.",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Daikin 1.5 Ton 5 Star Inverter Split AC",
    brand: "Daikin",
    category: "Appliances",
    basePrice: 45990,
    rating: 4.7,
    reviews: 6700,
    desc: "Copper condenser, PM 2.5 air filter, 3D Airflow, Dew Clean technology, high ambient cooling up to 54°C.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Bosch 9kg 1400 RPM Front Load Inverter Washing Machine",
    brand: "Bosch",
    category: "Appliances",
    basePrice: 42990,
    rating: 4.8,
    reviews: 5120,
    desc: "EcoSilence Drive brushless motor, AntiStain removal of 4 tough stains, ActiveWater Plus pressure sensor.",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Samsung 653L Side-by-Side Smart Inverter Refrigerator",
    brand: "Samsung",
    category: "Appliances",
    basePrice: 79990,
    rating: 4.7,
    reviews: 4300,
    desc: "SpaceMax technology for more interior space, All-around Cooling, SmartThings WiFi connectivity, convertible 5-in-1.",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Dyson V15 Detect Absolute Cordless Vacuum Cleaner",
    brand: "Dyson",
    category: "Appliances",
    basePrice: 59900,
    rating: 4.8,
    reviews: 2900,
    desc: "Illuminates invisible dust on hard floors, acoustic piezo sensor counts particles, LCD screen proof of deep clean.",
    img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80"
  },

  // ── 6. MEN'S FASHION & FOOTWEAR ──
  {
    name: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    category: "Fashion",
    basePrice: 16995,
    rating: 4.9,
    reviews: 9800,
    desc: "Iconic court silhouette with premium genuine leather upper, encapsulated Air-Sole unit, rubber cupsole.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Adidas Ultraboost Light Running Shoes",
    brand: "Adidas",
    category: "Fashion",
    basePrice: 14999,
    rating: 4.8,
    reviews: 6400,
    desc: "Lightest Boost cushioning ever, Linear Energy Push system, Primeknit+ textile upper with sock-like fit.",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Levi's 501 Original Fit Denim Jeans",
    brand: "Levi's",
    category: "Fashion",
    basePrice: 3899,
    rating: 4.7,
    reviews: 11200,
    desc: "The timeless straight-leg classic, signature button fly, 100% non-stretch durable cotton denim construction.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Manyavar Royal Embroidered Sherwani & Kurta Set",
    brand: "Manyavar",
    category: "Fashion",
    basePrice: 18999,
    rating: 4.9,
    reviews: 2450,
    desc: "Exquisite hand-embroidered resham and zari work on premium art silk fabric, includes churidar and stole.",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Raymond Italian Wool 2-Piece Formal Suit",
    brand: "Raymond",
    category: "Fashion",
    basePrice: 12999,
    rating: 4.7,
    reviews: 1800,
    desc: "Crafted from fine Merino wool blend, tailored slim fit notch lapel blazer with matching flat-front trousers.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Woodland Leather Outdoor Waterproof Boots",
    brand: "Woodland",
    category: "Fashion",
    basePrice: 5995,
    rating: 4.6,
    reviews: 7300,
    desc: "Genuine nubuck leather, heavy lugged rubber outsole for all-terrain traction, cushioned ankle collar.",
    img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"
  },

  // ── 7. WOMEN'S FASHION & ETHNIC WEAR ──
  {
    name: "Kanchipuram Handwoven Pure Zari Silk Wedding Saree",
    brand: "Biba",
    category: "Fashion",
    basePrice: 14999,
    rating: 4.9,
    reviews: 3200,
    desc: "Traditional South Indian bridal saree with rich gold zari pallu, contrast border, includes unstitched blouse.",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Zara Satin Drape Slip Evening Gown",
    brand: "Zara",
    category: "Fashion",
    basePrice: 4990,
    rating: 4.6,
    reviews: 1980,
    desc: "Cowled neckline, adjustable criss-cross back straps, side slit hem, lustrous viscose satin drape.",
    img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Kors Jet Set Large Saffiano Leather Tote Bag",
    brand: "Michael Kors",
    category: "Fashion",
    basePrice: 22500,
    rating: 4.8,
    reviews: 1650,
    desc: "Durable crosshatch Saffiano leather, gold-tone hardware, spacious interior with padded tablet pocket.",
    img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Aldo Strappy Stiletto Party High Heels",
    brand: "Aldo",
    category: "Fashion",
    basePrice: 7999,
    rating: 4.7,
    reviews: 1420,
    desc: "Pillow Walk dual density cushioned foam insole, sleek ankle buckle strap, shimmering metallic finish.",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
  },

  // ── 8. BEAUTY & FRAGRANCES ──
  {
    name: "Dior Sauvage Elixir Pure Parfum (100ml)",
    brand: "Dior",
    category: "Beauty",
    basePrice: 15500,
    rating: 4.9,
    reviews: 7800,
    desc: "Concentrated fragrance steeped in the iconic freshness of Sauvage with an intoxicating heart of spices & rich woods.",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Chanel Bleu de Chanel Eau de Parfum (100ml)",
    brand: "Chanel",
    category: "Beauty",
    basePrice: 14800,
    rating: 4.9,
    reviews: 6200,
    desc: "A woody, aromatic fragrance with cedar and amber notes, intensely masculine and sophisticated signature.",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Forest Essentials Soundarya 24K Gold Radiance Cream",
    brand: "Forest Essentials",
    category: "Beauty",
    basePrice: 4950,
    rating: 4.8,
    reviews: 3100,
    desc: "Infused with 24 Karat Gold Bhasma, saffron, and cold-pressed sesame oil to deeply nourish and impart natural glow.",
    img: "https://images.unsplash.com/photo-1608248597261-e4d990f14d87?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Minimalist 10% Niacinamide Serum with Zinc",
    brand: "Minimalist",
    category: "Beauty",
    basePrice: 599,
    rating: 4.7,
    reviews: 16500,
    desc: "Pure Vitamin B3 serum that balances sebum activity, minimizes pore appearance, and evens out skin tone.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Dyson Airwrap Multi-Styler Complete Long",
    brand: "Dyson",
    category: "Beauty",
    basePrice: 49900,
    rating: 4.8,
    reviews: 2400,
    desc: "Uses the Coanda airflow effect to curl, wave, smooth and dry hair with no extreme heat damage.",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=80"
  },

  // ── 9. HOME, LIVING & FURNITURE ──
  {
    name: "Wakefit 8-inch Orthopedic Memory Foam Mattress (King)",
    brand: "Wakefit",
    category: "Home",
    basePrice: 14999,
    rating: 4.8,
    reviews: 15400,
    desc: "High resilience foam with Next-Gen memory foam layer, pressure-relieving body contouring, removable washable cover.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Green Soul Monster Ergonomic Gaming & Office Chair",
    brand: "Green Soul",
    category: "Home",
    basePrice: 17490,
    rating: 4.7,
    reviews: 8200,
    desc: "Heavy-duty metal frame, 4D adjustable armrests, magnetic memory foam head pillow, 180-degree reclining backrest.",
    img: "https://images.unsplash.com/photo-1580481077195-c9a416362f6b?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Prestige Tri-Ply Stainless Steel 5-Piece Cookware Set",
    brand: "Prestige",
    category: "Home",
    basePrice: 6490,
    rating: 4.7,
    reviews: 9100,
    desc: "Three-layer body with aluminum core for even heat distribution, induction & gas compatible, riveted stay-cool handles.",
    img: "https://images.unsplash.com/photo-1584990347449-a3e21e7eb68b?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Philips Hue White & Color Ambiance Smart Bulb Starter Kit",
    brand: "Philips",
    category: "Home",
    basePrice: 9999,
    rating: 4.6,
    reviews: 3800,
    desc: "16 million colors, sync with music & movies, wireless control via Hue Bridge, voice control via Alexa & Google.",
    img: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?w=800&auto=format&fit=crop&q=80"
  },

  // ── 10. SUPER KIRANA & GOURMET GROCERIES ──
  {
    name: "Aashirvaad Select Shubh Sharbati Whole Wheat Atta 10kg",
    brand: "Aashirvaad",
    category: "Grocery",
    basePrice: 485,
    rating: 4.8,
    reviews: 24000,
    desc: "100% pure MP Sharbati wheat grains, naturally sweet golden rotis with extra softness and high dietary fiber.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Daawat Biryani Special Extra Long Basmati Rice 5kg",
    brand: "Daawat",
    category: "Grocery",
    basePrice: 799,
    rating: 4.8,
    reviews: 18200,
    desc: "Aged to perfection, grains elongate up to 24mm when cooked with rich royal aroma and non-sticky texture.",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Fortune Sunlite Refined Sunflower Cooking Oil 5L",
    brand: "Fortune",
    category: "Grocery",
    basePrice: 625,
    rating: 4.7,
    reviews: 31000,
    desc: "Enriched with Vitamin A and D, light on stomach with high smoke point, ideal for healthy Indian cooking.",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Nescafe Gold Blend Freeze Dried Instant Coffee 200g",
    brand: "Nescafe",
    category: "Grocery",
    basePrice: 945,
    rating: 4.8,
    reviews: 14500,
    desc: "Golden roasted mountain-grown Arabica and Robusta coffee beans, rich velvety crema and smooth rich taste.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Ferrero Rocher Fine Hazelnut Chocolates (Box of 24)",
    brand: "Ferrero",
    category: "Grocery",
    basePrice: 995,
    rating: 4.9,
    reviews: 12800,
    desc: "Whole crunchy hazelnut in the center, delicious creamy filling, crisp wafer shell covered in milk chocolate.",
    img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Borges Extra Virgin Cold Pressed Spanish Olive Oil 1L",
    brand: "Borges",
    category: "Grocery",
    basePrice: 1299,
    rating: 4.8,
    reviews: 7900,
    desc: "Crafted from selected Mediterranean olives, cold extracted within 24 hours, rich in heart-healthy antioxidants.",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80"
  },

  // ── 11. SPORTS, FITNESS & GAMING ──
  {
    name: "Sony PlayStation 5 Slim Console (1TB SSD)",
    brand: "Sony",
    category: "Sports",
    basePrice: 54990,
    rating: 4.9,
    reviews: 15400,
    desc: "Ultra-high speed SSD, ray tracing, haptic feedback and adaptive triggers via DualSense wireless controller.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Microsoft Xbox Series X 1TB Console",
    brand: "Microsoft",
    category: "Sports",
    basePrice: 49990,
    rating: 4.8,
    reviews: 7600,
    desc: "12 teraflops of raw graphic processing power, 4K gaming up to 120 FPS, Xbox Velocity Architecture.",
    img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Nintendo Switch OLED Model with White Joy-Cons",
    brand: "Nintendo",
    category: "Sports",
    basePrice: 32990,
    rating: 4.8,
    reviews: 8900,
    desc: "Vibrant 7-inch OLED screen, wide adjustable stand, wired LAN port dock, 64GB internal storage, handheld & TV play.",
    img: "https://images.unsplash.com/photo-1578306899723-5e72d3e9118c?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Yonex Astrox 99 Pro Tour Grade Badminton Racket",
    brand: "Yonex",
    category: "Sports",
    basePrice: 14999,
    rating: 4.8,
    reviews: 3200,
    desc: "Rotational Generator System with Namd graphite in shaft, delivers overwhelming steep smash power.",
    img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Decathlon Corength 20kg Hexagonal Rubber Dumbbell Set",
    brand: "Decathlon",
    category: "Sports",
    basePrice: 3999,
    rating: 4.7,
    reviews: 9400,
    desc: "Durable cast iron core encased in heavy rubber, hexagonal flat edges prevent rolling on gym floors.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80"
  },

  // ── 12. AUTOMOTIVE, TOOLS & HARDWARE ──
  {
    name: "Bosch GSB 550 Professional 13mm Impact Drill Kit",
    brand: "Bosch",
    category: "Automotive",
    basePrice: 3899,
    rating: 4.7,
    reviews: 14200,
    desc: "Robust 550 Watt motor, includes 90 essential accessories in a sturdy carrying toolbox, dual mode hammer & drilling.",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Vega Bolt ISI & DOT Certified Full Face Helmet",
    brand: "Vega",
    category: "Automotive",
    basePrice: 2199,
    rating: 4.6,
    reviews: 18500,
    desc: "High impact ABS shell, scratch resistant UV protected clear visor with quick release buckle, aerodynamic vents.",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "70mai A810 4K HDR Front & Rear Dash Camera with GPS",
    brand: "70mai",
    category: "Automotive",
    basePrice: 16999,
    rating: 4.8,
    reviews: 2800,
    desc: "Sony Starvis 2 IMX678 sensor, 4K UHD recording, AI motion detection for 24H parking surveillance, built-in GPS.",
    img: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=80"
  },

  // ── 13. BOOKS & BESTSELLERS ──
  {
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    brand: "James Clear",
    category: "Books",
    basePrice: 549,
    rating: 4.9,
    reviews: 42000,
    desc: "International #1 bestseller by James Clear, practical framework for improving every day through compounding 1% gains.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "The Psychology of Money: Timeless Lessons on Wealth & Happiness",
    brand: "Morgan Housel",
    category: "Books",
    basePrice: 389,
    rating: 4.8,
    reviews: 31000,
    desc: "19 short stories exploring the strange ways people think about money and how behavior trumps intelligence.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"
  }
];

// Color & Variant Modifiers
const colorVariants = [
  "Titanium Natural", "Midnight Black", "Deep Space Blue", "Pearl White",
  "Glacier Silver", "Sunset Gold", "Emerald Green", "Royal Crimson",
  "Rose Gold", "Graphite Gray"
];

const editionModifiers = [
  { label: "Standard Edition", priceMult: 1.0 },
  { label: "Pro Combo Pack (+ Extra Accessories)", priceMult: 1.15 },
  { label: "Festive Special Edition", priceMult: 0.92 },
  { label: "Plus Extended Warranty Bundle", priceMult: 1.08 },
  { label: "Family Value Pack", priceMult: 1.25 },
  { label: "Exclusive Flipkart Special", priceMult: 0.88 },
  { label: "Premium Limited Edition", priceMult: 1.35 },
  { label: "Mega Savings Pack", priceMult: 0.95 }
];

// ═════════════════════════════════════════════════════════════════
// PROCEDURAL MEGA CATALOG GENERATOR (Creates 10,000+ Products)
// ═════════════════════════════════════════════════════════════════
const generateMegaCatalog = () => {
  const catalog = [];
  let idCounter = 1;

  // 1. Add pristine original archetypes
  const defaultAdminId = "64f1a2b3c4d5e6f7a8b9c999";
  masterArchetypes.forEach((item) => {
    catalog.push({
      _id: "65f0" + String(idCounter++).padStart(20, "0"),
      name: item.name,
      description: item.desc,
      price: item.basePrice,
      ratings: item.rating,
      category: item.category,
      brand: item.brand,
      Stock: 25,
      numOfReviews: item.reviews,
      images: [{ public_id: `prod_${idCounter}`, url: item.img }],
      user: defaultAdminId
    });
  });

  // 2. Expand systematically into 10,000+ realistic products
  const targetTotal = 10000;
  let cycle = 0;

  while (catalog.length < targetTotal) {
    const base = masterArchetypes[cycle % masterArchetypes.length];
    const color = colorVariants[(cycle * 3) % colorVariants.length];
    const edition = editionModifiers[(cycle * 7) % editionModifiers.length];

    const adjustedPrice = Math.max(99, Math.round(base.basePrice * edition.priceMult * (0.95 + ((cycle % 15) * 0.01))));
    const adjustedRating = Number((4.1 + ((cycle % 9) * 0.09)).toFixed(1));
    const adjustedStock = 12 + (cycle % 85);
    const adjustedReviews = Math.round(base.reviews * (0.5 + ((cycle % 20) * 0.05)));

    catalog.push({
      _id: "65f0" + String(idCounter++).padStart(20, "0"),
      name: `${base.name} (${color}, ${edition.label})`,
      description: `${base.desc} Special edition in stunning ${color}. Certified authentic Flipkart verified product.`,
      price: adjustedPrice,
      ratings: adjustedRating,
      category: base.category,
      brand: base.brand,
      Stock: adjustedStock,
      numOfReviews: adjustedReviews,
      images: [{ public_id: `prod_${idCounter}`, url: base.img }],
      user: defaultAdminId
    });

    cycle++;
  }

  return catalog;
};

// Singleton in-memory master array
const sampleProductsData = generateMegaCatalog();

// ═════════════════════════════════════════════════════════════════
// HIGH PERFORMANCE CATALOG QUERY ENGINE (Search, Filter, Sort, Paginate)
// ═════════════════════════════════════════════════════════════════
const SYNONYM_MAP = {
  "ps5": ["playstation 5", "playstation console", "dualsense"],
  "xbox": ["xbox series", "microsoft console"],
  "ac": ["air conditioner", "inverter split", "daikin ac"],
  "air conditioner": ["inverter split", "daikin", "ac"],
  "tv": ["smart tv", "television", "oled tv", "qled tv", "the frame tv", "4k tv"],
  "television": ["smart tv", "tv", "oled tv", "qled tv"],
  "fridge": ["refrigerator", "side-by-side"],
  "refrigerator": ["fridge", "side-by-side"],
  "washing machine": ["front load", "bosch", "washer"],
  "washer": ["washing machine", "front load", "bosch"],
  "shoes": ["sneakers", "running shoes", "jordan", "ultraboost", "boots"],
  "shoe": ["sneakers", "running shoes", "jordan", "ultraboost", "boots"],
  "sneakers": ["nike air jordan", "adidas ultraboost", "footwear"],
  "sneaker": ["nike air jordan", "adidas ultraboost"],
  "boots": ["woodland", "outdoor waterproof", "boots"],
  "kapda": ["fashion", "saree", "jeans", "shirt", "suit", "sherwani"],
  "clothes": ["fashion", "saree", "jeans", "shirt", "suit", "sherwani"],
  "clothing": ["fashion", "saree", "jeans", "shirt", "suit"],
  "saree": ["kanchipuram", "zari silk", "ethnic"],
  "sari": ["kanchipuram", "zari silk", "ethnic"],
  "kurta": ["manyavar", "sherwani", "ethnic"],
  "suit": ["raymond", "blazer", "formal suit"],
  "sherwani": ["manyavar", "kurta", "wedding"],
  "perfume": ["fragrance", "dior sauvage", "chanel bleu", "parfum"],
  "fragrance": ["perfume", "dior", "chanel", "parfum"],
  "makeup": ["beauty", "niacinamide", "serum", "dyson airwrap", "cream"],
  "skincare": ["beauty", "minimalist", "forest essentials", "serum"],
  "cream": ["soundarya", "forest essentials", "radiance cream"],
  "rashan": ["grocery", "atta", "sharbati", "basmati rice", "sunflower cooking oil", "kirana"],
  "kirana": ["grocery", "atta", "sharbati", "basmati", "sunflower", "coffee"],
  "grocery": ["kirana", "atta", "sharbati", "basmati", "sunflower", "coffee", "rocher"],
  "atta": ["aashirvaad", "wheat atta", "sharbati"],
  "rice": ["daawat", "basmati", "biryani"],
  "oil": ["fortune sunflower", "olive oil", "cooking oil"],
  "coffee": ["nescafe", "gold blend"],
  "chocolate": ["ferrero rocher"],
  "headphones": ["headset", "sony wh", "airpods", "bose", "audio"],
  "earphones": ["airpods", "earbuds"],
  "earbuds": ["airpods", "earphones"],
  "speaker": ["marshall", "jbl partybox", "bluetooth speaker"],
  "watch": ["smartwatch", "apple watch", "galaxy watch", "garmin"],
  "smartwatch": ["apple watch", "galaxy watch", "garmin"],
  "mattress": ["wakefit", "orthopedic memory foam"],
  "chair": ["green soul", "gaming chair", "office chair"],
  "tools": ["bosch impact drill", "hardware", "toolbox", "drill"],
  "drill": ["bosch gsb", "impact drill"],
  "helmet": ["vega bolt", "motorcycle helmet"],
  "dashcam": ["70mai", "car camera", "dash camera"],
  "books": ["atomic habits", "psychology of money"],
  "book": ["atomic habits", "psychology of money"],
  "gym": ["decathlon", "dumbbell", "weights", "fitness"],
  "dumbbell": ["decathlon corength", "hexagonal rubber", "dumbbell"],
  "badminton": ["yonex astrox", "racket", "badminton"],
  "racket": ["yonex astrox", "badminton"],
  "mobile": ["smartphones", "iphone", "samsung", "pixel", "oneplus", "xiaomi", "nothing"],
  "mobiles": ["smartphones", "iphone", "samsung", "pixel", "oneplus", "xiaomi", "nothing"],
  "phone": ["smartphones", "iphone", "samsung", "pixel", "oneplus", "xiaomi", "nothing"],
  "laptop": ["macbook", "dell xps", "rog zephyrus", "legion", "spectre"],
  "laptops": ["macbook", "dell xps", "rog zephyrus", "legion", "spectre"]
};

const matchesTerm = (text, term) => {
  if (!term || !text) return false;
  const clean = term.toLowerCase().trim();
  if (!clean) return false;
  if (clean.length <= 3) {
    const escaped = clean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|\\s|[.,()\\/\\-])` + escaped + `($|\\s|[.,()\\/\\-])`, "i");
    return regex.test(text);
  }
  return text.includes(clean);
};

const queryCatalog = (query = {}, defaultLimit = 12) => {
  let list = sampleProductsData;

  // 1. Full-Text Search with Smart Synonym Expansion and Word Boundary Matching
  if (query.keyword && query.keyword.trim()) {
    const rawQ = query.keyword.trim().toLowerCase();
    const tokens = rawQ.split(/\s+/).filter(Boolean);
    const searchTerms = [rawQ, ...tokens];

    // Check if any token has synonyms
    tokens.forEach((tok) => {
      if (SYNONYM_MAP[tok]) {
        searchTerms.push(...SYNONYM_MAP[tok]);
      }
    });
    if (SYNONYM_MAP[rawQ]) {
      searchTerms.push(...SYNONYM_MAP[rawQ]);
    }

    list = list.filter((p) => {
      const targetText = `${p.name || ""} ${p.brand || ""} ${p.category || ""} ${p.description || ""}`.toLowerCase();

      // Check full query or all individual tokens
      if (matchesTerm(targetText, rawQ)) return true;
      if (tokens.length > 1 && tokens.every((tok) => matchesTerm(targetText, tok))) return true;

      // Check any expanded synonym term
      return searchTerms.some((term) => matchesTerm(targetText, term));
    });
  }

  // 2. Category Filter (with smart synonyms)
  if (query.category) {
    const rawCat = query.category.toLowerCase();
    list = list.filter((p) => {
      const pCat = (p.category || "").toLowerCase();
      if (rawCat === "mobiles" || rawCat === "smartphones") {
        return pCat.includes("phone") || pCat.includes("mobile");
      }
      if (rawCat === "electronics" || rawCat === "laptop") {
        return pCat.includes("laptop") || pCat.includes("electronics") || pCat.includes("audio") || pCat.includes("smartwatch");
      }
      if (rawCat === "fashion") {
        return pCat.includes("fashion") || pCat.includes("attire");
      }
      if (rawCat === "appliances") {
        return pCat.includes("appliance") || pCat.includes("tv");
      }
      if (rawCat === "home") {
        return pCat.includes("home") || pCat.includes("furniture");
      }
      if (rawCat === "beauty") {
        return pCat.includes("beauty") || pCat.includes("fragrance");
      }
      if (rawCat === "grocery") {
        return pCat.includes("grocery") || pCat.includes("kirana");
      }
      if (rawCat === "sports") {
        return pCat.includes("sport") || pCat.includes("game") || pCat.includes("fitness");
      }
      return pCat === rawCat || pCat.includes(rawCat);
    });
  }

  // 3. Price Filter (gte & lte)
  if (query.price) {
    if (query.price.gte !== undefined) {
      list = list.filter((p) => p.price >= Number(query.price.gte));
    }
    if (query.price.lte !== undefined) {
      list = list.filter((p) => p.price <= Number(query.price.lte));
    }
  }

  // 4. Ratings Filter
  if (query.ratings && query.ratings.gte !== undefined) {
    list = list.filter((p) => p.ratings >= Number(query.ratings.gte));
  }

  // 5. Sorting
  if (query.sort) {
    if (query.sort === "price_asc") list.sort((a, b) => a.price - b.price);
    else if (query.sort === "price_desc") list.sort((a, b) => b.price - a.price);
    else if (query.sort === "rating") list.sort((a, b) => b.ratings - a.ratings);
    else if (query.sort === "popular") list.sort((a, b) => b.numOfReviews - a.numOfReviews);
  }

  const totalCount = list.length;
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.max(1, Number(query.limit) || defaultLimit);
  const startIndex = (page - 1) * limit;
  const paginated = list.slice(startIndex, startIndex + limit);

  return {
    products: paginated,
    totalCount,
    page,
    limit,
    totalPages: Math.ceil(totalCount / limit)
  };
};

const getProductById = (id) => {
  return sampleProductsData.find((p) => String(p._id) === String(id));
};

const seedSampleProductsIfEmpty = async () => {
  try {
    const count = await Product.countDocuments();
    if (count < 50) {
      console.log("Seeding top Flipkart products into MongoDB...");
      const initialBatch = sampleProductsData.slice(0, 150);
      await Product.deleteMany({});
      await Product.insertMany(initialBatch);
      console.log(`✅ Seeded ${initialBatch.length} live products into MongoDB Atlas.`);
    }
  } catch (error) {
    console.warn("MongoDB initial seed skipped (Atlas connection offline/read-only):", error.message);
  }
};

module.exports = {
  sampleProductsData,
  queryCatalog,
  getProductById,
  seedSampleProductsIfEmpty
};
