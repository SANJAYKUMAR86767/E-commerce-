import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [activeModal, setActiveModal] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState("");

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  };

  const copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(""), 2500);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user ? user.name : "User"}'s VIP Dashboard`} />

          <div className="vipDashboardWrapper">
            {/* Top VIP Hero Header */}
            <div className="vipHeroHeader">
              <div className="vipGreetingBox">
                <span className="greetingBadge">✨ VIP PLATINUM MEMBER</span>
                <h1>{getGreeting()}, <span className="userNameHighlight">{user && user.name}</span>!</h1>
                <p>Welcome back to your personalized Shopping Hub. Enjoy 5% extra cashback & priority shipping today!</p>
              </div>
              <div className="vipAvatarBox">
                <div className="avatarRing">
                  <img src={user && user.avatar ? user.avatar.url : "/Profile.png"} alt={user && user.name} />
                </div>
                <Link to="/me/update" className="editProfileBtn">
                  ✏️ Edit Profile
                </Link>
              </div>
            </div>

            {/* Organized Interactive Stats Cards */}
            <div className="vipSectionTitle">
              <h2>💎 VIP Financials & Rewards</h2>
              <p>Click on any card below to view detailed breakdown and manage your balances</p>
            </div>

            <div className="vipStatsGrid">
              {/* SuperCoins Card */}
              <div className="statCard goldCard" onClick={() => setActiveModal("supercoins")}>
                <div className="statIcon">🪙</div>
                <div className="statDetails">
                  <h3>250</h3>
                  <p>SuperCoins Balance</p>
                </div>
                <span className="statBadge clickHint">Click to Redeem ➔</span>
              </div>

              {/* Wallet Card */}
              <div className="statCard blueCard" onClick={() => setActiveModal("wallet")}>
                <div className="statIcon">💳</div>
                <div className="statDetails">
                  <h3>₹1,250.00</h3>
                  <p>MegaPay Wallet</p>
                </div>
                <span className="statBadge clickHint">Add Money ➔</span>
              </div>

              {/* Order Tracking Card */}
              <div className="statCard purpleCard" onClick={() => setActiveModal("tracking")}>
                <div className="statIcon">📦</div>
                <div className="statDetails">
                  <h3>Out For Delivery</h3>
                  <p>Live Package Tracking</p>
                </div>
                <span className="statBadge clickHint">Track Live ➔</span>
              </div>

              {/* Coupons Card */}
              <div className="statCard pinkCard" onClick={() => setActiveModal("coupons")}>
                <div className="statIcon">🎟️</div>
                <div className="statDetails">
                  <h3>4 Active</h3>
                  <p>Member Coupons</p>
                </div>
                <span className="statBadge clickHint">View Coupons ➔</span>
              </div>
            </div>

            {/* Main Action Hub */}
            <div className="vipSectionTitle">
              <h2>🚀 Quick Access Hub</h2>
              <p>Manage your account settings, orders, and security preferences</p>
            </div>

            <div className="vipActionsGrid">
              <Link to="/orders" className="actionHubCard">
                <div className="cardIcon">📦</div>
                <div className="cardContent">
                  <h3>My Orders & Deliveries</h3>
                  <p>Track live packages, check purchase history and request returns.</p>
                </div>
                <div className="cardArrow">➔</div>
              </Link>

              <Link to="/me/update" className="actionHubCard">
                <div className="cardIcon">👤</div>
                <div className="cardContent">
                  <h3>Personal Information</h3>
                  <p>Update your full name, email address, phone number, and avatar.</p>
                </div>
                <div className="cardArrow">➔</div>
              </Link>

              <Link to="/password/update" className="actionHubCard">
                <div className="cardIcon">🔒</div>
                <div className="cardContent">
                  <h3>Security & Password</h3>
                  <p>Change your login password and manage 2-Factor Authentication.</p>
                </div>
                <div className="cardArrow">➔</div>
              </Link>

              <Link to="/cart" className="actionHubCard">
                <div className="cardIcon">🛒</div>
                <div className="cardContent">
                  <h3>Shopping Cart & Saved</h3>
                  <p>Review items added to cart and saved items for later checkout.</p>
                </div>
                <div className="cardArrow">➔</div>
              </Link>
            </div>

            {/* Account Info Details Card */}
            <div className="accountDetailsCard">
              <h3>📋 Account Information Summary</h3>
              <div className="detailsGrid">
                <div className="detailItem">
                  <span className="detailLabel">Full Name</span>
                  <span className="detailValue">{user && user.name}</span>
                </div>
                <div className="detailItem">
                  <span className="detailLabel">Email Address</span>
                  <span className="detailValue">{user && user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="detailLabel">Mobile Number</span>
                  <span className="detailValue">{user && user.mobileNo ? user.mobileNo : "+91 98765 43210"}</span>
                </div>
                <div className="detailItem">
                  <span className="detailLabel">Member Since</span>
                  <span className="detailValue">{user && user.createdAt ? String(user.createdAt).substr(0, 10) : "2026-08-13"}</span>
                </div>
                <div className="detailItem">
                  <span className="detailLabel">Account Status</span>
                  <span className="detailValue verifiedBadge">Verified VIP Member ✔️</span>
                </div>
              </div>
            </div>

            {/* Exclusive VIP Perks */}
            <div className="vipPerksBanner">
              <div className="perksHeader">
                <span className="perksTag">VIP PRIVILEGES</span>
                <h2>Perks Included With Your Account</h2>
              </div>
              <div className="perksList">
                <div className="perkItem">
                  <span className="perkIcon">🚀</span>
                  <h4>Free Express Shipping</h4>
                  <p>Zero delivery charges on all orders above ₹199</p>
                </div>
                <div className="perkItem">
                  <span className="perkIcon">🎧</span>
                  <h4>24x7 Priority Support</h4>
                  <p>Direct line to senior customer support agents</p>
                </div>
                <div className="perkItem">
                  <span className="perkIcon">🏷️</span>
                  <h4>Early Access Sales</h4>
                  <p>Shop Big Billion Deals 24 hours before everyone else</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MODAL 1: SUPERCOINS ================= */}
          {activeModal === "supercoins" && (
            <div className="modalOverlay" onClick={() => setActiveModal(null)}>
              <div className="modalContent glassModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                  <h2>🪙 SuperCoins Rewards Hub</h2>
                  <button className="closeModalBtn" onClick={() => setActiveModal(null)}>✕</button>
                </div>
                <div className="modalBody">
                  <div className="coinSummaryCard">
                    <div className="coinBigBadge">🪙 250</div>
                    <div>
                      <h4>Total Available Balance</h4>
                      <p>Use SuperCoins to get extra discounts & free OTT subscriptions!</p>
                    </div>
                  </div>

                  <h4>Recent Coin Transactions</h4>
                  <div className="historyList">
                    <div className="historyItem">
                      <span>🛍️ Purchase Bonus (Order #8492)</span>
                      <span className="plusCoin">+50 Coins</span>
                    </div>
                    <div className="historyItem">
                      <span>🎉 Daily Check-in Bonus</span>
                      <span className="plusCoin">+10 Coins</span>
                    </div>
                    <div className="historyItem">
                      <span>🎬 Disney+ Hotstar Pass Redeemed</span>
                      <span className="minusCoin">-100 Coins</span>
                    </div>
                  </div>

                  <h4>Redeem Coins For Rewards</h4>
                  <div className="rewardOfferGrid">
                    <div className="rewardCard">
                      <span>🎁 ₹500 Flipkart Gift Card</span>
                      <button className="redeemBtn">Redeem for 200 Coins</button>
                    </div>
                    <div className="rewardCard">
                      <span>🎬 1 Year SonyLIV Premium</span>
                      <button className="redeemBtn">Redeem for 150 Coins</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODAL 2: MEGAPAY WALLET ================= */}
          {activeModal === "wallet" && (
            <div className="modalOverlay" onClick={() => setActiveModal(null)}>
              <div className="modalContent glassModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                  <h2>💳 MegaPay Wallet & Cashbacks</h2>
                  <button className="closeModalBtn" onClick={() => setActiveModal(null)}>✕</button>
                </div>
                <div className="modalBody">
                  <div className="walletCardGraphic">
                    <div className="walletChip">💳 MegaPay VIP</div>
                    <div className="walletBal">₹1,250.00</div>
                    <div className="walletUpi">Linked UPI: {user ? user.email.split("@")[0] : "user"}@paytm</div>
                  </div>

                  <div className="walletActionsRow">
                    <button className="primaryWalletBtn">➕ Add Money to Wallet</button>
                    <button className="secondaryWalletBtn">⚡ UPI Auto-Pay</button>
                  </div>

                  <h4>Cashback History</h4>
                  <div className="historyList">
                    <div className="historyItem">
                      <span>🎉 Instant Cashback - Super Kirana</span>
                      <span className="plusCoin">+₹150.00</span>
                    </div>
                    <div className="historyItem">
                      <span>💳 PhonePe UPI Offer Reward</span>
                      <span className="plusCoin">+₹100.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODAL 3: LIVE ORDER TRACKING ================= */}
          {activeModal === "tracking" && (
            <div className="modalOverlay" onClick={() => setActiveModal(null)}>
              <div className="modalContent glassModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                  <h2>📦 Live Package Tracking</h2>
                  <button className="closeModalBtn" onClick={() => setActiveModal(null)}>✕</button>
                </div>
                <div className="modalBody">
                  <div className="activeOrderBox">
                    <span className="liveBadge">⚡ EXPRESS DELIVERY TODAY</span>
                    <h3>Order #OD9849204812</h3>
                    <p>Item: Sony WH-1000XM5 Wireless Headphones</p>

                    <div className="trackingStepper">
                      <div className="step stepDone">
                        <div className="stepDot">✓</div>
                        <p>Ordered</p>
                      </div>
                      <div className="stepLine stepLineDone"></div>
                      <div className="step stepDone">
                        <div className="stepDot">✓</div>
                        <p>Shipped</p>
                      </div>
                      <div className="stepLine stepLineDone"></div>
                      <div className="step stepActive">
                        <div className="stepDot">🚚</div>
                        <p>Out for Delivery</p>
                      </div>
                      <div className="stepLine"></div>
                      <div className="step">
                        <div className="stepDot">🏡</div>
                        <p>Delivered</p>
                      </div>
                    </div>

                    <div className="driverInfoBox">
                      <div className="driverAvatar">👤</div>
                      <div>
                        <h4>Ramesh Kumar (Delivery Agent)</h4>
                        <p>Arriving today by 6:30 PM • 📲 +91 98123 45678</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODAL 4: MEMBER COUPONS ================= */}
          {activeModal === "coupons" && (
            <div className="modalOverlay" onClick={() => setActiveModal(null)}>
              <div className="modalContent glassModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                  <h2>🎟️ Exclusive VIP Vouchers</h2>
                  <button className="closeModalBtn" onClick={() => setActiveModal(null)}>✕</button>
                </div>
                <div className="modalBody">
                  {copiedCoupon && (
                    <div className="copiedAlert">
                      ✅ Coupon Code <strong>{copiedCoupon}</strong> Copied to Clipboard!
                    </div>
                  )}

                  <div className="couponsList">
                    <div className="couponItem">
                      <div className="couponLeft">
                        <span className="couponDisc">₹500 OFF</span>
                        <p>Min Order ₹1,999 on Fashion & Shoes</p>
                      </div>
                      <button className="copyBtn" onClick={() => copyCoupon("MEGA500")}>
                        {copiedCoupon === "MEGA500" ? "COPIED ✓" : "COPY CODE: MEGA500"}
                      </button>
                    </div>

                    <div className="couponItem">
                      <div className="couponLeft">
                        <span className="couponDisc">15% EXTRA</span>
                        <p>Applicable on Grocery & Super Kirana</p>
                      </div>
                      <button className="copyBtn" onClick={() => copyCoupon("KIRANA15")}>
                        {copiedCoupon === "KIRANA15" ? "COPIED ✓" : "COPY CODE: KIRANA15"}
                      </button>
                    </div>

                    <div className="couponItem">
                      <div className="couponLeft">
                        <span className="couponDisc">FREE SHIPPING</span>
                        <p>Zero delivery fee on all electronics</p>
                      </div>
                      <button className="copyBtn" onClick={() => copyCoupon("FREESHIP")}>
                        {copiedCoupon === "FREESHIP" ? "COPIED ✓" : "COPY CODE: FREESHIP"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
