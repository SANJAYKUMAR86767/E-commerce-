import React, { useState, useMemo, useRef, useEffect } from "react";
import "./DryFruitsSection.css";

/* ═══════════════════════════════════════════════════════════════
   DRY FRUITS CATEGORY PILLS (matching user's screenshot exactly)
═══════════════════════════════════════════════════════════════ */
const dryFruitPills = [
  { id: "all",      label: "🌰 All Dry Fruits",       icon: "🌰" },
  { id: "kaju",     label: "🥜 Kaju (Cashew)",         icon: "🥜" },
  { id: "pista",    label: "💚 Pista (Pistachio)",      icon: "💚" },
  { id: "almond",   label: "🤎 Almond (Badam)",         icon: "🤎" },
  { id: "walnut",   label: "🪨 Walnut (Akhrot)",        icon: "🪨" },
  { id: "anjeer",   label: "🟫 Anjeer (Fig)",           icon: "🟫" },
  { id: "makhana",  label: "⚪ Makhana (Fox Nuts)",     icon: "⚪" },
  { id: "apricot",  label: "🍊 Apricot (Khumani)",      icon: "🍊" },
  { id: "raisin",   label: "🍇 Raisins (Kishmish)",     icon: "🍇" },
  { id: "dates",    label: "🌴 Dates (Khajoor)",        icon: "🌴" },
  { id: "mix",      label: "🎁 Mix & Gift Boxes",       icon: "🎁" },
  { id: "berries",  label: "🫐 Berries & Cranberries",  icon: "🫐" },
];

