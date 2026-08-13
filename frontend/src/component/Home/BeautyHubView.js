import React, { useState } from "react";
import "./BeautyHubView.css";

const BeautyHubView = () => {
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const topBrands = [
    { name: "Lakme", img: "https://logo.clearbit.com/lakmeindia.com", tag: "₹99 onwards" },
    { name: "MAC", img: "https://logo.clearbit.com/maccosmetics.com", tag: "Up to 40% Off" },
    { name: "Maybelline", img: "https://logo.clearbit.com/maybelline.com", tag: "Min. 30% Off" },
    { name: "L'Oreal", img: "https://logo.clearbit.com/loreal.com", tag: "Best Sellers" },
    { name: "Biotique", img: "https://logo.clearbit.com/biotique.com", tag: "Organic Picks" },
    { name: "Plum", img: "https://logo.clearbit.com/plumgoodness.com", tag: "Cruelty Free" },
    { name: "Minimalist", img: "https://logo.clearbit.com/beminimalist.co", tag: "Science-Backed" },
    { name: "Nivea", img: "https://logo.clearbit.com/nivea.com", tag: "₹149 onwards" },
  ];

  const brandProducts = {
    Lakme: [
      { name: "9to5 Weightless Mousse Foundation", price: "₹599", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1631730486784-74757d38e388?w=400&auto=format&fit=crop", rating: 4.5 },
      { name: "Absolute Shine Lip Gloss", price: "₹349", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1625093910906-e656c580e37b?w=400&auto=format&fit=crop", rating: 4.3 },
      { name: "Eyeconic Kajal", price: "₹199", oldPrice: "₹350", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop", rating: 4.7 },
      { name: "Peach Milk Moisturizer", price: "₹299", oldPrice: "₹450", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", rating: 4.4 },
    ],
    MAC: [
      { name: "Studio Fix Fluid Foundation", price: "₹2,899", oldPrice: "₹3,950", img: "https://images.unsplash.com/photo-1631730486784-74757d38e388?w=400&auto=format&fit=crop", rating: 4.8 },
      { name: "Ruby Woo Lipstick", price: "₹1,999", oldPrice: "₹2,700", img: "https://images.unsplash.com/photo-1625093910906-e656c580e37b?w=400&auto=format&fit=crop", rating: 4.9 },
      { name: "Prep+Prime Fix+ Setting Spray", price: "₹2,200", oldPrice: "₹2,850", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop", rating: 4.6 },
      { name: "Pro Longwear Concealer", price: "₹1,850", oldPrice: "₹2,400", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop", rating: 4.5 },
    ],
    Maybelline: [
      { name: "Fit Me Matte+Poreless Foundation", price: "₹499", oldPrice: "₹799", img: "https://images.unsplash.com/photo-1631730486784-74757d38e388?w=400&auto=format&fit=crop", rating: 4.6 },
      { name: "Sky High Mascara", price: "₹699", oldPrice: "₹950", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop", rating: 4.8 },
      { name: "Color Sensational Lipstick", price: "₹399", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1625093910906-e656c580e37b?w=400&auto=format&fit=crop", rating: 4.5 },
      { name: "Age Rewind Concealer", price: "₹549", oldPrice: "₹799", img: "https://images.unsplash.com/photo-1556228720-1c2ae6ba6a11?w=400&auto=format&fit=crop", rating: 4.4 },
    ],
    "L'Oreal": [
      { name: "True Match Foundation", price: "₹699", oldPrice: "₹1,099", img: "https://images.unsplash.com/photo-1631730486784-74757d38e388?w=400&auto=format&fit=crop", rating: 4.5 },
      { name: "Revitalift Vitamin C Serum", price: "₹1,499", oldPrice: "₹2,200", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop", rating: 4.7 },
      { name: "Extraordinary Oil Hair Serum", price: "₹699", oldPrice: "₹1,100", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop", rating: 4.6 },
      { name: "UV Defender Sunscreen SPF50", price: "₹999", oldPrice: "₹1,500", img: "https://images.unsplash.com/photo-1556228720-1c2ae6ba6a11?w=400&auto=format&fit=crop", rating: 4.8 },
    ],
    Minimalist: [
      { name: "Niacinamide 10% + Zinc Face Serum", price: "₹659", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop", rating: 4.9 },
      { name: "Hyaluronic Acid 2% + B5 Serum", price: "₹599", oldPrice: "₹899", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", rating: 4.8 },
      { name: "Retinol 0.6% Night Serum", price: "₹799", oldPrice: "₹1,199", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop", rating: 4.7 },
      { name: "AHA 25% + BHA 2% Peeling Solution", price: "₹699", oldPrice: "₹1,050", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=400&auto=format&fit=crop", rating: 4.9 },
    ],
    Nivea: [
      { name: "Soft Moisturizing Cream 200ml", price: "₹249", oldPrice: "₹399", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=400&auto=format&fit=crop", rating: 4.6 },
      { name: "Milk Delights Rose Face Wash", price: "₹199", oldPrice: "₹299", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", rating: 4.4 },
      { name: "Extra White Body Lotion SPF 15", price: "₹349", oldPrice: "₹499", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop", rating: 4.5 },
      { name: "Pearl & Beauty Deodorant Roll-On", price: "₹179", oldPrice: "₹250", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop", rating: 4.3 },
    ],
    Biotique: [
      { name: "Bio Honey Gel Face Wash", price: "₹149", oldPrice: "₹250", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", rating: 4.4 },
      { name: "Bio Almond Oil Moisturizer", price: "₹199", oldPrice: "₹320", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=400&auto=format&fit=crop", rating: 4.3 },
      { name: "Bio Sunflower SPF 50+ Sunscreen", price: "₹349", oldPrice: "₹549", img: "https://images.unsplash.com/photo-1556228720-1c2ae6ba6a11?w=400&auto=format&fit=crop", rating: 4.5 },
      { name: "Bio Bhringraj Hair Oil 200ml", price: "₹299", oldPrice: "₹450", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop", rating: 4.6 },
    ],
    Plum: [
      { name: "E-Luminence Simply Supple Moisturizer", price: "₹649", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=400&auto=format&fit=crop", rating: 4.7 },
      { name: "Hello Aloe Caring Face Wash", price: "₹299", oldPrice: "₹450", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", rating: 4.6 },
      { name: "1% Salicylic Acid Serum", price: "₹499", oldPrice: "₹750", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop", rating: 4.8 },
      { name: "3% Niacinamide Toner", price: "₹399", oldPrice: "₹599", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop", rating: 4.7 },
    ],
  };

  const categories = ["All", "Skincare", "Makeup", "Haircare", "Fragrances"];

  const trendingDeals = [
    { name: "Vitamin C Brightening Serum", brand: "Minimalist", price: "₹659", oldPrice: "₹999", img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=400&auto=format&fit=crop", tag: "BESTSELLER", rating: 4.9 },
    { name: "Hydrating Rose Face Mist", brand: "Forest Essentials", price: "₹1,299", oldPrice: "₹2,100", img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&auto=format&fit=crop", tag: "NEW", rating: 4.7 },
    { name: "HD Foundation 30ml", brand: "MAC", price: "₹2,200", oldPrice: "₹3,500", img: "https://images.unsplash.com/photo-1631730486784-74757d38e388?w=400&auto=format&fit=crop", tag: "HOT 🔥", rating: 4.8 },
    { name: "Keratin Repair Hair Mask", brand: "TRESemmé", price: "₹449", oldPrice: "₹799", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop", tag: "40% OFF", rating: 4.5 },
    { name: "SPF 50 PA++++ Sunscreen", brand: "Re'equil", price: "₹599", oldPrice: "₹899", img: "https://images.unsplash.com/photo-1556228720-1c2ae6ba6a11?w=400&auto=format&fit=crop", tag: "TOP RATED", rating: 4.8 },
  ];

  const luxuryCollections = [
    { title: "Bridal Glow Kit", desc: "Up to 40% Off", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&auto=format&fit=crop", badge: "TRENDING" },
    { title: "K-Beauty Secrets", desc: "Glass Skin Essentials", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop", badge: "NEW" },
    { title: "Luxury Fragrances", desc: "Min. 30% Off", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop", badge: "PREMIUM" },
    { title: "Professional Tools", desc: "Starting at ₹499", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop", badge: "SALE" },
  ];

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
  };

  if (activeBrand) {
    const products = brandProducts[activeBrand] || [];
    return (
      <div className="beautyHubContainer" style={{ background: "#fff0f5", padding: 0 }}>
        {/* Luxury Brand Hero */}
        <div style={{ position: "relative", height: "380px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1600&auto=format&fit=crop"
            alt="Brand Cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(180,0,80,0.85) 0%, rgba(0,0,0,0.3) 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px 5%" }}>
            <button onClick={() => setActiveBrand(null)} style={{ position: "absolute", top: "25px", left: "5%", padding: "10px 22px", background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", backdropFilter: "blur(10px)" }}>
              ← All Brands
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "80px", height: "80px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <img src={`https://logo.clearbit.com/${activeBrand.toLowerCase().replace("'", "").replace(" ", "")}${activeBrand === "L'Oreal" ? "loreal" : ""}.com`} alt={activeBrand} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; e.target.parentNode.innerHTML = `<span style="font-size:1.5rem;font-weight:900;color:#ff1493">${activeBrand[0]}</span>`; }} />
              </div>
              <div>
                <h1 style={{ fontSize: "3.5rem", fontWeight: "900", color: "white", margin: 0, letterSpacing: "-1px" }}>{activeBrand}</h1>
                <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "5px", fontSize: "1.1rem" }}>Official Brand Store</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              {["✓ Cruelty Free", "✓ Dermatologist Tested", "✓ 100% Authentic", "✓ Free Returns"].map(tag => (
                <span key={tag} style={{ padding: "6px 15px", background: "rgba(255,255,255,0.15)", color: "white", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600", backdropFilter: "blur(5px)", border: "1px solid rgba(255,255,255,0.3)" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ padding: "30px 5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "900", color: "#222" }}>Bestselling Products <span style={{ color: "#ff1493" }}>by {activeBrand}</span></h2>
            <select style={{ padding: "10px 20px", borderRadius: "25px", border: "1px solid #ffc1cc", background: "#fff0f5", color: "#ff1493", fontWeight: "bold", outline: "none" }}>
              <option>Sort: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "25px" }}>
            {products.map((product, i) => (
              <div key={i} className="bh-premium-card">
                <div style={{ position: "relative", height: "300px", overflow: "hidden", borderRadius: "12px 12px 0 0", background: "#fdf0f5" }}>
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: i === 0 ? "linear-gradient(90deg,#ff1493,#ff4500)" : "linear-gradient(90deg,#111,#333)", color: "white", padding: "5px 12px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "900", zIndex: 2, letterSpacing: "1px" }}>
                    {i === 0 ? "🏆 #1 BESTSELLER" : i === 1 ? "✨ NEW LAUNCH" : "⭐ TOP RATED"}
                  </span>
                  <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.9)", color: "#ff1493", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", zIndex: 2, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>♡</span>
                  <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} onMouseOver={e => e.target.style.transform = "scale(1.12)"} onMouseOut={e => e.target.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: "18px", background: "white", borderRadius: "0 0 12px 12px" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#ff1493", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "6px" }}>{activeBrand}</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "#222", lineHeight: "1.3", marginBottom: "10px" }}>{product.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                    <span style={{ color: "#ffc107", fontSize: "0.9rem", letterSpacing: "-1px" }}>{renderStars(product.rating)}</span>
                    <span style={{ fontSize: "0.8rem", color: "#888", fontWeight: "600" }}>({product.rating})</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "15px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: "900", color: "#111" }}>{product.price}</span>
                    <span style={{ fontSize: "1rem", color: "#bbb", textDecoration: "line-through" }}>{product.oldPrice}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#00b894" }}>SAVE {Math.round((1 - parseInt(product.price.replace(/[^\d]/g,"")) / parseInt(product.oldPrice.replace(/[^\d]/g,""))) * 100)}%</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{ flex: 1, padding: "12px", background: "linear-gradient(90deg, #ff1493, #ff69b4)", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", fontSize: "0.95rem", transition: "all 0.3s" }} onMouseOver={e => { e.target.style.boxShadow = "0 6px 20px rgba(255,20,147,0.4)"; e.target.style.transform = "translateY(-2px)"; }} onMouseOut={e => { e.target.style.boxShadow = "none"; e.target.style.transform = "none"; }}>
                      🛒 Add to Bag
                    </button>
                    <button style={{ padding: "12px 16px", background: "#fff0f5", color: "#ff1493", border: "1px solid #ffc1cc", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", fontSize: "0.95rem" }}>
                      ♡
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="beautyHubContainer">
      {/* LIVE BEAUTY TICKER */}
      <div className="bh-ticker-bar bh-animate-1">
        <div className="bh-ticker-track">
          💄 MEGA BEAUTY SALE: Up to 70% Off on 10,000+ products &bull; 🌸 FREE GIFT on orders above ₹999 &bull; ⭐ New K-Beauty arrivals just dropped &bull; 🎁 Buy 2 Get 1 Free on Lakme &bull; 💄 MEGA BEAUTY SALE: Up to 70% Off
        </div>
      </div>

      {/* HERO SPLIT BANNER */}
      <div className="bh-hero-split bh-animate-1">
        <div className="bh-hero-main-card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&auto=format&fit=crop)" }}>
          <div className="bh-hero-overlay">
            <span className="bh-hero-badge">🔥 MEGA SALE</span>
            <h2>Makeup <br/>Festival</h2>
            <p>Up to <strong>70% OFF</strong> on 10,000+ products</p>
            <button className="bh-hero-btn">Shop Makeup →</button>
          </div>
        </div>
        <div className="bh-hero-sub-col">
          <div className="bh-hero-sub-card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop)" }}>
            <div className="bh-hero-overlay" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)" }}>
              <h3>K-Beauty</h3>
              <p>Glass Skin Essentials</p>
            </div>
          </div>
          <div className="bh-hero-sub-card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop)" }}>
            <div className="bh-hero-overlay" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)" }}>
              <h3>Fragrances</h3>
              <p>Min. 30% Off</p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND PILLS */}
      <div className="bh-animate-2">
        <div className="bh-section-title">Shop by Brand</div>
        <div className="bh-brand-nav-row">
          {topBrands.map((brand, idx) => (
            <div className="bh-brand-icon-box" key={idx} onClick={() => setActiveBrand(brand.name)}>
              <div className="bh-brand-circle">
                <img src={brand.img} alt={brand.name} />
              </div>
              <span className="bh-brand-name">{brand.name}</span>
              <span className="bh-brand-tag">{brand.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY TABS */}
      <div className="bh-animate-3">
        <div className="bh-section-title">Trending Picks</div>
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveTab(cat)}
              style={{ padding: "10px 22px", borderRadius: "25px", border: activeTab === cat ? "none" : "1px solid #ffc1cc", background: activeTab === cat ? "linear-gradient(90deg,#ff1493,#ff69b4)" : "white", color: activeTab === cat ? "white" : "#ff1493", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s", fontSize: "0.9rem" }}>
              {cat}
            </button>
          ))}
        </div>
        {/* Trending Products */}
        <div className="bh-trending-grid">
          {trendingDeals.map((item, i) => (
            <div key={i} className="bh-trending-card">
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <span style={{ position: "absolute", top: "12px", left: "12px", background: i === 0 ? "linear-gradient(90deg,#ff1493,#ff4500)" : i === 1 ? "#5B2D8E" : "#111", color: i === 1 ? "#d4af37" : "white", padding: "5px 12px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "900", zIndex: 3, letterSpacing: "1px" }}>{item.tag}</span>
                <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.9)", color: "#ff1493", width: "34px", height: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", zIndex: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>♡</span>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} onMouseOver={e => e.target.style.transform = "scale(1.12)"} onMouseOut={e => e.target.style.transform = "scale(1)"} />
              </div>
              <div style={{ padding: "15px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: "900", color: "#ff1493", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "5px" }}>{item.brand}</div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#222", marginBottom: "8px", lineHeight: "1.3" }}>{item.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                  <span style={{ color: "#ffc107", fontSize: "0.85rem" }}>{"★".repeat(Math.floor(item.rating))}</span>
                  <span style={{ fontSize: "0.75rem", color: "#888" }}>({item.rating})</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "#111" }}>{item.price}</span>
                  <span style={{ fontSize: "0.9rem", color: "#bbb", textDecoration: "line-through" }}>{item.oldPrice}</span>
                </div>
                <button style={{ width: "100%", padding: "11px", background: "#111", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s" }} onMouseOver={e => { e.target.style.background = "linear-gradient(90deg,#ff1493,#ff69b4)"; e.target.style.boxShadow = "0 5px 15px rgba(255,20,147,0.3)"; }} onMouseOut={e => { e.target.style.background = "#111"; e.target.style.boxShadow = "none"; }}>
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY COLLECTIONS */}
      <div className="bh-animate-4">
        <div className="bh-section-title">Curated Collections</div>
        <div className="bh-collection-row">
          {luxuryCollections.map((col, idx) => (
            <div className="bh-collection-card" key={idx}>
              <img src={col.img} alt={col.title} />
              <div className="bh-collection-badge">{col.badge}</div>
              <div className="bh-collection-info">
                <div className="bh-collection-title">{col.title}</div>
                <div className="bh-collection-desc">{col.desc}</div>
                <button style={{ marginTop: "10px", padding: "8px 18px", background: "white", color: "#111", border: "none", borderRadius: "20px", fontWeight: "bold", cursor: "pointer", fontSize: "0.85rem" }}>Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BEAUTY TIPS BANNER */}
      <div className="bh-animate-5" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", borderRadius: "20px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <div>
          <div style={{ color: "#ff6b9d", fontWeight: "800", fontSize: "0.9rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>✨ Exclusive Offer</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "900", color: "white", margin: "0 0 10px", lineHeight: "1.2" }}>Your Beauty, <br /><span style={{ color: "#ff69b4" }}>Personalized!</span></h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", maxWidth: "400px", margin: 0 }}>Take our skin quiz and get a FREE personalized beauty routine curated by experts.</p>
        </div>
        <button style={{ padding: "18px 35px", background: "linear-gradient(90deg, #ff1493, #ff4500)", color: "white", border: "none", borderRadius: "50px", fontWeight: "900", fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 10px 30px rgba(255,20,147,0.4)", whiteSpace: "nowrap" }}>
          ✨ Take Beauty Quiz
        </button>
      </div>

    </div>
  );
};

export default BeautyHubView;
