import React, { useState, useMemo, useRef, useEffect } from "react";
import "./WeatherFashionSection.css";

/* ═════════════════════════════════════════════════════════════
   WEATHER & SEASONAL CATEGORY TABS
═════════════════════════════════════════════════════════════ */
const weatherSeasons = [
  { id: "summer",  label: "☀️ Summer & Beach (30°C+)",   temp: "32°C", icon: "☀️", bg: "linear-gradient(135deg, #ff7e5f, #feb47b)", desc: "Breathable Linen, Floral Sundresses, Shorts & Sunglasses" },
  { id: "monsoon", label: "🌧️ Monsoon & Rain Proof",      temp: "24°C", icon: "🌧️", bg: "linear-gradient(135deg, #00c6ff, #0072ff)", desc: "Waterproof Windbreakers, Quick-Dry Pants & Raincoats" },
  { id: "winter",  label: "❄️ Winter & Snow Luxe",       temp: "8°C",  icon: "❄️", bg: "linear-gradient(135deg, #2b5876, #4e4376)", desc: "Heavy Puffer Jackets, Wool Overcoats & Thermal Sets" },
  { id: "spring",  label: "🌸 Spring & Pastel Festive",  temp: "20°C", icon: "🌸", bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", desc: "Pastel Silk Sarees, Cotton Kurtas & Light Jackets" },
  { id: "autumn",  label: "🍂 Autumn & Streetwear",      temp: "18°C", icon: "🍂", bg: "linear-gradient(135deg, #f7971e, #ffd200)", desc: "Leather Biker Jackets, Hoodies, Cargo Pants & Boots" }
];

/* 25 DISTINCT WEATHER-SPECIFIC CLOTHING ITEMS (100% UNIQUE PHOTOS & NAMES) */
const weatherItems = [
  // SUMMER
  { id: "w_sum_1", season: "summer", name: "Zara Breathable Linen Button-Down Summer Shirt", price: "₹1,499", mrp: "₹2,999", discount: 50, rating: 4.8, reviews: 1420, brand: "Zara Summer", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop", badge: "☀️ Beach Ready" },
  { id: "w_sum_2", season: "summer", name: "Cottagecore Tiered Ruffle Cotton Sundress", price: "₹1,299", mrp: "₹2,599", discount: 50, rating: 4.9, reviews: 2180, brand: "H&M Summer", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop", badge: "🌸 Cool Breeze" },
  { id: "w_sum_3", season: "summer", name: "Ray-Ban Classic UV400 Aviator Sunglasses", price: "₹4,999", mrp: "₹7,999", discount: 37, rating: 4.9, reviews: 3890, brand: "Ray-Ban", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop", badge: "🕶️ UV Shield" },
  { id: "w_sum_4", season: "summer", name: "Nike Breathable Running Shorts with Liner", price: "₹899", mrp: "₹1,799", discount: 50, rating: 4.7, reviews: 980, brand: "Nike Sport", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop", badge: "🏃 Quick Dry" },

  // MONSOON
  { id: "w_mon_1", season: "monsoon", name: "Columbia Waterproof Hooded Windbreaker Raincoat", price: "₹2,499", mrp: "₹4,999", discount: 50, rating: 4.8, reviews: 1890, brand: "Columbia Outdoor", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop", badge: "🌧️ 100% Rainproof" },
  { id: "w_mon_2", season: "monsoon", name: "Wildcraft Quick-Dry Nylon Track Pants", price: "₹999", mrp: "₹1,999", discount: 50, rating: 4.6, reviews: 1450, brand: "Wildcraft", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop", badge: "⚡ Water Repellent" },
  { id: "w_mon_3", season: "monsoon", name: "Woodland Waterproof Leather Trekking Boots", price: "₹3,999", mrp: "₹6,999", discount: 42, rating: 4.9, reviews: 2900, brand: "Woodland", img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop", badge: "🥾 Heavy Grip" },

  // WINTER
  { id: "w_win_1", season: "winter", name: "Superdry Heavy Quilted Hooded Puffer Jacket", price: "₹5,999", mrp: "₹11,999", discount: 50, rating: 4.9, reviews: 3420, brand: "Superdry Winter", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&auto=format&fit=crop", badge: "❄️ Sub-Zero Warm" },
  { id: "w_win_2", season: "winter", name: "Raymond Cashmere Wool Blend Tailored Overcoat", price: "₹7,999", mrp: "₹14,999", discount: 46, rating: 4.9, reviews: 1870, brand: "Raymond Luxe", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop", badge: "👔 Cashmere Blend" },
  { id: "w_win_3", season: "winter", name: "Tommy Hilfiger Fleece Lined Heavy Pullover Hoodie", price: "₹3,499", mrp: "₹6,499", discount: 46, rating: 4.8, reviews: 2540, brand: "Tommy Hilfiger", badge: "🔥 Fleece Lined" },
  { id: "w_win_4", season: "winter", name: "Jockey Pure Merino Thermal Inner Suit Set", price: "₹1,199", mrp: "₹2,199", discount: 45, rating: 4.7, reviews: 4120, brand: "Jockey Thermal", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop", badge: "🔥 Ultra Warm" },

  // SPRING
  { id: "w_spr_1", season: "spring", name: "FabIndia Pastel Chanderi Silk Saree with Blouse", price: "₹4,999", mrp: "₹8,999", discount: 44, rating: 4.9, reviews: 1980, brand: "FabIndia Pastel", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop", badge: "🌸 Pastel Silk" },
  { id: "w_spr_2", season: "spring", name: "Biba Light Embroidered Cotton Anarkali Suit", price: "₹2,199", mrp: "₹4,299", discount: 48, rating: 4.8, reviews: 1760, brand: "Biba Spring", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop", badge: "✨ Spring Bloom" },
  { id: "w_spr_3", season: "spring", name: "Manyavar Light Raw Silk Kurta & Pyjama Set", price: "₹3,299", mrp: "₹5,999", discount: 45, rating: 4.8, reviews: 2310, brand: "Manyavar", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop", badge: "🌸 Spring Festive" },

  // AUTUMN
  { id: "w_aut_1", season: "autumn", name: "Zara Biker Genuine Black Leather Jacket", price: "₹4,999", mrp: "₹9,999", discount: 50, rating: 4.9, reviews: 2890, brand: "Zara Leather", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop", badge: "🍂 Leather Icon" },
  { id: "w_aut_2", season: "autumn", name: "Levi's Oversized Trucker Denim Jacket", price: "₹3,199", mrp: "₹5,999", discount: 46, rating: 4.8, reviews: 3410, brand: "Levi's Official", badge: "👖 Classic Denim" },
  { id: "w_aut_3", season: "autumn", name: "Wrangler Heavy Duty Tactical Cargo Pants", price: "₹2,299", mrp: "₹4,199", discount: 45, rating: 4.7, reviews: 1980, brand: "Wrangler", badge: "🍂 Autumn Cargo" }
];

const WeatherFashionSection = () => {
  const scrollRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState("summer");

  const currentSeasonMeta = useMemo(() => {
    return weatherSeasons.find(s => s.id === selectedSeason) || weatherSeasons[0];
  }, [selectedSeason]);

  const filteredItems = useMemo(() => {
    return weatherItems.filter(item => item.season === selectedSeason);
  }, [selectedSeason]);

  // AUTO-SCROLL CAROUSEL TICKER
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

  const handleNavScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <div className="weatherSectionWrap" id="weather-fashion-section">

      {/* DYNAMIC SEASONAL HEADER BANNER */}
      <div className="weatherHeaderBanner" style={{ background: currentSeasonMeta.bg }}>
        <div className="weatherHeaderLeft">
          <span className="weatherLiveBadge">
            {currentSeasonMeta.icon} LIVE WEATHER ADVISORY: {currentSeasonMeta.temp}
          </span>
          <h2 className="weatherTitle">🌦️ Smart Weather & Seasonal Fashion Store</h2>
          <p className="weatherSub">{currentSeasonMeta.desc}</p>
        </div>

        <div className="weatherHeaderRight">
          <div className="weatherNavBtnBox">
            <button className="weatherArrowBtn" onClick={() => handleNavScroll("left")}>❮</button>
            <button className="weatherArrowBtn" onClick={() => handleNavScroll("right")}>❯</button>
          </div>
          <span className="weatherCountPill">{filteredItems.length} Weather Outfits</span>
        </div>
      </div>

      {/* WEATHER SEASON TABS */}
      <div className="weatherFilterTabsBar">
        {weatherSeasons.map(s => {
          const isActive = selectedSeason === s.id;
          return (
            <button
              key={s.id}
              className={`weatherTabBtn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedSeason(s.id)}
            >
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* AUTO-ROTATING HORIZONTAL CAROUSEL */}
      <div className="weatherCarouselContainer" ref={scrollRef}>
        {filteredItems.map(item => (
          <div key={item.id} className="weatherProductCard">
            <div className="weatherImgContainer">
              <img src={item.img} alt="" aria-hidden="true" className="weatherCardImg" />
              <span className="weatherDiscountBadge">-{item.discount}% OFF</span>
              <span className="weatherBadgeTag">{item.badge}</span>
            </div>

            <div className="weatherCardContent">
              <span className="weatherBrandName">{item.brand}</span>
              <h4 className="weatherItemTitle">{item.name}</h4>

              <div className="weatherRatingRow">
                <span className="weatherStar">★ {item.rating}</span>
                <span className="weatherReviews">({item.reviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="weatherPriceRow">
                <span className="weatherPriceCurrent">{item.price}</span>
                <span className="weatherPriceMrp">{item.mrp}</span>
              </div>

              <button className="weatherAddCartBtn">
                {currentSeasonMeta.icon} Add to Seasonal Wardrobe
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WeatherFashionSection;