/* ═══════════════════════════════════════════════════════════════
   100% UNIQUE DRY FRUITS — ALL DIFFERENT BRANDS & VARIETIES
═══════════════════════════════════════════════════════════════ */
const UNIQUE_DRY_FRUITS = [
  {
    id: "df_001",
    name: "Happilo 100% Natural Premium Whole Cashews W240 Grade (500g)",
    brand: "Happilo", cat: "kaju",
    price: 399, mrp: 699, discount: 42, rating: 4.9, reviews: 82400,
    specs: "🥜 W240 Grade · Extra Large · Zero Added Salt · Handpicked from Goa",
    badge: "🥇 Bestselling Kaju",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop"
  },
  {
    id: "df_002",
    name: "Rostaa Premium Iranian Roasted & Salted Pistachio Nuts (250g)",
    brand: "Rostaa", cat: "pista",
    price: 549, mrp: 899, discount: 38, rating: 4.8, reviews: 54200,
    specs: "💚 Iranian Origin · Pre-Split · Lightly Salted · Rich in Protein & Fibre",
    badge: "💚 Persian Premium",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop"
  },
  {
    id: "df_003",
    name: "Farmley California Premium Almonds Badam (500g, Raw Unsalted)",
    brand: "Farmley", cat: "almond",
    price: 449, mrp: 749, discount: 40, rating: 4.9, reviews: 68900,
    specs: "🤎 California Origin · High Vitamin E · Raw Unsalted · Non-GMO Verified",
    badge: "🌿 California Gold",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&auto=format&fit=crop"
  },
  {
    id: "df_004",
    name: "Nutraj Special Kashmiri Akhrot Walnut Without Shell Halves (250g)",
    brand: "Nutraj", cat: "walnut",
    price: 329, mrp: 549, discount: 40, rating: 4.8, reviews: 43100,
    specs: "🪨 Kashmiri Origin · Light Halves · Omega-3 Rich · Brain-Boosting Superfood",
    badge: "🧠 Brain Food",
    img: "https://images.unsplash.com/photo-1607897824825-d5b0d0c5afe4?w=600&auto=format&fit=crop"
  },
  {
    id: "df_005",
    name: "HyperFoods Premium Turkish Anjeer Dried Figs (400g)",
    brand: "HyperFoods", cat: "anjeer",
    price: 399, mrp: 699, discount: 42, rating: 4.7, reviews: 38600,
    specs: "🟫 Turkish Origin · Naturally Sweet · Rich in Iron & Calcium · Soft Texture",
    badge: "🌸 Natural Sweet",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop"
  },
  {
    id: "df_006",
    name: "Munch N' Crunch Roasted Makhana Fox Nuts Peri Peri Flavour (100g)",
    brand: "Munch N' Crunch", cat: "makhana",
    price: 149, mrp: 299, discount: 50, rating: 4.8, reviews: 71200,
    specs: "⚪ Low Calorie · 100% Lotus Seeds · Gluten-Free · Guilt-Free Snack",
    badge: "⚡ Guilt-Free Snack",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop"
  },
  {
    id: "df_007",
    name: "Shree Mithai Royal Dry Fruit Assortment Tin Gift Box (250g)",
    brand: "Shree Mithai", cat: "mix",
    price: 599, mrp: 999, discount: 40, rating: 4.9, reviews: 29800,
    specs: "🎁 Kaju + Pista + Almond + Raisin · Premium Tin Gift Packaging · Diwali Special",
    badge: "🎁 Diwali Gift Box",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop"
  },
  {
    id: "df_008",
    name: "Solimo Jumbo Seedless Golden Raisins Kishmish (500g)",
    brand: "Amazon Solimo", cat: "raisin",
    price: 219, mrp: 399, discount: 45, rating: 4.7, reviews: 56700,
    specs: "🍇 Seedless Golden · Naturally Dried · High Antioxidants · Ready-to-Eat",
    badge: "🍇 Golden Kishmish",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop"
  },
  {
    id: "df_009",
    name: "Sindhi Premium Saudi Medjool Dates Khajoor Super Soft (500g)",
    brand: "Sindhi Dry Fruits", cat: "dates",
    price: 599, mrp: 999, discount: 40, rating: 4.9, reviews: 31200,
    specs: "🌴 Saudi Medjool Variety · Super Soft & Juicy · Natural Energy Booster",
    badge: "🌴 Medjool Royal",
    img: "https://images.unsplash.com/photo-1520637836993-5f7b1d78e5b2?w=600&auto=format&fit=crop"
  },
  {
    id: "df_010",
    name: "Happilo Dried Afghan Apricot Khumani Jumbo Size (250g)",
    brand: "Happilo", cat: "apricot",
    price: 299, mrp: 499, discount: 40, rating: 4.8, reviews: 44800,
    specs: "🍊 Afghan Origin · Sun-Dried · Natural Orange Color · No Added Sugar",
    badge: "☀️ Sun-Dried Afghan",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&auto=format&fit=crop"
  },
  {
    id: "df_011",
    name: "Rostaa Mixed Berries Trail Mix with Cranberry & Blueberry (200g)",
    brand: "Rostaa", cat: "berries",
    price: 349, mrp: 599, discount: 41, rating: 4.7, reviews: 22900,
    specs: "🫐 Cranberry + Blueberry + Strawberry · Antioxidant-Rich · Trail Snack Mix",
    badge: "🫐 Berry Power Mix",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop"
  },
  {
    id: "df_012",
    name: "Nutraj Premium Whole Macadamia Nuts Roasted Unsalted (200g)",
    brand: "Nutraj", cat: "mix",
    price: 899, mrp: 1399, discount: 35, rating: 4.9, reviews: 14600,
    specs: "🥜 Australian Origin · Buttery Flavour · Rich in Healthy Monounsaturated Fat",
    badge: "👑 Luxury Macadamia",
    img: "https://images.unsplash.com/photo-1607897824825-d5b0d0c5afe4?w=600&auto=format&fit=crop"
  },
  {
    id: "df_013",
    name: "Farmley Roasted Makhana Sea Salt & Pepper Lotus Seeds (100g x 4 Pack)",
    brand: "Farmley", cat: "makhana",
    price: 449, mrp: 799, discount: 43, rating: 4.8, reviews: 38500,
    specs: "⚪ Sea Salt & Pepper Flavour · 4 Pack Multipack · 70 Kcal/Serving",
    badge: "⚡ Multipack Saver",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop"
  },
  {
    id: "df_014",
    name: "HyperFoods RawFruit Premium Dry Fruit Gift Hamper Box (9 Types)",
    brand: "HyperFoods", cat: "mix",
    price: 999, mrp: 1799, discount: 44, rating: 4.9, reviews: 19400,
    specs: "🎁 9 Premium Dry Fruits · Kaju, Almond, Pista, Walnut, Dates, Raisin + More",
    badge: "🎁 Ultimate Hamper",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop"
  },
  {
    id: "df_015",
    name: "Tulsi Premium Whole Raw Brazil Nuts Unsalted (200g)",
    brand: "Tulsi", cat: "mix",
    price: 549, mrp: 899, discount: 38, rating: 4.8, reviews: 11200,
    specs: "🌿 Brazilian Origin · Selenium Superfood · Cholesterol Support · Raw & Natural",
    badge: "🌿 Selenium Bomb",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&auto=format&fit=crop"
  },
  {
    id: "df_016",
    name: "Palam Dry Fruits Premium Afghani Mamra Badam Almonds (250g)",
    brand: "Palam Farms", cat: "almond",
    price: 699, mrp: 1199, discount: 41, rating: 4.9, reviews: 27300,
    specs: "🤎 Afghani Mamra Variety · Thin-Shelled · Most Nutrient-Dense Almond",
    badge: "💎 Afghani Mamra",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop"
  },
  {
    id: "df_017",
    name: "Borges Premium Spanish Marcona Almonds Roasted Salted (150g)",
    brand: "Borges", cat: "almond",
    price: 449, mrp: 699, discount: 35, rating: 4.8, reviews: 18700,
    specs: "🤎 Spanish Marcona · Round & Buttery Texture · Gourmet Roasted & Lightly Salted",
    badge: "🇪🇸 Spanish Gourmet",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&auto=format&fit=crop"
  },
  {
    id: "df_018",
    name: "Happilo Premium Dried Blueberries No Added Sugar (150g)",
    brand: "Happilo", cat: "berries",
    price: 349, mrp: 599, discount: 41, rating: 4.7, reviews: 32100,
    specs: "🫐 No Added Sugar · Antioxidant Superfood · 100% Natural Wild Blueberries",
    badge: "🫐 Wild Blueberry",
    img: "https://images.unsplash.com/photo-1607897824825-d5b0d0c5afe4?w=600&auto=format&fit=crop"
  },
  {
    id: "df_019",
    name: "Farmaish Dry Fruits Combo Pack of 9 Assorted Premium Nuts (900g Total)",
    brand: "Farmaish Dry Fruits", cat: "mix",
    price: 1299, mrp: 2199, discount: 40, rating: 4.9, reviews: 24600,
    specs: "🎁 9-Type Assortment · 100g Each · Premium Zip-Lock Bags · Fresh Stock",
    badge: "🌟 Ultimate Combo",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop"
  },
  {
    id: "df_020",
    name: "Dry Fruit Hub Premium Light Halves Kashmiri Walnuts Akhrot (500g)",
    brand: "Dry Fruit Hub", cat: "walnut",
    price: 599, mrp: 999, discount: 40, rating: 4.9, reviews: 39200,
    specs: "🪨 Kashmiri Light Halves · Grade A Premium · Rich Omega-3 · Anti-Inflammatory",
    badge: "🧠 Omega-3 Boost",
    img: "https://images.unsplash.com/photo-1607897824825-d5b0d0c5afe4?w=600&auto=format&fit=crop"
  },
  {
    id: "df_021",
    name: "Vashe Shewa Premium Ajwa Dates Khajoor from Al-Madinah (500g)",
    brand: "Vashe Shewa", cat: "dates",
    price: 899, mrp: 1499, discount: 40, rating: 4.9, reviews: 17400,
    specs: "🌴 Al-Madinah Ajwa · 100% Original Imported · Iron & Fibre Rich · Prophetic Fruit",
    badge: "🕌 Madinah Ajwa",
    img: "https://images.unsplash.com/photo-1520637836993-5f7b1d78e5b2?w=600&auto=format&fit=crop"
  },
  {
    id: "df_022",
    name: "Rostaa Activated Pumpkin Seeds Roasted Salted (250g)",
    brand: "Rostaa", cat: "mix",
    price: 249, mrp: 449, discount: 44, rating: 4.7, reviews: 41800,
    specs: "🌿 Zinc & Magnesium Rich · Roasted & Salted · Keto Friendly High-Protein Seed",
    badge: "💪 Keto Power",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop"
  },
  {
    id: "df_023",
    name: "Farmley Premium Turkish Seedless Raisins Kishmish Black (500g)",
    brand: "Farmley", cat: "raisin",
    price: 299, mrp: 549, discount: 45, rating: 4.8, reviews: 48200,
    specs: "🍇 Turkish Black Seedless · Naturally Sun-Dried · Rich in Iron & Potassium",
    badge: "🍇 Turkish Black",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop"
  },
  {
    id: "df_024",
    name: "Nutraj Premium Roasted & Salted Whole Cashews W180 Grade (1kg)",
    brand: "Nutraj", cat: "kaju",
    price: 899, mrp: 1499, discount: 40, rating: 4.9, reviews: 61300,
    specs: "🥜 W180 Giant Grade · Light Roast & Salted · 18g Protein / 100g",
    badge: "🏆 Giant W180 Grade",
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop"
  },
  {
    id: "df_025",
    name: "Shreeji Iranian Jumbo Roasted Pistachio Pista with Shell (500g)",
    brand: "Shreeji", cat: "pista",
    price: 699, mrp: 1199, discount: 41, rating: 4.8, reviews: 33700,
    specs: "💚 Iranian Giant Pistachio · With Shell · Naturally Roasted · No Artificial Color",
    badge: "💎 Jumbo Iranian",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop"
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
const DryFruitsSection = () => {
  const cardsRef = useRef(null);
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");

  // Auto-rotating ticker
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
    return UNIQUE_DRY_FRUITS.filter(p => {
      const catOk = selectedCat === "all" || p.cat === selectedCat;
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [selectedCat, search]);

  return (
    <section className="dfSection" id="dry-fruits-nuts-store">

      {/* ── HERO BANNER ── */}
      <div className="dfBanner">
        <div className="dfBannerLeft">
          <span className="dfLiveChip">🌰 FLIPKART OFFICIAL DRY FRUITS & NUTS STORE</span>
          <h2 className="dfBanTitle">🥜 Premium Dry Fruits, Nuts & Healthy Snacks</h2>
          <p className="dfBanSub">
            100% Fresh & Authentic · Happilo · Rostaa · Farmley · Nutraj · HyperFoods · Farmaish · Shreeji · Borges
          </p>
          <div className="dfBanStats">
            <div className="dfStat"><span className="dfStatNum">500+</span><span className="dfStatLabel">Varieties</span></div>
            <div className="dfStat"><span className="dfStatNum">20+</span><span className="dfStatLabel">Top Brands</span></div>
            <div className="dfStat"><span className="dfStatNum">Up to 55%</span><span className="dfStatLabel">OFF Today</span></div>
            <div className="dfStat"><span className="dfStatNum">Farm</span><span className="dfStatLabel">Fresh Stock</span></div>
          </div>
        </div>
        <div className="dfBannerRight">
          <input
            className="dfSearch"
            type="text"
            placeholder="🔍 Search Kaju, Pista, Almond..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="dfNavRow">
            <button className="dfNavBtn" onClick={() => nav("l")}>❮</button>
            <button className="dfNavBtn" onClick={() => nav("r")}>❯</button>
            <span className="dfCountChip">{filtered.length} Items Available</span>
          </div>
        </div>
      </div>

      {/* ── CATEGORY PILLS ── */}
      <div className="dfPillsBar">
        {dryFruitPills.map(p => (
          <button
            key={p.id}
            className={`dfPill ${selectedCat === p.id ? "dfPillActive" : ""}`}
            onClick={() => setSelectedCat(p.id)}
          >
            <span>{p.icon}</span>
            <span className="dfPillLabel">{p.label}</span>
          </button>
        ))}
      </div>

      {/* ── 3D CAROUSEL ── */}
      <div className="dfCarousel" ref={cardsRef}>
        {filtered.length === 0 && (
          <div className="dfEmpty">🔍 No results — try another category or search!</div>
        )}
        {filtered.map(product => (
          <div key={product.id} className="dfCard">

            {/* IMAGE */}
            <div className="dfCardImgBox">
              <img src={product.img} alt="" aria-hidden="true" className="dfCardImg" />
              <span className="dfDiscChip">-{product.discount}%</span>
              <span className="dfBadgeChip">{product.badge}</span>
              <div className="dfCardOverlay">
                <button className="dfOverlayView">👁 Quick View</button>
                <button className="dfOverlayBuy">⚡ Buy Now</button>
              </div>
            </div>

            {/* BODY */}
            <div className="dfCardBody">
              <span className="dfBrandLabel">{product.brand}</span>
              <h4 className="dfCardTitle">{product.name}</h4>
              <div className="dfSpecsRow">{product.specs}</div>
              <div className="dfRatingRow">
                <span className="dfStars">★ {product.rating}</span>
                <span className="dfRevs">({product.reviews.toLocaleString("en-IN")} reviews)</span>
              </div>
              <div className="dfPriceRow">
                <span className="dfPrice">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="dfMrp">₹{product.mrp.toLocaleString("en-IN")}</span>
                <span className="dfSaved">Save ₹{(product.mrp - product.price).toLocaleString("en-IN")}</span>
              </div>
              <div className="dfFreeTag">🚚 Free Delivery · 📦 Freshness Sealed Packing</div>
              <div className="dfBtnRow">
                <button className="dfCartBtn">🛒 Add to Cart</button>
                <button className="dfBuyBtn">⚡ Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="dfTrustStrip">
        <span>🌿 100% Natural & Authentic</span>
        <span>📦 Freshness-Sealed Packaging</span>
        <span>🚚 Free Delivery on ₹299+</span>
        <span>🔄 7-Day Return Policy</span>
        <span>🥇 Lab Tested & Certified</span>
        <span>🌏 Sourced from Best Origins</span>
      </div>

    </section>
  );
};

export default DryFruitsSection;
