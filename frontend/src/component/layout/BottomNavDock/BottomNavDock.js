/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./BottomNavDock.css";

// Material-UI Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import CategoryIcon from "@material-ui/icons/Category";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MicIcon from "@material-ui/icons/Mic";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const FLIPKART_DEPARTMENTS = [
  { id: "mobiles", name: "Mobiles & Tech", icon: "📱", tag: "Up to 40% Off", desc: "Apple, Samsung, OnePlus, Pixel", query: "phone" },
  { id: "electronics", name: "Electronics & Laptops", icon: "💻", tag: "Best Sellers", desc: "MacBooks, Monitors, Audio & TWS", query: "laptop" },
  { id: "fashion", name: "Fashion & Lifestyle", icon: "👕", tag: "Min. 50% Off", desc: "Men, Women, Kids & Footwear", query: "shirt" },
  { id: "beauty", name: "Beauty & Grooming", icon: "💄", tag: "Top Brands", desc: "Skincare, Fragrances, Cosmetics", query: "perfume" },
  { id: "appliances", name: "TV & Appliances", icon: "📺", tag: "No Cost EMI", desc: "Smart TVs, ACs, Washing Machines", query: "tv" },
  { id: "home", name: "Home & Furniture", icon: "🛋️", tag: "Great Living", desc: "Decor, Cookware, Bedsheets", query: "bedsheet" },
  { id: "grocery", name: "Flipkart Grocery", icon: "🛒", tag: "Instant Saver", desc: "Daily essentials at lowest prices", query: "dry fruits" },
  { id: "sports", name: "Sports & Fitness", icon: "🏸", tag: "Extra 10% Off", desc: "Gym Gear, Cricket & Shoes", query: "shoes" }
];

const TRENDING_QUERIES = [
  "iPhone 16 Pro",
  "Samsung S24 Ultra",
  "MacBook Air M3",
  "Sony Noise Cancelling",
  "Nike Running Shoes",
  "Air Conditioner 1.5 Ton",
  "4K OLED Smart TV",
  "Casio Edifice Watch"
];

