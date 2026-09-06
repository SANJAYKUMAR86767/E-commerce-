import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../actions/wishlistAction";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [isAdded, setIsAdded] = useState(false);

  const isWishlisted = wishlistItems && wishlistItems.some(
    (item) => (item._id || item) === product._id
  );

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      alert.error("Please login to add items to wishlist");
      return;
    }

    if (isWishlisted) {
      dispatch(removeFromWishlist(product._id));
      alert.success("Removed from Wishlist");
    } else {
      dispatch(addToWishlist(product._id));
      alert.success("Added to Wishlist!");
    }
  };

  const handleAddToCartDirect = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addItemsToCart(product._id, 1, product));
    setIsAdded(true);
    alert.success("Added to Cart!");

    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const options = {
    value: product.ratings || 4.2,
    readOnly: true,
    precision: 0.5,
  };

  const originalPrice = Math.round((product.price || 999) * 1.25);
  const discountPercent = Math.round(((originalPrice - (product.price || 999)) / originalPrice) * 100);

  return (
    <div className="productCardWrapper">
      <Link className="productCard" to={`/product/${product._id}`}>
        <span className="discountTagBadge">{discountPercent}% OFF</span>
        <button
          className={`wishlistHeartBtn ${isWishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          {isWishlisted ? (
            <FavoriteIcon style={{ color: "#ff3e6c" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "var(--text-secondary, #777)" }} />
          )}
        </button>
        <div className="productCardImgContainer">
          <img
            src={product.images && product.images[0] && product.images[0].url ? product.images[0].url : (product.image || product.img || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80")}
            alt=""
            aria-hidden="true"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80";
            }}
          />
        </div>

        <div className="productCardContent">
          <div className="productCardHeaderRow">
            <p className="productCardTitle">{product.name || product.title}</p>
            <span className="fassuredBadge" title="Flipkart Assured Quality">
              <span className="fassuredText">F-Assured</span>
            </span>
          </div>

          <div className="productCardRatingRow">
            <Rating {...options} />
            <span className="productCardSpan">
              ({product.numOfReviews || 120})
            </span>
          </div>

          <div className="productCardPriceRow">
            <span className="currentPrice">{`₹${product.price}`}</span>
            <span className="originalPrice">{`₹${originalPrice}`}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
            <span className="freeDeliveryText">Free Delivery</span>
            
            {/* Real-time Quick Add To Cart Button */}
            <button
              className={`productCardAddBtn ${isAdded ? "added" : ""}`}
              onClick={handleAddToCartDirect}
              title="Add to Flipkart Cart"
              style={{
                background: isAdded ? "#22c55e" : "linear-gradient(135deg, #2874f0 0%, #1d4ed8 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 12px",
                fontSize: "0.78rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                boxShadow: isAdded ? "0 2px 8px rgba(34, 197, 94, 0.4)" : "0 2px 8px rgba(40, 116, 240, 0.3)",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {isAdded ? (
                <>
                  <CheckIcon style={{ fontSize: 14 }} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCartIcon style={{ fontSize: 14 }} />
                  <span>+ Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
