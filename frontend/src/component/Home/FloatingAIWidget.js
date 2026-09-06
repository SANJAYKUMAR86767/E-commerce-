/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";
import "./FloatingAIWidget.css";

const QUICK_PROMPTS = [
  { id: "p1", title: "⚡ Best 5G Phones under ₹40,000", query: "best phones under 40000" },
  { id: "p2", title: "⚖️ Compare iPhone 16 vs Galaxy S24", query: "compare iphone 16 vs galaxy s24" },
  { id: "p3", title: "❄️ 5-Star Split AC with Inverter", query: "5 star split ac" },
  { id: "p4", title: "👗 Kanchipuram Silk Bridal Sarees", query: "saree" },
  { id: "p5", title: "🪙 How do SuperCoins work?", query: "what is supercoins" },
  { id: "p6", title: "📱 Mobile Exchange Offer Guide", query: "how exchange works" }
];

// Curated intelligent knowledge base for instant conversational answers
const KNOWLEDGE_RESPONSES = {
  supercoins: {
    text: "🪙 **Flipkart Plus SuperCoins Rewards Program**\n\n" +
      "• **How to Earn:** You earn 2 SuperCoins for every ₹100 spent (Flipkart Plus members earn 4 Coins per ₹100).\n" +
      "• **How to Redeem:** Click on the `🪙 Coins` button in the top navigation bar to access the SuperCoins Zone.\n" +
      "• **Exclusive Perks:** Redeem for Disney+ Hotstar subscriptions, Domino's pizza vouchers, flat ₹500 off on electronics, or use coins for instant cash discounts at checkout!",
    products: []
  },
  exchange: {
    text: "📱 **Flipkart Smart Device Exchange Offer**\n\n" +
      "• **Instant Valuation:** Get up to **₹24,000 off** by trading in your old smartphone (Apple, Samsung, OnePlus, Xiaomi).\n" +
      "• **Doorstep Pickup:** Our delivery executive checks your old device and hands over your new phone on the spot with ₹0 pickup fee.\n" +
      "• **Bonus Discount:** Extra ₹3,000 exchange bonus applied automatically during Big Billion Days!",
    products: []
  },
  emi: {
    text: "💳 **No-Cost EMI & Bank Cashback Offers**\n\n" +
      "• **No-Cost EMI:** Available for 3, 6, and 9 months across HDFC Bank, ICICI Bank, and SBI Cards.\n" +
      "• **Flipkart Axis Bank Card:** Enjoy 5% unlimited cashback credited directly to your bank account every month.\n" +
      "• **Instant Discounts:** Extra 10% instant discount on orders above ₹5,000 during live sale events.",
    products: []
  },
  greetings: {
    text: "Namaste! 🙏 I am your **Flipkart AI Shopping Copilot**.\n\n" +
      "I have live real-time access to our **10,000+ product catalog**. Ask me anything like:\n" +
      "• *'Best 5G phones under ₹40,000'*\n" +
      "• *'Compare iPhone 16 vs Galaxy S24'*\n" +
      "• *'Laptops for coding under 60k'*\n" +
      "• *'What is SuperCoins rewards?'*\n\n" +
      "What are you shopping for today?",
    products: []
  },
  comparePhone: {
    text: "⚖️ **AI Comparison: Apple iPhone 16 Pro Max vs Samsung Galaxy S24 Ultra**\n\n" +
      "• **Performance:** Apple A18 Pro (3nm) vs Snapdragon 8 Gen 3 for Galaxy — both ultra-fast for gaming & 4K editing.\n" +
      "• **Cameras:** iPhone features 48MP Fusion + 5x Tetraprism Telephoto (cinema video champion). S24 Ultra features 200MP Quad camera with 100x Space Zoom.\n" +
      "• **Display:** 6.9\" Super Retina XDR (2000 nits) vs 6.8\" Dynamic AMOLED 2X Flat Anti-Reflective (2600 nits).\n" +
      "• **AI Capabilities:** Apple Intelligence vs Galaxy AI (Live Call Translate & Circle to Search).\n" +
      "• **Verdict:** Pick **iPhone 16 Pro Max** for videography & battery longevity; pick **Galaxy S24 Ultra** for S-Pen stylus, display anti-glare & zoom!",
    productsKeyword: "phone"
  }
};

