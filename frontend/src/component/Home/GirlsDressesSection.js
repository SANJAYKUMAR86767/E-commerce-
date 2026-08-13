import React, { useState, useMemo, useRef, useEffect } from "react";
import "./GirlsDressesSection.css";

/* ═════════════════════════════════════════════════════════════
   FILTER PILLS
═════════════════════════════════════════════════════════════ */
const googleFilterPills = [
  { id: "all",         label: "🌟 All Clothes", icon: "🛍️" },
  { id: "mens",        label: "Men's",          icon: "👔" },
  { id: "womens",      label: "Women's",        icon: "👗" },
  { id: "kids",        label: "Kids'",          icon: "🧒" },
  { id: "tops",        label: "Tops",           icon: "👚" },
  { id: "bottoms",     label: "Bottoms",        icon: "👖" },
  { id: "dresses",     label: "Dresses",        icon: "💃" },
  { id: "shirtstops",  label: "Shirts & Tops",  icon: "👕" },
  { id: "outfitsets",  label: "Outfit Sets",    icon: "🥻" },
  { id: "ethnic",      label: "Ethnic Wear",    icon: "🪷" },
  { id: "western",     label: "Western Wear",   icon: "✨" },
  { id: "under1000",   label: "Under ₹1,000",   icon: "🏷️" },
  { id: "cotton",      label: "Cotton",         icon: "🌱" },
  { id: "onsale",      label: "On sale",        icon: "🔥" }
];

const FALLBACK_FASHION = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop";

