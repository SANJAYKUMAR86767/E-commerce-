import React, { useState, useMemo, useRef, useEffect } from "react";
import "./MobileSection.css";

/* ═════════════════════════════════════════════════════════════
   2026 CLEAN SMARTPHONE BRAND CATEGORIES
═════════════════════════════════════════════════════════════ */
const mobileCategories = [
  { id: "all",      label: "All Models (5,000)", icon: "📱", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&auto=format&fit=crop" },
  { id: "iphone",   label: "Apple iPhone",      icon: "🍎", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100&auto=format&fit=crop" },
  { id: "samsung",  label: "Samsung Galaxy",   icon: "🌌", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop" },
  { id: "oneplus",  label: "OnePlus 5G",        icon: "🔴", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&auto=format&fit=crop" },
  { id: "redmi",    label: "Xiaomi Redmi",     icon: "⚡", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&auto=format&fit=crop" },
  { id: "vivo",     label: "Vivo ZEISS",        icon: "📸", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b5652?w=100&auto=format&fit=crop" },
  { id: "oppo",     label: "Oppo Reno",        icon: "✨", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=100&auto=format&fit=crop" },
  { id: "realme",   label: "Realme 5G",        icon: "🟡", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&auto=format&fit=crop" },
  { id: "nothing",  label: "Nothing Phone",    icon: "🔲", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&auto=format&fit=crop" },
  { id: "moto",     label: "Motorola Edge",    icon: "🏎️", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=100&auto=format&fit=crop" },
  { id: "iqoo",     label: "iQOO Gaming",      icon: "🎮", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&auto=format&fit=crop" },
  { id: "5g",       label: "5G Flagships",     icon: "📶", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&auto=format&fit=crop" }
];

const mobileImages = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574944985070-8f3ebc6b5652?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop"
];

const FALLBACK_MOB = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop";

/* 2026 SPECIFICATIONS TEMPLATES */
const modelTemplates = [
  { brand: "iphone", name: "Apple iPhone 16 Pro Max (256GB Desert Titanium)", specs: "📱 6.9\" 120Hz Super Retina · 🚀 A18 Pro · 📸 48MP Fusion · 🔋 4685mAh", badge: "👑 2026 Flagship" },
  { brand: "samsung", name: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 512GB)", specs: "📱 6.8\" 120Hz AMOLED 2X · 🚀 Snapdragon 8 Gen 3 · 📸 200MP OIS · 🔋 5000mAh", badge: "📸 200MP AI Beast" },
  { brand: "oneplus", name: "OnePlus 12 5G (16GB RAM, 512GB Silky Black)", specs: "📱 6.82\" 2K 120Hz · 🚀 Snapdragon 8 Gen 3 · 📸 50MP Hasselblad · ⚡ 100W Charge", badge: "🚀 100W SuperVOOC" },
  { brand: "redmi", name: "Xiaomi 14 Ultra (512GB Leica Quad Camera)", specs: "📱 6.73\" WQHD+ 120Hz · 🚀 Snapdragon 8 Gen 3 · 📸 50MP Leica 1\" · 🔋 5000mAh", badge: "📷 Leica Cinema" },
  { brand: "vivo", name: "Vivo X100 Pro 5G (16GB RAM, Sunset Orange)", specs: "📱 6.78\" 120Hz LTPO · 🚀 Dimensity 9300 · 📸 50MP ZEISS APO · 🔋 5400mAh", badge: "🔭 ZEISS Telephoto" },
  { brand: "oppo", name: "Oppo Find X7 Ultra (Dual Periscope Camera)", specs: "📱 6.82\" 2K 120Hz · 🚀 Snapdragon 8 Gen 3 · 📸 50MP Quad · ⚡ 100W Flash", badge: "✨ Dual Periscope" },
  { brand: "nothing", name: "Nothing Phone (2a) Plus (Glyph Matrix Light)", specs: "📱 6.7\" 120Hz AMOLED · 🚀 Dimensity 7350 Pro · 📸 50MP Dual · ⚡ 50W Fast", badge: "🔲 Glyph Lighting" },
  { brand: "moto", name: "Motorola Edge 50 Ultra (Real Wood Back, 512GB)", specs: "📱 6.7\" 144Hz P-OLED · 🚀 Snapdragon 8s Gen 3 · 📸 50MP OIS · ⚡ 125W Fast", badge: "🏎️ 144Hz Wood Finish" },
  { brand: "iqoo", name: "iQOO 12 5G (Dedicated Q1 Gaming Chip, 256GB)", specs: "📱 6.78\" 144Hz AMOLED · 🚀 Snapdragon 8 Gen 3 · 📸 50MP OIS · ⚡ 120W Flash", badge: "🎮 Ultra Gaming" },
  { brand: "realme", name: "Realme GT 6 5G (6000 Nits Brightness, 512GB)", specs: "📱 6.78\" 120Hz LTPO · 🚀 Snapdragon 8s Gen 3 · 📸 50MP Sony LYT · ⚡ 120W", badge: "⚡ 6000 Nits Screen" }
];

const generate500MobileProducts = () => {
  const items = [];
  const TOTAL = 500;

  for (let i = 0; i < TOTAL; i++) {
    const t = modelTemplates[i % modelTemplates.length];
    const ram = 8 + (i * 4) % 12;
    const storage = 128 * (1 + (i % 4));

    const name = `${t.name} (Variant #${i + 1})`;
    let mrp = Math.floor(18999 + (i * 387) % 150000);
    let disc = 15 + (i * 3) % 40;
    let price = Math.floor(mrp * (1 - disc / 100));

    const rating = (4.6 + ((i * 9) % 4) / 10).toFixed(1);
    const reviews = 1200 + (i * 347) % 95000;
    const img = mobileImages[i % mobileImages.length];

    items.push({
      _id: `mob_2026_${i + 1}`,
      name,
      price,
      mrp,
      discount: disc,
      ratings: parseFloat(rating),
      numOfReviews: reviews,
      image: img,
      category: t.brand,
      specs: t.specs,
      badge: t.badge,
      ram: `${ram}GB`,
      storage: `${storage}GB`
    });
  }
  return items;
};

const ALL_500_MOBILES = generate500MobileProducts();

const MobileSection = () => {
  const pillsRef = useRef(null);
  const cardsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  // AUTO-ROTATE MOBILE CAROUSEL TICKER
  useEffect(() => {
    const timer = setInterval(() => {
      if (cardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          cardsRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  const handleCardsScroll = (dir) => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const filteredMobiles = useMemo(() => {
    return ALL_500_MOBILES.filter(p => {
      const catMatch = selectedCategory === "all" || p.category === selectedCategory;
      const searchMatch = !searchText || p.name.toLowerCase().includes(searchText.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [selectedCategory, searchText]);

  const activeCategoryMeta = useMemo(() => {
    return mobileCategories.find(c => c.id === selectedCategory) || mobileCategories[0];
  }, [selectedCategory]);

  return (
    <div className="mobileSectionContainer" id="mobile-section">

      {/* HEADER BANNER */}
      <div style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
        border: "2px solid #778da9",
        borderRadius: "20px",
        padding: "1.6rem 2rem",
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
        boxShadow: "0 12px 35px rgba(13, 27, 42, 0.35)",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span style={{ background: "linear-gradient(135deg, #ff9f00, #ff6000)", color: "#ffffff", fontSize: "0.75rem", fontWeight: "900", padding: "0.3rem 0.9rem", borderRadius: "20px", letterSpacing: "0.5px" }}>
            ⚡ FLIPKART OFFICIAL SMARTPHONE HUB
          </span>
          <h2 style={{ fontSize: "1.65rem", fontWeight: "900", margin: "0.6rem 0 0.2rem", color: "#e0e1dd" }}>
            📱 Mobile Phones & Smartphones Store (2026 Models)
          </h2>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.92 }}>
            Browse 2026 flagships by brand with full specifications, bank offers & instant discounts
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="🔍 Search iPhone, Samsung, 5G..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            style={{
              padding: "0.65rem 1.2rem",
              borderRadius: "30px",
              border: "2px solid #778da9",
              outline: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              width: "220px",
              background: "rgba(255,255,255,0.95)",
              color: "#000",
              fontWeight: "700"
            }}
          />
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <button className="mobileNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="mobileNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span style={{ background: "linear-gradient(135deg, #778da9, #415a77)", color: "#fff", padding: "0.6rem 1.2rem", borderRadius: "30px", fontWeight: "900", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
            {filteredMobiles.length} Models
          </span>
        </div>
      </div>

      {/* HORIZONTAL BRAND PILL NAV */}
      <div className="mobileNavWrapper">
        <div className="mobileNavScroll" ref={pillsRef}>
          {mobileCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`mobileBrandPill ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <div className="pillImageWrapper">
                  <img src={cat.image} alt="" className="pillImg" aria-hidden="true" />
                </div>
                <span className="pillName">{cat.icon} {cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D MOBILE CAROUSEL */}
      <div className="mobile3DCarouselContainer" ref={cardsRef}>
        {filteredMobiles.slice(0, 48).map((product) => (
          <div key={product._id} className="mobile3DProductCard">
            {/* IMAGE BOX WITH 3D PERSPECTIVE */}
            <div className="mobile3DImgBox">
              <img
                src={product.image}
                alt=""
                aria-hidden="true"
                className="mobile3DCardImg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_MOB;
                }}
              />
              <span className="mobileDiscountTag">-{product.discount}% OFF</span>
              <span className="mobileBadgeTag">{product.badge}</span>
            </div>

            {/* CONTENT BODY */}
            <div className="mobile3DCardBody">
              <span className="mobileCategoryBrand">{activeCategoryMeta.label}</span>
              <h4 className="mobile3DItemTitle">{product.name}</h4>

              {/* SPECS CHIP */}
              <div className="mobileSpecsChip">{product.specs}</div>

              <div className="mobileRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {product.ratings}</span>
                <span className="mobileReviewsText">({product.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="mobilePriceRow">
                <span className="mobilePriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="mobilePriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
              </div>

              <div className="mobileCardBtnRow">
                <button className="mobileAddToCartBtn">🛒 Add to Cart</button>
                <button className="mobileBuyNowBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MobileSection;
