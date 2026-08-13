import React, { useState, useEffect, useRef } from "react";
import "./DealsSection.css";
import ProductCard from "./ProductCard";
import TimerIcon from "@material-ui/icons/Timer";
import { Link } from "react-router-dom";

const dealImages = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
];

const dealNames = [
  "Apple iPhone 15 Pro Max (256GB, Titanium)",
  "Samsung Galaxy S24 Ultra 5G (12GB RAM, 512GB)",
  "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
  "Apple MacBook Pro M3 Max 16-inch Retina",
  "Dell XPS 15 OLED Touchscreen Laptop",
  "Samsung 65-inch QLED 4K Ultra HD Smart TV",
  "Sony PlayStation 5 Console Digital Edition",
  "Apple Watch Ultra 2 GPS + Cellular 49mm",
  "Canon EOS R6 Mark II Mirrorless Camera",
  "Bose Smart Soundbar 900 Dolby Atmos"
];

const generate100Deals = () => {
  const deals = [];
  for (let i = 0; i < 100; i++) {
    const name = `${dealNames[i % dealNames.length]} Deal #${i + 1}`;
    const basePrice = 2999 + (i * 187) % 240000;
    const ratings = (4.5 + ((i * 3) % 5) / 10).toFixed(1);
    const reviews = 400 + (i * 153) % 25000;
    const img = dealImages[i % dealImages.length];

    deals.push({
      _id: `deal_100_${i + 1}`,
      name,
      price: basePrice,
      ratings: parseFloat(ratings),
      numOfReviews: reviews,
      images: [{ url: img }]
    });
  }
  return deals;
};

const ALL_100_DEALS = generate100Deals();

const DealsSection = ({ products }) => {
  const scrollRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 42, seconds: 35 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // AUTO-ROTATE / AUTO-SCROLL TICKER
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const dealProducts = products && products.length > 0 ? products : ALL_100_DEALS;

  return (
    <div className="dealsSectionWrapper">
      <div className="dealsHeader">
        <div className="dealsTitleBox">
          <h2 className="dealsHeading">🔥 Deals of the Day (100 Mega Deals)</h2>
          <div className="countdownClock">
            <TimerIcon style={{ color: "#2874f0" }} />
            <span>
              {String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s Remaining
            </span>
          </div>
        </div>

        <div className="dealsNavActionBox">
          <div className="dealsNavButtons">
            <button className="dealsNavBtn" onClick={() => handleScroll("left")}>❮</button>
            <button className="dealsNavBtn" onClick={() => handleScroll("right")}>❯</button>
          </div>
          <Link to="/products" className="viewAllDealsBtn">
            VIEW ALL 100 DEALS
          </Link>
        </div>
      </div>

      <div className="dealsCarouselContainer" ref={scrollRef}>
        {dealProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
