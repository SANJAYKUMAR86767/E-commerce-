import React, { useState, useMemo, useRef, useEffect } from "react";
import "./FitnessNutritionSection.css";

/* ═════════════════════════════════════════════════════════════
   HEALTH & FITNESS NUTRITION DATA (Protein, Creatine, Peanut Butter)
═════════════════════════════════════════════════════════════ */
const fitnessCategories = [
  { id: "all",        label: "⚡ All Fitness (1,000+)",  icon: "🏋️", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=120&auto=format&fit=crop" },
  { id: "protein",    label: "💪 Whey Protein",        icon: "🥤", image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=120&auto=format&fit=crop" },
  { id: "creatine",   label: "⚡ Creatine Monohydrate",icon: "💥", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=120&auto=format&fit=crop" },
  { id: "pb",         label: "🥜 Peanut Butter",       icon: "🥜", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=120&auto=format&fit=crop" },
  { id: "preworkout", label: "🔥 Pre-Workout & BCAA",   icon: "⚡", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=120&auto=format&fit=crop" },
  { id: "vitamins",   label: "💊 Multivitamins & Fish Oil", icon: "🌿", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=120&auto=format&fit=crop" }
];

const fitnessTemplates = [
  {
    category: "protein",
    name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein (2kg, Double Rich Chocolate)",
    specs: "💪 24g Protein · 5.5g BCAAs · 11.4g EAAs · 🍫 Double Rich Chocolate",
    price: 6499, mrp: 7999, discount: 18, ratings: 4.9, reviews: 85400,
    badge: "🥇 #1 World Bestseller",
    img: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop"
  },
  {
    category: "creatine",
    name: "MuscleBlaze Micronized Creatine Monohydrate Creapure (250g, Unflavored)",
    specs: "⚡ 3g Pure Creapure Creatine · 0g Sugar · 🚀 Explosive Power & Muscle Volumization",
    price: 999, mrp: 1499, discount: 33, ratings: 4.8, reviews: 42300,
    badge: "💥 Labdoor Certified",
    img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop"
  },
  {
    category: "pb",
    name: "MyFitness High Protein Natural Peanut Butter Crispy (1kg, Dark Chocolate)",
    specs: "🥜 30g Protein/100g · 100% Roasted Peanuts · 🍫 Dark Chocolate Flavor · 0 Trans Fat",
    price: 549, mrp: 799, discount: 31, ratings: 4.9, reviews: 68900,
    badge: "🥜 Original Celebrity Choice",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop"
  },
  {
    category: "protein",
    name: "MuscleBlaze Biozyme Performance Whey Isolate (2kg, Rich Chocolate)",
    specs: "💪 25g Protein · 50% Higher Protein Absorption · 🔬 Enhanced Absorption Formula",
    price: 4699, mrp: 5999, discount: 21, ratings: 4.8, reviews: 56100,
    badge: "🔬 Tested & Certified",
    img: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop"
  },
  {
    category: "pb",
    name: "Pintola All Natural Creamy Peanut Butter Unsweetened (1kg, 100% Peanuts)",
    specs: "🥜 30g Protein · 0 Added Sugar · 0 Added Salt · 🌿 100% Organic Roasted Peanuts",
    price: 425, mrp: 625, discount: 32, ratings: 4.8, reviews: 39500,
    badge: "🌱 100% Pure Natural",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop"
  },
  {
    category: "creatine",
    name: "GNC Pro Performance Creatine Monohydrate (250g, Fruit Punch)",
    specs: "⚡ 3g Instantized Creatine · 🚀 Increases Cellular Hydration & Muscle Mass",
    price: 1199, mrp: 1799, discount: 33, ratings: 4.7, reviews: 18400,
    badge: "⚡ USA Formulated",
    img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop"
  },
  {
    category: "preworkout",
    name: "Cellucor C4 Original Pre-Workout Energy Powder (30 Servings, Watermelon)",
    specs: "🔥 150mg Caffeine · 1.6g Beta-Alanine · 🚀 Explosive Energy & Laser Focus",
    price: 2199, mrp: 3299, discount: 33, ratings: 4.8, reviews: 31200,
    badge: "🔥 Explosive Energy",
    img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&auto=format&fit=crop"
  },
  {
    category: "vitamins",
    name: "MuscleBlaze Daily Multivitamin for Men with Joint Support (90 Tablets)",
    specs: "💊 25 Essential Vitamins & Minerals · 🦴 Glucosamine & Chondroitin Joint Blend",
    price: 699, mrp: 1099, discount: 36, ratings: 4.7, reviews: 27800,
    badge: "💊 Daily Vitality",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop"
  }
];

const fitnessFlavors = ["Double Rich Chocolate", "Vanilla Soft Serve", "Cookies & Cream", "Mango Passion", "Dark Chocolate Crunchy", "Unflavored Creapure", "Fruit Punch Energy", "Caramel Fudge"];

const generateFitness500 = () => {
  const items = [];
  for (let i = 0; i < 500; i++) {
    const t = fitnessTemplates[i % fitnessTemplates.length];
    const fl = fitnessFlavors[i % fitnessFlavors.length];
    items.push({
      _id: `fitness_item_${i + 1}`,
      name: `${t.name.split('(')[0].trim()} - ${fl} Edition`,
      category: t.category,
      specs: t.specs,
      price: Math.floor(t.price + (i * 17) % 500),
      mrp: Math.floor(t.mrp + (i * 25) % 700),
      discount: t.discount,
      ratings: t.ratings,
      numOfReviews: t.reviews + i * 34,
      image: t.img,
      badge: t.badge
    });
  }
  return items;
};

const ALL_FITNESS_ITEMS = generateFitness500();

const FitnessNutritionSection = () => {
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
    return ALL_FITNESS_ITEMS.filter(p => selectedCategory === "all" || p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="fitnessSectionContainer" id="fitness-nutrition-store">

      {/* HEADER BANNER */}
      <div className="fitnessHeaderBanner">
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span className="fitnessLiveTag">
            💪 OFFICIAL GYM & HEALTH NUTRITION STORE
          </span>
          <h2 className="fitnessHeading">
            🥤 Whey Protein, Creatine & Peanut Butter Store
          </h2>
          <p className="fitnessSub">
            100% Authentic Gym Supplements · Optimum Nutrition · MuscleBlaze · MyFitness · Pintola · GNC · Cellucor
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <div className="fitnessNavArrowBox">
            <button className="fitnessNavArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="fitnessNavArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="fitnessTotalBadge">
            {filteredItems.length} Authentic Products
          </span>
        </div>
      </div>

      {/* HORIZONTAL CATEGORY PILLS BAR */}
      <div className="fitnessNavWrapper">
        <div className="fitnessNavScroll" ref={pillsRef}>
          {fitnessCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`fitnessBrandPill ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <div className="fitnessPillImgBox">
                  <img src={cat.image} alt="" className="fitnessPillImg" aria-hidden="true" />
                </div>
                <span className="fitnessPillLabel">{cat.icon} {cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D FITNESS CAROUSEL */}
      <div className="fitness3DCarousel" ref={cardsRef}>
        {filteredItems.slice(0, 48).map((product) => (
          <div key={product._id} className="fitness3DProductCard">
            {/* 3D IMAGE BOX */}
            <div className="fitness3DImgBox">
              <img
                src={product.image}
                alt=""
                aria-hidden="true"
                className="fitness3DCardImg"
              />
              <span className="fitnessDiscountBadge">-{product.discount}% OFF</span>
              <span className="fitnessBadgeTag">{product.badge}</span>
            </div>

            {/* CONTENT BODY */}
            <div className="fitness3DCardBody">
              <span className="fitnessCategoryText">100% Authentic Product</span>
              <h4 className="fitness3DItemTitle">{product.name}</h4>

              {/* SPECS CHIP */}
              <div className="fitnessSpecsChip">{product.specs}</div>

              <div className="fitnessRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {product.ratings}</span>
                <span className="fitnessReviewsText">({product.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="fitnessPriceRow">
                <span className="fitnessPriceCurrent">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="fitnessPriceMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
              </div>

              <div className="fitnessCardBtnRow">
                <button className="fitnessAddToCartBtn">🛒 Add to Cart</button>
                <button className="fitnessBuyNowBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FitnessNutritionSection;
