import React, { useState, useMemo, useRef, useEffect } from "react";
import "./FootwearSection.css";

/* ═════════════════════════════════════════════════════════════
   EXCLUSIVE FOOTWEAR & SHOE CATEGORIES
═════════════════════════════════════════════════════════════ */
const footwearCategories = [
  { id: "all",      label: "👟 All 500+ Shoes",          icon: "👟", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=120&auto=format&fit=crop" },
  { id: "sneaker",  label: "👟 Sneakers & Jordans",       icon: "👟", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&auto=format&fit=crop" },
  { id: "running",  label: "🏃 Running & Sports",        icon: "🏃", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=120&auto=format&fit=crop" },
  { id: "boot",     label: "🥾 Leather Boots & Outdoor", icon: "🥾", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=120&auto=format&fit=crop" },
  { id: "formal",   label: "💼 Italian Formals & Loafers",icon: "👞", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=120&auto=format&fit=crop" },
  { id: "heel",     label: "👠 Designer Heels & Sandals", icon: "👠", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=120&auto=format&fit=crop" }
];

const shoeTemplates = [
  {
    style: "sneaker",
    name: "Nike Air Jordan 1 Retro High OG (Chicago Red/White)",
    specs: "👟 Air Cushioning · Premium Leather Upper · High-Top Ankle Support",
    price: 16995, mrp: 21995, discount: 22, ratings: 4.9, reviews: 85400,
    badge: "👑 Air Jordan Legend",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop"
  },
  {
    style: "running",
    name: "Adidas Ultraboost Light Running Shoes (Core Black)",
    specs: "🏃 Boost Energy Return · Primeknit Upper · Continental™ Rubber Grip",
    price: 13999, mrp: 18999, discount: 26, ratings: 4.8, reviews: 62300,
    badge: "⚡ Boost Power",
    img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop"
  },
  {
    style: "boot",
    name: "Woodland Genuine Leather Waterproof Trekking Boots (Khaki)",
    specs: "🥾 Heavy-Duty Rubber Lug Sole · Waterproof Grain Leather · High Traction",
    price: 4995, mrp: 6995, discount: 28, ratings: 4.8, reviews: 48900,
    badge: "🥾 Outdoor Tough",
    img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop"
  },
  {
    style: "formal",
    name: "Clarks Premium Italian Leather Double Monk Strap Formal Shoes",
    specs: "👞 Handcrafted Calfskin Leather · Cushion Plus™ Insole · Sleek Silhouette",
    price: 8999, mrp: 12999, discount: 30, ratings: 4.9, reviews: 26100,
    badge: "💼 Italian Handcrafted",
    img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop"
  },
  {
    style: "sneaker",
    name: "Puma RS-X 3D Cyber Retro Chunky Sneakers (Multicolor)",
    specs: "👟 Running System Cushioning · Retro Mesh Upper · Bold Chunky Sole",
    price: 6299, mrp: 9999, discount: 37, ratings: 4.7, reviews: 39500,
    badge: "🔥 Cyber Retro",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop"
  },
  {
    style: "heel",
    name: "Steve Madden Stiletto Ankle Strap Party Heels (Rose Gold)",
    specs: "👠 4-Inch High Stiletto Heel · Sparkling Crystal Embellishments · Padded Footbed",
    price: 7499, mrp: 10999, discount: 31, ratings: 4.8, reviews: 18400,
    badge: "✨ Glamour Party",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop"
  },
  {
    style: "running",
    name: "Skechers Arch Fit Max Cushioning Road Walking Shoes",
    specs: "🏃 Podiatrist-Certified Arch Support · Lightweight Ultra GO® Cushioning",
    price: 5999, mrp: 8499, discount: 29, ratings: 4.8, reviews: 31200,
    badge: "☁️ Arch Support",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop"
  },
  {
    style: "sneaker",
    name: "Vans Old Skool Classic Skate Shoes (Black & White Canvas)",
    specs: "👟 Iconic Side Stripe · Durable Canvas & Suede · Signature Waffle Sole",
    price: 4499, mrp: 5999, discount: 25, ratings: 4.9, reviews: 94800,
    badge: "🛹 Skate Icon",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop"
  }
];

const generateFootwear500 = () => {
  const items = [];
  for (let i = 0; i < 500; i++) {
    const t = shoeTemplates[i % shoeTemplates.length];
    items.push({
      _id: `shoe_item_${i + 1}`,
      name: `${t.name} (Edition #${i + 1})`,
      style: t.style,
      specs: t.specs,
      price: Math.floor(t.price + (i * 23) % 800),
      mrp: Math.floor(t.mrp + (i * 35) % 1200),
      discount: t.discount,
      ratings: t.ratings,
      numOfReviews: t.reviews + i * 42,
      image: t.img,
      badge: t.badge
    });
  }
  return items;
};

const ALL_FOOTWEAR_ITEMS = generateFootwear500();

const FootwearSection = () => {
  const cardsRef = useRef(null);
  const pillsRef = useRef(null);
  const [selectedStyle, setSelectedStyle] = useState("all");

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
    return ALL_FOOTWEAR_ITEMS.filter(p => selectedStyle === "all" || p.style === selectedStyle);
  }, [selectedStyle]);

  return (
    <div className="footwearSectionContainer" id="footwear-shoe-store">

      {/* HEADER BANNER */}
      <div className="footwearHeaderBanner">
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span className="footwearLiveTag">
            👟 FLIPKART OFFICIAL FOOTWEAR & SHOE ZONE
          </span>
          <h2 className="footwearHeading">
            👟 Sneakers, Boots, Running Shoes & Formals Store
          </h2>
          <p className="footwearSub">
            500+ Branded Shoes with Picture & Price · Nike · Adidas · Puma · Woodland · Clarks · Vans · Bata · Skechers
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <div className="footwearNavArrowBox">
            <button className="footwearNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="footwearNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="footwearTotalBadge">
            {filteredItems.length} Branded Shoes
          </span>
        </div>
      </div>

      {/* HORIZONTAL CATEGORY PILLS BAR */}
      <div className="footwearNavWrapper">
        <div className="footwearNavScroll" ref={pillsRef}>
          {footwearCategories.map((cat) => {
            const isSelected = selectedStyle === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`footwearBrandPill ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedStyle(cat.id)}
              >
                <div className="footwearPillImgBox">
                  <img src={cat.image} alt="" className="footwearPillImg" aria-hidden="true" />
                </div>
                <span className="footwearPillLabel">{cat.icon} {cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D FOOTWEAR CAROUSEL */}
      <div className="footwear3DCarousel" ref={cardsRef}>
        {filteredItems.slice(0, 48).map((product) => (
          <div key={product._id} className="footwear3DProductCard">
            {/* 3D IMAGE BOX */}
            <div className="footwear3DImgBox">
              <img
                src={product.image}
                alt=""
                aria-hidden="true"
                className="footwear3DCardImg"
              />
              <span className="footwearDiscountBadge">-{product.discount}% OFF</span>
              <span className="footwearBadgeTag">{product.badge}</span>
            </div>

            {/* CONTENT BODY */}
            <div className="footwear3DCardBody">
              <span className="footwearCategoryText">100% Genuine Branded Footwear</span>
              <h4 className="footwear3DItemTitle">{product.name}</h4>

              {/* SPECS CHIP */}
              <div className="footwearSpecsChip">{product.specs}</div>

              <div className="footwearRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {product.ratings}</span>
                <span className="footwearReviewsText">({product.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="footwearPriceRow">
                <span className="footwearPriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="footwearPriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
              </div>

              <div className="footwearCardBtnRow">
                <button className="footwearAddToCartBtn">🛒 Add to Cart</button>
                <button className="footwearBuyNowBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FootwearSection;
