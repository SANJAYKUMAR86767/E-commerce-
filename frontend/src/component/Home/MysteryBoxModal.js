import React, { useState } from "react";
import "./MysteryBoxModal.css";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

const MysteryBoxModal = ({ isOpen, onClose }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleOpenBox = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
      setIsOpened(true);

      // Add 150 SuperCoins to user wallet
      const current = parseInt(localStorage.getItem("fk_supercoins") || "140", 10);
      localStorage.setItem("fk_supercoins", (current + 150).toString());
    }, 1200);
  };

  return (
    <div className="mysteryOverlay" onClick={onClose}>
      <div className="mysteryCardDialog" onClick={(e) => e.stopPropagation()}>
        <button className="mysteryCloseBtn" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="mysteryBadge">⚡ FLIPKART DAILY MYSTERY REWARD</div>

        {!isOpened ? (
          <div className="mysteryBoxUnopened">
            <div className={`mysteryBoxGraphic ${isOpening ? "shakingBox" : ""}`}>
              🎁
            </div>

            <h3 className="mysteryTitle">Daily Mystery Box Ready!</h3>
            <p className="mysteryDesc">
              Guaranteed Flipkart Plus rewards inside. Tap the mystery box to unwrap your perks:
            </p>

            <button
              className="openMysteryBtn"
              onClick={handleOpenBox}
              disabled={isOpening}
            >
              {isOpening ? "✨ Unwrapping Magic..." : "🎁 Tap to Unwrap Today's Reward"}
            </button>
          </div>
        ) : (
          <div className="mysteryBoxOpened">
            <div className="mysteryCelebrationIcon">🎉</div>
            <h3 className="mysteryWonTitle">Congratulations, Shopper!</h3>
            <p className="mysteryWonSubtitle">You unlocked our highest-tier Mystery Bundle!</p>

            <div className="mysteryPrizesGrid">
              {/* PRIZE 1: SUPERCOINS */}
              <div className="mysteryPrizeItem">
                <span className="prizeEmoji">🪙</span>
                <div>
                  <strong>+150 SuperCoins Credited</strong>
                  <p>Added straight to your Flipkart Plus Wallet</p>
                </div>
              </div>

              {/* PRIZE 2: VOUCHER */}
              <div className="mysteryPrizeItem">
                <ConfirmationNumberIcon style={{ color: "#f59e0b", fontSize: 26 }} />
                <div style={{ flex: 1 }}>
                  <strong>Flat ₹500 OFF On Any Order</strong>
                  <div className="mysteryCodeRow">
                    <span className="mysteryCoupon">MYSTERY500</span>
                    <button
                      className="mysteryCopyBtn"
                      onClick={() => {
                        navigator.clipboard?.writeText("MYSTERY500");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* PRIZE 3: FREE DELIVERY */}
              <div className="mysteryPrizeItem">
                <span className="prizeEmoji">⚡</span>
                <div>
                  <strong>1-Month Free Express Delivery</strong>
                  <p>Valid on 10,000+ Flipkart Assured items</p>
                </div>
              </div>
            </div>

            <button className="mysteryDoneBtn" onClick={onClose}>
              <CheckCircleIcon style={{ fontSize: 18 }} />
              Claim & Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MysteryBoxModal;
