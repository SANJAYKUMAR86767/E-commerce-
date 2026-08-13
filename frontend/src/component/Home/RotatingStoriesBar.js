import React, { useState, useEffect } from "react";
import "./RotatingStoriesBar.css";

const stories = [
  {
    id: "st1",
    title: "80% OFF Laptops",
    ringColor: "linear-gradient(135deg, #ff007f, #7928ca)",
    badge: "SALE LIVE",
    dealTitle: "Apple MacBook Pro M3 & Gaming Laptops",
    offer: "Up to ₹45,000 Instant Discount + No Cost EMI",
    price: "From ₹49,990",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop"
  },
  {
    id: "st2",
    title: "iPhone 16 Pro 5G",
    ringColor: "linear-gradient(135deg, #00f2fe, #4facfe)",
    badge: "5G LAUNCH",
    dealTitle: "Apple iPhone 16 Pro Titanium",
    offer: "Extra ₹5,000 Cashback on Bank Cards",
    price: "From ₹66,900",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop"
  },
  {
    id: "st3",
    title: "MAC & Lakmé Beauty",
    ringColor: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    badge: "MIN 40% OFF",
    dealTitle: "MAC Ruby Woo & Luxury Skincare Range",
    offer: "Buy 2 Get 1 Free + Free Beauty Pouch",
    price: "From ₹599",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop"
  },
  {
    id: "st4",
    title: "Nike Jordan Sneaker",
    ringColor: "linear-gradient(135deg, #f7971e, #ffd200)",
    badge: "HOT PICK",
    dealTitle: "Nike Air Jordan 1 Retro High OG",
    offer: "Flat 35% OFF on Streetwear Footwear",
    price: "From ₹2,499",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop"
  },
  {
    id: "st5",
    title: "Manyavar Grooming",
    ringColor: "linear-gradient(135deg, #b8860b, #daa520)",
    badge: "ROYAL WEAR",
    dealTitle: "Royal Embroidered Groom Sherwanis",
    offer: "Free Safa Turban + Matching Stole Included",
    price: "From ₹14,999",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop"
  },
  {
    id: "st6",
    title: "Free Gifts ₹1999+",
    ringColor: "linear-gradient(135deg, #11998e, #38ef7d)",
    badge: "FREE REWARD",
    dealTitle: "Exclusive VIP Mystery Gift Box",
    offer: "Free Wireless Earbuds on Shopping above ₹1,999",
    price: "FREE",
    img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&auto=format&fit=crop"
  }
];

const RotatingStoriesBar = () => {
  const [activeStory, setActiveStory] = useState(null);
  const [autoActiveIdx, setAutoActiveIdx] = useState(0);

  // Auto-pulse story rings sequentially
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoActiveIdx(prev => (prev + 1) % stories.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="storiesBarWrapper">
      <div className="storiesHeaderRow">
        <h3 className="storiesHeading">🔥 Live Flash Deal Stories & Offers</h3>
        <span className="storiesLiveDot">● TAP STORY TO CLAIM DISCOUNT</span>
      </div>

      <div className="storiesScrollContainer">
        {stories.map((st, idx) => {
          const isPulsing = autoActiveIdx === idx;
          return (
            <div
              key={st.id}
              className={`storyCircleItem ${isPulsing ? "pulsingRing" : ""}`}
              onClick={() => setActiveStory(st)}
            >
              <div className="storyRingGradient" style={{ background: st.ringColor }}>
                <div className="storyImgBox">
                  <img src={st.img} alt="" aria-hidden="true" className="storyImg" />
                </div>
              </div>
              <span className="storyBadge">{st.badge}</span>
              <span className="storyLabel">{st.title}</span>
            </div>
          );
        })}
      </div>

      {/* STORY MODAL POPUP */}
      {activeStory && (
        <div className="storyModalOverlay" onClick={() => setActiveStory(null)}>
          <div className="storyModalCard" onClick={e => e.stopPropagation()}>
            <button className="storyCloseBtn" onClick={() => setActiveStory(null)}>✕</button>

            <div className="storyModalHeader" style={{ background: activeStory.ringColor }}>
              <span className="storyModalTag">{activeStory.badge}</span>
              <h3 className="storyModalTitle">{activeStory.dealTitle}</h3>
            </div>

            <div className="storyModalBody">
              <div className="storyModalImgBox">
                <img src={activeStory.img} alt="" aria-hidden="true" className="storyModalImg" />
              </div>

              <div className="storyModalInfo">
                <p className="storyOfferText">⚡ {activeStory.offer}</p>
                <span className="storyPriceTag">{activeStory.price}</span>

                <button
                  className="storyClaimBtn"
                  onClick={() => {
                    alert(`🎉 Coupon Claimed! Special discount applied on ${activeStory.dealTitle}`);
                    setActiveStory(null);
                  }}
                >
                  🎁 CLAIM DEAL NOW ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatingStoriesBar;
