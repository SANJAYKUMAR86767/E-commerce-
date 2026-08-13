import React, { Fragment, useEffect } from "react";
import "./Wishlist.css";
import ProductCard from "../Home/ProductCard";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getWishlist, clearErrors } from "../../actions/wishlistAction";
import { useAlert } from "react-alert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getWishlist());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Wishlist -- Ecommerce" />
          <div className="wishlistContainer">
            <h2 className="wishlistHeading">My Saved Wishlist</h2>

            {wishlistItems && wishlistItems.length > 0 ? (
              <div className="wishlistGrid">
                {wishlistItems.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="emptyWishlist">
                <FavoriteBorderIcon className="emptyWishlistIcon" />
                <h3>Your Wishlist is empty</h3>
                <p>Explore items and save your favorites here!</p>
                <Link to="/products" className="shopNowBtn">
                  Explore Products
                </Link>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Wishlist;
