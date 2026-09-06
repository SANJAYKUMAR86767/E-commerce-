import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreIcon from "@material-ui/icons/Store";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MicIcon from "@material-ui/icons/Mic";
import DashboardIcon from "@material-ui/icons/Dashboard";
import logo from "../../../images/logo.png";
import { useTheme } from "../../../context/ThemeContext";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import SuperCoinsModal from "../SuperCoins/SuperCoinsModal";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const history = useHistory();
  const { isAuthenticated, user } = useSelector((state) => state.user || {});
  const { cartItems } = useSelector((state) => state.cart || {});
  const { wishlistItems } = useSelector((state) => state.wishlist || {});

  const [keyword, setKeyword] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [showSuperCoins, setShowSuperCoins] = useState(false);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products?keyword=${encodeURIComponent(keyword.trim())}`);
    } else {
      history.push("/products");
    }
  };

  const voiceSearchHandler = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      setIsListening(true);
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setKeyword(transcript);
        setIsListening(false);
        history.push(`/products?keyword=${encodeURIComponent(transcript)}`);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
    } catch (e) {
      setIsListening(false);
    }
  };

  return (
    <div className="fk-header-container">
      <div className="fk-header-inner">
        
        {/* 1. LOGO */}
        <Link to="/" className="fk-logo-box">
          <img src={logo} alt="Flipkart" />
        </Link>

        {/* 2. SEARCH BAR */}
        <form className="fk-search-box" onSubmit={searchSubmitHandler}>
          <SearchIcon className="fk-search-icon" onClick={searchSubmitHandler} style={{ cursor: "pointer" }} />
          <input 
            type="text" 
            placeholder="Search for Products, Brands and More" 
            className="fk-search-input"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="button"
            className={`fk-header-mic-btn ${isListening ? "active" : ""}`}
            onClick={voiceSearchHandler}
            title="Search by Voice"
            style={{ background: "transparent", border: "none", cursor: "pointer", padding: "0 6px", display: "flex", alignItems: "center" }}
          >
            <MicIcon style={{ color: isListening ? "#ef4444" : "#2874f0", fontSize: 20 }} />
          </button>
        </form>

        {/* 3. NAV ACTIONS */}
        <div className="fk-nav-actions">
          
          {/* SUPERCOINS REWARDS PILL */}
          <div
            className="fk-nav-item fk-supercoins-pill"
            onClick={() => setShowSuperCoins(true)}
            title="Flipkart Plus Rewards & SuperCoins"
            style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
              border: "1px solid #f59e0b",
              borderRadius: "50px",
              padding: "0.35rem 0.8rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem"
            }}
          >
            <span style={{ fontSize: "1rem" }}>🪙</span>
            <span style={{ color: "#78350f", fontWeight: 800, fontSize: "0.82rem" }}>
              {localStorage.getItem("fk_supercoins") || "140"} Coins
            </span>
          </div>

          {/* AI COPILOT LAUNCHER PILL */}
          <div
            className="fk-nav-item fk-ai-pill"
            onClick={() => window.dispatchEvent(new CustomEvent("open-ai-copilot"))}
            title="Open Flipkart AI Shopping Copilot"
            style={{
              background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
              border: "1px solid #93c5fd",
              borderRadius: "50px",
              padding: "0.35rem 0.8rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem"
            }}
          >
            <span style={{ fontSize: "0.95rem" }}>🤖</span>
            <span style={{ color: "#1e40af", fontWeight: 800, fontSize: "0.82rem" }}>
              AI Copilot ✨
            </span>
          </div>

          {/* LOGIN DROPDOWN */}
          <div className="fk-nav-item">
            <AccountCircleIcon className="fk-nav-item-icon" style={{color: '#2874f0'}} />
            <span className="fk-nav-item-text">
              {isAuthenticated && user && user.name ? user.name.split(" ")[0] : "Login"}
            </span>
            <ExpandMoreIcon className="fk-dropdown-arrow" />
            
            <div className="fk-dropdown-menu">
              {!isAuthenticated ? (
                <div className="fk-dropdown-header">
                  <span>New customer?</span>
                  <Link to="/login">Sign Up</Link>
                </div>
              ) : (
                <div className="fk-dropdown-header">
                  <span>Welcome back,</span>
                  <span style={{ fontWeight: 800, color: "#2874f0" }}>{user.name}</span>
                </div>
              )}

              {isAuthenticated && user && user.role === "admin" && (
                <Link to="/admin/dashboard" className="fk-dropdown-item" style={{ background: "#eff6ff", color: "#1d4ed8", fontWeight: 700 }}>
                  <DashboardIcon className="fk-dropdown-item-icon" style={{ color: "#1d4ed8" }} />
                  Admin Dashboard
                </Link>
              )}

              <Link to={isAuthenticated ? "/account" : "/login"} className="fk-dropdown-item">
                <AccountCircleIcon className="fk-dropdown-item-icon" />
                My Profile
              </Link>
              <Link to="/orders" className="fk-dropdown-item">
                <AssignmentIcon className="fk-dropdown-item-icon" />
                Orders
              </Link>
              <Link to="/wishlist" className="fk-dropdown-item">
                <FavoriteBorderIcon className="fk-dropdown-item-icon" />
                Wishlist {wishlistItems && wishlistItems.length > 0 && `(${wishlistItems.length})`}
              </Link>
              <Link to="/admin/dashboard" className="fk-dropdown-item">
                <StoreIcon className="fk-dropdown-item-icon" />
                Seller Hub
              </Link>
              <Link to="/contact" className="fk-dropdown-item">
                <HeadsetMicIcon className="fk-dropdown-item-icon" />
                24x7 Customer Care
              </Link>
            </div>
          </div>

          {/* MORE DROPDOWN */}
          <div className="fk-nav-item">
            <span className="fk-nav-item-text">More</span>
            <ExpandMoreIcon className="fk-dropdown-arrow" />
            
            <div className="fk-dropdown-menu" style={{width: '240px'}}>
              <Link to="/admin/dashboard" className="fk-dropdown-item">
                <StoreIcon className="fk-dropdown-item-icon" />
                Become a Seller
              </Link>
              <Link to="/contact" className="fk-dropdown-item">
                <HeadsetMicIcon className="fk-dropdown-item-icon" />
                24x7 Customer Care
              </Link>
              <Link to="/products" className="fk-dropdown-item">
                <TrendingUpIcon className="fk-dropdown-item-icon" />
                Trending Deals
              </Link>
            </div>
          </div>

          {/* CART */}
          <Link to="/cart" style={{textDecoration: 'none'}}>
            <div className="fk-nav-item fk-cart-nav-item">
              <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                <ShoppingCartIcon className="fk-nav-item-icon" />
                {cartItems && cartItems.length > 0 && (
                  <span className="fk-header-cart-badge">{cartItems.length}</span>
                )}
              </div>
              <span className="fk-nav-item-text">Cart</span>
            </div>
          </Link>

        </div>

      </div>

      {/* THEME TOGGLE (Fixed to bottom-left screen above dock so it doesn't collide with bottom dock or AI Copilot) */}
      <button
        className="themeToggleBtn"
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: "78px",
          left: "20px",
          zIndex: "1000",
        }}
        title="Toggle Light/Dark Theme"
      >
        {darkMode ? <Brightness7Icon style={{ color: "#f59e0b" }} /> : <Brightness4Icon style={{ color: "#6366f1" }} />}
        <span>{darkMode ? "Light" : "Dark"}</span>
      </button>

      {/* SUPERCOINS MODAL */}
      <SuperCoinsModal isOpen={showSuperCoins} onClose={() => setShowSuperCoins(false)} />

    </div>
  );
};

export default Header;
