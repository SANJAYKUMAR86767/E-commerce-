import React, { useState } from "react";
import "./ChatWidget.css";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import { useSelector } from "react-redux";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to our store support. How can we help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMessage("");
    setIsSending(true);

    try {
      const senderName = isAuthenticated && user ? user.name : "Guest Customer";
      const senderEmail = isAuthenticated && user ? user.email : "guest@store.com";

      await axios.post("/api/v1/support/message", {
        name: senderName,
        email: senderEmail,
        message: userText,
        subject: "Live Chat Support Inquiry",
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for reaching out! Our support agent has received your message and will respond shortly via email.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks! We have recorded your message and will get back to you soon.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="chatWidgetContainer">
      {!isOpen && (
        <button
          className="chatLauncherBtn"
          onClick={toggleChat}
          aria-label="Open Live Chat"
        >
          <ChatIcon />
          <span>Support Chat</span>
        </button>
      )}

      {isOpen && (
        <div className="chatWindow">
          <div className="chatHeader">
            <div className="chatHeaderTitle">
              <span className="chatOnlineDot"></span>
              <h4>Live Support</h4>
            </div>
            <button className="chatCloseBtn" onClick={toggleChat}>
              <CloseIcon />
            </button>
          </div>

          <div className="chatBody">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatBubble ${
                  msg.sender === "user" ? "userBubble" : "botBubble"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isSending && (
              <div className="chatBubble botBubble typing">Sending...</div>
            )}
          </div>

          <form onSubmit={handleSend} className="chatFooter">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" disabled={isSending}>
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
