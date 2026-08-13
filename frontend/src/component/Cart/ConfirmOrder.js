import React, { Fragment, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { applyCoupon, removeCoupon } from "../../actions/couponAction";
import { useAlert } from "react-alert";

const ConfirmOrder = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { coupon, discount, error: couponError } = useSelector(
    (state) => state.coupon
  );

  const [couponCode, setCouponCode] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const discountAmount = discount || 0;
  const totalPrice = Math.max(0, subtotal + tax + shippingCharges - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      alert.error("Please enter a coupon code");
      return;
    }
    dispatch(applyCoupon(couponCode, subtotal));
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
    setCouponCode("");
    alert.success("Coupon removed");
  };

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      discount: discountAmount,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div className="couponSection">
              <form onSubmit={handleApplyCoupon} className="couponForm">
                <input
                  type="text"
                  placeholder="Enter Coupon Code (e.g. SAVE20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={!!coupon}
                />
                {coupon ? (
                  <button type="button" onClick={handleRemoveCoupon} className="removeCouponBtn">
                    Remove
                  </button>
                ) : (
                  <button type="submit" className="applyCouponBtn">
                    Apply
                  </button>
                )}
              </form>
              {couponError && <p className="couponError">{couponError}</p>}
            </div>

            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
              {discountAmount > 0 && (
                <div className="discountRow">
                  <p>Coupon Discount ({coupon}):</p>
                  <span className="discountText">-₹{discountAmount}</span>
                </div>
              )}
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
