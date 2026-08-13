import React, { useState, useMemo, useRef, useEffect } from "react";
import "./KidsFashionSection.css";

/* ═════════════════════════════════════════════════════════════
   SUB-CATEGORY FILTER PILLS FOR KIDS FASHION
═════════════════════════════════════════════════════════════ */
const kidsCategories = [
  { id: "all",    label: "🧒 All 1,000 Kids Clothes", icon: "🧒" },
  { id: "boys",   label: "👦 Boys' Sherwanis & Suits (400)", icon: "👦" },
  { id: "girls",  label: "👧 Girls' Frocks & Lehengas (400)", icon: "👧" },
  { id: "casual", label: "👕 Tees, Jeans & Dungarees (200)", icon: "👕" }
];

const kidsImagePool = [
  "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop"
];

const kidsTemplates = [
  { name: "Boys' Royal Velvet Silk Embroidered Sherwani & Pyjama Set", cat: "boys", brand: "Kids Festive", badge: "👦 Royal Little Prince" },
  { name: "Girls' Cute Floral Printed Cotton Frock Party Dress", cat: "girls", brand: "Cute Kids Pick", badge: "👧 Princess Frock" },
  { name: "Boys' Italian 3-Piece Tuxedo Suit with Bowtie", cat: "boys", brand: "Raymond Junior", badge: "👦 Little Gentleman" },
  { name: "Girls' Luxury Designer Velvet Royal Lehenga Choli Set", cat: "girls", brand: "Biba Girls", badge: "👧 Festive Lehenga" },
  { name: "Girls' Denim Dungaree Dress with Striped Inner T-Shirt", cat: "casual", brand: "Mothercare", badge: "👕 Trendy Casual" },
  { name: "Boys' Printed Cotton Kurta & Dhoti Set for Festivals", cat: "boys", brand: "FabIndia Kids", badge: "👦 Traditional Dhoti" }
];

const generate1000KidsItems = () => {
  const items = [];
  for (let i = 0; i < 1000; i++) {
    const t = kidsTemplates[i % kidsTemplates.length];
    const img = kidsImagePool[i % kidsImagePool.length];
    const mrp = Math.floor(999 + (i * 73) % 8500);
    const disc = 25 + (i * 3) % 45;
    const price = Math.floor(mrp * (1 - disc / 100));

    items.push({
      _id: `kids_1000_${i + 1}`,
      name: `${t.name} #${i + 1}`,
      price,
      mrp,
      discount: disc,
      ratings: parseFloat((4.7 + ((i * 7) % 3) / 10).toFixed(1)),
      numOfReviews: 190 + (i * 143) % 25000,
      image: img,
      category: t.cat,
      brand: t.brand,
      badge: t.badge
    });
  }
  return items;
};

const ALL_1000_KIDS = generate1000KidsItems();

const KidsFashionSection = () => {
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
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  const handleNavScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const filteredItems = useMemo(() => {
    return ALL_1000_KIDS.filter(p => {
      const cMatch = selectedCat === "all" || p.category === selectedCat;
      const qMatch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return cMatch && qMatch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="kidsSectionWrap" id="kids-fashion-section">

      {/* TEAL & ORANGE HEADER BANNER */}
      <div className="kidsHeaderBanner">
        <div className="kidsHeaderLeft">
          <span className="kidsRoyalBadge">🧒 KIDS & CHILDREN FASHION STORE</span>
          <h2 className="kidsTitle">Kids & Children Royal Fashion Collection (1,000 Clothes)</h2>
          <p className="kidsSub">
            Boys' Sherwanis & Tuxedo Suits, Girls' Party Frocks, Lehengas & Dungarees · Biba Kids · Mothercare Style
          </p>
        </div>

        <div className="kidsHeaderRight">
          <input
            type="text"
            className="kidsSearchInput"
            placeholder="🔍 Search 1,000 Kids Clothes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <div className="kidsNavBtnBox">
            <button className="kidsArrowBtn" onClick={() => handleNavScroll("left")}>❮</button>
            <button className="kidsArrowBtn" onClick={() => handleNavScroll("right")}>❯</button>
          </div>
          <span className="kidsCountPill">{filteredItems.length.toLocaleString("en-IN")} Clothes</span>
        </div>
      </div>

      {/* SUB-CATEGORY FILTER PILLS */}
      <div className="kidsFilterPillsBar">
        {kidsCategories.map(cat => {
          const isActive = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              className={`kidsPillBtn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* AUTO-ROTATING HORIZONTAL CAROUSEL */}
      <div className="kidsCarouselContainer" ref={scrollRef}>
        {filteredItems.slice(0, 36).map(item => (
          <div key={item._id} className="kidsProductCard">
            <div className="kidsImgContainer">
              <img src={item.image} alt="" aria-hidden="true" className="kidsCardImg" />
              <span className="kidsDiscountBadge">-{item.discount}% OFF</span>
              <span className="kidsBadgeTag">{item.badge}</span>
            </div>

            <div className="kidsCardContent">
              <span className="kidsBrandName">{item.brand}</span>
              <h4 className="kidsItemTitle">{item.name}</h4>

              <div className="kidsRatingRow">
                <span className="kidsStar">★ {item.ratings}</span>
                <span className="kidsReviews">({item.numOfReviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="kidsPriceRow">
                <span className="kidsPriceCurrent">₹{item.price.toLocaleString("en-IN")}</span>
                <span className="kidsPriceMrp">₹{item.mrp.toLocaleString("en-IN")}</span>
              </div>

              <button className="kidsAddCartBtn">
                🧒 Add to Kids Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default KidsFashionSection;
