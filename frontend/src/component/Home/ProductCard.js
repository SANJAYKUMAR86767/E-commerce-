import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../actions/wishlistAction";
import { useAlert } from "react-alert";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);

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

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const originalPrice = Math.round(product.price * 1.25);
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

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
            src={product.images && product.images[0] && product.images[0].url ? product.images[0].url : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80"}
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
            <p className="productCardTitle">{product.name}</p>
            <span className="fassuredBadge" title="Flipkart Assured Quality">
              <span className="fassuredText">F-Assured</span>
            </span>
          </div>

          <div className="productCardRatingRow">
            <Rating {...options} />
            <span className="productCardSpan">
              ({product.numOfReviews})
            </span>
          </div>

          <div className="productCardPriceRow">
            <span className="currentPrice">{`₹${product.price}`}</span>
            <span className="originalPrice">{`₹${originalPrice}`}</span>
          </div>

          <span className="freeDeliveryText">Free Delivery</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
