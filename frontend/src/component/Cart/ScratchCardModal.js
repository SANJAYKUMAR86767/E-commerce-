import React, { useRef, useEffect, useState } from "react";
import "./ScratchCardModal.css";
import CloseIcon from "@material-ui/icons/Close";
import StarsIcon from "@material-ui/icons/Stars";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ScratchCardModal = ({ isOpen, onClose, onWon }) => {
  const canvasRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [copied, setCopied] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 180;

    // Draw scratchable silver gradient foil
    const grad = ctx.createLinearGradient(0, 0, 300, 180);
    grad.addColorStop(0, "#cbd5e1");
    grad.addColorStop(0.3, "#f1f5f9");
    grad.addColorStop(0.5, "#94a3b8");
    grad.addColorStop(0.7, "#f8fafc");
    grad.addColorStop(1, "#cbd5e1");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle text on foil
    ctx.fillStyle = "#475569";
    ctx.font = "bold 15px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch Here to Reveal Prize! ✨", 150, 95);
  }, [isOpen]);

  const scratch = (e) => {
    if (isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2, false);
    ctx.fill();

    checkScratchedPercentage(ctx, canvas.width, canvas.height);
  };

  const checkScratchedPercentage = (ctx, width, height) => {
    try {
      const imgData = ctx.getImageData(0, 0, width, height);
      let transparentPixels = 0;
      const totalPixels = imgData.data.length / 4;

      for (let i = 3; i < imgData.data.length; i += 16) {
        if (imgData.data[i] === 0) {
          transparentPixels += 4;
        }
      }

      if (transparentPixels / totalPixels > 0.35 && !isScratched) {
        setIsScratched(true);
        // Clear remaining
        ctx.clearRect(0, 0, width, height);

        // Add 50 supercoins
        const current = parseInt(localStorage.getItem("fk_supercoins") || "140", 10);
        localStorage.setItem("fk_supercoins", (current + 50).toString());

        if (onWon) onWon(50);
      }
    } catch (e) {
      // Ignored
    }
  };

  if (!isOpen) return null;

  return (
    <div className="scratchOverlay" onClick={onClose}>
      <div className="scratchCardDialog" onClick={(e) => e.stopPropagation()}>
        <button className="scratchCloseBtn" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="scratchDialogHeader">
          <StarsIcon style={{ color: "#ffd700", fontSize: 28 }} />
          <h3>Lucky Post-Order Reward</h3>
          <p>Order Placed Successfully! Scratch below to claim your reward:</p>
        </div>

        <div className="scratchAreaWrapper">
          {/* UNDERNEATH PRIZE CARD */}
          <div className="scratchUnderlyingCard">
            <div className="scratchPrizeHeader">🪙 +50 SuperCoins Won!</div>
            <div className="scratchCouponCode">LUCKYWIN20</div>
            <p className="scratchCouponDesc">Flat 20% OFF on your next fashion or tech order</p>
          </div>

          {/* SCRATCH FOIL CANVAS */}
          {!isScratched && (
            <canvas
              ref={canvasRef}
              className="scratchCanvas"
              onMouseDown={() => { isDrawing.current = true; }}
              onMouseUp={() => { isDrawing.current = false; }}
              onMouseMove={(e) => { if (isDrawing.current) scratch(e); }}
              onTouchMove={(e) => scratch(e)}
            />
          )}
        </div>

        {isScratched && (
          <div className="scratchSuccessActions">
            <p className="congratsText">🎉 +50 SuperCoins added to your Plus Wallet!</p>
            <button
              className="copyCouponBtn"
              onClick={() => {
                navigator.clipboard?.writeText("LUCKYWIN20");
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
            >
              {copied ? <><CheckCircleIcon style={{ fontSize: 16 }} /> Copied to Clipboard!</> : "Copy Coupon Code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchCardModal;
