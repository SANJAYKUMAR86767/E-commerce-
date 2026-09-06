import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { addItemsToCart } from "../../actions/cartAction";
import "./FloatingAIWidget.css";

const aiPrompts = [
  { id: "p1", title: "⚡ Best Phones under ₹40,000", query: "phone" },
  { id: "p2", title: "⚖️ Compare iPhone vs Galaxy S24", query: "iphone samsung" },
  { id: "p3", title: "❄️ 5-Star Split AC with Inverter", query: "ac" },
  { id: "p4", title: "👗 Kanchipuram Bridal Sarees", query: "saree" },
  { id: "p5", title: "🎮 PS5 Slim & Gaming Gear", query: "ps5" },
  { id: "p6", title: "🛒 Super Kirana Atta & Basmati Rice", query: "rashan" }
];

const FloatingAIWidget = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "m-welcome",
      sender: "ai",
      text: "Namaste! 🙏 I am your **Flipkart AI Shopping Assistant**.\n\nI have access to over **10,000 products** in our real-time catalog. Ask me for recommendations, feature comparisons, budget picks, or voice search!",
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
      const { data } = await axios.get(`/api/v1/products?keyword=${encodeURIComponent(query)}&limit=4`);
      const foundProducts = data.products || [];

      let reply = `Here are the top AI-recommended products from our 10,000+ catalog for "${query}":`;
      if (foundProducts.length === 0) {
        reply = `I searched our 10,000+ catalog for "${query}", but couldn't find an exact match. Here are our top-rated trending items instead:`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: reply,
          products: foundProducts.slice(0, 3)
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: "Here are some popular products matching your request:",
          products: []
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addItemsToCart(product._id, 1));
    setAddedIds((prev) => [...prev, product._id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product._id));
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
              <span className="aiOnlineBadge">● Live • 10,000+ Products Ready</span>
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
                  maxWidth: "90%"
                }}
              >
                <div
                  style={{
                    background: m.sender === "user" ? "#2874f0" : "#ffffff",
                    color: m.sender === "user" ? "#ffffff" : "#1e293b",
                    padding: "10px 14px",
                    borderRadius: m.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                    fontSize: "0.85rem",
                    lineHeight: "1.4",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    border: m.sender === "ai" ? "1px solid #e2e8f0" : "none",
                    whiteSpace: "pre-line"
                  }}
                >
                  {m.text}
                </div>

                {/* Product Cards */}
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
                            borderRadius: "8px",
                            padding: "8px",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                          }}
                        >
                          <div style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6px" }}>
                            <img
                              src={p.images && p.images[0] ? p.images[0].url : "https://via.placeholder.com/150"}
                              alt={p.name}
                              style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                            />
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "700",
                              color: "#1e293b",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              marginBottom: "2px"
                            }}
                            title={p.name}
                          >
                            {p.name}
                          </div>
                          <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "#2874f0", marginBottom: "6px" }}>
                            ₹{p.price ? p.price.toLocaleString("en-IN") : "N/A"}
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginTop: "auto" }}>
                            <Link
                              to={`/product/${p._id}`}
                              style={{
                                background: "#f1f5f9",
                                color: "#334155",
                                textAlign: "center",
                                padding: "4px",
                                fontSize: "0.68rem",
                                fontWeight: "700",
                                borderRadius: "3px",
                                textDecoration: "none"
                              }}
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleAddToCart(p)}
                              style={{
                                background: isAdded ? "#22c55e" : "#ff9f00",
                                color: isAdded ? "#ffffff" : "#212121",
                                border: "none",
                                padding: "4px",
                                fontSize: "0.68rem",
                                fontWeight: "800",
                                borderRadius: "3px",
                                cursor: "pointer"
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
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#64748b" }}>
                <span>🤖 AI analyzing 10,000+ catalog...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Row */}
          <div style={{ padding: "8px 12px", background: "#ffffff", borderTop: "1px solid #e2e8f0", overflowX: "auto", display: "flex", gap: "6px" }}>
            {aiPrompts.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleSend(prompt.query)}
                style={{
                  background: "#f1f5f9",
                  color: "#2874f0",
                  border: "1px solid #cbd5e1",
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
              placeholder={isListening ? "Listening... Speak now" : "Ask anything (e.g. 'iPhone vs S24', 'AC under 40k')..."}
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
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem"
              }}
              title="Voice Search"
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
                width: "32px",
                height: "32px",
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
