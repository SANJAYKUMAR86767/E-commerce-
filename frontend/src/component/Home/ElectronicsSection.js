import React, { useState, useRef, useEffect } from "react";
import "./ElectronicsSection.css";

const ELECTRONICS = [
  {
    id: "el1", name: "Apple MacBook Pro M3 Max (16-inch, 36GB RAM, 1TB SSD)",
    brand: "Apple", price: 319900, mrp: 319900, discount: 0, rating: 4.9, reviews: "4K",
    specs: "💻 16.2\" Liquid Retina XDR · 🚀 M3 Max Chip · 🔋 22 Hrs Battery", badge: "💻 Ultimate Pro",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop"
  },
  {
    id: "el2", name: "Sony Alpha ILCE-7RM4A Full-Frame Camera (Body Only)",
    brand: "Sony", price: 234990, mrp: 299990, discount: 21, rating: 4.8, reviews: "2K",
    specs: "📸 61.0 MP Full-Frame · 🎥 4K HDR Video · 🎯 Fast Hybrid AF", badge: "📸 Pro Photography",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop"
  },
  {
    id: "el3", name: "Apple Watch Ultra 2 (GPS + Cellular, 49mm, Titanium)",
    brand: "Apple", price: 89900, mrp: 89900, discount: 0, rating: 4.9, reviews: "12K",
    specs: "⌚ 49mm Titanium Case · 🔆 3000 Nits Display · 🏊 100m Water Resist", badge: "⌚ Rugged Smartwatch",
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop"
  },
  {
    id: "el4", name: "Dell XPS 15 9530 (13th Gen i9, 32GB RAM, 1TB SSD, RTX 4070)",
    brand: "Dell", price: 299990, mrp: 315990, discount: 5, rating: 4.7, reviews: "3K",
    specs: "💻 15.6\" 3.5K OLED Touch · 🚀 Intel i9 · 🎮 NVIDIA RTX 4070", badge: "💻 Premium Windows",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop"
  },
  {
    id: "el5", name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony", price: 29990, mrp: 34990, discount: 14, rating: 4.8, reviews: "28K",
    specs: "🎧 Industry Leading ANC · 🔋 30 Hrs Battery · 🎙️ Multi-mic for Calls", badge: "🎧 Best Audio",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop"
  },
  {
    id: "el6", name: "ASUS ROG Strix G16 (13th Gen i7, 16GB RAM, RTX 4060)",
    brand: "ASUS ROG", price: 139990, mrp: 169990, discount: 17, rating: 4.7, reviews: "8K",
    specs: "💻 16\" 165Hz Display · 🎮 RTX 4060 8GB · 🚀 Intel Core i7", badge: "🎮 Pro Gaming",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
  },
  {
    id: "el7", name: "GoPro HERO12 Black Action Camera",
    brand: "GoPro", price: 39990, mrp: 45000, discount: 11, rating: 4.8, reviews: "15K",
    specs: "🎥 5.3K60 Video · 🏄 Waterproof 33ft · 🔋 2x Longer Battery", badge: "🏄 Action Cam",
    img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600&auto=format&fit=crop"
  },
  {
    id: "el8", name: "iPad Pro 12.9-inch (M2, Wi-Fi, 256GB)",
    brand: "Apple", price: 119900, mrp: 119900, discount: 0, rating: 4.9, reviews: "18K",
    specs: "📱 12.9\" Liquid Retina XDR · 🚀 M2 Chip · 🖊️ Apple Pencil Support", badge: "🎨 Pro Tablet",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop"
  },
];

const ElectronicsSection = () => {
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
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const nav = (dir) => cardsRef.current?.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });

  return (
    <section className="elSection" id="electronics-store">
      <div className="elHeader">
        <div className="elHeaderLeft">
          <span className="elLiveChip">💻 PREMIUM ELECTRONICS</span>
          <h2 className="elBanTitle">Laptops, Cameras, Smartwatches & More</h2>
          <p className="elBanSub">Top-tier tech from Apple, Sony, Dell, Asus. Up to 30% OFF!</p>
        </div>
        <div className="elNavRow">
          <button className="elNavBtn" onClick={() => nav("l")}>❮</button>
          <button className="elNavBtn" onClick={() => nav("r")}>❯</button>
        </div>
      </div>

      <div className="elCarousel" ref={cardsRef}>
        {ELECTRONICS.map(item => (
          <div key={item.id} className="elCard">
            <div className="elCardImgBox">
              <img src={item.img} alt={item.name} className="elCardImg" />
              {item.discount > 0 && <span className="elDiscChip">-{item.discount}%</span>}
              <span className="elBadgeChip">{item.badge}</span>
            </div>
            <div className="elCardBody">
              <span className="elBrandLabel">{item.brand}</span>
              <h4 className="elCardTitle">{item.name}</h4>
              <div className="elSpecsRow">{item.specs}</div>
              <div className="elRatingRow">
                <span className="elStars">★ {item.rating}</span>
                <span className="elRevs">({item.reviews})</span>
              </div>
              <div className="elPriceRow">
                <span className="elPrice">₹{item.price.toLocaleString("en-IN")}</span>
                {item.discount > 0 && <span className="elMrp">₹{item.mrp.toLocaleString("en-IN")}</span>}
              </div>
              <button className="elBtnBuy">⚡ Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElectronicsSection;
