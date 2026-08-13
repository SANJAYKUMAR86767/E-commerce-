import React, { useRef, useEffect, useState } from "react";
import "./FlipkartCuratedRows.css";

/* ═════════════════════════════════════════════════════════════
   1. "IN THE SPOTLIGHT" AUTO-ROTATING BANNERS
═════════════════════════════════════════════════════════════ */
const spotlightBanners = [
  {
    id: "sp1",
    brand: "boAt Audio",
    title: "Best of boAt Audio",
    subText: "Exciting Deals on Best Audio TWS & Headphones",
    priceTag: "From ₹999",
    bgGradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    badgeColor: "#ff6f00",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop",
    adTag: "AD"
  },
  {
    id: "sp2",
    brand: "Ghar Soaps",
    title: "De-Tanning Simple Hai, Boss.",
    subText: "100% Herbal De-Tan Face Wash & Scrub",
    priceTag: "Shop now",
    bgGradient: "linear-gradient(135deg, #ffe0b2 0%, #ffb74d 100%)",
    badgeColor: "#e65100",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    adTag: "AD"
  },
  {
    id: "sp3",
    brand: "boltt Smartphones",
    title: "ACE 5G | Built to stand out",
    subText: "Slim without compromise | 120Hz OLED",
    priceTag: "Launching 25th Aug, 12 PM",
    bgGradient: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
    textColor: "#ffffff",
    badgeColor: "#00c853",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
    adTag: "AD"
  },
  {
    id: "sp4",
    brand: "BEARDO",
    title: "Newest Perfume Launch",
    subText: "Long-lasting luxury fragrance for men",
    priceTag: "Min. 60% Off",
    bgGradient: "linear-gradient(135deg, #37474f 0%, #212121 100%)",
    textColor: "#ffffff",
    badgeColor: "#d50000",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop",
    adTag: "AD"
  },
  {
    id: "sp5",
    brand: "Beyond Appliances",
    title: "Plug N Play Kitchen Chimney",
    subText: "Installs in 10 mins | Auto-clean 1500 m³/hr",
    priceTag: "Up to 40% Off",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    badgeColor: "#2e7d32",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop",
    adTag: "AD"
  }
];

/* ═════════════════════════════════════════════════════════════
   2. CIRCULAR QUICK ICONS
═════════════════════════════════════════════════════════════ */
const quickCircleIcons = [
  { id: "c1", label: "For GenZ",     icon: "💃", bg: "linear-gradient(135deg, #ff80ab, #ff4081)" },
  { id: "c2", label: "Flipkart Pay", icon: "💳", bg: "linear-gradient(135deg, #448aff, #2979ff)" },
  { id: "c3", label: "Pinkvilla",    icon: "🛍️", bg: "linear-gradient(135deg, #e91e63, #ad1457)" },
  { id: "c4", label: "Sell Phone",   icon: "🔄", bg: "linear-gradient(135deg, #00e676, #00c853)" },
  { id: "c5", label: "Gift Cards",   icon: "🎁", bg: "linear-gradient(135deg, #ff9100, #ff6d00)" },
  { id: "c6", label: "Originals",    icon: "⭐", bg: "linear-gradient(135deg, #7c4dff, #651fff)" },
  { id: "c7", label: "Plus Zone",    icon: "👑", bg: "linear-gradient(135deg, #ffd700, #ffab00)" },
  { id: "c8", label: "SuperCoin",    icon: "⚡", bg: "linear-gradient(135deg, #ffab40, #ff6d00)" },
  { id: "c9", label: "Next-Gen",     icon: "🚀", bg: "linear-gradient(135deg, #1de9b6, #00bfa5)" }
];