/* ═════════════════════════════════════════════════════════════
   32 HIGH-QUALITY UNIQUE BRANDED CLOTHING ITEMS
═════════════════════════════════════════════════════════════ */
const ALL_CLOTHES = [
  // 👔 MEN'S
  {
    id: "m_1", name: "Levi's Men's 511 Slim Fit Jeans", brand: "Levi's",
    price: 1799, mrp: 2999, discount: 40, rating: 4.8, rev: 3200,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "bottoms", "western", "cotton", "onsale"],
    tag: "🔥 Levi's Bestseller", specs: "👖 Slim Fit · Stretch Denim · Indigo Blue"
  },
  {
    id: "m_2", name: "Allen Solly Men's Solid Polo Neck T-Shirt", brand: "Allen Solly",
    price: 699, mrp: 1099, discount: 36, rating: 4.5, rev: 4500,
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "tops", "shirtstops", "under1000", "cotton"],
    tag: "👕 Classic Polo", specs: "👕 Regular Fit · 100% Cotton · Half Sleeve"
  },
  {
    id: "m_3", name: "Raymond Men's Regular Fit Formal Trousers", brand: "Raymond",
    price: 1299, mrp: 2299, discount: 43, rating: 4.6, rev: 1800,
    img: "https://images.unsplash.com/photo-1594938298598-7096d2f3c7e4?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "bottoms", "western", "onsale"],
    tag: "👔 Office Wear", specs: "👔 Formal Wear · Poly Viscose · Wrinkle Free"
  },
  {
    id: "m_4", name: "The Souled Store Men Off-White Tropical Shirt", brand: "The Souled Store",
    price: 999, mrp: 1799, discount: 44, rating: 4.9, rev: 2150,
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "tops", "shirtstops", "under1000", "casual", "cotton"],
    tag: "🌴 Souled Store Original", specs: "👕 Tropical Print · Relaxed Fit · Cuban Collar"
  },
  {
    id: "m_5", name: "Manyavar Men's Silk Blend Kurta Pyjama Set", brand: "Manyavar",
    price: 2999, mrp: 4999, discount: 40, rating: 4.8, rev: 1200,
    img: "https://images.unsplash.com/photo-1608670842525-46b5a3bb8bb9?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "ethnic", "outfitsets"],
    tag: "🪷 Festive Special", specs: "🪷 Silk Blend · Mandarin Collar · Wedding Wear"
  },
  {
    id: "m_6", name: "Puma Men's Zipper Graphic Print Track Jacket", brand: "Puma",
    price: 1899, mrp: 3499, discount: 45, rating: 4.7, rev: 2600,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "tops", "western", "onsale"],
    tag: "🏃 Activewear", specs: "🧥 Full Zip · Polyester Blend · Sports Lifestyle"
  },

  // 👗 WOMEN'S
  {
    id: "w_1", name: "Biba Premium Printed Cotton Anarkali Kurta Set with Dupatta", brand: "Biba",
    price: 3599, mrp: 5999, discount: 40, rating: 4.7, rev: 870,
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "ethnic", "outfitsets", "cotton"],
    tag: "🪷 Festive Biba Gold", specs: "🪷 Pure Cotton · Gotapatti Border · Matching Dupatta"
  },
  {
    id: "w_2", name: "Lssmi Women's Solid Color V-Neck Wrap Midi Dress", brand: "Lssmi",
    price: 1199, mrp: 2499, discount: 52, rating: 4.8, rev: 1420,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "dresses", "western", "cotton", "onsale"],
    tag: "🔥 Top Bestseller", specs: "💃 V-Neck Wrap · 100% Breathable Cotton · Midi Length"
  },
  {
    id: "w_3", name: "Zara Women's Floral Print Chiffon Maxi Dress", brand: "Zara",
    price: 2499, mrp: 3999, discount: 37, rating: 4.9, rev: 3100,
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "dresses", "western"],
    tag: "✨ Zara Exclusive", specs: "🌸 Floral Print · Flowy Chiffon · Summer Collection"
  },
  {
    id: "w_4", name: "Corsica Loose Fit High-Waist Wide-Leg Cargo Trousers", brand: "Corsica",
    price: 1299, mrp: 2499, discount: 48, rating: 4.6, rev: 690,
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "bottoms", "western", "cotton"],
    tag: "👖 GenZ Cargo Trend", specs: "👖 High Waist · 6 Multi-Pockets · Wide Leg Fit"
  },
  {
    id: "w_5", name: "W for Woman A-Line Embroidered Kurti", brand: "W",
    price: 899, mrp: 1699, discount: 47, rating: 4.5, rev: 4100,
    img: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "tops", "ethnic", "under1000", "cotton", "onsale"],
    tag: "🪷 Elegant Ethnic", specs: "✨ A-Line Fit · Hand Embroidery · Breathable Cotton"
  },
  {
    id: "w_6", name: "H&M Women's Rib-Knit Crop Top", brand: "H&M",
    price: 499, mrp: 799, discount: 37, rating: 4.7, rev: 5200,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "tops", "shirtstops", "under1000", "western", "cotton"],
    tag: "👚 Summer Essential", specs: "👚 Rib-Knit · Stretchable · Crop Length"
  },
  {
    id: "w_7", name: "Only Women's Flared High Rise Denim Jeans", brand: "Only",
    price: 1499, mrp: 2999, discount: 50, rating: 4.6, rev: 2300,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "bottoms", "western", "onsale"],
    tag: "👖 Denim Trend", specs: "👖 Flared Fit · High Rise · Stretch Denim"
  },
  {
    id: "w_8", name: "Suta Pure Cotton Saree with Blouse Piece", brand: "Suta",
    price: 2100, mrp: 3500, discount: 40, rating: 4.9, rev: 1700,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "ethnic", "cotton"],
    tag: "🥻 Suta Bombay", specs: "🥻 100% Handloom Cotton · Unstitched Blouse"
  },

  // 🧒 KIDS'
  {
    id: "k_1", name: "Mothercare Baby Boys Cotton Romper Set of 3", brand: "Mothercare",
    price: 999, mrp: 1999, discount: 50, rating: 4.8, rev: 3400,
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "outfitsets", "under1000", "cotton", "onsale"],
    tag: "👶 Baby Soft", specs: "🧸 100% Cotton · Nickel-Free Snaps · Multi-Color"
  },
  {
    id: "k_2", name: "Gini & Jony Girls Fit & Flare Party Dress", brand: "Gini & Jony",
    price: 1299, mrp: 2499, discount: 48, rating: 4.7, rev: 1100,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "dresses", "western"],
    tag: "👗 Princess Vibe", specs: "✨ Sequin Embellished · Net Overlay · Birthday Wear"
  },
  {
    id: "k_3", name: "U.S. Polo Assn. Kids Boys Polo T-Shirt", brand: "U.S. Polo Assn.",
    price: 599, mrp: 1199, discount: 50, rating: 4.6, rev: 2700,
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "tops", "shirtstops", "under1000", "cotton"],
    tag: "👕 Classic Polo", specs: "👕 Breathable Pique Cotton · Contrast Collar"
  },
  {
    id: "k_4", name: "Allen Solly Junior Boys Chino Shorts", brand: "Allen Solly Junior",
    price: 499, mrp: 999, discount: 50, rating: 4.5, rev: 1900,
    img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "bottoms", "under1000", "cotton", "onsale"],
    tag: "👖 Summer Cool", specs: "👖 Stretch Chino · Adjustable Waistband"
  },
  {
    id: "k_5", name: "Biba Girls Printed Lehenga Choli Set", brand: "Biba",
    price: 2499, mrp: 4999, discount: 50, rating: 4.8, rev: 850,
    img: "https://images.unsplash.com/photo-1616053334547-01121d5a2253?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "ethnic", "outfitsets"],
    tag: "🪷 Festive Kids", specs: "✨ Zari Work · Cotton Silk Blend · Ready to Wear"
  },
  
  // EXTRA MIXED
  {
    id: "m_7", name: "Puma Men's Graphic Print Crew Neck T-Shirt", brand: "Puma",
    price: 599, mrp: 1299, discount: 53, rating: 4.6, rev: 5600,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "tops", "shirtstops", "under1000", "cotton", "onsale"],
    tag: "⚡ Street Style", specs: "👕 Regular Fit · Graphic Print · 100% Cotton"
  },
  {
    id: "w_9", name: "FabIndia Women's Indigo Block Print Kurta", brand: "FabIndia",
    price: 1499, mrp: 2299, discount: 34, rating: 4.7, rev: 1250,
    img: "https://images.unsplash.com/photo-1597983073493-88cd35f63f18?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "tops", "ethnic", "cotton"],
    tag: "🌿 Handcrafted", specs: "🌿 Dabu Hand Block Print · Pure Cotton · Straight Fit"
  },
  {
    id: "w_10", name: "Forever 21 Women's Satin Slip Dress", brand: "Forever 21",
    price: 1099, mrp: 1999, discount: 45, rating: 4.5, rev: 3300,
    img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "dresses", "western", "onsale"],
    tag: "💃 Party Ready", specs: "💃 Silky Satin Finish · Cowl Neck · Adjustable Straps"
  },
  {
    id: "m_8", name: "Wrogn Men's Slim Fit Checked Casual Shirt", brand: "Wrogn",
    price: 899, mrp: 1799, discount: 50, rating: 4.4, rev: 2100,
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop",
    categories: ["all", "mens", "tops", "shirtstops", "under1000", "cotton"],
    tag: "👕 Smart Casual", specs: "👕 Slim Fit · Yarn Dyed Checks · Curved Hem"
  },
  {
    id: "k_6", name: "Hopscotch Boys Super Hero Print T-Shirt & Joggers", brand: "Hopscotch",
    price: 799, mrp: 1599, discount: 50, rating: 4.6, rev: 1450,
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop",
    categories: ["all", "kids", "outfitsets", "under1000", "cotton"],
    tag: "🦸 Super Hero Fun", specs: "⚡ Comfy Joggers · Graphic T-Shirt · Elastic Waist"
  },
  {
    id: "w_11", name: "Vero Moda Women's Faux Leather Biker Jacket", brand: "Vero Moda",
    price: 2999, mrp: 4999, discount: 40, rating: 4.8, rev: 900,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop",
    categories: ["all", "womens", "tops", "western"],
    tag: "🏍️ Edgy Biker", specs: "🧥 Asymmetrical Zip · Faux Leather · Silver Hardware"
  }
];

