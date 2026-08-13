import React, { useState, useMemo, useRef, useEffect } from "react";
import "./BeautySection.css";

/* ═════════════════════════════════════════════════════════════
   EXCLUSIVE BEAUTY, COSMETICS, HAIR CARE & PERFUMES DATA
═════════════════════════════════════════════════════════════ */
const beautyCategories = [
  { id: "all",       label: "✨ All Luxury Beauty (1,000+)", icon: "✨", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&auto=format&fit=crop" },
  { id: "makeup",    label: "💄 Cosmetics & Makeup",       icon: "💄", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&auto=format&fit=crop" },
  { id: "hair",      label: "💇‍♀️ Hair Care & Serums",      icon: "💇‍♀️", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=120&auto=format&fit=crop" },
  { id: "facewash",  label: "🧼 Face Wash & Skincare",     icon: "🧼", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&auto=format&fit=crop" },
  { id: "fragrance", label: "✨ Perfumes & Luxury Attars",  icon: "✨", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=120&auto=format&fit=crop" }
];

const beautyTemplates = [
  {
    category: "makeup",
    name: "MAC Retro Matte Liquid Lipstick - Ruby Woo (Classic Red)",
    specs: "💄 Matte Finish · 12-Hour Long-Wear · Non-Drying Intense Pigment",
    price: 1499, mrp: 2200, discount: 32, ratings: 4.9, reviews: 38400,
    badge: "💄 MAC Bestseller",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop"
  },
  {
    category: "facewash",
    name: "Ghar Soaps 100% Herbal De-Tan Face Wash & Scrub with Saffron",
    specs: "🧼 100% Herbal · Natural Tan Removal · Skin Brightening Formula",
    price: 349, mrp: 599, discount: 41, ratings: 4.8, reviews: 52100,
    badge: "🌿 De-Tan Boss",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop"
  },
  {
    category: "hair",
    name: "L'Oréal Paris Extraordinary Oil Hair Serum (100ml, Argan Oil)",
    specs: "💇‍♀️ 24hr Anti-Frizz · 6 Rare Flower Oils · Heat Protection up to 230°C",
    price: 549, mrp: 799, discount: 31, ratings: 4.8, reviews: 64200,
    badge: "✨ Silk Shine Serum",
    img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&auto=format&fit=crop"
  },
  {
    category: "fragrance",
    name: "BEARDO Godfather Long Lasting Eau De Parfum (100ml EDP)",
    specs: "✨ 48hr Long-Lasting Fragrance · Mint, Lemon & Vetiver Notes",
    price: 699, mrp: 1200, discount: 42, ratings: 4.8, reviews: 71500,
    badge: "✨ #1 Men EDP",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop"
  },
  {
    category: "makeup",
    name: "Lakmé Absolute Skin Natural Mousse Foundation (SPF 8, Ivory)",
    specs: "💄 Feather Light Mousse · Poreless Finish · 16hr Stay Power",
    price: 699, mrp: 950, discount: 26, ratings: 4.7, reviews: 29800,
    badge: "👑 Mousse Magic",
    img: "https://images.unsplash.com/photo-1599733594230-6b823276b44c?w=600&auto=format&fit=crop"
  },
  {
    category: "facewash",
    name: "Mamaearth Vitamin C Face Wash with Turmeric for Skin Glow",
    specs: "🧼 Paraben Free · Deep Pore Cleansing · Vitamin C & Turmeric",
    price: 225, mrp: 399, discount: 43, ratings: 4.7, reviews: 92400,
    badge: "🌸 Glow Essential",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop"
  },
  {
    category: "hair",
    name: "Forest Essentials Bhringraj & Shikakai Hair Growth Oil (200ml)",
    specs: "🌿 100% Ayurvedic · Deep Root Nourishment · Controls Hair Fall",
    price: 1475, mrp: 1850, discount: 20, ratings: 4.9, reviews: 18900,
    badge: "👑 Ayurvedic Gold",
    img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop"
  },
  {
    category: "fragrance",
    name: "Dior Sauvage Elixir Luxury Fragrance Perfume (100ml)",
    specs: "✨ Ultra-Concentrated Luxury Perfume · Spiced Wood & Lavender Notes",
    price: 9499, mrp: 12999, discount: 27, ratings: 4.9, reviews: 12400,
    badge: "👑 World Icon",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop"
  }
];

const generateBeauty1000 = () => {
  const items = [];
  for (let i = 0; i < 1000; i++) {
    const t = beautyTemplates[i % beautyTemplates.length];
    items.push({
      _id: `beauty_item_${i + 1}`,
      name: `${t.name} (Batch #${i + 1})`,
      category: t.category,
      specs: t.specs,
      price: Math.floor(t.price + (i * 13) % 400),
      mrp: Math.floor(t.mrp + (i * 19) % 600),
      discount: t.discount,
      ratings: t.ratings,
      numOfReviews: t.reviews + i * 27,
      image: t.img,
      badge: t.badge
    });
  }
  return items;
};

const ALL_BEAUTY_ITEMS = generateBeauty1000();

const BeautySection = () => {
  const cardsRef = useRef(null);
  const pillsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const filteredItems = useMemo(() => {
    return ALL_BEAUTY_ITEMS.filter(p => selectedCategory === "all" || p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="beautySectionContainer" id="beauty-fragrance-store">

      {/* HEADER BANNER */}
      <div className="beautyHeaderBanner">
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span className="beautyLiveTag">
            ✨ FLIPKART LUXURY BEAUTY & COSMETICS HUB
          </span>
          <h2 className="beautyHeading">
            💄 Cosmetics, Hair Care, Face Wash & Perfume Store
          </h2>
          <p className="beautySub">
            100% Genuine Luxury Brands · MAC · Lakmé · Maybelline · L'Oréal · Ghar Soaps · Forest Essentials · Beardo · Dior
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <div className="beautyNavArrowBox">
            <button className="beautyNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="beautyNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="beautyTotalBadge">
            {filteredItems.length} Luxury Items
          </span>
        </div>
      </div>

      {/* HORIZONTAL CATEGORY PILLS BAR */}
      <div className="beautyNavWrapper">
        <div className="beautyNavScroll" ref={pillsRef}>
          {beautyCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`beautyBrandPill ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <div className="beautyPillImgBox">
                  <img src={cat.image} alt="" className="beautyPillImg" aria-hidden="true" />
                </div>
                <span className="beautyPillLabel">{cat.icon} {cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D BEAUTY CAROUSEL */}
      <div className="beauty3DCarousel" ref={cardsRef}>
        {filteredItems.slice(0, 48).map((product) => (
          <div key={product._id} className="beauty3DProductCard">
            {/* 3D IMAGE BOX */}
            <div className="beauty3DImgBox">
              <img
                src={product.image}
                alt=""
                aria-hidden="true"
                className="beauty3DCardImg"
              />
              <span className="beautyDiscountBadge">-{product.discount}% OFF</span>
              <span className="beautyBadgeTag">{product.badge}</span>
            </div>

            {/* CONTENT BODY */}
            <div className="beauty3DCardBody">
              <span className="beautyCategoryText">100% Genuine Luxury Brand</span>
              <h4 className="beauty3DItemTitle">{product.name}</h4>

              {/* SPECS CHIP */}
              <div className="beautySpecsChip">{product.specs}</div>

              <div className="beautyRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {product.ratings}</span>
                <span className="beautyReviewsText">({product.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="beautyPriceRow">
                <span className="beautyPriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="beautyPriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
              </div>

              <div className="beautyCardBtnRow">
                <button className="beautyAddToCartBtn">🛒 Add to Beauty Bag</button>
                <button className="beautyBuyNowBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BeautySection;
