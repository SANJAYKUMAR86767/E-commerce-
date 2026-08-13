import React, { useState } from "react";
import "./FloatingAIWidget.css";

const aiPrompts = [
  { id: "p1", title: "📱 Best 5G Phones under ₹20k", desc: "Samsung A36 5G, vivo T5 Pro & Infinix Note Edge", section: "mobile-section" },
  { id: "p2", title: "💄 Top MAC & Lakmé Lipsticks", desc: "MAC Ruby Woo & Lakmé Matte Liquid Lip", section: "beauty-section" },
  { id: "p3", title: "👟 Bestseller Sneakers & Jordans", desc: "Nike Air Jordan 1 OG & Adidas Ultraboost", section: "footwear-section" },
  { id: "p4", title: "💻 Intel Core Ultra Gaming Laptops", desc: "ASUS ROG Strix i9 & MacBook Pro M3", section: "gadgets-section" }
];

const FloatingAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState("Hi! I'm your Flipkart AI Shopping Assistant 🤖. What are you looking to buy today?");
  const [recommendations, setRecommendations] = useState(null);

  const handlePromptClick = (prompt) => {
    setActiveMessage(`Here are the top AI-recommended products for "${prompt.title}":`);
    if (prompt.id === "p1") {
      setRecommendations([
        { name: "Samsung A36 5G (8GB/128GB)", price: "₹18,999", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&fit=crop" },
        { name: "vivo T5 Pro 5G (Slimmest 9020mAh)", price: "₹19,499", img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b5652?w=300&fit=crop" }
      ]);
    } else if (prompt.id === "p2") {
      setRecommendations([
        { name: "MAC Ruby Woo Iconic Matte", price: "₹1,499", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&fit=crop" },
        { name: "Lakmé 9to5 Weightless Mousse", price: "₹699", img: "https://images.unsplash.com/photo-1599733594230-6b823276b44c?w=300&fit=crop" }
      ]);
    } else {
      setRecommendations([
        { name: "Nike Air Jordan 1 Retro High OG", price: "₹16,995", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300&fit=crop" },
        { name: "Adidas Ultraboost Light", price: "₹11,999", img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=300&fit=crop" }
      ]);
    }

    const el = document.getElementById(prompt.section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="aiWidgetFloatingContainer">
      {/* AI POPUP DIALOG */}
      {isOpen && (
        <div className="aiPopupDialog">
          <div className="aiPopupHeader">
            <div className="aiAvatarBox">🤖</div>
            <div>
              <h4 className="aiPopupTitle">Flipkart AI Smart Shopping Assistant</h4>
              <span className="aiOnlineBadge">● Active & Ready to Assist</span>
            </div>
            <button className="aiCloseBtn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="aiPopupBody">
            <div className="aiMessageBubble">{activeMessage}</div>

            {recommendations && (
              <div className="aiRecGrid">
                {recommendations.map((item, idx) => (
                  <div key={idx} className="aiRecCard">
                    <img src={item.img} alt={item.name} className="aiRecImg" />
                    <span className="aiRecName">{item.name}</span>
                    <span className="aiRecPrice">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="aiPromptChipsRow">
              <span className="aiChipsTitle">⚡ Instant AI Search Prompts:</span>
              {aiPrompts.map(p => (
                <button key={p.id} className="aiPromptBtn" onClick={() => handlePromptClick(p)}>
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button className="aiFloatingTriggerBtn" onClick={() => setIsOpen(!isOpen)}>
        <span className="aiRobotIcon">🤖</span>
        <span className="aiTriggerText">AI Shopping Assistant</span>
        <span className="aiSparkleBadge">PRO</span>
      </button>
    </div>
  );
};

export default FloatingAIWidget;
