import React, { useState, useMemo, useRef, useEffect } from "react";
import "./TrendingShowcaseSection.css";
import ProductCard from "./ProductCard";

/* ═════════════════════════════════════════════════════════════
   BRANDED CATEGORY FILTER PILLS
═════════════════════════════════════════════════════════════ */
const trendingCategories = [
  { id: "all",    label: "🔥 All Top Bestsellers", icon: "🔥" },
  { id: "mobile", label: "📱 Flagship 5G Mobiles", icon: "📱" },
  { id: "laptop", label: "💻 Laptops & Cameras", icon: "💻" },
  { id: "audio",  label: "🎧 Premium Audio & Speakers", icon: "🎧" },
  { id: "watch",  label: "⌚ Luxury Watches", icon: "⌚" },
  { id: "fashion",label: "👟 Sneakers & Apparel", icon: "👟" }
];

/* 100% AUTHENTIC TOP BRANDED PRODUCTS POOL */
const brandedProducts = [
  {
    _id: "tr_1",
    name: "Apple iPhone 16 Pro Titanium (256GB)",
    category: "mobile",
    brand: "Apple Flagship",
    price: 129900,
    mrp: 139900,
    discount: 7,
    ratings: 4.9,
    numOfReviews: 3840,
    bankOffer: "💳 ₹5,000 Instant Discount with Bank Card",
    images: [{ url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop" }],
    badge: "🔥 2026 Flagship Pick"
  },
  {
    _id: "tr_2",
    name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 512GB)",
    category: "mobile",
    brand: "Samsung Galaxy",
    price: 129999,
    mrp: 149999,
    discount: 13,
    ratings: 4.9,
    numOfReviews: 2980,
    bankOffer: "💳 Extra ₹6,000 Exchange Bonus",
    images: [{ url: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop" }],
    badge: "📸 200MP AI Camera"
  },
  {
    _id: "tr_3",
    name: "Apple MacBook Pro M3 Max (16-inch, 36GB RAM)",
    category: "laptop",
    brand: "Apple Mac",
    price: 249900,
    mrp: 279900,
    discount: 10,
    ratings: 5.0,
    numOfReviews: 1240,
    bankOffer: "💳 No Cost EMI from ₹10,412/mo",
    images: [{ url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop" }],
    badge: "💻 M3 Max Monster"
  },
  {
    _id: "tr_4",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    category: "audio",
    brand: "Sony Audio",
    price: 29990,
    mrp: 34990,
    discount: 14,
    ratings: 4.8,
    numOfReviews: 4520,
    bankOffer: "💳 Flat ₹2,000 Cashback",
    images: [{ url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop" }],
    badge: "🎧 Industry ANC #1"
  },
  {
    _id: "tr_5",
    name: "Sony Alpha ILCE-7M4 Full-Frame Mirrorless Camera",
    category: "laptop",
    brand: "Sony Alpha",
    price: 214990,
    mrp: 242990,
    discount: 11,
    ratings: 4.9,
    numOfReviews: 890,
    bankOffer: "💳 Free 64GB Extreme SD Card",
    images: [{ url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop" }],
    badge: "📸 4K 60fps Cinema"
  },
  {
    _id: "tr_6",
    name: "Nike Air Jordan 1 Retro High OG Sneakers",
    category: "fashion",
    brand: "Nike Jordan",
    price: 16995,
    mrp: 21995,
    discount: 22,
    ratings: 4.9,
    numOfReviews: 6180,
    bankOffer: "🚚 Free Express Shipping",
    images: [{ url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop" }],
    badge: "👟 Limited Edition"
  },
  {
    _id: "tr_7",
    name: "ASUS ROG Strix SCAR 18 Core i9 RTX 4090 Gaming Laptop",
    category: "laptop",
    brand: "ASUS ROG",
    price: 289990,
    mrp: 329990,
    discount: 12,
    ratings: 4.9,
    numOfReviews: 540,
    bankOffer: "💳 Free Gaming Mouse & Bag",
    images: [{ url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop" }],
    badge: "🎮 RTX 4090 Beast"
  },
  {
    _id: "tr_8",
    name: "Bose Smart Soundbar 900 Dolby Atmos Speaker",
    category: "audio",
    brand: "Bose Sound",
    price: 84990,
    mrp: 99990,
    discount: 15,
    ratings: 4.8,
    numOfReviews: 1420,
    bankOffer: "💳 Flat 10% Bank Cashback",
    images: [{ url: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop" }],
    badge: "🔊 Cinema Dolby Atmos"
  },
  {
    _id: "tr_9",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium",
    category: "watch",
    brand: "Apple Watch",
    price: 89900,
    mrp: 99900,
    discount: 10,
    ratings: 4.9,
    numOfReviews: 2190,
    bankOffer: "💳 ₹4,000 Instant Discount",
    images: [{ url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop" }],
    badge: "⌚ 100m Water Resistant"
  },
  {
    _id: "tr_10",
    name: "Chanel Coco Mademoiselle Eau De Parfum 100ml",
    category: "fashion",
    brand: "Chanel Luxury",
    price: 8999,
    mrp: 11999,
    discount: 25,
    ratings: 4.9,
    numOfReviews: 1890,
    bankOffer: "🎁 Free Chanel Sample Pouch",
    images: [{ url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop" }],
    badge: "🌸 Luxury Fragrance"
  }
];

const TrendingShowcaseSection = ({ products }) => {
  const scrollRef = useRef(null);
  const [selectedCat, setSelectedCat] = useState("all");

  const displayList = useMemo(() => {
    const list = products && products.length > 0 ? products : brandedProducts;
    return list.filter(item => selectedCat === "all" || item.category === selectedCat);
  }, [products, selectedCat]);

  // AUTO-SCROLL HORIZONTAL CAROUSEL TICKER
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

  const handleNavScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <div className="trendingSectionWrap" id="trending-products-section">

      {/* ROYAL HEADER BANNER */}
      <div className="trendingHeaderBanner">
        <div className="trendingHeaderLeft">
          <span className="trendingLiveTag">🔥 FLIPKART OFFICIAL TOP BESTSELLERS</span>
          <h2 className="trendingTitle">🔥 Trending Products & Top Deals Showcase</h2>
          <p className="trendingSub">
            100% Genuine Top Flagship Brands · Apple · Samsung · Sony · Nike · Chanel · Rolex · Bose
          </p>
        </div>

        <div className="trendingHeaderRight">
          <div className="trendingNavBtnBox">
            <button className="trendingArrowBtn" onClick={() => handleNavScroll("left")}>❮</button>
            <button className="trendingArrowBtn" onClick={() => handleNavScroll("right")}>❯</button>
          </div>
          <span className="trendingCountPill">⭐ 4.8+ Rated Products</span>
        </div>
      </div>

      {/* BRANDED CATEGORY FILTER PILLS */}
      <div className="trendingFilterPillsBar">
        {trendingCategories.map(cat => {
          const isActive = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              className={`trendingPillBtn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* AUTO-ROTATING HORIZONTAL CAROUSEL */}
      <div className="trendingCarouselContainer" ref={scrollRef}>
        {displayList.map(item => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

    </div>
  );
};

export default TrendingShowcaseSection;
