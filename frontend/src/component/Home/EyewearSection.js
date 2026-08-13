import React, { useState, useMemo, useRef, useEffect } from "react";
import "./EyewearSection.css";

/* ═══════════════════════════════════════════════════════════════════
   EYEWEAR CATEGORY PILLS
═══════════════════════════════════════════════════════════════════ */
const eyewearPills = [
  { id: "all",       label: "🕶️ All Eyewear",          icon: "🕶️" },
  { id: "sunglass",  label: "😎 Sunglasses",            icon: "😎" },
  { id: "aviator",   label: "✈️ Aviator",               icon: "✈️" },
  { id: "square",    label: "⬛ Square Frames",          icon: "⬛" },
  { id: "round",     label: "⭕ Round Frames",           icon: "⭕" },
  { id: "spectacle", label: "👓 Spectacle Frames",       icon: "👓" },
  { id: "bluelight", label: "💻 Blue Light Blocking",   icon: "💻" },
  { id: "sports",    label: "🏃 Sports Goggles",        icon: "🏃" },
  { id: "kids",      label: "🧒 Kids Eyewear",          icon: "🧒" },
  { id: "unisex",    label: "⚡ Unisex Trendy",          icon: "⚡" },
];

/* ═══════════════════════════════════════════════════════════════════
   100% UNIQUE EYEWEAR PRODUCTS — ALL DIFFERENT BRANDS & STYLES
═══════════════════════════════════════════════════════════════════ */
const UNIQUE_EYEWEAR = [
  {
    id: "ew_001",
    name: "Ray-Ban New Wayfarer Classic Matte Black Polarized Sunglasses (RB2132)",
    brand: "Ray-Ban", cat: "sunglass", style: "square",
    price: 7490, mrp: 10290, discount: 27, rating: 4.9, reviews: 48200,
    specs: "🕶️ Polarized Lens · UV400 Protection · Signature Tortoiseshell Frame",
    badge: "👑 Ray-Ban Icon",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_002",
    name: "Oakley Holbrook XL Matte Grey Smoke Sports Sunglasses (OO9417)",
    brand: "Oakley", cat: "sports", style: "sports",
    price: 9990, mrp: 13500, discount: 26, rating: 4.9, reviews: 31400,
    specs: "🏃 Prizm Road Lens · O-Matter Frame · Unobtainium Nosepad · Sports Wrap",
    badge: "⚡ Oakley Sports Pro",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_003",
    name: "HRINKAR Brown Metal Full Rim Oval Prescription Spectacle Frame",
    brand: "HRINKAR", cat: "spectacle", style: "round",
    price: 699, mrp: 1299, discount: 46, rating: 4.7, reviews: 28600,
    specs: "👓 Lightweight Metal Alloy · Anti-Scratch Coating · Unisex Round Oval Frame",
    badge: "🔥 Amazon #1",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_004",
    name: "Vincent Chase VC S14889 Black Unisex Gradient Aviator Sunglasses",
    brand: "Vincent Chase", cat: "aviator", style: "aviator",
    price: 999, mrp: 1999, discount: 50, rating: 4.8, reviews: 55100,
    specs: "✈️ 100% UV400 · Classic Pilot Aviator · Gold Metal Bridge · Gradient Smoke Lens",
    badge: "✈️ Bestselling Aviator",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_005",
    name: "Fastrack Gradient Square Wayfarer Sunglasses for Men & Women (C099BK1V)",
    brand: "Fastrack", cat: "sunglass", style: "square",
    price: 1295, mrp: 1995, discount: 35, rating: 4.8, reviews: 72300,
    specs: "😎 100% UV Protection · Polycarbonate Lens · Lightweight TR90 Frame",
    badge: "🔥 Fastrack Bestseller",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_006",
    name: "FLASH Unisex Square Oversized Sunglasses Black Gold Thick Frame",
    brand: "FLASH", cat: "square", style: "square",
    price: 449, mrp: 999, discount: 55, rating: 4.6, reviews: 19800,
    specs: "⬛ Bold Oversized Square · Celebrity-Style Fashion Eyewear · UV400",
    badge: "🌟 Celebrity Style",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_007",
    name: "Lenskart John Jacobs JJ S13282 Full-Rim Glossy Havana Cat-Eye Spectacle",
    brand: "Lenskart", cat: "spectacle", style: "round",
    price: 2750, mrp: 3999, discount: 31, rating: 4.9, reviews: 41200,
    specs: "👓 Premium Acetate Frame · Anti-Reflection Coating · Scratch-Resistant Lens",
    badge: "✨ JJ Premium",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_008",
    name: "Devin Raised Oval Unisex Oval Full-Rim Blue-Light Blocking Computer Glasses",
    brand: "Devin", cat: "bluelight", style: "round",
    price: 599, mrp: 1299, discount: 54, rating: 4.7, reviews: 33900,
    specs: "💻 99% Blue Light Block · Anti-Glare Coating · Zero Power Computer Glasses",
    badge: "💻 Blue Light Shield",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_009",
    name: "Ponderabla UV Protection Square Wrap-Around Sports Sunglasses (Meesho)",
    brand: "Ponderabla", cat: "sports", style: "sports",
    price: 299, mrp: 699, discount: 57, rating: 4.6, reviews: 14200,
    specs: "🏃 UV400 Wrap-Around · Polarized Sports Lens · BUY 1 GET 1 FREE",
    badge: "🏷️ B1G1 Offer",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_010",
    name: "Polaroid PLD 6042/S Matte Ruthenium Pilot Aviator Polarized Sunglasses",
    brand: "Polaroid", cat: "aviator", style: "aviator",
    price: 3499, mrp: 4999, discount: 30, rating: 4.8, reviews: 22700,
    specs: "✈️ Polaroid® Polarized Lens · 99% UVA/UVB Filtering · Metal Full-Rim Frame",
    badge: "🔵 Polaroid Pro",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_011",
    name: "Carrera 1001/S Black Gold Full-Rim Rectangle Sports Sunglasses",
    brand: "Carrera", cat: "sunglass", style: "square",
    price: 5999, mrp: 8500, discount: 29, rating: 4.8, reviews: 18400,
    specs: "😎 Injected Frame · Grey Gradient Lens · Signature Carrera Stripes Temple",
    badge: "🏎️ Racing Style",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_012",
    name: "Titan Eyeplus TR90 Round Thin Metal Rimless Spectacle Frame (TF1054)",
    brand: "Titan Eye+", cat: "spectacle", style: "round",
    price: 1999, mrp: 3200, discount: 37, rating: 4.9, reviews: 36800,
    specs: "👓 TR90 Flexible Memory Frame · Hypo-Allergenic · Ultra-Lightweight 10g",
    badge: "👓 Titan Premium",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_013",
    name: "Safari Glasses Anti-Glare Full-Rim Rectangle Kids Spectacle Frame (Blue)",
    brand: "Safari", cat: "kids", style: "square",
    price: 499, mrp: 999, discount: 50, rating: 4.7, reviews: 12600,
    specs: "🧒 Flexible Safe Rubber Frame · Adjustable Nose Pads · Anti-Scratch Blue Lens",
    badge: "🧒 Safe Kids Pick",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_014",
    name: "Bolon BL7082 Gold Hexagonal Metal Rimless Luxury Sunglasses",
    brand: "Bolon", cat: "unisex", style: "round",
    price: 4990, mrp: 6800, discount: 26, rating: 4.9, reviews: 9800,
    specs: "⚡ Hexagonal Thin Metal Lens · Luxury Minimal Design · UV400 Gradient Tint",
    badge: "💎 Luxury Minimal",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_015",
    name: "Maui Jim Peahi HT432-02 Gloss Black Wrap Sports Sunglasses (Hawaii)",
    brand: "Maui Jim", cat: "sports", style: "sports",
    price: 16990, mrp: 22000, discount: 22, rating: 4.9, reviews: 7200,
    specs: "🏄 PolarizedPlus2® Lens · SuperThin Glass · Patented Blue Light Filter",
    badge: "🏄 Hawaii Sports Premium",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_016",
    name: "GrandFlex Anti-Blue Ray Reading Glasses +1.0/+1.5/+2.0/+2.5/+3.0 (Unisex)",
    brand: "GrandFlex", cat: "bluelight", style: "square",
    price: 349, mrp: 799, discount: 56, rating: 4.6, reviews: 52400,
    specs: "💻 Anti-Blue Light + Anti-Glare · Spring Hinge · Lightweight Resin Lens",
    badge: "🏷️ Best Budget Pick",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_017",
    name: "Oakley Radar EV Path OO9208 Polished Black Prizm Road Cycling Sunglasses",
    brand: "Oakley", cat: "sports", style: "sports",
    price: 12999, mrp: 17500, discount: 25, rating: 4.9, reviews: 15600,
    specs: "🚴 Prizm Road Optimized Lens · Earsock Grip · Adjustable Nosepiece",
    badge: "🚴 Cycling Pro",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_018",
    name: "Carrera Hyperfit 10/S Dark Havana Rectangle Fashion Sunglasses for Women",
    brand: "Carrera", cat: "unisex", style: "square",
    price: 6499, mrp: 9000, discount: 27, rating: 4.8, reviews: 11300,
    specs: "⚡ Bold Dark Havana Acetate Frame · Gradient Brown Lens · UV Protection",
    badge: "✨ Women's Trendy",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_019",
    name: "Specsmakers Zed Unisex Round Thin Wire Metal Spectacle Frame (SM WX8008)",
    brand: "Specsmakers", cat: "spectacle", style: "round",
    price: 1499, mrp: 2499, discount: 40, rating: 4.8, reviews: 27900,
    specs: "👓 Ultra-Thin Stainless Steel Wire · Minimalist Aesthetic · Adjustable Pads",
    badge: "👓 Minimalist Pick",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_020",
    name: "Ray-Ban Aviator Classic Gold Green Polarized Sunglasses (RB3025 001/58)",
    brand: "Ray-Ban", cat: "aviator", style: "aviator",
    price: 9990, mrp: 13500, discount: 26, rating: 4.9, reviews: 92400,
    specs: "✈️ Classic 62mm Aviator · G-15 Polarized Lens · Gold Metal Bridge · World Icon",
    badge: "✈️ The Original Aviator",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_021",
    name: "Peter Jones PJS110 Black Full-Rim Wayfarer Fashion Sunglasses for Men",
    brand: "Peter Jones", cat: "sunglass", style: "square",
    price: 449, mrp: 999, discount: 55, rating: 4.6, reviews: 38200,
    specs: "😎 UV400 Protection · Polycarbonate Lens · Matte Finish Wayfarer Style",
    badge: "🏷️ Budget Bestseller",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_022",
    name: "Bausch & Lomb Ray-Ban Justin Classic Rubber Black Gradient Sunglasses (RB4165)",
    brand: "Ray-Ban", cat: "sunglass", style: "square",
    price: 6990, mrp: 9500, discount: 26, rating: 4.9, reviews: 61000,
    specs: "😎 Justin Oversized Wayfarer · Rubber Matte Finish · Gradient Grey Lens",
    badge: "😎 Justin Exclusive",
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_023",
    name: "SafeVision Computer Glasses Anti-Blue Light Clip-On for Spectacle Users",
    brand: "SafeVision", cat: "bluelight", style: "round",
    price: 249, mrp: 599, discount: 58, rating: 4.5, reviews: 18900,
    specs: "💻 Universal Clip-On · Flips Up/Down · Fits Over Spectacles · 99% Blue Block",
    badge: "💻 Clip-On Saver",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_024",
    name: "Vans Spicoli 4 Shades Matte Black Flat-Top Square Fashion Sunglasses",
    brand: "Vans", cat: "square", style: "square",
    price: 1695, mrp: 2500, discount: 32, rating: 4.7, reviews: 14800,
    specs: "⬛ Flat-Top Skater Square Frame · 100% UV Lenses · Rubberized Temples",
    badge: "🛹 Skater Vibes",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"
  },
  {
    id: "ew_025",
    name: "Titan Raga TR-8065 Rose Gold Oval Metal Full-Rim Spectacle Frame for Women",
    brand: "Titan Eye+", cat: "unisex", style: "round",
    price: 2499, mrp: 3999, discount: 37, rating: 4.8, reviews: 22300,
    specs: "⚡ Rose Gold Metal Frame · Spring Hinge · Oval Shape · Premium Ladies Design",
    badge: "🌸 Ladies Premium",
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop"
  },
];

