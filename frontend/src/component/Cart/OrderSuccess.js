import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import StarsIcon from "@material-ui/icons/Stars";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ScratchCardModal from "./ScratchCardModal";

const OrderSuccess = () => {
  const [showScratch, setShowScratch] = useState(false);
  const [wonCoins, setWonCoins] = useState(0);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon style={{ fontSize: "5rem", color: "#10b981" }} />

      <Typography variant="h4" style={{ fontWeight: 800, marginTop: "1rem", color: "#0f172a" }}>
        Your Order has been Placed successfully!
      </Typography>

      <p style={{ color: "#64748b", maxWidth: "480px", margin: "0.5rem auto 1.5rem", fontSize: "0.95rem" }}>
        Thank you for shopping with us! We have received your order and our fulfillment team is preparing your package for express dispatch.
      </p>

      {/* TRACKING TIMELINE PREVIEW */}
      <div style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "1.2rem 2rem",
        maxWidth: "480px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.8rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <LocalShippingIcon style={{ color: "#2874f0" }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b" }}>Express Delivery</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Expected by Tomorrow, 11:00 AM</div>
          </div>
        </div>
        <span style={{
          background: "#ecfdf5",
          color: "#059669",
          padding: "0.3rem 0.7rem",
          borderRadius: "50px",
          fontSize: "0.75rem",
          fontWeight: 800
        }}>
          CONFIRMED
        </span>
      </div>

      {/* LUCKY SCRATCH CARD BANNER */}
      <div
        onClick={() => setShowScratch(true)}
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          border: "2px dashed #f59e0b",
          borderRadius: "16px",
          padding: "1rem 1.5rem",
          maxWidth: "480px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          marginBottom: "1.8rem",
          transition: "transform 0.2s ease"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <StarsIcon style={{ color: "#b45309", fontSize: "2rem" }} />
          <div style={{ textAlign: "left" }}>
            <strong style={{ color: "#78350f", fontSize: "0.95rem" }}>
              {wonCoins > 0 ? `🎉 You Claimed +${wonCoins} SuperCoins!` : "🎁 You have 1 Unopened Scratch Card!"}
            </strong>
            <p style={{ margin: "0.1rem 0 0", color: "#92400e", fontSize: "0.8rem" }}>
              {wonCoins > 0 ? "Coupon code copied to clipboard" : "Tap here to scratch & reveal your rewards"}
            </p>
          </div>
        </div>
        <button style={{
          background: "#b45309",
          color: "#ffffff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "0.8rem",
          cursor: "pointer"
        }}>
          {wonCoins > 0 ? "View Card" : "Scratch Now"}
        </button>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/orders" style={{
          background: "#2874f0",
          color: "#ffffff",
          textDecoration: "none",
          padding: "0.8rem 1.8rem",
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "0.9rem"
        }}>
          View Orders
        </Link>
        <Link to="/" style={{
          background: "#f1f5f9",
          color: "#334155",
          textDecoration: "none",
          padding: "0.8rem 1.8rem",
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "0.9rem"
        }}>
          Continue Shopping
        </Link>
      </div>

      <ScratchCardModal
        isOpen={showScratch}
        onClose={() => setShowScratch(false)}
        onWon={(coins) => setWonCoins(coins)}
      />
    </div>
  );
};

export default OrderSuccess;
