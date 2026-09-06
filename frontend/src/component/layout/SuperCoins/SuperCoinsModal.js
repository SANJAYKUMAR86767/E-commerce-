import React, { useState } from "react";
import "./SuperCoinsModal.css";
import StarsIcon from "@material-ui/icons/Stars";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const INITIAL_VOUCHERS = [
  {
    id: "v1",
    title: "Flat ₹500 Off Electronics & Laptops",
    coins: 100,
    tag: "MOST POPULAR",
    code: "FKPLUS-ELEC500",
    claimed: false,
    expiry: "Valid till 31 Oct 2026"
  },
  {
    id: "v2",
    title: "1-Year Disney+ Hotstar Super Subscription",
    coins: 120,
    tag: "ENTERTAINMENT",
    code: "HOTSTAR-VIP365",
    claimed: false,
    expiry: "Valid till 15 Nov 2026"
  },
  {
    id: "v3",
    title: "Flat ₹250 Off on Domino's Pizza Feast",
    coins: 50,
    tag: "FOOD & DINING",
    code: "DOMINOS-PLUS250",
    claimed: false,
    expiry: "Valid till 30 Dec 2026"
  },
  {
    id: "v4",
    title: "3 Months YouTube Premium Free",
    coins: 80,
    tag: "STREAMING",
    code: "YOUTUBE-3M-VIP",
    claimed: false,
    expiry: "Valid till 28 Feb 2027"
  }
];

const SuperCoinsModal = ({ isOpen, onClose }) => {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem("fk_supercoins");
    return saved ? parseInt(saved, 10) : 140;
  });
  const [vouchers, setVouchers] = useState(INITIAL_VOUCHERS);
  const [claimedCode, setClaimedCode] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!isOpen) return null;

  const handleRedeem = (voucher) => {
    if (balance < voucher.coins) {
      alert(`You need ${voucher.coins} SuperCoins for this reward! Current balance: ${balance}`);
      return;
    }

    const newBalance = balance - voucher.coins;
    setBalance(newBalance);
    localStorage.setItem("fk_supercoins", newBalance.toString());

    setVouchers((prev) =>
      prev.map((v) => (v.id === voucher.id ? { ...v, claimed: true } : v))
    );

    setClaimedCode(voucher);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3500);
  };

  return (
    <div className="superCoinsOverlay" onClick={onClose}>
      <div className="superCoinsModalCard" onClick={(e) => e.stopPropagation()}>
        
        {/* CLOSE BUTTON */}
        <button className="superCoinsCloseBtn" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        {/* HEADER HERO */}
        <div className="superCoinsHero">
          <div className="superCoinsBadge">
            <StarsIcon style={{ color: "#ffd700", fontSize: "1.4rem" }} />
            <span>FLIPKART PLUS REWARDS ZONE</span>
          </div>

          <div className="superCoinsBalanceBlock">
            <div className="superCoinsBalanceNum">
              <span className="coinSymbol">🪙</span>
              <span className="coinCount">{balance}</span>
              <span className="coinUnit">SuperCoins</span>
            </div>
            <p className="coinSubtitle">Worth ₹{balance} instant discount at checkout & exclusive perks</p>
          </div>

          {/* PLUS MEMBERSHIP TIER */}
          <div className="superCoinsTierBox">
            <div className="tierTitleRow">
              <span className="tierTitle">✨ PLUS VIP MEMBER</span>
              <span className="tierProgressText">{balance}/200 Coins to Black Tier</span>
            </div>
            <div className="tierProgressBar">
              <div
                className="tierProgressFill"
                style={{ width: `${Math.min(100, Math.round((balance / 200) * 100))}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* PLUS PERKS PILLS */}
        <div className="plusPerksRow">
          <div className="plusPerkPill">
            <FlashOnIcon style={{ color: "#2874f0", fontSize: "1.1rem" }} />
            <span>Free Express Delivery</span>
          </div>
          <div className="plusPerkPill">
            <StarsIcon style={{ color: "#ffd700", fontSize: "1.1rem" }} />
            <span>2X Coins on Every Order</span>
          </div>
          <div className="plusPerkPill">
            <ConfirmationNumberIcon style={{ color: "#10b981", fontSize: "1.1rem" }} />
            <span>Early Access to Big Sales</span>
          </div>
        </div>

        {/* CELEBRATION NOTIFICATION */}
        {showCelebration && claimedCode && (
          <div className="rewardCelebrationBanner">
            <CheckCircleIcon style={{ color: "#10b981" }} />
            <div>
              <strong>Reward Unlocked! Code: {claimedCode.code}</strong>
              <p>Copied! Use this coupon at checkout to save instantly.</p>
            </div>
          </div>
        )}

        {/* VOUCHER STORE */}
        <div className="voucherStoreSection">
          <h3 className="voucherStoreHeading">
            <ConfirmationNumberIcon style={{ color: "#f59e0b", fontSize: "1.2rem" }} />
            <span>Exclusive Partner & Store Vouchers</span>
          </h3>

          <div className="voucherGrid">
            {vouchers.map((v) => (
              <div key={v.id} className={`voucherCard ${v.claimed ? "voucherClaimed" : ""}`}>
                <div className="voucherCardTop">
                  <span className="voucherTag">{v.tag}</span>
                  <span className="voucherCost">🪙 {v.coins} Coins</span>
                </div>
                <h4 className="voucherTitle">{v.title}</h4>
                <p className="voucherExpiry">{v.expiry}</p>

                {v.claimed ? (
                  <div className="claimedCodeBox">
                    <span className="claimedLabel">Code:</span>
                    <strong className="claimedCodeText">{v.code}</strong>
                  </div>
                ) : (
                  <button
                    className="redeemBtn"
                    onClick={() => handleRedeem(v)}
                    disabled={balance < v.coins}
                  >
                    {balance >= v.coins ? "Redeem Reward" : "Need More Coins"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuperCoinsModal;