const GirlsDressesSection = () => {
  const cardsRef = useRef(null);
  const pillsRef = useRef(null);
  const [selectedPill, setSelectedPill] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // AUTO-ROTATE 3D CAROUSEL TICKER
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

  const filteredProducts = useMemo(() => {
    return ALL_CLOTHES.filter(p => {
      const pillMatch = selectedPill === "all" || p.categories.includes(selectedPill);
      const searchMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return pillMatch && searchMatch;
    });
  }, [selectedPill, searchQuery]);

  return (
    <div className="gdContainer" id="all-inclusive-fashion-hub">

      {/* HEADER SECTION */}
      <div className="gdHeader">
        <div>
          <span className="gdLiveBadge">👗 FLIPKART ALL-INCLUSIVE FASHION STORE</span>
          <h2 className="gdTitle">🛍️ Shop Clothes by Category & Filter</h2>
          <p className="gdSub">Select any pill to explore the finest Men's, Women's & Kids' clothing with picture and price</p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="🔍 Search Zara, Levi's, shirts..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="gdSearchInput"
          />
          <div className="gdNavArrowBox">
            <button className="gdNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="gdNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="gdTotalBadge">{filteredProducts.length.toLocaleString("en-IN")} Clothes</span>
        </div>
      </div>

      {/* HORIZONTAL FILTER PILLS */}
      <div className="gdFilterBar">
        <div className="gdPillsScroll" ref={pillsRef}>
          {googleFilterPills.map(pill => (
            <button
              key={pill.id}
              type="button"
              className={`gdPill ${selectedPill === pill.id ? "active" : ""}`}
              onClick={() => setSelectedPill(pill.id)}
            >
              <span className="gdPillIcon">{pill.icon}</span>
              <span className="gdPillText">{pill.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D CAROUSEL */}
      <div className="gd3DCarousel" ref={cardsRef}>
        {filteredProducts.length === 0 && (
          <div style={{ padding: "3rem", color: "#666", fontWeight: "bold" }}>🔍 No clothes found in this category — try another one!</div>
        )}
        {filteredProducts.map((product) => (
          <div key={product.id} className="gd3DProductCard">
            {/* 3D IMAGE BOX */}
            <div className="gd3DImgBox">
              <img
                src={product.img}
                alt={product.name}
                className="gd3DCardImg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_FASHION;
                }}
              />
              <span className="gdDiscountBadge">-{product.discount}% OFF</span>
              <span className="gdBadgeTag">{product.tag}</span>
            </div>

            {/* CONTENT BODY */}
            <div className="gd3DCardBody">
              <span className="gdCategoryText" style={{ color: "#2874f0", fontWeight: "bold" }}>{product.brand}</span>
              <h4 className="gd3DItemTitle">{product.name}</h4>

              {/* SPECS CHIP */}
              <div className="gdSpecsChip">{product.specs}</div>

              <div className="gdRatingRow">
                <span style={{ color: "#16a34a", fontWeight: "900", background: "#dcfce7", padding: "2px 6px", borderRadius: "4px", fontSize: "0.8rem" }}>★ {product.rating}</span>
                <span className="gdReviewsText">({product.rev.toLocaleString("en-IN")})</span>
              </div>

              <div className="gdPriceRow">
                <span className="gdPriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="gdPriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
                <span style={{color: "#16a34a", fontSize: "0.75rem", fontWeight: "bold", marginLeft: "auto"}}>Save ₹{product.mrp - product.price}</span>
              </div>

              <div className="gdCardBtnRow">
                <button className="gdAddToCartBtn">🛒 Add to Bag</button>
                <button className="gdBuyNowBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GirlsDressesSection;
