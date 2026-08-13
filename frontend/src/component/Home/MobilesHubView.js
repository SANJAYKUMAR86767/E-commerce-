import React, { useState } from "react";
import "./MobilesHubView.css";

const MobilesHubView = () => {
  const [activeBrand, setActiveBrand] = useState(null);

  const topBrands = [
    { name: "Apple", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=200&auto=format&fit=crop" },
    { name: "Samsung", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&auto=format&fit=crop" },
    { name: "Google", img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=200&auto=format&fit=crop" },
    { name: "OnePlus", img: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=200&auto=format&fit=crop" },
    { name: "Nothing", img: "https://images.unsplash.com/photo-1658428230559-0f62295fa957?w=200&auto=format&fit=crop" },
    { name: "vivo", img: "https://images.unsplash.com/photo-1598327105854-c9b83b8b1db6?w=200&auto=format&fit=crop" },
    { name: "OPPO", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=200&auto=format&fit=crop" },
    { name: "realme", img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=200&auto=format&fit=crop" },
    { name: "Xiaomi", img: "https://images.unsplash.com/photo-1605236453806-6ff3685284fb?w=200&auto=format&fit=crop" },
    { name: "Motorola", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&auto=format&fit=crop" },
  ];

  const upcomingLaunches = [
    { img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop" },
    { img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&auto=format&fit=crop" },
    { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop" },
  ];

  const freedomDeals = [
    { brand: "vivo T3 Lite", desc: "6500 mAh Battery", rating: "4.6", img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=300&auto=format&fit=crop" },
    { brand: "OPPO K14x", desc: "Long-lasting Battery", rating: "4.3", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop" },
    { brand: "moto edge 70", desc: "50MP Sony Camera", rating: "4.2", img: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=300&auto=format&fit=crop" },
    { brand: "POCO X5", desc: "120Hz AMOLED", rating: "4.3", img: "https://images.unsplash.com/photo-1658428230559-0f62295fa957?w=300&auto=format&fit=crop" },
    { brand: "realme P4X", desc: "Fastest Smartphone", rating: "4.5", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&auto=format&fit=crop" },
  ];

  const vibeColors = [
    { text: "BLUE", color: "#1a73e8", img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=400&auto=format&fit=crop" },
    { text: "GREEN", color: "#34a853", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop" },
    { text: "PINK", color: "#f3a8b4", img: "https://images.unsplash.com/photo-1528795259021-d8c864d4d314?w=400&auto=format&fit=crop" },
    { text: "GOLD", color: "#fbbc04", img: "https://images.unsplash.com/photo-1605236453806-6ff3685284fb?w=400&auto=format&fit=crop" },
  ];

  if (activeBrand) {
    return (
      <div className="mobilesHubContainer" style={{background: '#f4f7fc', padding: '20px'}}>
        <button 
          onClick={() => setActiveBrand(null)}
          style={{padding: '12px 25px', background: 'linear-gradient(90deg, #2874f0, #0056b3)', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', alignSelf: 'flex-start', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(40,116,240,0.3)', transition: 'transform 0.2s'}}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          ← Explore All Brands
        </button>

        <div className="mh-animate-1" style={{textAlign: 'center', margin: '30px 0', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(40,116,240,0.05)', borderRadius: '50%'}}></div>
          <h2 style={{fontSize: '3.5rem', fontWeight: '900', color: '#111', margin: '0', letterSpacing: '-1px'}}>The {activeBrand} Universe</h2>
          <p style={{fontSize: '1.2rem', color: '#666', marginTop: '10px'}}>Experience the pinnacle of innovation. Uncover the latest {activeBrand} flagships.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px'}}>
            <span style={{padding: '8px 15px', background: '#eef4ff', color: '#2874f0', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem'}}>5G Ready</span>
            <span style={{padding: '8px 15px', background: '#eef4ff', color: '#2874f0', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem'}}>Pro Cameras</span>
            <span style={{padding: '8px 15px', background: '#eef4ff', color: '#2874f0', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem'}}>OLED Displays</span>
          </div>
        </div>

        <div className="mh-animate-2">
          <div className="mh-section-title" style={{fontSize: '2rem'}}>Premium Flagships</div>
          <div className="mh-deals-row">
            {[1, 2, 3].map((i) => (
              <div className="mh-deal-card" key={`flagship-${i}`} style={{minWidth: '300px', padding: '25px', borderRadius: '16px', background: 'white', border: '1px solid #eee', transition: 'all 0.3s ease'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px'}}>
                  <span style={{background: '#ffefd5', color: '#ff8c00', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold'}}>Bestseller</span>
                  <div className="mh-rating-badge">4.9 ★</div>
                </div>
                <img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=300&auto=format&fit=crop" alt="Flagship Phone" style={{height: '220px', objectFit: 'contain', transition: 'transform 0.4s'}} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                <div style={{fontWeight: '900', fontSize: '1.5rem', marginTop: '15px'}}>{activeBrand} Ultra {i}</div>
                <div style={{color: '#666', fontSize: '0.9rem', margin: '5px 0'}}>256GB ROM | 12GB RAM</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px'}}>
                  <div style={{color: '#388e3c', fontSize: '1.4rem', fontWeight: '900'}}>₹89,999</div>
                  <div style={{color: '#999', textDecoration: 'line-through', fontSize: '1rem'}}>₹99,999</div>
                </div>
                <button style={{width: '100%', padding: '12px', background: '#2874f0', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer'}}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mh-animate-3" style={{marginTop: '40px'}}>
          <div className="mh-section-title" style={{fontSize: '2rem'}}>Value & Performance</div>
          <div className="mh-deals-row">
            {[1, 2, 3].map((i) => (
              <div className="mh-deal-card" key={`value-${i}`} style={{minWidth: '300px', padding: '25px', borderRadius: '16px', background: 'white', border: '1px solid #eee', transition: 'all 0.3s ease'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: '10px'}}>
                  <div className="mh-rating-badge">4.5 ★</div>
                </div>
                <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&auto=format&fit=crop" alt="Value Phone" style={{height: '220px', objectFit: 'contain', transition: 'transform 0.4s'}} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                <div style={{fontWeight: '900', fontSize: '1.5rem', marginTop: '15px'}}>{activeBrand} Series {i}</div>
                <div style={{color: '#666', fontSize: '0.9rem', margin: '5px 0'}}>128GB ROM | 8GB RAM</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px'}}>
                  <div style={{color: '#388e3c', fontSize: '1.4rem', fontWeight: '900'}}>₹24,999</div>
                  <div style={{color: '#999', textDecoration: 'line-through', fontSize: '1rem'}}>₹29,999</div>
                </div>
                <button style={{width: '100%', padding: '12px', background: '#ff9f00', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer'}}>Buy Now</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="mobilesHubContainer">
      {/* 1. MASSIVE CURVED BANNERS */}
      <div className="mh-banners-row mh-animate-1">
        <div className="mh-banner-card">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop" alt="moto g37 Power" className="mh-banner-img" />
        </div>
        <div className="mh-banner-card">
          <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop" alt="Galaxy A36 5G" className="mh-banner-img" />
        </div>
        <div className="mh-banner-card">
          <img src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&auto=format&fit=crop" alt="motorola edge 70" className="mh-banner-img" />
        </div>
      </div>

      {/* 2. SBI BANK BANNER */}
      <div className="mh-bank-banner mh-animate-2">
        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop" alt="SBI 10% Discount" style={{maxHeight: '120px', objectFit: 'cover'}} />
      </div>

      {/* 3. CIRCULAR BRAND NAV */}
      <div className="mh-brand-nav-row mh-animate-3">
        {topBrands.map((brand, idx) => (
          <div className="mh-brand-icon-box" key={idx} onClick={() => setActiveBrand(brand.name)}>
            <div className="mh-brand-circle">
              <img src={brand.img} alt={brand.name} />
            </div>
            <span className="mh-brand-name">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* 4. UPCOMING LAUNCHES */}
      <div className="mh-animate-4" style={{marginTop: "20px"}}>
        <div className="mh-section-title">Upcoming Launches</div>
        <div className="mh-launches-row">
          {upcomingLaunches.map((launch, idx) => (
            <div className="mh-launch-card" key={idx}>
              <img src={launch.img} alt="Upcoming Launch" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. FREEDOM DEALS (Light Blue Section) */}
      <div className="mh-deals-section mh-animate-5" style={{marginTop: "20px"}}>
        <div className="mh-section-title">Freedom Deals Worth Grabbing</div>
        <div className="mh-deals-row">
          {freedomDeals.map((deal, idx) => (
            <div className="mh-deal-card" key={idx}>
              <div className="mh-rating-badge">{deal.rating} ★</div>
              <img src={deal.img} alt={deal.brand} />
              <div style={{fontWeight: '800', fontSize: '1.1rem'}}>{deal.brand}</div>
              <div style={{color: '#666', fontSize: '0.9rem', marginTop: '5px'}}>{deal.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FREEDOM WITH 0% INTEREST EMI (Peach Section) */}
      <div className="mh-emi-section mh-animate-5" style={{marginTop: "20px"}}>
        <div className="mh-section-title">Freedom With 0% Interest EMI</div>
        <div className="mh-deals-row">
          {freedomDeals.map((deal, idx) => (
            <div className="mh-deal-card" key={idx}>
              <img src={deal.img} alt={deal.brand} />
              <div style={{fontWeight: '800', fontSize: '1.1rem'}}>{deal.brand}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SHOP YOUR VIBE */}
      <div className="mh-animate-6" style={{marginTop: "30px", marginBottom: "30px"}}>
        <div className="mh-section-title">Shop your vibe</div>
        <div className="mh-vibe-row">
          {vibeColors.map((vibe, idx) => (
            <div className="mh-vibe-card" key={idx}>
              <div className="mh-vibe-text" style={{color: vibe.color, textShadow: `0 0 20px ${vibe.color}40`}}>
                {vibe.text}
              </div>
              <img src={vibe.img} alt={`${vibe.text} Phone`} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MobilesHubView;