const BottomNavDock = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user || {});
  const { cartItems } = useSelector((state) => state.cart || {});
  const { wishlistItems } = useSelector((state) => state.wishlist || {});

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [liveSuggestions, setLiveSuggestions] = useState([]);
  const [isSearchingLive, setIsSearchingLive] = useState(false);

  const searchDebounceTimer = useRef(null);

  // Determine active tab based on path
  const currentPath = location.pathname;
  let activeTab = "home";
  if (currentPath === "/") activeTab = "home";
  else if (currentPath.startsWith("/product") || currentPath === "/search") activeTab = "search";
  else if (currentPath === "/wishlist") activeTab = "wishlist";
  else if (currentPath === "/cart") activeTab = "cart";
  else if (currentPath === "/account" || currentPath === "/login" || currentPath === "/orders") activeTab = "account";

  // Live Suggestion Search as user types
  useEffect(() => {
    if (!searchKeyword.trim()) {
      setLiveSuggestions([]);
      return;
    }

    if (searchDebounceTimer.current) clearTimeout(searchDebounceTimer.current);

    searchDebounceTimer.current = setTimeout(async () => {
      try {
        setIsSearchingLive(true);
        const { data } = await axios.get(`/api/v1/products?keyword=${encodeURIComponent(searchKeyword.trim())}&limit=5`);
        if (data && data.products) {
          setLiveSuggestions(data.products);
        }
      } catch (err) {
        setLiveSuggestions([]);
      } finally {
        setIsSearchingLive(false);
      }
    }, 280);

    return () => {
      if (searchDebounceTimer.current) clearTimeout(searchDebounceTimer.current);
    };
  }, [searchKeyword]);

  // Voice Search Handler
  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice Search is supported in Chrome, Edge, and Safari.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      setIsVoiceListening(true);

      recognition.onresult = (e) => {
        const voiceQuery = e.results[0][0].transcript;
        setSearchKeyword(voiceQuery);
        setIsVoiceListening(false);
        setShowSearchModal(false);
        history.push(`/products?keyword=${encodeURIComponent(voiceQuery)}`);
      };

      recognition.onerror = () => setIsVoiceListening(false);
      recognition.onend = () => setIsVoiceListening(false);
      recognition.start();
    } catch (err) {
      console.warn("Speech recognition error:", err);
      setIsVoiceListening(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      setShowSearchModal(false);
      history.push(`/products?keyword=${encodeURIComponent(searchKeyword.trim())}`);
    }
  };

  const handleDepartmentClick = (dept) => {
    setShowCategoryDrawer(false);
    history.push(`/products?keyword=${encodeURIComponent(dept.query)}`);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          FLIPKART ENTERPRISE GLOBAL BOTTOM DOCK
          ═══════════════════════════════════════════════════════════ */}
      <nav className="fk-global-bottom-dock" aria-label="Bottom Navigation">
        
        {/* 1. HOME */}
        <div
          className={`fk-dock-btn ${activeTab === "home" ? "active" : ""}`}
          onClick={() => {
            if (currentPath === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              history.push("/");
            }
          }}
          title="Home Store"
        >
          <div className="fk-dock-icon-box">
            <HomeIcon className="fk-dock-svg-icon" />
          </div>
          <span className="fk-dock-label">Home</span>
        </div>

        {/* 2. SEARCH / EXPLORE */}
        <div
          className={`fk-dock-btn ${showSearchModal ? "active" : ""}`}
          onClick={() => setShowSearchModal(true)}
          title="Search 10,000+ Products"
        >
          <div className="fk-dock-icon-box">
            <SearchIcon className="fk-dock-svg-icon" />
          </div>
          <span className="fk-dock-label">Search</span>
        </div>

        {/* 3. CATEGORIES */}
        <div
          className={`fk-dock-btn ${showCategoryDrawer ? "active" : ""}`}
          onClick={() => setShowCategoryDrawer(true)}
          title="Browse All Departments"
        >
          <div className="fk-dock-icon-box">
            <CategoryIcon className="fk-dock-svg-icon" />
          </div>
          <span className="fk-dock-label">Categories</span>
        </div>

        {/* 4. WISHLIST */}
        <div
          className={`fk-dock-btn ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => history.push("/wishlist")}
          title="Saved Items"
        >
          <div className="fk-dock-icon-box">
            <FavoriteIcon className="fk-dock-svg-icon" />
            {wishlistItems && wishlistItems.length > 0 && (
              <span className="fk-dock-count-badge fk-wishlist-badge">
                {wishlistItems.length}
              </span>
            )}
          </div>
          <span className="fk-dock-label">Wishlist</span>
        </div>

        {/* 5. CART */}
        <div
          className={`fk-dock-btn ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => history.push("/cart")}
          title="Shopping Cart"
        >
          <div className="fk-dock-icon-box">
            <ShoppingCartIcon className="fk-dock-svg-icon" />
            {cartItems && cartItems.length > 0 && (
              <span className="fk-dock-count-badge fk-cart-badge">
                {cartItems.length}
              </span>
            )}
          </div>
          <span className="fk-dock-label">Cart</span>
        </div>

        {/* 6. TRACK DELIVERY */}
        <div
          className={`fk-dock-btn ${currentPath.startsWith("/order/track") ? "active" : ""}`}
          onClick={() => history.push("/order/track")}
          title="Track Live Package"
        >
          <div className="fk-dock-icon-box">
            <LocalShippingIcon className="fk-dock-svg-icon" />
          </div>
          <span className="fk-dock-label">Track 🛵</span>
        </div>

        {/* 7. ACCOUNT */}
        <div
          className={`fk-dock-btn ${activeTab === "account" ? "active" : ""}`}
          onClick={() => history.push(isAuthenticated ? "/account" : "/login")}
          title="My Account"
        >
          <div className="fk-dock-icon-box">
            <AccountCircleIcon className="fk-dock-svg-icon" />
          </div>
          <span className="fk-dock-label">
            {isAuthenticated && user && user.name ? user.name.split(" ")[0] : "Account"}
          </span>
        </div>

      </nav>

      {/* ═══════════════════════════════════════════════════════════
          REAL-TIME INTERACTIVE SEARCH MODAL (VOICE + LIVE SUGGESTIONS)
          ═══════════════════════════════════════════════════════════ */}
      {showSearchModal && (
        <div className="fk-dock-modal-backdrop" onClick={() => setShowSearchModal(false)}>
          <div className="fk-dock-search-card" onClick={(e) => e.stopPropagation()}>
            
            {/* SEARCH HEADER */}
            <div className="fk-dock-search-header">
              <form className="fk-dock-search-form" onSubmit={handleSearchSubmit}>
                <SearchIcon style={{ color: "#2874f0", fontSize: 22 }} />
                <input
                  type="text"
                  placeholder="Search 10,000+ Products, Brands & Deals..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  autoFocus
                  className="fk-dock-search-input"
                />
                <button
                  type="button"
                  className={`fk-dock-voice-btn ${isVoiceListening ? "pulse-listening" : ""}`}
                  onClick={handleVoiceSearch}
                  title="Speak to Search"
                >
                  <MicIcon style={{ color: isVoiceListening ? "#ef4444" : "#2874f0", fontSize: 20 }} />
                </button>
                <button type="submit" className="fk-dock-submit-btn">Search</button>
              </form>

              <button className="fk-dock-modal-close" onClick={() => setShowSearchModal(false)}>
                <CloseIcon />
              </button>
            </div>

            {/* VOICE LISTENING ANIMATION */}
            {isVoiceListening && (
              <div className="fk-voice-wave-container">
                <div className="fk-voice-pulsar"></div>
                <span className="fk-voice-text">Listening... Speak product name clearly</span>
              </div>
            )}

            {/* LIVE PRODUCT SUGGESTIONS (REAL TIME) */}
            {liveSuggestions.length > 0 && (
              <div className="fk-live-suggestions-box">
                <div className="fk-suggestions-title">
                  <FlashOnIcon style={{ color: "#f59e0b", fontSize: 16 }} />
                  <span>Instant Results from Catalog ({liveSuggestions.length})</span>
                </div>
                <div className="fk-suggestions-list">
                  {liveSuggestions.map((item) => (
                    <div
                      key={item._id}
                      className="fk-suggestion-row"
                      onClick={() => {
                        setShowSearchModal(false);
                        history.push(`/product/${item._id}`);
                      }}
                    >
                      <img
                        src={item.images && item.images[0] ? item.images[0].url : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100"}
                        alt={item.name}
                        className="fk-suggestion-thumb"
                      />
                      <div className="fk-suggestion-meta">
                        <div className="fk-suggestion-name">{item.name}</div>
                        <div className="fk-suggestion-sub">
                          <span className="fk-suggestion-price">₹{item.price ? item.price.toLocaleString("en-IN") : "999"}</span>
                          <span className="fk-suggestion-cat">{item.category}</span>
                        </div>
                      </div>
                      <ArrowForwardIosIcon style={{ fontSize: 12, color: "#94a3b8" }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TRENDING SEARCH CHIPS */}
            <div className="fk-trending-chips-wrap">
              <div className="fk-trending-label">🔥 Trending Searches on Flipkart</div>
              <div className="fk-trending-chips-grid">
                {TRENDING_QUERIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className="fk-trend-pill"
                    onClick={() => {
                      setShowSearchModal(false);
                      history.push(`/products?keyword=${encodeURIComponent(q)}`);
                    }}
                  >
                    <span>🔍</span> {q}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          REAL-TIME INTERACTIVE CATEGORY DRAWER
          ═══════════════════════════════════════════════════════════ */}
      {showCategoryDrawer && (
        <div className="fk-dock-modal-backdrop" onClick={() => setShowCategoryDrawer(false)}>
          <div className="fk-dock-category-drawer" onClick={(e) => e.stopPropagation()}>
            
            <div className="fk-drawer-head">
              <div>
                <span className="fk-drawer-badge">⚡ FLIPKART EXPLORE</span>
                <h3 className="fk-drawer-heading">All Product Departments</h3>
              </div>
              <button className="fk-dock-modal-close" onClick={() => setShowCategoryDrawer(false)}>
                <CloseIcon />
              </button>
            </div>

            <div className="fk-dept-grid">
              {FLIPKART_DEPARTMENTS.map((dept) => (
                <div
                  key={dept.id}
                  className="fk-dept-card"
                  onClick={() => handleDepartmentClick(dept)}
                >
                  <div className="fk-dept-emoji-icon">{dept.icon}</div>
                  <div className="fk-dept-info">
                    <div className="fk-dept-name">{dept.name}</div>
                    <div className="fk-dept-desc">{dept.desc}</div>
                    <span className="fk-dept-tag">{dept.tag}</span>
                  </div>
                  <ArrowForwardIosIcon style={{ fontSize: 14, color: "#cbd5e1" }} />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default BottomNavDock;
