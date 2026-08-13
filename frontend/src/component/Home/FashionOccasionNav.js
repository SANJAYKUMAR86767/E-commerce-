import React, { useState, useRef, useEffect } from "react";
import "./FashionOccasionNav.css";

/* ═════════════════════════════════════════════════════════════
   12 SEXY FASHION OCCASIONS DATA (10,000+ Outfits Total)
═════════════════════════════════════════════════════════════ */
const occasionData = {
  "Royal Wedding": {
    color: "#c72c7e",
    gradient: "linear-gradient(135deg,#c72c7e,#ff6b6b)",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=150&auto=format&fit=crop",
    offer: "Up to 65% OFF",
    count: "2,500 Outfits",
    products: [
      { id:"w1", name:"Manyavar Royal Gold Zari Silk Embroidered Sherwani", price:34999, original:44999, discount:22, rating:4.9, reviews:680, img:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop" },
      { id:"w2", name:"Sabyasachi Royal Velvet Zari Embroidered Bridal Lehenga", price:48999, original:65000, discount:25, rating:4.9, reviews:890, img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop" },
      { id:"w3", name:"Anita Dongre Raw Silk Pink Floral Bridal Lehenga Choli", price:24999, original:35000, discount:29, rating:4.8, reviews:540, img:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop" },
      { id:"w4", name:"South Indian Pure Pattu Silk Dhoti & Kurta Set", price:6499, original:9000, discount:28, rating:4.9, reviews:980, img:"https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop" }
    ],
  },
  "Tuxedo & Suits": {
    color: "#4e54c8",
    gradient: "linear-gradient(135deg,#4e54c8,#8f94fb)",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=150&auto=format&fit=crop",
    offer: "Up to 50% OFF",
    count: "2,000 Outfits",
    products: [
      { id:"su1", name:"Raymond Charcoal Italian 3-Piece Tuxedo Suit with Bowtie", price:18999, original:27000, discount:30, rating:4.8, reviews:520, img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop" },
      { id:"su2", name:"Armani Style Slim-Fit Midnight Blue Wedding Tuxedo", price:22499, original:38999, discount:42, rating:4.9, reviews:510, img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop" },
      { id:"su3", name:"Park Avenue Classic Slim Fit Navy Suit", price:12499, original:18000, discount:31, rating:4.7, reviews:740, img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop" }
    ],
  },
  "Night Partywear": {
    color: "#f953c6",
    gradient: "linear-gradient(135deg,#f953c6,#b91d73)",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=150&auto=format&fit=crop",
    offer: "Up to 60% OFF",
    count: "1,800 Outfits",
    products: [
      { id:"pw1", name:"Sequin Bodycon Night Club Mini Partywear Dress", price:3999, original:6000, discount:33, rating:4.8, reviews:720, img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop" },
      { id:"pw2", name:"Zara Satin V-Neck Wrap Floral Midi Party Dress", price:1799, original:2600, discount:31, rating:4.8, reviews:890, img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop" },
      { id:"pw3", name:"Velvet Crop Top & Lehenga Skirt Co-ord Party Set", price:9499, original:13000, discount:27, rating:4.8, reviews:380, img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop" }
    ],
  },
  "GenZ Streetwear": {
    color: "#11998e",
    gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&auto=format&fit=crop",
    offer: "Up to 70% OFF",
    count: "3,000 Outfits",
    products: [
      { id:"ca1", name:"Levi's 501 Original Straight Fit Denim Jeans", price:3499, original:5000, discount:30, rating:4.8, reviews:1580, img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop" },
      { id:"ca2", name:"Corsica Loose Fit High-Waist Wide-Leg Cargo Pants", price:1299, original:2499, discount:48, rating:4.6, reviews:690, img:"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop" },
      { id:"ca3", name:"Souled Store Oversized Heavyweight Graphic T-Shirt", price:799, original:1599, discount:50, rating:4.8, reviews:1290, img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop" }
    ],
  },
  "Corporate Formal": {
    color: "#2c3e50",
    gradient: "linear-gradient(135deg,#2c3e50,#4ca1af)",
    img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=150&auto=format&fit=crop",
    offer: "Up to 55% OFF",
    count: "1,500 Outfits",
    products: [
      { id:"fw1", name:"Peter England Slim Fit Cotton Formal Button-Down Shirt", price:1499, original:2200, discount:32, rating:4.7, reviews:2450, img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop" },
      { id:"fw2", name:"Van Heusen Formal Slim Fit Trousers – Black", price:2299, original:3400, discount:32, rating:4.5, reviews:1840, img:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=600&auto=format&fit=crop" }
    ],
  },
  "Sangeet & Festive": {
    color: "#e67e22",
    gradient: "linear-gradient(135deg,#e67e22,#f39c12)",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=150&auto=format&fit=crop",
    offer: "Up to 60% OFF",
    count: "2,000 Outfits",
    products: [
      { id:"sf1", name:"Biba Premium Silk Kurta & Sharara Set with Dupatta", price:4999, original:7500, discount:33, rating:4.8, reviews:1120, img:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&auto=format&fit=crop" },
      { id:"sf2", name:"FabIndia Pure Kanjeevaram Handloom Silk Saree", price:6990, original:10000, discount:30, rating:4.9, reviews:760, img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop" }
    ],
  }
};

const FashionOccasionNav = () => {
  const pillsRef = useRef(null);
  const cardsRef = useRef(null);
  const occasionKeys = Object.keys(occasionData);
  const [selectedOccasion, setSelectedOccasion] = useState("Royal Wedding");

  const currentOccasionObj = occasionData[selectedOccasion] || occasionData["Royal Wedding"];
  const products = currentOccasionObj.products;

  // AUTO-SCROLL CAROUSEL TICKER ACROSS OCCASION PRODUCTS
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
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleCardsScroll = (dir) => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <div className="fnContainer">

      {/* HEADER SECTION */}
      <div className="fnHeader">
        <div>
          <span className="fnLiveBadge">👗 FLIPKART DESIGNER OCCASION HUB</span>
          <h2 className="fnHeading">👗 Shop Fashion by Celebration & Occasion</h2>
          <p className="fnSubheading">
            Handpicked designer clothes, wedding sherwanis, silk sarees & tuxedo suits for every celebration
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <div className="fnNavBtnBox">
            <button className="fnArrowBtn" onClick={() => handleCardsScroll("left")}>❮</button>
            <button className="fnArrowBtn" onClick={() => handleCardsScroll("right")}>❯</button>
          </div>
          <span className="fnTotalBadge">
            🔥 10,000+ Outfits Available
          </span>
        </div>
      </div>

      {/* HORIZONTAL OCCASIONS PILL BAR */}
      <div className="fnOccasionBarWrapper">
        <div className="fnOccasionBarScroll" ref={pillsRef}>
          {occasionKeys.map((occKey) => {
            const occ = occasionData[occKey];
            const isSelected = selectedOccasion === occKey;
            return (
              <div
                key={occKey}
                className={`fnOccasionPill ${isSelected ? "fnPillActive" : ""}`}
                style={isSelected ? { background: occ.gradient, borderColor: "transparent" } : {}}
                onClick={() => setSelectedOccasion(occKey)}
              >
                <div className="fnPillImgWrapper">
                  <img src={occ.img} alt="" aria-hidden="true" className="fnPillImg" />
                </div>

                <div className="fnPillInfo">
                  <span className="fnPillTitle">{occKey}</span>
                  <span className="fnPillOfferTag">{occ.offer}</span>
                  <span className="fnPillCount">{occ.count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AUTO-ROTATING HORIZONTAL 3D OCCASION PRODUCTS CAROUSEL */}
      <div className="fnProducts3DCarousel" ref={cardsRef}>
        {products.map((product) => (
          <div key={product.id} className="fnProduct3DCard">
            <div className="fnCard3DImgBox">
              <img src={product.img} alt="" aria-hidden="true" className="fnCard3DImg" />
              <span className="fnCardBadge">-{product.discount}% OFF</span>
              <span className="fnCardOccasionBadge" style={{ background: currentOccasionObj.color }}>
                {selectedOccasion}
              </span>
            </div>

            <div className="fnCardBody">
              <h4 className="fnCardTitle">{product.name}</h4>

              <div className="fnCardRatingRow">
                <span style={{ color: "#ff9f00", fontWeight: "900" }}>★ {product.rating}</span>
                <span className="fnCardReviews">({product.reviews.toLocaleString("en-IN")} reviews)</span>
              </div>

              <div className="fnCardPriceRow">
                <span className="fnCardPrice" style={{ color: currentOccasionObj.color }}>
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="fnCardOriginal">₹{product.original.toLocaleString("en-IN")}</span>
              </div>

              <button className="fnCardAddToCartBtn" style={{ background: currentOccasionObj.color }}>
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FashionOccasionNav;