const EyewearSection = () => {
  const cardsRef = useRef(null);
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (!cardsRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        cardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const nav = (dir) =>
    cardsRef.current?.scrollBy({ left: dir === "l" ? -320 : 320, behavior: "smooth" });

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return UNIQUE_EYEWEAR.filter(p => {
      const catOk = selectedCat === "all" || p.cat === selectedCat || p.style === selectedCat;
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [selectedCat, search]);

  return (
    <section className="ewSection" id="eyewear-store">

      {/* ── HERO BANNER ── */}
      <div className="ewBanner">
        <div className="ewBannerLeft">
          <span className="ewLiveChip">🕶️ FLIPKART OFFICIAL EYEWEAR & SUNGLASSES STORE</span>
          <h2 className="ewBanTitle">
            😎 Sunglasses, Spectacles & Blue-Light Frames
          </h2>
          <p className="ewBanSub">
            Ray-Ban · Oakley · Fastrack · Lenskart · Titan Eye+ · Vincent Chase · Carrera · Polaroid · Maui Jim · Bolon
          </p>
          <div className="ewBanStats">
            <div className="ewStat"><span className="ewStatNum">500+</span><span className="ewStatLabel">Branded Models</span></div>
            <div className="ewStat"><span className="ewStatNum">25+</span><span className="ewStatLabel">Top Brands</span></div>
            <div className="ewStat"><span className="ewStatNum">Up to 60%</span><span className="ewStatLabel">OFF Today</span></div>
            <div className="ewStat"><span className="ewStatNum">Free</span><span className="ewStatLabel">Lens Cleaning Kit</span></div>
          </div>
        </div>
        <div className="ewBannerRight">
          <input
            className="ewSearch"
            type="text"
            placeholder="🔍 Search Ray-Ban, Aviator, Spectacle..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="ewNavRow">
            <button className="ewNavBtn" onClick={() => nav("l")}>❮</button>
            <button className="ewNavBtn" onClick={() => nav("r")}>❯</button>
            <span className="ewCountChip">{filtered.length} Models</span>
          </div>
        </div>
      </div>

      {/* ── CATEGORY PILLS ── */}
      <div className="ewPillsBar">
        {eyewearPills.map(p => (
          <button
            key={p.id}
            className={`ewPill ${selectedCat === p.id ? "ewPillActive" : ""}`}
            onClick={() => setSelectedCat(p.id)}
          >
            <span className="ewPillIcon">{p.icon}</span>
            <span className="ewPillLabel">{p.label}</span>
          </button>
        ))}
      </div>

      {/* ── 3D CAROUSEL ── */}
      <div className="ewCarousel" ref={cardsRef}>
        {filtered.length === 0 && (
          <div className="ewEmpty">🔍 No results — try another category!</div>
        )}
        {filtered.map(product => (
          <div key={product.id} className="ewCard">

            {/* IMAGE */}
            <div className="ewCardImgBox">
              <img src={product.img} alt="" aria-hidden="true" className="ewCardImg" />
              <span className="ewDiscChip">-{product.discount}%</span>
              <span className="ewBadgeChip">{product.badge}</span>
              <div className="ewCardOverlay">
                <button className="ewOverlayBtn">👁 Quick View</button>
                <button className="ewOverlayBuy">⚡ Buy Now</button>
              </div>
            </div>

            {/* BODY */}
            <div className="ewCardBody">
              <span className="ewBrandLabel">{product.brand}</span>
              <h4 className="ewCardTitle">{product.name}</h4>
              <div className="ewSpecsRow">{product.specs}</div>
              <div className="ewRatingRow">
                <span className="ewStars">★ {product.rating}</span>
                <span className="ewRevs">({product.reviews.toLocaleString("en-IN")} reviews)</span>
              </div>
              <div className="ewPriceRow">
                <span className="ewPrice">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="ewMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
                <span className="ewSaved">Save ₹{(product.mrp - product.price).toLocaleString("en-IN")}</span>
              </div>
              <div className="ewFreeTag">🚚 Free Delivery · 🔄 7-Day Return</div>
              <div className="ewBtnRow">
                <button className="ewCartBtn">🛒 Add to Cart</button>
                <button className="ewBuyBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="ewTrustStrip">
        <span>✅ 100% Authentic Branded Eyewear</span>
        <span>🚚 Free Express Delivery</span>
        <span>🔄 7-Day Easy Returns</span>
        <span>🧹 Free Lens Cleaning Kit</span>
        <span>💳 No Cost EMI on ₹999+</span>
        <span>👓 Free Frame Adjustment</span>
      </div>

    </section>
  );
};

export default EyewearSection;