/* ═════════════════════════════════════════════════════════════
   3. SEQUENTIAL DATA CONTAINERS
═════════════════════════════════════════════════════════════ */
const onEverybodysList = [
  { id: "el1", title: "Shivmaan Wall Hanging Art", offer: "Don't Miss | Special offer", price: "₹80", mrp: "₹499", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&auto=format&fit=crop" },
  { id: "el2", title: "Women Cotton Bralette Set", offer: "Bestsellers | Special offer", price: "₹299", mrp: "₹999", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&auto=format&fit=crop" },
  { id: "el3", title: "Vegetable Chopper 650ml", offer: "Best Selling Range", price: "From ₹99", mrp: "₹1,299", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&auto=format&fit=crop" },
  { id: "el4", title: "Portable 6-Tier Shoe Rack", offer: "Best Deal Ever", price: "Under ₹499", mrp: "₹1,999", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop" }
];

const trendingGadgets = [
  { id: "tg1", title: "True Wireless Earbuds", offer: "Min. 50% Off", price: "₹1,299", mrp: "₹2,999", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop" },
  { id: "tg2", title: "Smart Watches", offer: "Min. 40% Off", price: "₹1,499", mrp: "₹3,999", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&auto=format&fit=crop" },
  { id: "tg3", title: "Trimmers for Men", offer: "Min. 50% Off", price: "₹899", mrp: "₹1,999", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&auto=format&fit=crop" },
  { id: "tg4", title: "Power Banks 20000mAh", offer: "Min. 50% Off", price: "₹1,199", mrp: "₹2,499", image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=400&auto=format&fit=crop" }
];

const luxuryBeautyList = [
  { id: "lb1", title: "MAC Ruby Woo Lipstick", offer: "Min. 35% Off", price: "₹1,499", mrp: "₹2,300", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format&fit=crop" },
  { id: "lb2", title: "Chanel Coco EDP 100ml", offer: "Special Edition", price: "₹8,999", mrp: "₹11,500", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop" },
  { id: "lb3", title: "Dior Sauvage Elixir", offer: "Top Bestseller", price: "₹9,499", mrp: "₹12,000", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&auto=format&fit=crop" },
  { id: "lb4", title: "Kama Kumkumadi Fluid", offer: "Min. 30% Off", price: "₹2,199", mrp: "₹3,150", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop" }
];

const monsoonEssentials = [
  { id: "ms1", title: "Men's Track Pants", offer: "Min. 50% Off", price: "₹599", mrp: "₹1,499", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&auto=format&fit=crop" },
  { id: "ms2", title: "Kids' T-shirts 3-Pack", offer: "Min. 50% Off", price: "₹449", mrp: "₹999", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&auto=format&fit=crop" },
  { id: "ms3", title: "Bike Body Covers Heavy", offer: "Min. 50% Off", price: "₹399", mrp: "₹899", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&auto=format&fit=crop" },
  { id: "ms4", title: "Men's Polo T-shirts", offer: "Min. 50% Off", price: "₹499", mrp: "₹1,299", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop" }
];

const interestingFinds = [
  { id: "if1", title: "4WD RC Monster Truck", offer: "Min. 45% Off", price: "₹1,299", mrp: "₹2,499", image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&auto=format&fit=crop" },
  { id: "if2", title: "Women's Seamless Wear", offer: "Min. 50% Off", price: "₹349", mrp: "₹799", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&auto=format&fit=crop" },
  { id: "if3", title: "Hawkins 3L Pressure Cooker", offer: "Min. 30% Off", price: "₹1,499", mrp: "₹2,199", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&auto=format&fit=crop" },
  { id: "if4", title: "Milton Stainless Steel Flask", offer: "Min. 40% Off", price: "₹599", mrp: "₹999", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&auto=format&fit=crop" }
];

const featuredBrandBanners = [
  { id: "fb1", brand: "Plantex Bathware", title: "Designer Bath Fittings", offer: "Shop now", bg: "linear-gradient(135deg, #263238, #37474f)", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop" },
  { id: "fb2", brand: "BLA BLI BLU", title: "Luxury Perfume Set", offer: "Up to 46% Off", bg: "linear-gradient(135deg, #4a148c, #6a1b9a)", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop" }
];

/* ═════════════════════════════════════════════════════════════
   4. VERTICAL REAL PRODUCTS CATALOG CARDS
═════════════════════════════════════════════════════════════ */
const verticalCatalogCards = [
  {
    id: "vc1",
    badge: "Value 365",
    title: "Shivmaan Art Wall Hanging Decor",
    mrp: "₹499",
    price: "₹80",
    rating: "4.0",
    reviews: "1,028",
    bankOffer: "₹76 with Bank offer",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&auto=format&fit=crop"
  },
  {
    id: "vc2",
    badge: "Value 365",
    title: "SNWARIYAENT Men Regular Fit Solid Shirt",
    mrp: "₹999",
    price: "₹260",
    rating: "4.1",
    reviews: "143",
    bankOffer: "₹247 with Bank offer",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop"
  },
  {
    id: "vc3",
    badge: "Best Seller",
    title: "Apple iPhone 16 (Ultramarine, 128 GB)",
    mrp: "₹69,900",
    price: "₹66,900",
    rating: "4.6",
    reviews: "1,95,971",
    bankOffer: "₹61,655 with Bank offer + more",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop"
  },
  {
    id: "vc4",
    badge: "Value 365",
    title: "YAGNIK FASHION Women Cotton Kurta Set",
    mrp: "₹2,499",
    price: "₹631",
    rating: "4.2",
    reviews: "2,410",
    bankOffer: "₹599 with Bank offer",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop"
  }
];

const FlipkartCuratedRows = () => {
  const spotRef = useRef(null);
  const [currentSpotIndex, setCurrentSpotIndex] = useState(0);

  // LIVE FLASH SALE COUNTDOWN TIMER (4 hours 30 mins)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 30, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // AUTO-ROTATING SPOTLIGHT CAROUSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpotIndex(prev => {
        const next = (prev + 1) % spotlightBanners.length;
        if (spotRef.current) {
          spotRef.current.scrollTo({
            left: next * 360,
            behavior: "smooth"
          });
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fkSuperWrapper">

      {/* ⚡ LIVE FLASH SALE COUNTDOWN TICKER STRIP */}
      <div className="fkFlashSaleTickerBar">
        <div className="fkTickerLeft">
          <span className="fkFlashFlame">⚡</span>
          <span className="fkFlashTitle">BIG FREEDOM FLASH SALE ENDS IN:</span>
          <div className="fkCountdownClock">
            <span className="fkClockUnit">{String(timeLeft.hours).padStart(2, '0')}h</span> :
            <span className="fkClockUnit">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
            <span className="fkClockUnitSeconds">{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
        </div>
        <div className="fkTickerRight">
          <span className="fkLivePurchasePill">🔥 Rahul (Delhi) just bought iPhone 16 · Saved ₹5,000!</span>
        </div>
      </div>

      {/* 1. AUTO-ROTATING "IN THE SPOTLIGHT" CAROUSEL */}
      <div className="fkSpotlightRow">
        <div className="fkSpotlightHeader">
          <h2 className="fkSpotlightMainTitle">In The Spotlight</h2>
          <div className="fkDotIndicatorRow">
            {spotlightBanners.map((_, i) => (
              <span key={i} className={`fkDot ${i === currentSpotIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>

        <div className="fkSpotlightScroll" ref={spotRef}>
          {spotlightBanners.map(b => (
            <div
              key={b.id}
              className="fkSpotCard"
              style={{ background: b.bgGradient, color: b.textColor || "#000" }}
            >
              <span className="fkAdBadge">{b.adTag}</span>
              <div className="fkSpotText">
                <span className="fkSpotBrand">{b.brand}</span>
                <h3 className="fkSpotTitle">{b.title}</h3>
                <p className="fkSpotSub">{b.subText}</p>
                <div className="fkSpotPricePill" style={{ background: b.badgeColor }}>
                  {b.priceTag}
                </div>
              </div>
              <div className="fkSpotImgBox">
                <img src={b.image} alt="" aria-hidden="true" className="fkSpotImg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. CIRCULAR QUICK-PILLS ROW */}
      <div className="fkCirclePillsWrapper">
        <div className="fkCirclePillsScroll">
          {quickCircleIcons.map(c => (
            <div key={c.id} className="fkCircleItem">
              <div className="fkCircleIconBox" style={{ background: c.bg }}>
                <span className="fkCircleEmoji">{c.icon}</span>
              </div>
              <span className="fkCircleLabel">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SEQUENTIAL CONTAINER #1: "ON EVERYBODY'S LIST" (ORANGE #ff9436) */}
      <div className="fkOrangeContainer">
        <div className="fkContainerHeader">
          <h2 className="fkContainerTitle">On everybody's list</h2>
          <span className="fkArrowBtn">➔</span>
        </div>
        <div className="fkCardsRow">
          {onEverybodysList.map(item => (
            <div key={item.id} className="fkWhiteCard">
              <div className="fkItemImgBox">
                <img src={item.image} alt="" aria-hidden="true" className="fkItemImg" />
              </div>
              <span className="fkItemSubTitle">{item.title}</span>
              <span className="fkItemOfferPill">{item.offer}</span>
              <span className="fkItemPriceText">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SEQUENTIAL CONTAINER #2: "TRENDING GADGETS & APPLIANCES" (BLUE #84b0ff) */}
      <div className="fkBlueContainer" id="gadgets-section">
        <div className="fkContainerHeader">
          <h2 className="fkContainerTitle">Trending Gadgets & Appliances</h2>
          <span className="fkArrowBtn">➔</span>
        </div>
        <div className="fkCardsRow">
          {trendingGadgets.map(item => (
            <div key={item.id} className="fkWhiteCard">
              <div className="fkItemImgBox">
                <img src={item.image} alt="" aria-hidden="true" className="fkItemImg" />
              </div>
              <span className="fkItemSubTitle">{item.title}</span>
              <span className="fkItemOfferPillBlue">{item.offer}</span>
              <span className="fkItemPriceTextBlue">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SEQUENTIAL CONTAINER #3: "LUXURY BEAUTY & COSMETICS" (PURPLE #8e44ad) */}
      <div className="fkPurpleContainer">
        <div className="fkContainerHeader">
          <h2 className="fkContainerTitle">Luxury Beauty & International Brands</h2>
          <span className="fkArrowBtn">➔</span>
        </div>
        <div className="fkCardsRow">
          {luxuryBeautyList.map(item => (
            <div key={item.id} className="fkWhiteCard">
              <div className="fkItemImgBox">
                <img src={item.image} alt="" aria-hidden="true" className="fkItemImg" />
              </div>
              <span className="fkItemSubTitle">{item.title}</span>
              <span className="fkItemOfferPillPurple">{item.offer}</span>
              <span className="fkItemPriceTextPurple">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SEQUENTIAL CONTAINER #4: "MONSOON ESSENTIALS" (BLUE #84b0ff) */}
      <div className="fkBlueContainer">
        <div className="fkContainerHeader">
          <h2 className="fkContainerTitle">Monsoon Essentials</h2>
          <span className="fkArrowBtn">➔</span>
        </div>
        <div className="fkCardsRow">
          {monsoonEssentials.map(item => (
            <div key={item.id} className="fkWhiteCard">
              <div className="fkItemImgBox">
                <img src={item.image} alt="" aria-hidden="true" className="fkItemImg" />
              </div>
              <span className="fkItemSubTitle">{item.title}</span>
              <span className="fkItemOfferPillBlue">{item.offer}</span>
              <span className="fkItemPriceTextBlue">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SEQUENTIAL CONTAINER #5: "INTERESTING FINDS" (ORANGE #ff9436) */}
      <div className="fkOrangeContainer">
        <div className="fkContainerHeader">
          <h2 className="fkContainerTitle">Interesting finds</h2>
          <span className="fkArrowBtn">➔</span>
        </div>
        <div className="fkCardsRow">
          {interestingFinds.map(item => (
            <div key={item.id} className="fkWhiteCard">
              <div className="fkItemImgBox">
                <img src={item.image} alt="" aria-hidden="true" className="fkItemImg" />
              </div>
              <span className="fkItemSubTitle">{item.title}</span>
              <span className="fkItemOfferPill">{item.offer}</span>
              <span className="fkItemPriceText">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. FEATURED BRANDS SPOTLIGHT */}
      <div className="fkBrandsWrapper">
        <h2 className="fkBrandsTitle">Featured Brands</h2>
        <div className="fkBrandsGrid">
          {featuredBrandBanners.map(b => (
            <div key={b.id} className="fkBrandBannerCard" style={{ background: b.bg }}>
              <span className="fkBrandAdTag">AD</span>
              <div className="fkBrandText">
                <span className="fkBrandSubLabel">{b.brand}</span>
                <h3 className="fkBrandBannerTitle">{b.title}</h3>
                <span className="fkBrandOfferPill">{b.offer}</span>
              </div>
              <div className="fkBrandImgBox">
                <img src={b.image} alt="" aria-hidden="true" className="fkBrandImg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. VERTICAL REAL PRODUCTS CATALOG CARDS */}
      <div className="fkVerticalSection">
        <h2 className="fkVerticalHeading">🔥 Bestsellers & Top Deals For You</h2>
        <div className="fkVerticalGrid">
          {verticalCatalogCards.map(p => (
            <div key={p.id} className="fkVerticalCard">
              <div className="fkVerticalImgBox">
                <img src={p.image} alt="" aria-hidden="true" className="fkVerticalImg" />
                <span className="fkValueTag">{p.badge}</span>
              </div>

              <div className="fkVerticalContent">
                <span className="fkStarPill">★ {p.rating} ({p.reviews})</span>
                <h4 className="fkVerticalTitle">{p.title}</h4>

                <div className="fkVerticalPriceRow">
                  <span className="fkCurrentPricePill">{p.price}</span>
                  <span className="fkMrpStrikethrough">{p.mrp}</span>
                </div>

                <span className="fkBankOfferText">{p.bankOffer}</span>

                <button className="fkAddToCartBtn">🛒 Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FlipkartCuratedRows;
