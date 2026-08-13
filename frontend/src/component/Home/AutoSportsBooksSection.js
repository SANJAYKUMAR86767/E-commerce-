import React, { useState, useRef, useEffect } from "react";
import "./AutoSportsBooksSection.css";

const ITEMS = [
  {
    id: "asb1", name: "Steelbird SBA-1 Classic Full Face Helmet (Matte Black)",
    brand: "Steelbird", price: 1499, mrp: 2199, discount: 32, rating: 4.5, reviews: "85K",
    specs: "🪖 ISI Certified · 🛡️ High Impact ABS · 🌬️ Ventilation System", badge: "🪖 Top Helmet",
    img: "https://images.unsplash.com/photo-1558384462-132d72f5d96e?w=600&auto=format&fit=crop"
  },
  {
    id: "asb2", name: "SG Full Cricket Kit with Duffle Bag (Men's Size)",
    brand: "SG", price: 6499, mrp: 8999, discount: 28, rating: 4.7, reviews: "12K",
    specs: "🏏 English Willow Bat · 🧤 Pads & Gloves · 🎒 Premium Duffle", badge: "🏏 Cricket Pro",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&auto=format&fit=crop"
  },
  {
    id: "asb3", name: "Atomic Habits by James Clear (Paperback)",
    brand: "Penguin", price: 499, mrp: 799, discount: 37, rating: 4.9, reviews: "2.1L",
    specs: "📚 Self-Help · 🧠 Build Good Habits · 🌍 NYT Bestseller", badge: "📚 #1 Bestseller",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&auto=format&fit=crop"
  },
  {
    id: "asb4", name: "Royal Enfield Continental GT 650 (Rocker Red)",
    brand: "Royal Enfield", price: 319000, mrp: 319000, discount: 0, rating: 4.8, reviews: "9K",
    specs: "🛵 648cc Parallel Twin · 🏁 Cafe Racer · 🛑 Dual Channel ABS", badge: "🛵 Book Now",
    img: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?w=600&auto=format&fit=crop"
  },
  {
    id: "asb5", name: "Cosco Light Weight Football (Size 5)",
    brand: "Cosco", price: 449, mrp: 750, discount: 40, rating: 4.6, reviews: "34K",
    specs: "⚽ Hand Stitched · 🏟️ Standard Size 5 · 💧 Water Resistant", badge: "⚽ Sports Choice",
    img: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=600&auto=format&fit=crop"
  },
  {
    id: "asb6", name: "Autonity Universal Car Dashboard Mobile Holder",
    brand: "Autonity", price: 299, mrp: 699, discount: 57, rating: 4.4, reviews: "45K",
    specs: "🚗 360° Rotation · 🧲 Strong Suction · 📱 Fits All Phones", badge: "🚗 Auto Acc",
    img: "https://images.unsplash.com/photo-1626245089332-9599557fc95f?w=600&auto=format&fit=crop"
  },
  {
    id: "asb7", name: "The Psychology of Money by Morgan Housel",
    brand: "Jaico", price: 299, mrp: 399, discount: 25, rating: 4.8, reviews: "1.5L",
    specs: "📚 Finance · 💰 Wealth Creation · 📈 Timeless Lessons", badge: "📚 Must Read",
    img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=600&auto=format&fit=crop"
  },
  {
    id: "asb8", name: "Nivia Heavy Weight Tennis Ball (Pack of 6)",
    brand: "Nivia", price: 399, mrp: 550, discount: 27, rating: 4.5, reviews: "21K",
    specs: "🎾 Heavy Weight · 🏏 Ideal for Cricket · 🟢 High Bounce", badge: "🎾 Sports Gear",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop"
  },
];

const AutoSportsBooksSection = () => {
  const cardsRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!cardsRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        cardsRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3800);
    return () => clearInterval(timer);
  }, []);
  const nav = (dir) => cardsRef.current?.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  return (
    <section className="asbSection" id="auto-sports-books-store">
      <div className="asbHeader">
        <div className="asbHeaderLeft">
          <span className="asbLiveChip">🏍️ AUTO, SPORTS & BOOKS</span>
          <h2 className="asbBanTitle">Gear Up & Read On</h2>
          <p className="asbBanSub">Helmets, Cricket Kits, Best-selling Books, Car Accessories.</p>
        </div>
        <div className="asbNavRow">
          <button className="asbNavBtn" onClick={() => nav("l")}>❮</button>
          <button className="asbNavBtn" onClick={() => nav("r")}>❯</button>
        </div>
      </div>
      <div className="asbCarousel" ref={cardsRef}>
        {ITEMS.map(item => (
          <div key={item.id} className="asbCard">
            <div className="asbCardImgBox">
              <img src={item.img} alt={item.name} className="asbCardImg" />
              {item.discount > 0 && <span className="asbDiscChip">-{item.discount}%</span>}
              <span className="asbBadgeChip">{item.badge}</span>
            </div>
            <div className="asbCardBody">
              <span className="asbBrandLabel">{item.brand}</span>
              <h4 className="asbCardTitle">{item.name}</h4>
              <div className="asbSpecsRow">{item.specs}</div>
              <div className="asbRatingRow">
                <span className="asbStars">★ {item.rating}</span>
                <span className="asbRevs">({item.reviews})</span>
              </div>
              <div className="asbPriceRow">
                <span className="asbPrice">₹{item.price.toLocaleString("en-IN")}</span>
                {item.discount > 0 && <span className="asbMrp">₹{item.mrp.toLocaleString("en-IN")}</span>}
              </div>
              <button className="asbBtnBuy">⚡ Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AutoSportsBooksSection;
