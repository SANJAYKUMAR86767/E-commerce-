/* eslint-disable */
import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import "./payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [transactionId, setTransactionId] = useState("");

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      if (paymentMethod === "online") {
        if (!transactionId || transactionId.length < 10) {
          alert.error("Please enter a valid Transaction / UTR ID.");
          payBtn.current.disabled = false;
          return;
        }
        order.paymentInfo = {
          id: transactionId,
          status: "Processing (UPI)",
        };
      } else {
        // Cash on Delivery Order placement
        order.paymentInfo = {
          id: "COD_" + Date.now(),
          status: "Cash on Delivery",
        };
      }

      dispatch(createOrder(order));
      history.push("/success");
      
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.message || "There was an error processing your order");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Secure Checkout Payment" />
      <CheckoutSteps activeStep={2} />
      
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Choose Payment Method</Typography>
          
          {/* Modern Toggle Tabs */}
          <div className="paymentMethodSelector">
            <button
              type="button"
              className={`methodBtn ${paymentMethod === "online" ? "active" : ""}`}
              onClick={() => setPaymentMethod("online")}
            >
              Scan & Pay (Online)
            </button>
            <button
              type="button"
              className={`methodBtn ${paymentMethod === "cod" ? "active" : ""}`}
              onClick={() => setPaymentMethod("cod")}
            >
              Cash on Delivery (COD)
            </button>
          </div>

          {/* ONLINE PAYMENT UI */}
          {paymentMethod === "online" ? (
            <Fragment>
              <div className="upi-qr-container">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=8809604880@axl&pn=Sanjay%20Kumar&cu=INR" 
                  alt="PhonePe QR Code" 
                  className="upi-qr-code"
                />
                <p className="upi-id-text">UPI ID: <b>8809604880@axl</b></p>
                <p className="upi-instructions">
                  1. Scan QR with your PhonePe / UPI app.<br/>
                  2. Pay the exact amount: <b>₹{orderInfo && orderInfo.totalPrice}</b><br/>
                  3. Enter the 12-digit UTR below.
                </p>
              </div>

              <div className="utrInputContainer">
                <VerifiedUserIcon />
                <input 
                  type="text" 
                  className="paymentInput" 
                  placeholder="Enter 12-digit UTR / Txn ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  required={paymentMethod === "online"}
                />
              </div>
            </Fragment>
          ) : (
            /* CASH ON DELIVERY UI */
            <div className="cod-container">
              <div className="cod-icon-wrapper">
                🚚
              </div>
              <p className="cod-title">Cash On Delivery Selected</p>
              <p className="cod-instructions">
                Aapko parcel milne par delivery executive ko <b>₹{orderInfo && orderInfo.totalPrice}</b> cash pay karne honge.
              </p>
              <div className="deliveryDetailsPreview">
                <p>Scheduled Delivery Date: <b>{orderInfo && orderInfo.deliveryDate}</b></p>
                <p>Preferred Slot: <b>{orderInfo && orderInfo.deliveryTimeSlot}</b></p>
              </div>
            </div>
          )}

          <input
            type="submit"
            value={paymentMethod === "online" ? "Verify & Place Order" : "Confirm COD & Place Order"}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
