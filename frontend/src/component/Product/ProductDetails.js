import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  getRecommendedProducts,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { recommendations } = useSelector(
    (state) => state.recommendations
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [pincode, setPincode] = useState("");
  const [deliveryEstimate, setDeliveryEstimate] = useState(null);
  const [bundleAdded, setBundleAdded] = useState(false);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      alert.error("Please enter a valid 6-digit Pincode");
      return;
    }
    setDeliveryEstimate({
      date: "Tomorrow, by 11:00 AM",
      deliveryFee: "FREE Delivery",
      codAvailable: true,
    });
  };

  const handleAddBundleToCart = () => {
    dispatch(addItemsToCart(match.params.id, 1));
    if (recommendations && recommendations[0]) {
      dispatch(addItemsToCart(recommendations[0]._id, 1));
    }
    setBundleAdded(true);
    alert.success("Bundle items added to cart!");
  };

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
    dispatch(getRecommendedProducts(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              {/* Flipkart Bank Offers Section */}
              <div className="bankOffersBox">
                <h4 className="bankOffersTitle">🏷️ Available Bank Offers</h4>
                <ul className="bankOffersList">
                  <li>
                    <b>Bank Offer:</b> 10% Instant Discount on SBI Credit Cards up to ₹1,500
                  </li>
                  <li>
                    <b>Bank Offer:</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                  </li>
                  <li>
                    <b>Special Price:</b> Get extra ₹1,000 off (price inclusive of cashback)
                  </li>
                  <li>
                    <b>Partner Offer:</b> Sign up for Flipkart Pay Later & get ₹500 Gift Card
                  </li>
                </ul>
              </div>

              {/* Flipkart Pincode Delivery Checker */}
              <div className="pincodeDeliveryBox">
                <h4>📍 Delivery & Services Availability</h4>
                <form onSubmit={handleCheckPincode} className="pincodeForm">
                  <input
                    type="text"
                    placeholder="Enter Pincode (e.g. 110001)"
                    maxLength="6"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <button type="submit">Check</button>
                </form>
                {deliveryEstimate && (
                  <div className="deliveryResultBox">
                    <p>🚚 Delivery by <b>{deliveryEstimate.date}</b> | <span className="greenColor">{deliveryEstimate.deliveryFee}</span></p>
                    <p>💵 Cash on Delivery {deliveryEstimate.codAvailable ? "Available" : "Not Available"}</p>
                  </div>
                )}
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          {/* Frequently Bought Together Bundle */}
          {recommendations && recommendations[0] && (
            <div className="bundleContainer">
              <h3>📦 Frequently Bought Together</h3>
              <div className="bundleCard">
                <div className="bundleItemsRow">
                  <div className="bundleItem">
                    <img src={product.images && product.images[0] ? product.images[0].url : ""} alt={product.name} />
                    <p>{product.name}</p>
                    <span>₹{product.price}</span>
                  </div>
                  <span className="bundlePlus">+</span>
                  <div className="bundleItem">
                    <img src={recommendations[0].images && recommendations[0].images[0] ? recommendations[0].images[0].url : ""} alt={recommendations[0].name} />
                    <p>{recommendations[0].name}</p>
                    <span>₹{recommendations[0].price}</span>
                  </div>
                </div>
                <div className="bundleAction">
                  <p>Combo Total: <b>₹{product.price + recommendations[0].price}</b> <span className="bundleSaveTag">(Save 10% Bundle Discount)</span></p>
                  <button onClick={handleAddBundleToCart} disabled={bundleAdded}>
                    {bundleAdded ? "Bundle Added!" : "Add Both To Cart"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Ratings & Reviews Breakdown Bars */}
          <div className="ratingsBreakdownSection">
            <h3 className="reviewsHeading">RATINGS & REVIEWS BREAKDOWN</h3>
            <div className="ratingsOverviewCard">
              <div className="overallScoreBox">
                <h2>{product.ratings ? product.ratings.toFixed(1) : "0.0"} ★</h2>
                <p>{product.numOfReviews} Ratings & Reviews</p>
              </div>
              <div className="ratingsBars">
                <div className="ratingBarRow">
                  <span>5 ★</span>
                  <div className="barTrack"><div className="barFill" style={{ width: "70%", background: "#22c55e" }}></div></div>
                  <span>70%</span>
                </div>
                <div className="ratingBarRow">
                  <span>4 ★</span>
                  <div className="barTrack"><div className="barFill" style={{ width: "20%", background: "#84cc16" }}></div></div>
                  <span>20%</span>
                </div>
                <div className="ratingBarRow">
                  <span>3 ★</span>
                  <div className="barTrack"><div className="barFill" style={{ width: "5%", background: "#eab308" }}></div></div>
                  <span>5%</span>
                </div>
                <div className="ratingBarRow">
                  <span>2 ★</span>
                  <div className="barTrack"><div className="barFill" style={{ width: "3%", background: "#f97316" }}></div></div>
                  <span>3%</span>
                </div>
                <div className="ratingBarRow">
                  <span>1 ★</span>
                  <div className="barTrack"><div className="barFill" style={{ width: "2%", background: "#ef4444" }}></div></div>
                  <span>2%</span>
                </div>
              </div>
            </div>
          </div>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

          {recommendations && recommendations.length > 0 && (
            <div className="recommendationsContainer">
              <h3 className="recommendationsHeading">YOU MAY ALSO LIKE</h3>
              <div className="recommendationsGrid">
                {recommendations.map((recProduct) => (
                  <ProductCard key={recProduct._id} product={recProduct} />
                ))}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
