import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreIcon from "@material-ui/icons/Store";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";
import logo from "../../../images/logo.png";
import { useTheme } from "../../../context/ThemeContext";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="fk-header-container">
      <div className="fk-header-inner">
        
        {/* 1. LOGO */}
        <Link to="/" className="fk-logo-box">
          <img src={logo} alt="Flipkart" />
        </Link>

        {/* 2. SEARCH BAR */}
        <div className="fk-search-box">
          <SearchIcon className="fk-search-icon" />
          <input 
            type="text" 
            placeholder="Search for Products, Brands and More" 
            className="fk-search-input"
          />
        </div>

        {/* 3. NAV ACTIONS */}
        <div className="fk-nav-actions">
          
          {/* LOGIN DROPDOWN */}
          <div className="fk-nav-item">
            <AccountCircleIcon className="fk-nav-item-icon" style={{color: '#2874f0'}} />
            <span className="fk-nav-item-text">Login</span>
            <ExpandMoreIcon className="fk-dropdown-arrow" />
            
            <div className="fk-dropdown-menu">
              <div className="fk-dropdown-header">
                <span>New customer?</span>
                <Link to="/login">Sign Up</Link>
              </div>
              <Link to="/account" className="fk-dropdown-item">
                <AccountCircleIcon className="fk-dropdown-item-icon" />
                My Profile
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <StarBorderIcon className="fk-dropdown-item-icon" />
                Flipkart Plus Zone
              </Link>
              <Link to="/orders" className="fk-dropdown-item">
                <AssignmentIcon className="fk-dropdown-item-icon" />
                Orders
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <FavoriteBorderIcon className="fk-dropdown-item-icon" />
                Wishlist
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <StoreIcon className="fk-dropdown-item-icon" />
                Become a Seller
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <CardGiftcardIcon className="fk-dropdown-item-icon" />
                Rewards
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <AccountBalanceWalletIcon className="fk-dropdown-item-icon" />
                Gift Cards
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <NotificationsIcon className="fk-dropdown-item-icon" />
                Notification Preferences
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <HeadsetMicIcon className="fk-dropdown-item-icon" />
                24x7 Customer Care
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <TrendingUpIcon className="fk-dropdown-item-icon" />
                Advertise
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <GetAppIcon className="fk-dropdown-item-icon" />
                Download App
              </Link>
            </div>
          </div>

          {/* MORE DROPDOWN */}
          <div className="fk-nav-item">
            <span className="fk-nav-item-text">More</span>
            <ExpandMoreIcon className="fk-dropdown-arrow" />
            
            <div className="fk-dropdown-menu" style={{width: '240px'}}>
              <Link to="/" className="fk-dropdown-item">
                <StoreIcon className="fk-dropdown-item-icon" />
                Become a Seller
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <NotificationsIcon className="fk-dropdown-item-icon" />
                Notification Settings
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <HeadsetMicIcon className="fk-dropdown-item-icon" />
                24x7 Customer Care
              </Link>
              <Link to="/" className="fk-dropdown-item">
                <TrendingUpIcon className="fk-dropdown-item-icon" />
                Advertise on Flipkart
              </Link>
            </div>
          </div>

          {/* CART */}
          <Link to="/cart" style={{textDecoration: 'none'}}>
            <div className="fk-nav-item">
              <ShoppingCartIcon className="fk-nav-item-icon" />
              <span className="fk-nav-item-text">Cart</span>
            </div>
          </Link>

        </div>

      </div>

      {/* THEME TOGGLE (Fixed to screen so it doesn't break header layout) */}
      <button
        className="themeToggleBtn"
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: "15px", /* Moved to bottom so it doesn't overlap header */
          right: "15px",
          zIndex: "1000",
        }}
        title="Toggle Light/Dark Theme"
      >
        {darkMode ? <Brightness7Icon style={{ color: "#f59e0b" }} /> : <Brightness4Icon style={{ color: "#6366f1" }} />}
        <span>{darkMode ? "Light" : "Dark"}</span>
      </button>

    </div>
  );
};

export default Header;
