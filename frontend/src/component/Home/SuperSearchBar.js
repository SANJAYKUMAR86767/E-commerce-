import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SuperSearchBar.css";

const trendingSearchTags = [
  { label: "🔥 iPhone 16 Pro", query: "iPhone" },
  { label: "👑 Wedding Sherwani", query: "Sherwani" },
  { label: "💄 MAC Ruby Woo", query: "MAC" },
  { label: "👟 Jordan Sneakers", query: "Nike" },
  { label: "⌚ Smartwatch 5G", query: "Smartwatch" },
  { label: "🧥 Tuxedo Suits", query: "Suit" }
];

const SuperSearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isListening, setIsListening] = useState(false);
  const history = useHistory();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword.trim()}`);
    } else {
      history.push("/products");
    }
  };

  const handleTagClick = (tagQuery) => {
    setKeyword(tagQuery);
    history.push(`/products/${tagQuery}`);
  };

  const triggerVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setKeyword("iPhone 16 Pro");
    }, 1500);
  };

  return (
    <div className="superSearchWrapper">
      <form className="superSearchForm" onSubmit={handleSearchSubmit}>

        {/* Category Dropdown */}
        <select
          className="superCatSelect"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="mobiles">📱 Mobiles & 5G</option>
          <option value="groomwear">👑 Groom & Wedding</option>
          <option value="beauty">💄 Luxury Beauty</option>
          <option value="footwear">👟 Footwear & Jordans</option>
          <option value="fashion">👗 Fashion & Apparel</option>
        </select>

        {/* Input Field */}
        <div className="superInputContainer">
          <span className="superSearchLensIcon">🔍</span>
          <input
            type="text"
            className="superSearchInput"
            placeholder="Search 100,000+ products, brands, smartphones, groomwear..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && (
            <button
              type="button"
              className="superClearBtn"
              onClick={() => setKeyword("")}
            >
              ✕
            </button>
          )}
          <button
            type="button"
            className={`superVoiceBtn ${isListening ? "listening" : ""}`}
            onClick={triggerVoiceSearch}
            title="Voice Search"
          >
            {isListening ? "🎙️ Listening..." : "🎙️"}
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="superSubmitBtn">
          <span>Search</span>
          <span className="superSubmitArrow">➔</span>
        </button>
      </form>

      {/* Trending Search Pills */}
      <div className="superTrendingPillsRow">
        <span className="superTrendingLabel">⚡ Trending Searches:</span>
        <div className="superTagsScroll">
          {trendingSearchTags.map((tag, idx) => (
            <button
              key={idx}
              className="superTagPill"
              onClick={() => handleTagClick(tag.query)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperSearchBar;
