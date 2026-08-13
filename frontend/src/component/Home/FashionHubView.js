import React, { useState, useEffect } from "react";
import "./FashionHubView.css";

const FashionHubView = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 29, seconds: 59 });
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const genZFashion = [
    { name: "Fluid Cargos", offer: "Up to 70% Off", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&auto=format&fit=crop" },
    { name: "White Watches", offer: "From ₹149", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&auto=format&fit=crop" },
    { name: "Peplum Tops", offer: "From ₹299", img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=300&auto=format&fit=crop" },
    { name: "Mini Jhumkas", offer: "From ₹99", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop" },
    { name: "Pleated Trousers", offer: "Min. 50% Off", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&auto=format&fit=crop" },
  ];

  const top50Deals = [
    { name: "Ribbed Baggy", offer: "Min. 65% Off", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&auto=format&fit=crop" },
    { name: "A-line Kurtas", offer: "Under ₹499", img: "https://images.unsplash.com/photo-1583391733958-62e511ec12a1?w=300&auto=format&fit=crop" },
    { name: "Oversized Tees", offer: "From ₹249", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&auto=format&fit=crop" },
    { name: "Varsity Jackets", offer: "Min. 50% Off", img: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=300&auto=format&fit=crop" },
    { name: "Chunky Sneakers", offer: "Under ₹899", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop" },
  ];

  const rakhiTrends = [
    { name: "Kundan Studs", img: "https://images.unsplash.com/photo-1599643478524-fb66f4568e71?w=300&auto=format&fit=crop" },
    { name: "Ethnic Mules", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop" },
    { name: "Nazar Charm", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&auto=format&fit=crop" },
    { name: "Yoke Detail", img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=300&auto=format&fit=crop" },
    { name: "Heavy Chaand", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&auto=format&fit=crop" },
  ];

  const topPicks = [
    { name: "Action", offer: "Min. 75% Off", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&auto=format&fit=crop" },
    { name: "Haute Sauce", offer: "From ₹399", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=300&auto=format&fit=crop" },
    { name: "MAX, Pantaloons", offer: "Under ₹299", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&auto=format&fit=crop" },
    { name: "Pepe Jeans", offer: "Min. 75% Off", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&auto=format&fit=crop" },
    { name: "Handbags", offer: "Under ₹199", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=300&auto=format&fit=crop" },
  ];

  const occasions = [
    { name: "Wedding Guest", img: "https://images.unsplash.com/photo-1583391733958-62e511ec12a1?w=400&auto=format&fit=crop", color: "#fce4ec" },
    { name: "Office Core", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&auto=format&fit=crop", color: "#e3f2fd" },
    { name: "Vacation Mode", img: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=400&auto=format&fit=crop", color: "#fff3e0" },
    { name: "Street Style", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop", color: "#f3e5f5" },
  ];

  const premiumBrands = [
    "ZARA", "H&M", "MANGO", "LEVI'S", "PUMA", "NIKE", "ADIDAS", "CALVIN KLEIN", "TOMMY HILFIGER", "ZARA", "H&M", "MANGO"
  ];

  const getCategoryData = (item) => {
    const term = item.toLowerCase();
    if (term.includes('wedding') || term.includes('rakhi') || term.includes('studs') || term.includes('charm') || term.includes('kurta')) {
      return {
        cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&auto=format&fit=crop",
        products: [
          { img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop", name: "Embroidered Lehenga Choli", brand: "MANYAVAR", price: "12,999", oldPrice: "25,999" },
          { img: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=600&auto=format&fit=crop", name: "Gold Plated Kundan Set", brand: "TANISHQ", price: "4,599", oldPrice: "8,999" },
          { img: "https://images.unsplash.com/photo-1583391733958-62e511ec12a1?w=600&auto=format&fit=crop", name: "Designer Silk Kurta", brand: "FABINDIA", price: "3,299", oldPrice: "6,599" },
          { img: "https://images.unsplash.com/photo-1599643478524-fb66f4568e71?w=600&auto=format&fit=crop", name: "Crystal Drop Earrings", brand: "SWAROVSKI", price: "5,999", oldPrice: "10,999" },
          { img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop", name: "Premium Ethnic Mules", brand: "MOCHI", price: "1,899", oldPrice: "3,999" },
          { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop", name: "Bridal Pearl Necklace", brand: "KALYAN", price: "24,999", oldPrice: "49,999" }
        ]
      };
    }
    if (term.includes('office') || term.includes('trouser') || term.includes('shirt')) {
      return {
        cover: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600&auto=format&fit=crop",
        products: [
          { img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop", name: "Italian Wool Suit", brand: "RAYMOND", price: "9,999", oldPrice: "18,999" },
          { img: "https://images.unsplash.com/photo-1548624149-a9eb88311184?w=600&auto=format&fit=crop", name: "Silk Chiffon Blouse", brand: "ZARA WORK", price: "2,499", oldPrice: "4,999" },
          { img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop", name: "Tailored Pleated Trousers", brand: "MARKS & SPENCER", price: "3,199", oldPrice: "6,499" },
          { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop", name: "Slim Fit Cotton Shirt", brand: "ARROW", price: "1,599", oldPrice: "3,199" },
          { img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&auto=format&fit=crop", name: "Leather Oxford Shoes", brand: "HUSH PUPPIES", price: "4,299", oldPrice: "8,599" },
          { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop", name: "Minimalist Silver Cuff", brand: "DANIEL WELLINGTON", price: "2,199", oldPrice: "4,599" }
        ]
      };
    }
    if (term.includes('street') || term.includes('cargo') || term.includes('tee') || term.includes('sneaker') || term.includes('jacket') || term.includes('baggy')) {
      return {
        cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&auto=format&fit=crop",
        products: [
          { img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop", name: "Utility Fluid Cargos", brand: "URBAN OUTFITTERS", price: "2,899", oldPrice: "5,999" },
          { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop", name: "Oversized Graphic Tee", brand: "H&M DIVIDED", price: "999", oldPrice: "1,999" },
          { img: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&auto=format&fit=crop", name: "Vintage Varsity Jacket", brand: "LEVI'S", price: "4,599", oldPrice: "9,199" },
          { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop", name: "Air Max Chunky Sneakers", brand: "NIKE", price: "8,999", oldPrice: "14,999" },
          { img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop", name: "Acid Wash Baggy Jeans", brand: "ZARA TRF", price: "3,499", oldPrice: "6,999" },
          { img: "https://images.unsplash.com/photo-1628751586549-06399c0a66d0?w=600&auto=format&fit=crop", name: "Ribbed Beanie & Shades", brand: "VANS", price: "1,299", oldPrice: "2,599" }
        ]
      };
    }
    if (term.includes('watch')) {
      return {
        cover: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1600&auto=format&fit=crop",
        products: [
          { img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop", name: "Classic Chronograph", brand: "FOSSIL", price: "8,499", oldPrice: "14,999" },
          { img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop", name: "Rose Gold Mesh Watch", brand: "MICHAEL KORS", price: "12,999", oldPrice: "22,999" },
          { img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop", name: "Minimalist Leather Strap", brand: "DANIEL WELLINGTON", price: "6,599", oldPrice: "11,999" },
          { img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop", name: "Automatic Skeleton Watch", brand: "TITAN", price: "9,999", oldPrice: "18,999" },
          { img: "https://images.unsplash.com/photo-1587836374828-cb4387df3c7c?w=600&auto=format&fit=crop", name: "Sport Digital Edition", brand: "G-SHOCK", price: "5,999", oldPrice: "9,999" },
          { img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop", name: "Luxury Diamond Dial", brand: "EMPORIO ARMANI", price: "18,999", oldPrice: "34,999" }
        ]
      };
    }
    // Default luxury
    return {
      cover: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&auto=format&fit=crop",
      products: [
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop", name: "Signature Collection Jacket", brand: "BURBERRY", price: "45,999", oldPrice: "89,999" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop", name: "Premium Leather Handbag", brand: "GUCCI", price: "85,000", oldPrice: "1,20,000" },
        { img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&auto=format&fit=crop", name: "Silk Evening Gown", brand: "PRADA", price: "62,999", oldPrice: "1,10,000" },
        { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop", name: "Designer Sunglasses", brand: "TOM FORD", price: "18,599", oldPrice: "32,999" },
        { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop", name: "Italian Cashmere Sweater", brand: "LORO PIANA", price: "35,999", oldPrice: "65,999" },
        { img: "https://images.unsplash.com/photo-1583391733958-62e511ec12a1?w=600&auto=format&fit=crop", name: "Exotic Skin Loafers", brand: "SALVATORE FERRAGAMO", price: "42,999", oldPrice: "75,999" }
      ]
    };
  };

  if (activeItem) {
    const categoryData = getCategoryData(activeItem);

    return (
      <div className="fashionHubContainer" style={{background: '#f8f9fa', padding: 0}}>
        {/* Luxury Hero Banner */}
        <div style={{position: 'relative', height: '400px', width: '100%', overflow: 'hidden'}}>
          <img src={categoryData.cover} alt={`${activeItem} Cover`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%'}}>
            <button 
              onClick={() => setActiveItem(null)}
              style={{position: 'absolute', top: '20px', left: '5%', padding: '10px 20px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', backdropFilter: 'blur(10px)', transition: 'background 0.3s'}}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              ← Back to Fashion
            </button>
            <h1 style={{fontSize: '5rem', fontWeight: '900', color: 'white', margin: '40px 0 10px', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 4px 10px rgba(0,0,0,0.5)'}}>{activeItem}</h1>
            <p style={{fontSize: '1.5rem', color: '#e0e0e0', maxWidth: '600px'}}>Discover the latest trends and elevate your wardrobe with our premium curated selection.</p>
          </div>
        </div>

        <div style={{display: 'flex', padding: '30px 5%', gap: '30px', maxWidth: '1600px', margin: '0 auto'}}>
          {/* Advanced Sidebar Filters */}
          <div style={{width: '250px', flexShrink: 0, background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', height: 'fit-content'}}>
            <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px'}}>Filters</h3>
            
            <div style={{marginBottom: '20px'}}>
              <h4 style={{fontSize: '1rem', color: '#555', marginBottom: '10px'}}>Categories</h4>
              {['New Arrivals', 'Bestsellers', 'Premium Edition', 'Limited Stock'].map(cat => (
                <label key={cat} style={{display: 'block', marginBottom: '8px', color: '#666', cursor: 'pointer'}}>
                  <input type="checkbox" style={{marginRight: '10px', accentColor: '#ff1493'}} /> {cat}
                </label>
              ))}
            </div>

            <div style={{marginBottom: '20px'}}>
              <h4 style={{fontSize: '1rem', color: '#555', marginBottom: '10px'}}>Price Range</h4>
              <input type="range" min="100" max="10000" style={{width: '100%', accentColor: '#ff1493'}} />
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginTop: '5px'}}>
                <span>₹100</span><span>₹10000+</span>
              </div>
            </div>

            <button style={{width: '100%', padding: '10px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Apply Filters</button>
          </div>

          {/* Super Advanced Product Grid */}
          <div style={{flexGrow: 1}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', background: 'white', padding: '15px 25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)'}}>
              <div style={{fontSize: '1.1rem', color: '#555'}}>Showing <strong>24 results</strong> for {activeItem}</div>
              <select style={{padding: '8px 15px', borderRadius: '20px', border: '1px solid #ccc', outline: 'none', background: '#f8f9fa'}}>
                <option>Sort: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px'}}>
              {categoryData.products.map((product, i) => (
                <div key={`item-${i}`} style={{background: 'white', borderRadius: '20px', padding: '0', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', cursor: 'pointer', overflow: 'hidden'}} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)'}}>
                  
                  {/* Image & Overlays */}
                  <div style={{position: 'relative', overflow: 'hidden', height: '360px', background: '#f5f5f7'}}>
                    <span style={{position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', color: '#ff1493', padding: '8px 12px', borderRadius: '50%', fontSize: '1rem', fontWeight: '900', zIndex: 3, backdropFilter: 'blur(5px)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>♡</span>
                    
                    {i === 0 && <span style={{position: 'absolute', top: '15px', left: '15px', background: 'linear-gradient(90deg, #ff1493, #ff4500)', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '900', zIndex: 3, letterSpacing: '1px'}}>🔥 BESTSELLER</span>}
                    {i === 1 && <span style={{position: 'absolute', top: '15px', left: '15px', background: 'linear-gradient(90deg, #111, #333)', color: '#d4af37', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '900', zIndex: 3, letterSpacing: '1px'}}>✨ PREMIUM</span>}
                    
                    <img src={product.img} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease'}} onMouseOver={(e) => {e.target.style.transform = 'scale(1.1)'; e.target.nextSibling.style.opacity = '1'}} onMouseOut={(e) => {e.target.style.transform = 'scale(1)'; e.target.nextSibling.style.opacity = '0'}} />
                    
                    {/* Quick View Overlay */}
                    <div style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '80%', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 2, pointerEvents: 'none'}}>
                      <button style={{width: '100%', padding: '12px', background: 'rgba(255,255,255,0.95)', color: '#111', border: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem', pointerEvents: 'auto', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
                        <span style={{fontSize: '1.2rem'}}>👁️</span> Quick View
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{padding: '20px', background: 'white'}}>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                      <div style={{color: '#888', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '800'}}>{product.brand}</div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '4px', background: '#fff9e6', padding: '2px 6px', borderRadius: '4px'}}>
                        <span style={{color: '#ffc107', fontSize: '0.9rem'}}>★</span>
                        <span style={{fontSize: '0.8rem', fontWeight: 'bold', color: '#666'}}>4.{(8 - i * 0.1).toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <div style={{fontSize: '1.2rem', fontWeight: '800', color: '#222', lineHeight: '1.2', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '5px'}}>{product.name}</div>
                    
                    <div style={{display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '15px'}}>
                      <div style={{color: '#111', fontSize: '1.6rem', fontWeight: '900'}}>₹{product.price}</div>
                      <div style={{color: '#a0a0a0', textDecoration: 'line-through', fontSize: '1.1rem'}}>₹{product.oldPrice}</div>
                      <div style={{color: '#00b894', fontWeight: '900', fontSize: '0.95rem', marginLeft: '5px'}}>(50% OFF)</div>
                    </div>

                    {/* Size Selector */}
                    <div style={{marginBottom: '20px'}}>
                      <div style={{fontSize: '0.8rem', color: '#666', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase'}}>Select Size</div>
                      <div style={{display: 'flex', gap: '10px'}}>
                        {['S', 'M', 'L', 'XL'].map(size => (
                          <div key={size} style={{width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.85rem', fontWeight: 'bold', color: '#555', transition: 'all 0.2s', cursor: 'pointer'}} onMouseOver={(e) => {e.currentTarget.style.border = '2px solid #111'; e.currentTarget.style.color = '#111'}} onMouseOut={(e) => {e.currentTarget.style.border = '1px solid #ddd'; e.currentTarget.style.color = '#555'}}>
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button style={{width: '100%', padding: '15px', background: '#111', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}} onMouseOver={(e) => {e.currentTarget.style.background = '#ff1493'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,20,147,0.4)'}} onMouseOut={(e) => {e.currentTarget.style.background = '#111'; e.currentTarget.style.boxShadow = 'none'}}>
                      🛒 Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fashionHubContainer" style={{position: 'relative'}}>
      
      {/* FLOATING VIRTUAL STYLIST BUTTON */}
      <button className="fh-stylist-btn">
        <span style={{fontSize: '1.5rem'}}>✨</span> 
        <div className="fh-stylist-text">Virtual Stylist</div>
      </button>

      {/* 0. LIVE TICKER MARQUEE */}
      <div className="fh-ticker-container">
        <div className="fh-ticker">
          🔥 EXTRA 20% OFF ON ORDERS ABOVE ₹1999 USE CODE: FASHION20 • ⚡ FLASH SALE LIVE: SNEAKERS STARTING AT ₹499 • 🌟 EXCLUSIVE: RAKHI COLLECTION JUST DROPPED! 
        </div>
      </div>

      {/* 1. MASSIVE HERO BANNER WITH VIDEO PLAY ICON */}
      <div className="fh-hero-grid fh-animate-1">
        <div className="fh-hero-main" style={{position: 'relative'}}>
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop" alt="Fashion Sale" />
          <div className="fh-banner-overlay" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', cursor: 'pointer', border: '2px solid white'}}>
              <span style={{color: 'white', fontSize: '1.5rem', marginLeft: '5px'}}>▶</span>
            </div>
            <h2 style={{fontSize: '4.5rem'}}>The Big Fashion Festival</h2>
            <button className="fh-shop-now-btn" style={{background: 'linear-gradient(45deg, #ff1493, #ff4500)'}}>Explore Now</button>
          </div>
        </div>
        <div className="fh-hero-sub-grid">
          <div className="fh-hero-sub">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" alt="Tees" />
            <div className="fh-sub-overlay">Gen Z Drips</div>
          </div>
          <div className="fh-hero-sub">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop" alt="Sneakers" />
            <div className="fh-sub-overlay">Sneakerheads</div>
          </div>
        </div>
      </div>

      {/* PREMIUM BRANDS MARQUEE */}
      <div className="fh-brands-marquee-container fh-animate-1" style={{marginTop: '30px', background: '#111', padding: '20px 0', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
        <div style={{color: '#ff1493', fontWeight: '900', padding: '0 30px', fontSize: '1.2rem', whiteSpace: 'nowrap', borderRight: '2px solid #333', zIndex: 2, background: '#111'}}>TOP BRANDS</div>
        <div className="fh-brands-marquee">
          {premiumBrands.map((brand, idx) => (
            <span key={idx} style={{color: 'white', fontSize: '2rem', fontWeight: '900', margin: '0 40px', opacity: 0.7, fontFamily: 'serif', letterSpacing: '2px'}}>{brand}</span>
          ))}
        </div>
      </div>

      {/* SHOP BY OCCASION (NEW ADVANCED FEATURE) */}
      <div className="fh-animate-2" style={{marginTop: '40px'}}>
        <div className="fh-section-title">
          <span style={{fontSize: '2rem', fontWeight: '900', color: '#111'}}>Shop by Occasion</span>
        </div>
        <div style={{display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '15px', scrollbarWidth: 'none'}}>
          {occasions.map((occ, idx) => (
            <div key={idx} style={{minWidth: '280px', height: '350px', borderRadius: '20px', overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} onClick={() => setActiveItem(occ.name)}>
              <img src={occ.img} alt={occ.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px 20px 20px', background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)', color: 'white'}}>
                <div style={{fontSize: '1.8rem', fontWeight: '900', marginBottom: '5px'}}>{occ.name}</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#ff1493'}}>
                  EXPLORE <span style={{fontSize: '1.2rem'}}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. GEN Z FASHION */}
      <div className="fh-animate-2" style={{marginTop: '30px'}}>
        <div className="fh-section-title">
          <span style={{fontSize: '2rem', fontWeight: '900', color: '#111'}}>Gen Z Fashion</span>
          <span style={{color: '#ff1493', marginLeft: '10px', fontSize: '1.2rem', fontWeight: 'bold'}}>Top Trends 🔥</span>
        </div>
        <div className="fh-product-row">
          {genZFashion.map((item, idx) => (
            <div className="fh-trend-card" key={`genz-${idx}`} onClick={() => setActiveItem(item.name)}>
              <div className="fh-trend-img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="fh-trend-info">
                <div className="fh-trend-name">{item.name}</div>
                <div className="fh-trend-offer">{item.offer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TOP 50 DEALS WITH COUNTDOWN */}
      <div className="fh-animate-3" style={{marginTop: '40px', background: 'linear-gradient(135deg, #111 0%, #333 100%)', padding: '30px', borderRadius: '20px', position: 'relative', overflow: 'hidden'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          <div className="fh-section-title" style={{color: '#fff', fontSize: '2.5rem', margin: 0}}>
            Top 50 Deals 🔥
          </div>
          <div className="fh-countdown">
            Ends in: <span>{String(timeLeft.hours).padStart(2, '0')}</span>:<span>{String(timeLeft.minutes).padStart(2, '0')}</span>:<span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="fh-product-row">
          {top50Deals.map((item, idx) => (
            <div className="fh-deal-card" key={`top50-${idx}`} onClick={() => setActiveItem(item.name)}>
              <div className="fh-deal-badge">Top 50</div>
              <img src={item.img} alt={item.name} className="fh-deal-img" />
              <div className="fh-deal-content">
                <div className="fh-deal-name">{item.name}</div>
                <div className="fh-deal-offer">{item.offer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. RAKHI TRENDS WITH VIRTUAL TRY-ON */}
      <div className="fh-animate-4" style={{marginTop: '40px'}}>
        <div className="fh-section-title" style={{textAlign: 'center', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px'}}>
          <span style={{fontSize: '2.5rem', fontWeight: '900', color: '#d4af37'}}>Rakhi Trends</span>
          <p style={{color: '#666', fontSize: '1.2rem', marginTop: '5px'}}>Special looks for special occasions</p>
        </div>
        <div className="fh-rakhi-grid">
          {rakhiTrends.map((item, idx) => (
            <div className="fh-rakhi-card" key={`rakhi-${idx}`} onClick={() => setActiveItem(item.name)}>
              <img src={item.img} alt={item.name} />
              <div className="fh-rakhi-overlay">
                <span>{item.name}</span>
                <button className="fh-ar-btn">✨ Virtual Try-On</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. TOP PICKS & BRANDS */}
      <div className="fh-animate-5" style={{marginTop: '40px', marginBottom: '40px'}}>
        <div className="fh-section-title">
          <span style={{fontSize: '2rem', fontWeight: '900', color: '#111'}}>Top Picks</span>
          <span style={{color: '#2874f0', marginLeft: '10px', fontSize: '1.2rem', fontWeight: 'bold'}}>Brands Under ₹599</span>
        </div>
        <div className="fh-product-row">
          {topPicks.map((item, idx) => (
            <div className="fh-trend-card" key={`pick-${idx}`} style={{border: '1px solid #ddd'}} onClick={() => setActiveItem(item.name)}>
              <div className="fh-trend-img-box" style={{height: '200px'}}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="fh-trend-info" style={{background: '#f8f8f8'}}>
                <div className="fh-trend-name" style={{color: '#333'}}>{item.name}</div>
                <div className="fh-trend-offer" style={{color: '#388e3c', fontSize: '1.2rem'}}>{item.offer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FashionHubView;
