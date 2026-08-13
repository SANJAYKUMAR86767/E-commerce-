import React, { useState } from "react";
import "./ElectronicsHubView.css";

const ElectronicsHubView = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const topCategories = [
    { name: "Laptops", img: "https://img.icons8.com/color/144/000000/laptop.png" },
    { name: "Audio", img: "https://img.icons8.com/color/144/000000/headphones.png" },
    { name: "Cameras", img: "https://img.icons8.com/color/144/000000/slr-camera.png" },
    { name: "Smartwatches", img: "https://img.icons8.com/color/144/000000/apple-watch.png" },
    { name: "Gaming", img: "https://img.icons8.com/color/144/000000/controller.png" },
    { name: "Monitors", img: "https://img.icons8.com/color/144/000000/monitor.png" },
    { name: "Tablets", img: "https://img.icons8.com/color/144/000000/ipad.png" },
    { name: "Accessories", img: "https://img.icons8.com/color/144/000000/mouse.png" },
  ];

  const laptops = [
    { name: "MacBook Air M2", brand: "Apple", price: "₹99,900", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&auto=format&fit=crop" },
    { name: "XPS 13 OLED", brand: "Dell", price: "₹1,45,000", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&auto=format&fit=crop" },
    { name: "ROG Zephyrus", brand: "ASUS", price: "₹1,32,990", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&auto=format&fit=crop" },
    { name: "Spectre x360", brand: "HP", price: "₹1,19,999", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&auto=format&fit=crop" },
    { name: "ThinkPad X1", brand: "Lenovo", price: "₹1,48,000", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&auto=format&fit=crop" },
  ];

  const audio = [
    { name: "WH-1000XM5", brand: "Sony", price: "₹29,990", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&auto=format&fit=crop" },
    { name: "AirPods Pro 2", brand: "Apple", price: "₹24,900", img: "https://images.unsplash.com/photo-1606220588913-b3aecb4b2762?w=300&auto=format&fit=crop" },
    { name: "QuietComfort 45", brand: "Bose", price: "₹29,900", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&auto=format&fit=crop" },
    { name: "Momentum 4", brand: "Sennheiser", price: "₹34,990", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&auto=format&fit=crop" },
    { name: "Marshall Major IV", brand: "Marshall", price: "₹11,999", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop" },
  ];

  if (activeCategory) {
    return (
      <div className="electronicsHubContainer" style={{background: '#f4f7fc'}}>
        <button 
          onClick={() => setActiveCategory(null)}
          style={{padding: '12px 25px', background: 'linear-gradient(90deg, #1e3c72, #2a5298)', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', alignSelf: 'flex-start', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(30,60,114,0.3)', transition: 'transform 0.2s'}}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          ← Explore All Electronics
        </button>

        <div className="eh-animate-1" style={{textAlign: 'center', margin: '30px 0', padding: '50px 20px', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden', color: 'white'}}>
          <div style={{position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%'}}></div>
          <h2 style={{fontSize: '3.5rem', fontWeight: '900', margin: '0', letterSpacing: '-1px', color: 'white'}}>The {activeCategory} Store</h2>
          <p style={{fontSize: '1.2rem', color: '#e0e0e0', marginTop: '10px'}}>Next-generation technology at your fingertips.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px'}}>
            <span style={{padding: '8px 15px', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem', backdropFilter: 'blur(5px)'}}>Top Rated</span>
            <span style={{padding: '8px 15px', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem', backdropFilter: 'blur(5px)'}}>Fast Delivery</span>
          </div>
        </div>

        <div className="eh-animate-2">
          <div className="eh-section-title" style={{fontSize: '2rem'}}>Latest Arrivals</div>
          <div className="eh-product-row">
            {[1, 2, 3, 4].map((i) => (
              <div className="eh-product-card" key={`trend-${i}`} style={{minWidth: '280px', padding: '20px', border: '1px solid #e0e0e0'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px'}}>
                  <span style={{background: '#e3f2fd', color: '#1976d2', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold'}}>Bestseller</span>
                  <div className="eh-rating-badge" style={{background: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold'}}>4.8 ★</div>
                </div>
                <div className="eh-product-img-box" style={{height: '200px'}}>
                  <img src={activeCategory === 'Laptops' ? "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&auto=format&fit=crop" : activeCategory === 'Audio' ? "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&auto=format&fit=crop" : "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=300&auto=format&fit=crop"} alt="Tech Product" />
                </div>
                <div className="eh-product-name" style={{fontSize: '1.4rem'}}>{activeCategory} Pro Edition {i}</div>
                <div style={{color: '#888', fontSize: '0.9rem', textAlign: 'center', margin: '5px 0'}}>Ultimate Performance</div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                  <div style={{color: '#388e3c', fontSize: '1.5rem', fontWeight: '900'}}>₹{49999 + (i * 10000)}</div>
                </div>
                <button style={{width: '100%', padding: '12px', background: '#2874f0', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer', transition: 'background 0.3s'}} onMouseOver={(e) => e.target.style.background = '#0056b3'} onMouseOut={(e) => e.target.style.background = '#2874f0'}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="electronicsHubContainer">
      {/* 1. HERO BANNERS */}
      <div className="eh-banners-row eh-animate-1">
        <div className="eh-banner-card">
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop" alt="Laptops Sale" className="eh-banner-img" />
        </div>
        <div className="eh-banner-card">
          <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop" alt="Audio Sale" className="eh-banner-img" />
        </div>
      </div>

      {/* 2. CIRCULAR CATEGORY NAV */}
      <div className="eh-cat-nav-row eh-animate-2">
        {topCategories.map((cat, idx) => (
          <div className="eh-cat-icon-box" key={idx} onClick={() => setActiveCategory(cat.name)}>
            <div className="eh-cat-circle">
              <img src={cat.img} alt={cat.name} style={{borderRadius: '50%'}} />
            </div>
            <span className="eh-cat-name">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* 3. PREMIUM LAPTOPS */}
      <div className="eh-animate-3">
        <div className="eh-section-title">Best of Laptops</div>
        <div className="eh-product-container">
          <div className="eh-product-row">
            {laptops.map((prod, idx) => (
              <div className="eh-product-card" key={idx}>
                <div className="eh-product-img-box">
                  <img src={prod.img} alt={prod.name} />
                </div>
                <div className="eh-product-name">{prod.name}</div>
                <div className="eh-product-brand">{prod.brand}</div>
                <div className="eh-product-price">{prod.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PREMIUM AUDIO */}
      <div className="eh-animate-4" style={{marginTop: '10px'}}>
        <div className="eh-section-title">Top Rated Audio</div>
        <div className="eh-product-container">
          <div className="eh-product-row">
            {audio.map((prod, idx) => (
              <div className="eh-product-card" key={idx}>
                <div className="eh-product-img-box">
                  <img src={prod.img} alt={prod.name} />
                </div>
                <div className="eh-product-name">{prod.name}</div>
                <div className="eh-product-brand">{prod.brand}</div>
                <div className="eh-product-price">{prod.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ElectronicsHubView;
