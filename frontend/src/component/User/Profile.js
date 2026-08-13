import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

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

            {/* Quick Stats Grid */}
            <div className="vipStatsGrid">
              <div className="statCard goldCard">
                <div className="statIcon">🪙</div>
                <div className="statDetails">
                  <h3>250</h3>
                  <p>SuperCoins Available</p>
                </div>
                <span className="statBadge">+50 This Month</span>
              </div>

              <div className="statCard blueCard">
                <div className="statIcon">💳</div>
                <div className="statDetails">
                  <h3>₹1,250.00</h3>
                  <p>Wallet & Cashback Balance</p>
                </div>
                <span className="statBadge">Instant UPI</span>
              </div>

              <div className="statCard purpleCard">
                <div className="statIcon">📦</div>
                <div className="statDetails">
                  <h3>Active</h3>
                  <p>Order Tracking & History</p>
                </div>
                <Link to="/orders" className="statLink">View All</Link>
              </div>

              <div className="statCard pinkCard">
                <div className="statIcon">🎟️</div>
                <div className="statDetails">
                  <h3>4 Coupons</h3>
                  <p>Exclusive Member Deals</p>
                </div>
                <span className="statBadge">Expires Soon</span>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
