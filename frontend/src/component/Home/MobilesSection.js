import React, { useState, useRef, useEffect } from "react";
import "./MobilesSection.css";

/* ═══════════════════════════════════════════════════════════════
   PREMIUM MOBILE PHONES DATA
═══════════════════════════════════════════════════════════════ */
const MOBILES = [
  {
    id: "mob1",
    name: "Apple iPhone 15 Pro Max (Titanium Blue, 256GB)",
    brand: "Apple",
    price: 159900,
    mrp: 159900,
    discount: 0,
    rating: 4.9,
    reviews: "34K",
    specs: "📱 6.7\" Super Retina XDR · 📸 48MP Triple Cam · 🚀 A17 Pro Chip",
    badge: "🍎 Apple Flagship",
    img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&auto=format&fit=crop"
  },
  {
    id: "mob2",
    name: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 512GB)",
    brand: "Samsung",
    price: 139999,
    mrp: 144999,
    discount: 3,
    rating: 4.8,
    reviews: "21K",
    specs: "📱 6.8\" Dynamic AMOLED 2X · 📸 200MP Quad Cam · 🖊️ S-Pen Included",
    badge: "✨ Galaxy AI",
    img: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=600&auto=format&fit=crop"
  },
  {
    id: "mob3",
    name: "Google Pixel 8 Pro (Bay Blue, 128GB)",
    brand: "Google",
    price: 106999,
    mrp: 106999,
    discount: 0,
    rating: 4.7,
    reviews: "12K",
    specs: "📱 6.7\" Super Actua · 📸 50MP Pro Camera · 🧠 Tensor G3 AI",
    badge: "🤖 Best AI Camera",
    img: "https://images.unsplash.com/photo-1696956272548-52fbac07908c?w=600&auto=format&fit=crop"
  },
  {
    id: "mob4",
    name: "OnePlus 12 5G (Flowy Emerald, 16GB RAM, 512GB)",
    brand: "OnePlus",
    price: 69999,
    mrp: 74999,
    discount: 6,
    rating: 4.8,
    reviews: "45K",
    specs: "📱 6.82\" 2K 120Hz ProXDR · 📸 Hasselblad 50MP · 🔋 100W Charging",
    badge: "⚡ Flagship Killer",
    img: "https://images.unsplash.com/photo-1707833075677-22f3e8b0ed18?w=600&auto=format&fit=crop"
  },
  {
    id: "mob5",
    name: "Nothing Phone (2) (Dark Grey, 12GB RAM, 256GB)",
    brand: "Nothing",
    price: 39999,
    mrp: 49999,
    discount: 20,
    rating: 4.6,
    reviews: "32K",
    specs: "📱 6.7\" Flexible OLED · 💡 Glyph Interface · 📸 50MP Dual Cam",
    badge: "💡 Unique Design",
    img: "https://images.unsplash.com/photo-1689255282583-048eeec83705?w=600&auto=format&fit=crop"
  },
  {
    id: "mob6",
    name: "Vivo X100 Pro 5G (Asteroid Black, 16GB RAM, 512GB)",
    brand: "Vivo",
    price: 89999,
    mrp: 94999,
    discount: 5,
    rating: 4.8,
    reviews: "18K",
    specs: "📱 6.78\" AMOLED 120Hz · 📸 ZEISS 50MP Triple · 🚀 Dimensity 9300",
    badge: "📸 ZEISS Optics",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=600&auto=format&fit=crop"
  },
  {
    id: "mob7",
    name: "Motorola Edge 50 Pro 5G (Luxe Macaron, 12GB RAM, 256GB)",
    brand: "Motorola",
    price: 35999,
    mrp: 41999,
    discount: 14,
    rating: 4.7,
    reviews: "56K",
    specs: "📱 6.7\" 144Hz pOLED Curved · 📸 50MP Pantone Camera · 🔋 125W Fast",
    badge: "🎨 Pantone Colors",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop"
  },
  {
    id: "mob8",
    name: "Samsung Galaxy Z Fold 5 (Phantom Black, 512GB)",
    brand: "Samsung",
    price: 164999,
    mrp: 169999,
    discount: 2,
    rating: 4.8,
    reviews: "11K",
    specs: "📱 7.6\" Foldable AMOLED · 📱 6.2\" Cover Screen · 🖊️ S-Pen Support",
    badge: "📁 Foldable King",
    img: "https://images.unsplash.com/photo-1692290473950-89196b0553e1?w=600&auto=format&fit=crop"
  },
];

const MobilesSection = () => {
  const cardsRef = useRef(null);

  // Auto-rotating scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (!cardsRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        cardsRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nav = (dir) =>
    cardsRef.current?.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });

  return (
    <section className="mobSection" id="mobiles-store">
      <div className="mobHeader">
        <div className="mobHeaderLeft">
          <span className="mobLiveChip">📱 THE SMARTPHONE HUB</span>
          <h2 className="mobBanTitle">Latest Mobiles & Flagships</h2>
          <p className="mobBanSub">Apple, Samsung, Google, OnePlus & more. Up to 12 Months No Cost EMI.</p>
        </div>
        <div className="mobNavRow">
          <button className="mobNavBtn" onClick={() => nav("l")}>❮</button>
          <span className="mobCountChip">8 Flagships</span>
          <button className="mobNavBtn" onClick={() => nav("r")}>❯</button>
        </div>
      </div>

      <div className="mobCarousel" ref={cardsRef}>
        {MOBILES.map(mob => (
          <div key={mob.id} className="mobCard">
            <div className="mobCardImgBox">
              <img src={mob.img} alt={mob.name} className="mobCardImg" />
              {mob.discount > 0 && <span className="mobDiscChip">-{mob.discount}%</span>}
              <span className="mobBadgeChip">{mob.badge}</span>
              <div className="mobCardOverlay">
                <button className="mobOvView">👁 View Details</button>
              </div>
            </div>
            <div className="mobCardBody">
              <span className="mobBrandLabel">{mob.brand}</span>
              <h4 className="mobCardTitle">{mob.name}</h4>
              <div className="mobSpecsRow">{mob.specs}</div>
              <div className="mobRatingRow">
                <span className="mobStars">★ {mob.rating}</span>
                <span className="mobRevs">({mob.reviews})</span>
              </div>
              <div className="mobPriceRow">
                <span className="mobPrice">₹{mob.price.toLocaleString("en-IN")}</span>
                {mob.discount > 0 && <span className="mobMrp">₹{mob.mrp.toLocaleString("en-IN")}</span>}
              </div>
              <div className="mobExchange">🔄 Upto ₹50,000 off on Exchange</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobilesSection;
