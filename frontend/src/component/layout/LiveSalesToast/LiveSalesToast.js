import React, { useState, useEffect } from "react";
import "./LiveSalesToast.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const RECENT_PURCHASES = [
  { name: "Rahul S.", city: "Bengaluru", item: "Apple iPhone 16 Pro Max", time: "4s ago", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100" },
  { name: "Pooja K.", city: "Mumbai", item: "Kanchipuram Silk Saree", time: "18s ago", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100" },
  { name: "Vikram M.", city: "Delhi NCR", item: "Sony WH-1000XM5 ANC", time: "32s ago", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" },
  { name: "Ananya R.", city: "Hyderabad", item: "Dyson Airwrap Styler", time: "45s ago", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100" },
  { name: "Amit P.", city: "Ahmedabad", item: "Samsung 55\" 4K Neo QLED", time: "1m ago", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100" },
  { name: "Sneha G.", city: "Kolkata", item: "Casio Vintage Gold Watch", time: "1m ago", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100" }
];

const LiveSalesToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay then trigger first toast
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 600);
    }, 8500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, []);

  const current = RECENT_PURCHASES[currentIndex];

  if (!current) return null;

  return (
    <div className={`liveSalesToastContainer ${isVisible ? "showToast" : "hideToast"}`}>
      <div className="liveToastInner">
        <img src={current.img} alt={current.item} className="liveToastThumb" />
        <div className="liveToastContent">
          <div className="liveToastHeader">
            <span className="liveToastUser">{current.name}</span>
            <span className="liveToastCity">({current.city})</span>
            <CheckCircleIcon className="liveToastVerified" />
          </div>
          <div className="liveToastItem">Purchased <strong>{current.item}</strong></div>
          <div className="liveToastTime">⚡ {current.time} • Flipkart Assured</div>
        </div>
        <button className="liveToastDismiss" onClick={() => setIsVisible(false)}>✕</button>
      </div>
    </div>
  );
};

export default LiveSalesToast;
