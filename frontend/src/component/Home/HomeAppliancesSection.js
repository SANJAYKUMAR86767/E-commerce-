import React, { useState, useRef, useEffect } from "react";
import "./HomeAppliancesSection.css";

const ITEMS = [
  {
    id: "ha1", name: "Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV",
    brand: "Samsung", price: 29990, mrp: 47900, discount: 37, rating: 4.6, reviews: "25K",
    specs: "📺 43\" 4K Ultra HD · 🎵 20W Dolby Digital Plus · 🧠 Crystal Processor 4K", badge: "📺 Bestseller TV",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop"
  },
  {
    id: "ha2", name: "LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator",
    brand: "LG", price: 25990, mrp: 31999, discount: 18, rating: 4.7, reviews: "14K",
    specs: "🧊 242L Double Door · ⚡ Smart Inverter Compressor · ❄️ Multi Air Flow", badge: "🧊 Smart Cooling",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&auto=format&fit=crop"
  },
  {
    id: "ha3", name: "Wakefit ShapeSense Orthopedic Memory Foam Mattress (72x72x6 inch)",
    brand: "Wakefit", price: 12499, mrp: 18499, discount: 32, rating: 4.8, reviews: "60K",
    specs: "🛏️ King Size · 🧠 Memory Foam · 🌙 10-Year Warranty", badge: "🛏️ Top Rated",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop"
  },
  {
    id: "ha4", name: "Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic Front Load",
    brand: "Bosch", price: 31490, mrp: 41690, discount: 24, rating: 4.7, reviews: "18K",
    specs: "👕 7 Kg Front Load · ⚡ EcoSilence Drive · 🦠 AntiBacteria Wash", badge: "👕 Premium Wash",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop"
  },
  {
    id: "ha5", name: "Godrej Interio RHS 3 Seater Premium Fabric Sofa (Grey)",
    brand: "Godrej Interio", price: 22999, mrp: 35000, discount: 34, rating: 4.5, reviews: "4K",
    specs: "🛋️ 3-Seater RHS L-Shape · 🧵 Premium Fabric · 🛡️ 3-Year Warranty", badge: "🛋️ Comfort Living",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop"
  },
  {
    id: "ha6", name: "Philips Air Fryer HD9200/90, 4.1L, 1400W",
    brand: "Philips", price: 7499, mrp: 9995, discount: 25, rating: 4.8, reviews: "42K",
    specs: "🍟 4.1L Capacity · ♨️ Rapid Air Technology · 🍽️ 90% Less Fat", badge: "🍟 Healthy Eating",
    img: "https://images.unsplash.com/photo-1588854337221-4cfb689181ce?w=600&auto=format&fit=crop"
  },
  {
    id: "ha7", name: "Dyson V11 Absolute Pro Cord-Free Vacuum Cleaner",
    brand: "Dyson", price: 44900, mrp: 52900, discount: 15, rating: 4.9, reviews: "9K",
    specs: "🧹 185 AW Suction · 🔋 60 Mins Runtime · 🦠 Captures 99.97% Particles", badge: "🧹 Deep Clean",
    img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop"
  },
  {
    id: "ha8", name: "Green Soul Monster Ultimate Series Ergonomic Gaming Chair",
    brand: "Green Soul", price: 17990, mrp: 35990, discount: 50, rating: 4.7, reviews: "11K",
    specs: "💺 Neck & Lumbar Pillows · 🔄 4D Armrests · 🛡️ High-Density Foam", badge: "💺 Pro Ergonomics",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop"
  },
];

const HomeAppliancesSection = () => {
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
    }, 3600);
    return () => clearInterval(timer);
  }, []);
  const nav = (dir) => cardsRef.current?.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  return (
    <section className="haSection" id="home-appliances-store">
      <div className="haHeader">
        <div className="haHeaderLeft">
          <span className="haLiveChip">🛋️ HOME, FURNITURE & APPLIANCES</span>
          <h2 className="haBanTitle">Upgrade Your Living Space</h2>
          <p className="haBanSub">TVs, Refrigerators, Sofas, Mattresses & more from top brands.</p>
        </div>
        <div className="haNavRow">
          <button className="haNavBtn" onClick={() => nav("l")}>❮</button>
          <button className="haNavBtn" onClick={() => nav("r")}>❯</button>
        </div>
      </div>
      <div className="haCarousel" ref={cardsRef}>
        {ITEMS.map(item => (
          <div key={item.id} className="haCard">
            <div className="haCardImgBox">
              <img src={item.img} alt={item.name} className="haCardImg" />
              {item.discount > 0 && <span className="haDiscChip">-{item.discount}%</span>}
              <span className="haBadgeChip">{item.badge}</span>
            </div>
            <div className="haCardBody">
              <span className="haBrandLabel">{item.brand}</span>
              <h4 className="haCardTitle">{item.name}</h4>
              <div className="haSpecsRow">{item.specs}</div>
              <div className="haRatingRow">
                <span className="haStars">★ {item.rating}</span>
                <span className="haRevs">({item.reviews})</span>
              </div>
              <div className="haPriceRow">
                <span className="haPrice">₹{item.price.toLocaleString("en-IN")}</span>
                {item.discount > 0 && <span className="haMrp">₹{item.mrp.toLocaleString("en-IN")}</span>}
              </div>
              <button className="haBtnBuy">⚡ View Product</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomeAppliancesSection;