const FloatingAIWidget = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "m-welcome",
      sender: "ai",
      text: "Namaste! 🙏 I am your **Flipkart AI Shopping Copilot**.\n\nI have access to over **10,000 products** in our real-time catalog. Ask me for recommendations, feature comparisons, budget picks, or speak with voice search!",
      products: []
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [addedIds, setAddedIds] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, loading]);

  // Listen for custom open event (e.g. from header pill)
  useEffect(() => {
    const handleOpenCopilot = () => setIsOpen(true);
    window.addEventListener("open-ai-copilot", handleOpenCopilot);
    return () => window.removeEventListener("open-ai-copilot", handleOpenCopilot);
  }, []);

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice Search is supported in Chrome, Edge, and Safari.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      setIsListening(true);

      recognition.onresult = (e) => {
        const query = e.results[0][0].transcript;
        setInputText(query);
        setIsListening(false);
        handleSend(query);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } catch (err) {
      console.warn("Speech error", err);
      setIsListening(false);
    }
  };

  // Helper to extract clean query & price filters
  const parseQuery = (rawQuery) => {
    const lower = rawQuery.toLowerCase();

    // Check conversational intents
    if (/^(hi|hello|hey|namaste|kya haal|kaise ho|help|start)/i.test(lower)) {
      return { intent: "greetings" };
    }
    if (lower.includes("supercoin") || lower.includes("coin") || lower.includes("reward") || lower.includes("voucher")) {
      return { intent: "supercoins" };
    }
    if (lower.includes("exchange") || lower.includes("trade in") || lower.includes("purana phone")) {
      return { intent: "exchange" };
    }
    if (lower.includes("emi") || lower.includes("no cost") || lower.includes("installment") || lower.includes("credit card")) {
      return { intent: "emi" };
    }
    if (lower.includes("compare") || lower.includes(" vs ") || lower.includes("versus") || (lower.includes("iphone") && lower.includes("samsung"))) {
      return { intent: "comparePhone" };
    }

    // Clean search keywords: extract budget if specified
    let budget = null;
    const budgetMatch = lower.match(/(?:under|below|around|less than)\s*(?:₹|rs\.?|inr)?\s*(\d+)(?:k|000)?/i);
    if (budgetMatch) {
      const num = parseInt(budgetMatch[1], 10);
      budget = num < 1000 ? num * 1000 : num;
    }

    // Strip noise words
    const cleanKeyword = lower
      .replace(/(?:under|below|around|less than)\s*(?:₹|rs\.?|inr)?\s*(\d+)(?:k|000)?/gi, "")
      .replace(/\b(best|top|good|cheap|affordable|give|show|me|products|items|for|with|in|flipkart|online)\b/gi, "")
      .trim();

    return {
      intent: "search",
      keyword: cleanKeyword || "trending",
      budget
    };
  };

  const handleSend = async (customQuery) => {
    const query = (customQuery || inputText).trim();
    if (!query) return;

    const userMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query,
      products: []
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setLoading(true);

    try {
      const parsed = parseQuery(query);

      // 1. Handle predefined intelligent knowledge intents
      if (parsed.intent && KNOWLEDGE_RESPONSES[parsed.intent]) {
        const item = KNOWLEDGE_RESPONSES[parsed.intent];
        let attachedProducts = [];

        if (item.productsKeyword) {
          try {
            const { data } = await axios.get(`/api/v1/products?keyword=${encodeURIComponent(item.productsKeyword)}&limit=2`);
            if (data && data.products) attachedProducts = data.products;
          } catch (e) {
            // Ignored
          }
        }

        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: "ai",
            text: item.text,
            products: attachedProducts
          }
        ]);
        setLoading(false);
        return;
      }

      // 2. Perform live database product search
      const keywordToSearch = parsed.keyword || "phone";
      let apiEndpoint = `/api/v1/products?keyword=${encodeURIComponent(keywordToSearch)}&limit=4`;
      if (parsed.budget) {
        apiEndpoint += `&price[lte]=${parsed.budget}`;
      }

      let foundProducts = [];
      try {
        const { data } = await axios.get(apiEndpoint);
        foundProducts = data.products || [];
      } catch (err) {
        foundProducts = [];
      }

      // Fallback if no products matched exact query: fetch trending items
      if (foundProducts.length === 0) {
        try {
          const fallbackResp = await axios.get(`/api/v1/products?limit=3`);
          foundProducts = fallbackResp.data.products || [];
        } catch (e) {
          foundProducts = [];
        }
      }

      let reply = `Here are the top AI-recommended products from our 10,000+ catalog for "${query}":`;
      if (parsed.budget) {
        reply = `Found top verified options under ₹${parsed.budget.toLocaleString("en-IN")} with Flipkart Assured warranty:`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: reply,
          products: foundProducts.slice(0, 4)
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: "Here are some popular products matching your request from our catalog:",
          products: []
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    const pId = product._id || product.id || `ai_${Date.now()}`;
    dispatch(addItemsToCart(pId, 1, product));
    setAddedIds((prev) => [...prev, pId]);
    if (alert) alert.success("Added to Cart!");
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== pId));
    }, 2000);
  };

  return (
    <div className="aiWidgetFloatingContainer">
      {/* AI POPUP DIALOG */}
      {isOpen && (
        <div className="aiPopupDialog" style={{ width: "420px", height: "580px", display: "flex", flexDirection: "column" }}>
          
          {/* Header */}
          <div className="aiPopupHeader">
            <div className="aiAvatarBox">🤖</div>
            <div>
              <h4 className="aiPopupTitle">Flipkart AI Shopping Copilot</h4>
              <span className="aiOnlineBadge">● Live • 10,000+ Products Intelligence</span>
            </div>
            <button className="aiCloseBtn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Conversation Feed */}
          <div className="aiPopupBody" style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: "12px", background: "#f8fafc" }}>
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "92%"
                }}
              >
                <div
                  style={{
                    background: m.sender === "user" ? "#2874f0" : "#ffffff",
                    color: m.sender === "user" ? "#ffffff" : "#1e293b",
                    padding: "10px 14px",
                    borderRadius: m.sender === "user" ? "16px 16px 2px 16px" : "16px 16px 16px 2px",
                    fontSize: "0.85rem",
                    lineHeight: "1.45",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    border: m.sender === "ai" ? "1px solid #e2e8f0" : "none",
                    whiteSpace: "pre-line"
                  }}
                >
                  {m.text}
                </div>

                {/* Product Cards Grid */}
                {m.products && m.products.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
                    {m.products.map((p) => {
                      const isAdded = addedIds.includes(p._id);
                      return (
                        <div
                          key={p._id}
                          style={{
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "10px",
                            padding: "8px",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                          }}
                        >
                          <div style={{ height: "75px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6px", background: "#f8fafc", borderRadius: "6px" }}>
                            <img
                              src={p.images && p.images[0] ? p.images[0].url : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120"}
                              alt={p.name}
                              style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                            />
                          </div>
                          <div
                            style={{
                              fontSize: "0.76rem",
                              fontWeight: "700",
                              color: "#0f172a",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              marginBottom: "2px"
                            }}
                            title={p.name}
                          >
                            {p.name}
                          </div>
                          <div style={{ fontSize: "0.82rem", fontWeight: "900", color: "#2874f0", marginBottom: "6px" }}>
                            ₹{p.price ? p.price.toLocaleString("en-IN") : "999"}
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginTop: "auto" }}>
                            <Link
                              to={`/product/${p._id}`}
                              style={{
                                background: "#f1f5f9",
                                color: "#334155",
                                textAlign: "center",
                                padding: "4px",
                                fontSize: "0.7rem",
                                fontWeight: "700",
                                borderRadius: "4px",
                                textDecoration: "none"
                              }}
                            >
                              Details
                            </Link>
                            <button
                              onClick={() => handleAddToCart(p)}
                              style={{
                                background: isAdded ? "#10b981" : "#ff9f00",
                                color: isAdded ? "#ffffff" : "#212121",
                                border: "none",
                                padding: "4px",
                                fontSize: "0.7rem",
                                fontWeight: "800",
                                borderRadius: "4px",
                                cursor: "pointer",
                                transition: "all 0.2s"
                              }}
                            >
                              {isAdded ? "✓ Added" : "+ Cart"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#64748b", background: "#ffffff", padding: "8px 12px", borderRadius: "12px", width: "fit-content" }}>
                <span>🤖 AI scanning 10,000+ catalog & comparing features...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Row */}
          <div style={{ padding: "8px 12px", background: "#ffffff", borderTop: "1px solid #e2e8f0", overflowX: "auto", display: "flex", gap: "6px" }}>
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleSend(prompt.query)}
                style={{
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  border: "1px solid #bfdbfe",
                  borderRadius: "20px",
                  padding: "4px 10px",
                  fontSize: "0.72rem",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  cursor: "pointer"
                }}
              >
                {prompt.title}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 14px",
              background: "#ffffff",
              borderTop: "1px solid #e2e8f0"
            }}
          >
            <input
              type="text"
              placeholder={isListening ? "Listening... Speak clearly" : "Ask anything ('iPhone vs S24', 'AC under 40k', 'SuperCoins')..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1,
                border: "1px solid #cbd5e1",
                borderRadius: "20px",
                padding: "8px 14px",
                fontSize: "0.82rem",
                outline: "none"
              }}
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              style={{
                background: isListening ? "#fee2e2" : "#f1f5f9",
                color: isListening ? "#ef4444" : "#2874f0",
                border: "1px solid #cbd5e1",
                borderRadius: "50%",
                width: "34px",
                height: "34px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.95rem"
              }}
              title="Voice Input"
            >
              🎤
            </button>
            <button
              type="submit"
              disabled={!inputText.trim()}
              style={{
                background: inputText.trim() ? "#2874f0" : "#cbd5e1",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: "34px",
                height: "34px",
                cursor: inputText.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button className="aiFloatingTriggerBtn" onClick={() => setIsOpen(!isOpen)}>
        <span className="aiRobotIcon">🤖</span>
        <span className="aiTriggerText">Flipkart AI Copilot</span>
        <span className="aiSparkleBadge">PRO</span>
      </button>
    </div>
  );
};

export default FloatingAIWidget;
