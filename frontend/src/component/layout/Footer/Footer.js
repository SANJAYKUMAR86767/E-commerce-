import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const healthCategories = [
    { name: "Vitamins & Supplements", icon: "💊", color: "linear-gradient(135deg, #00b09b, #96c93d)" },
    { name: "Ayurvedic Care", icon: "🌿", color: "linear-gradient(135deg, #f2994a, #f2c94c)" },
    { name: "Healthcare Devices", icon: "🩺", color: "linear-gradient(135deg, #36d1dc, #5b86e5)" },
    { name: "Personal Care", icon: "🧴", color: "linear-gradient(135deg, #ff758c, #ff7eb3)" },
    { name: "Baby & Mother Care", icon: "👶", color: "linear-gradient(135deg, #a18cd1, #fbc2eb)" },
    { name: "Sports Nutrition", icon: "💪", color: "linear-gradient(135deg, #ff9a9e, #fecfef)" },
    { name: "Diabetic Care", icon: "🩸", color: "linear-gradient(135deg, #fdfbfb, #ebedee)" },
    { name: "Orthopedic Supports", icon: "🦴", color: "linear-gradient(135deg, #4facfe, #00f2fe)" },
  ];

  const topMedicines = [
    { name: "Optimum Nutrition Gold Standard 100% Whey Protein (2 Lbs)", price: "₹2,999", oldPrice: "₹3,499", discount: "14% Off", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&auto=format&fit=crop" },
    { name: "Himalaya Ashwagandha General Wellness Tablets (60 Tabs)", price: "₹180", oldPrice: "₹220", discount: "18% Off", img: "https://images.unsplash.com/photo-1628773954602-0e36bfa75402?w=400&auto=format&fit=crop" },
    { name: "Accu-Chek Active Blood Glucose Meter System", price: "₹999", oldPrice: "₹1,450", discount: "31% Off", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop" },
    { name: "Centrum Adult Multivitamin Supplement (60 Veg Tabs)", price: "₹450", oldPrice: "₹500", discount: "10% Off", img: "https://images.unsplash.com/photo-1584308666744-24d5e4a87c10?w=400&auto=format&fit=crop" },
    { name: "Dabur Chyawanprash Immunity Booster (1kg)", price: "₹320", oldPrice: "₹370", discount: "13% Off", img: "https://images.unsplash.com/photo-1615486171448-6a56b5ce53cb?w=400&auto=format&fit=crop" },
    { name: "Dr. Trust Waterproof Flexible Digital Thermometer", price: "₹199", oldPrice: "₹350", discount: "43% Off", img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&auto=format&fit=crop" },
    { name: "MuscleBlaze Biozyme Performance Whey (1kg)", price: "₹2,299", oldPrice: "₹2,899", discount: "20% Off", img: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&auto=format&fit=crop" },
    { name: "Supradyn Daily Multivitamin (15 Tablets)", price: "₹55", oldPrice: "₹65", discount: "15% Off", img: "https://images.unsplash.com/photo-1550572017-edb913e61819?w=400&auto=format&fit=crop" },
    { name: "Omron HEM 7120 Fully Automatic Blood Pressure Monitor", price: "₹1,850", oldPrice: "₹2,340", discount: "21% Off", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&auto=format&fit=crop" },
    { name: "Mamaearth Onion Hair Oil for Hair Growth (250ml)", price: "₹399", oldPrice: "₹499", discount: "20% Off", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop" },
    { name: "Volini Pain Relief Spray (100g)", price: "₹170", oldPrice: "₹199", discount: "14% Off", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&auto=format&fit=crop" },
    { name: "Pampers Active Baby Taped Diapers (Large, 64 Count)", price: "₹899", oldPrice: "₹1,299", discount: "30% Off", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&auto=format&fit=crop" }
  ];

  return (
    <div className="health-pharma-section">
      {isHomePage && (
        <>
          <div className="health-pharma-header">
            <div className="hp-badge">⚕️ E-PHARMACY & WELLNESS</div>
            <h2 className="hp-title">Advanced Health & Medicine Store</h2>
            <p className="hp-subtitle">100% Genuine Medicines • Expert Consultations • Lightning Fast Delivery</p>
          </div>

          <div className="hp-upload-prescription-banner">
            <div className="hp-upload-content">
              <h3>Have a Prescription?</h3>
              <p>Upload your doctor's prescription and get medicines delivered right to your doorstep within 24 hours.</p>
              <button className="hp-upload-btn">
                <span>📤</span> Upload Prescription Now
              </button>
            </div>
            <div className="hp-upload-bg-glow"></div>
          </div>

          <div className="hp-categories-wrapper">
            {healthCategories.map((cat, i) => (
              <div key={i} className="hp-cat-card" style={{ background: cat.color }}>
                <div className="hp-cat-icon">{cat.icon}</div>
                <div className="hp-cat-name">{cat.name}</div>
              </div>
            ))}
          </div>

          <div className="hp-section-heading">
            <span>💊 Top Selling Medicines & Supplements</span>
          </div>

          <div className="hp-products-grid">
            {topMedicines.map((med, i) => (
              <div key={i} className="hp-product-card">
                <div className="hp-med-badge">{med.discount}</div>
                <div className="hp-med-img">
                  <img src={med.img} alt={med.name} />
                </div>
                <div className="hp-med-info">
                  <h4 className="hp-med-name">{med.name}</h4>
                  <div className="hp-med-pricing">
                    <span className="hp-med-price">{med.price}</span>
                    <span className="hp-med-old">{med.oldPrice}</span>
                  </div>
                  <button className="hp-med-add-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <div className="hp-developer-contact-block">
            <div className="hp-contact-bg-overlay"></div>
            <div className="hp-contact-content">
              <div className="hp-contact-left">
                <div className="hp-dev-badge">👨‍💻 DEVELOPED BY</div>
                <h2 className="hp-dev-name">Sanjay Kumar</h2>
                <div className="hp-dev-phone">
                  <span>📞</span> +91 8809604880
                </div>
                <p className="hp-dev-desc">
                  Get exclusive deals, lightning-fast checkout, and live order tracking right in your pocket. Connect with us directly for support or payments!
                </p>
                <div className="hp-app-badges">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </div>
              </div>
              
              <div className="hp-contact-right">
                <a href="https://wa.me/918809604880" target="_blank" rel="noreferrer" className="hp-qr-card whatsapp-qr" style={{textDecoration: "none"}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/918809604880" alt="WhatsApp QR" />
                  <div className="hp-qr-title">WhatsApp Chat</div>
                </a>
                <a href="https://www.instagram.com/sanjay_86767?igsh=eDRybHZ0d2c1Y2k3&igsi=eDRybHZ0d2c1Y2k3" target="_blank" rel="noreferrer" className="hp-qr-card insta-qr" style={{textDecoration: "none"}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/sanjay_86767" alt="Instagram QR" />
                  <div className="hp-qr-title">@sanjay_86767</div>
                </a>
                <a href="https://www.facebook.com/share/1DhosYJ15K/" target="_blank" rel="noreferrer" className="hp-qr-card facebook-qr" style={{textDecoration: "none"}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.facebook.com/share/1DhosYJ15K/" alt="Facebook QR" />
                  <div className="hp-qr-title">Facebook Profile</div>
                </a>
                <a href="upi://pay?pa=8809604880@ybl&pn=Sanjay%20Kumar" target="_blank" rel="noreferrer" className="hp-qr-card phonepe-qr" style={{textDecoration: "none"}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=8809604880@ybl&pn=Sanjay%20Kumar" alt="PhonePe QR" />
                  <div className="hp-qr-title">PhonePe Pay</div>
                </a>
                <a href="https://github.com/SANJAYKUMAR8622?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="hp-qr-card github-qr" style={{textDecoration: "none"}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/SANJAYKUMAR8622" alt="GitHub QR" />
                  <div className="hp-qr-title">GitHub Profile</div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Very small minimalist footer text so it still acts like a footer structurally */}
      <div className="hp-minimal-footer">
        <p>Copyrights 2026 &copy; Sanjay Kumar • Advanced Health & Mega Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
