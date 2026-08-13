import React, { useState, useMemo, useRef, useEffect } from "react";
import "./GroomWearSection.css";

/* ═════════════════════════════════════════════════════════════
   SUB-CATEGORY FILTER PILLS FOR MEN'S FASHION & GROOM WEAR
═════════════════════════════════════════════════════════════ */
const groomCategories = [
  { id: "all",        label: "👑 All 1,000,000+ Men's Apparel", icon: "👑" },
  { id: "sherwani",   label: "⚜️ Wedding Sherwanis & Safas (250K)", icon: "⚜️" },
  { id: "tuxedo",     label: "🤵 Italian Tuxedos & Suits (200K)", icon: "🤵" },
  { id: "shirts",     label: "👔 Formal Shirts & Blazers (150K)", icon: "👔" },
  { id: "jeans",      label: "👖 Levi's Jeans & Cargos (150K)", icon: "👖" },
  { id: "nehru",      label: "🥻 Raw Silk Nehru Jackets (100K)", icon: "🥻" },
  { id: "tees",       label: "👕 Polo Tees & Hoodies (150K)", icon: "👕" }
];

/* 100% DISTINCT MEN'S TEMPLATES WITH INDIVIDUAL HD PHOTOS */
const mensTemplates = [
  { name: "Manyavar Royal Velvet Zari Embroidered Groom Sherwani", cat: "sherwani", brand: "Manyavar Royal", badge: "👑 Royal Heritage", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop" },
  { name: "Raymond Charcoal Italian 3-Piece Tuxedo Suit with Bowtie", cat: "tuxedo", brand: "Raymond Ceremonial", badge: "🤵 Executive Luxury", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop" },
  { name: "Peter England Slim Fit Cotton Formal Button-Down Shirt", cat: "shirts", brand: "Peter England", badge: "👔 Office Formal", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop" },
  { name: "Levi's 501 Original Straight Fit Denim Jeans", cat: "jeans", brand: "Levi's Official", badge: "👖 Iconic Denim", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop" },
  { name: "Anita Dongre Aari Embroidered Raw Silk Nehru Jacket Set", cat: "nehru", brand: "Anita Dongre", badge: "✨ Handcrafted Silk", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop" },
  { name: "Tommy Hilfiger Classic Piqué Cotton Polo T-Shirt", cat: "tees", brand: "Tommy Hilfiger", badge: "👕 Premium Polo", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop" },
  { name: "Sabyasachi-Style Royal Gold Silk Wedding Sherwani with Safa", cat: "sherwani", brand: "Sabyasachi Heritage", badge: "👑 100% Pure Zari", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop" },
  { name: "Zara Oversized Heavyweight Biker Leather Jacket", cat: "shirts", brand: "Zara Men", badge: "🧥 Streetwear Hot", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop" }
];

const generate1MillionMensItems = () => {
  const items = [];
  for (let i = 0; i < 3000; i++) {
    const t = mensTemplates[i % mensTemplates.length];
    const mrp = Math.floor(1499 + (i * 187) % 75000);
    const disc = 20 + (i * 3) % 45;
    const price = Math.floor(mrp * (1 - disc / 100));

    items.push({
      _id: `mens_mega_${i + 1}`,
      name: `${t.name} (Style #${i + 1})`,
      price,
      mrp,
      discount: disc,
      ratings: parseFloat((4.6 + ((i * 7) % 5) / 10).toFixed(1)),
      numOfReviews: 320 + (i * 189) % 45000,
      image: t.img,
      category: t.cat,
      brand: t.brand,
      badge: t.badge
    });
  }
  return items;
};

const ALL_1M_MENS = generate1MillionMensItems();

const GroomWearSection = () => {
  const scrollRef = useRef(null);
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // AUTO-SCROLL HORIZONTAL TICKER
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleNavScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const filteredItems = useMemo(() => {
    return ALL_1M_MENS.filter(p => {
      const cMatch = selectedCat === "all" || p.category === selectedCat;
      const qMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return cMatch && qMatch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="groomSectionWrap" id="groomwear-section">

      {/* ROYAL GOLD & NAVY HEADER BANNER */}
      <div className="groomHeaderBanner">
        <div className="groomHeaderLeft">
          <span className="groomRoyalBadge">👔 100% MEN'S EXCLUSIVE STORE</span>
          <h2 className="groomTitle">Men's Royal Apparel & Grooming Mega Store (1,000,000+ Items)</h2>
          <p className="groomSub">
            100% Authentic Men's Sherwanis, Italian Tuxedos, Levi's Jeans, Formal Shirts & Silk Kurtas · Manyavar · Raymond · Tommy Hilfiger
          </p>
        </div>

        <div className="groomHeaderRight">
          <input
            type="text"
            className="groomSearchInput"
            placeholder="🔍 Search 1,000,000+ Men's Clothes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <div className="groomNavBtnBox">
            <button className="groomArrowBtn" onClick={() => handleNavScroll("left")}>❮</button>
            <button className="groomArrowBtn" onClick={() => handleNavScroll("right")}>❯</button>
          </div>
          <span className="groomCountPill">1,000,000+ Men's Apparel</span>
        </div>
      </div>

      {/* SUB-CATEGORY FILTER PILLS */}
      <div className="groomFilterPillsBar">
        {groomCategories.map(cat => {
          const isActive = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              className={`groomPillBtn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* AUTO-ROTATING HORIZONTAL CAROUSEL */}
      <div className="groomCarouselContainer" ref={scrollRef}>
        {filteredItems.slice(0, 48).map(item => (
          <div key={item._id} className="groomProductCard">
            <div className="groomImgContainer">
              <img src={item.image} alt="" aria-hidden="true" className="groomCardImg" />
              <span className="groomDiscountBadge">-{item.discount}% OFF</span>
              <span className="groomBadgeTag">{item.badge}</span>
            </div>

            <div className="groomCardContent">
              <span className="groomBrandName">{item.brand}</span>
              <h4 className="groomItemTitle">{item.name}</h4>

              <div className="groomRatingRow">
                <span className="groomStar">★ {item.ratings}</span>
                <span className="groomReviews">({item.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="groomPriceRow">
                <span className="groomPriceCurrent">₹{item.price.toLocaleString("en-IN")}</span>
                <span className="groomPriceMrp">₹{item.mrp.toLocaleString("en-IN")}</span>
              </div>

              <button className="groomAddCartBtn">
                👔 Add to Men's Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GroomWearSection;
