import React, { useState, useMemo, useRef, useEffect } from "react";
import "./TopCategoryProductViewer.css";

/* ═════════════════════════════════════════════════════════════
   100% EXCLUSIVE FASHION PRODUCTS CATALOG POOL
═════════════════════════════════════════════════════════════ */
const fashionCatalogPool = [
  { name: "Zara Satin Wrap Floral Midi Dress", category: "women", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop", badge: "👗 Partywear Chic" },
  { name: "Levi's 501 Original Straight Fit Denim Jeans", category: "men", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop", badge: "👖 Iconic Denim" },
  { name: "Manyavar Royal Zari Embroidered Groom Sherwani", category: "ethnic", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop", badge: "👑 Royal Heritage" },
  { name: "Biba Printed Cotton Anarkali Kurta Set with Dupatta", category: "women", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop", badge: "🌸 Festive Essential" },
  { name: "Nike Air Jordan 1 Retro High OG Sneakers", category: "western", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop", badge: "👟 Sneaker Bestseller" },
  { name: "Raymond Charcoal Italian-Woven 3-Piece Tuxedo Suit", category: "men", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop", badge: "🤵 Executive Luxury" },
  { name: "FabIndia Pure Kanjeevaram Handloom Silk Saree", category: "ethnic", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop", badge: "🥻 Handloom Silk" },
  { name: "Tommy Hilfiger Classic Piqué Cotton Polo T-Shirt", category: "men", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop", badge: "👕 Premium Polo" },
  { name: "Girls' Cute Floral Printed Cotton Frock & Belt Set", category: "kids", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop", badge: "👧 Cute Kids Frock" },
  { name: "Zara Oversized Heavyweight Biker Denim Jacket", category: "western", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop", badge: "🧥 Streetwear Hot" }
];

const fashionSubPills = [
  { id: "all",      label: "🛍️ All 10,000+ Outfits", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=150&auto=format&fit=crop" },
  { id: "men",      label: "👔 Men's Fashion (2,500)", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&auto=format&fit=crop" },
  { id: "women",    label: "👗 Women's Couture (3,000)", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&auto=format&fit=crop" },
  { id: "kids",     label: "🧒 Kids & Baby Clothes (1,500)", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop" },
  { id: "ethnic",   label: "👑 Royal Ethnic Wear (1,500)", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=150&auto=format&fit=crop" },
  { id: "western",  label: "✨ Western Wear (1,500)", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150&auto=format&fit=crop" }
];

const fashionHeroBanners = [
  {
    title: "PARIS FASHION WEEK 2026",
    sub: "Min. 50% OFF on Top Designer Apparel & Luxury Footwear",
    bg: "linear-gradient(135deg, #e91e63, #9c27b0)",
    tag: "SPECIAL LAUNCH LIVE",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop"
  },
  {
    title: "ROYAL WEDDING COLLECTION 2026",
    sub: "Designer Sherwanis, Silk Sarees & Heavy Lehengas",
    bg: "linear-gradient(135deg, #1e1e1e, #d4af37)",
    tag: "ROYAL LUXURY",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop"
  },
  {
    title: "STREETWEAR & SNEAKERS HUB",
    sub: "Nike Jordan, Adidas Ultraboost & Oversized Tees",
    bg: "linear-gradient(135deg, #00c853, #1565c0)",
    tag: "TRENDING NOW",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop"
  }
];

const generateFashion10K = () => {
  const items = [];
  for (let i = 0; i < 3000; i++) {
    const template = fashionCatalogPool[i % fashionCatalogPool.length];
    const mrp = Math.floor(1299 + (i * 187) % 35000);
    const disc = 20 + (i * 3) % 55;
    const price = Math.floor(mrp * (1 - disc / 100));

    items.push({
      _id: `fashion_10k_${i + 1}`,
      name: `${template.name} (Design #${i + 1})`,
      price,
      mrp,
      discount: disc,
      ratings: parseFloat((4.6 + ((i * 7) % 4) / 10).toFixed(1)),
      numOfReviews: 320 + (i * 189) % 45000,
      image: template.img,
      category: template.category,
      badge: template.badge
    });
  }
  return items;
};

const ALL_10K_FASHION = generateFashion10K();

const TopCategoryProductViewer = () => {
  const cardsRef = useRef(null);
  const pillsRef = useRef(null);
  const [selectedSubPill, setSelectedSubPill] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % fashionHeroBanners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleCardsScroll = (dir) => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const filteredProducts = useMemo(() => {
    return ALL_10K_FASHION.filter(p => selectedSubPill === "all" || p.category === selectedSubPill);
  }, [selectedSubPill]);

  const activeBanner = fashionHeroBanners[currentSlide];

  return (
    <div className="topViewerContainer" id="top-category-viewer">

      {/* ROTATING HIGH FASHION HERO BANNER */}
      <div className="topViewerHeroBanner" style={{ background: activeBanner.bg }}>
        <div style={{ zIndex: 2, maxWidth: "60%" }}>
          <span className="topViewerTag">{activeBanner.tag}</span>
          <h2 className="topViewerBannerTitle">{activeBanner.title}</h2>
          <p className="topViewerBannerSub">{activeBanner.sub}</p>
        </div>

        <div className="topViewerBannerImgBox">
          <img src={activeBanner.img} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* SUB-CATEGORY PILLS BAR */}
      <div className="topViewerPillsBarWrapper">
        <div className="topViewerPillsBarScroll" ref={pillsRef}>
          {fashionSubPills.map(p => (
            <button
              key={p.id}
              type="button"
              className={`topViewerPill ${selectedSubPill === p.id ? "active" : ""}`}
              onClick={() => setSelectedSubPill(p.id)}
            >
              <div className="topViewerPillImgBox">
                <img src={p.img} alt="" aria-hidden="true" className="topViewerPillImg" />
              </div>
              <span className="topViewerPillLabel">{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* HEADER SECTION FOR CAROUSEL */}
      <div className="topViewerHeaderRow">
        <div>
          <span className="topViewerLiveBadge">🛍️ FLIPKART DESIGNER CLOTHING HUB</span>
          <h3 className="topViewerHeading">🛍️ Shop Clothes by Category & Filter</h3>
          <p className="topViewerSub">Select any category pill to explore 10,000+ clothes with picture and price under every card</p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <button className="topViewerNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="topViewerNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="topViewerCountPill">{filteredProducts.length} Clothes Available</span>
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D CLOTHING CAROUSEL */}
      <div className="topViewer3DCarousel" ref={cardsRef}>
        {filteredProducts.slice(0, 48).map((p) => (
          <div key={p._id} className="topViewer3DCard">
            <div className="topViewer3DImgBox">
              <img src={p.image} alt="" aria-hidden="true" className="topViewer3DCardImg" />
              <span className="topViewerDiscountBadge">-{p.discount}% OFF</span>
              <span className="topViewerBadgeTag">{p.badge}</span>
            </div>

            <div className="topViewer3DCardBody">
              <span className="topViewerBrandText">Official Apparel</span>
              <h4 className="topViewerItemTitle">{p.name}</h4>

              <div className="topViewerRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {p.ratings}</span>
                <span className="topViewerReviewsText">({p.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="topViewerPriceRow">
                <span className="topViewerPriceCurrent">₹{p.price.toLocaleString("en-IN")}</span>
                <span className="topViewerPriceMrp">₹{p.mrp.toLocaleString("en-IN")}</span>
              </div>

              <button className="topViewerAddBagBtn">
                🛒 Add to Fashion Bag
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopCategoryProductViewer;
