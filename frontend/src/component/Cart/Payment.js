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

    if (!transactionId || transactionId.length < 10) {
      alert.error("Please enter a valid Transaction / UTR ID.");
      return;
    }

    payBtn.current.disabled = true;

    try {
      // Mocking PhonePe Success, assigning Transaction ID
      order.paymentInfo = {
        id: transactionId,
        status: "Processing",
      };

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
      <MetaData title="PhonePe UPI Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>PhonePe Secure Payment</Typography>
          
          <div className="upi-qr-container">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=8809604880@axl&pn=Sanjay%20Kumar&cu=INR" 
              alt="PhonePe QR Code" 
              className="upi-qr-code"
            />
            <p className="upi-id-text">UPI ID: <b>8809604880@axl</b></p>
            <p className="upi-instructions">1. Scan QR with your PhonePe app.<br/>2. Pay the exact amount: <b>₹{orderInfo && orderInfo.totalPrice}</b><br/>3. Enter the 12-digit UTR below.</p>
          </div>

          <div>
            <VerifiedUserIcon />
            <input 
              type="text" 
              className="paymentInput" 
              placeholder="Enter 12-digit UTR / Txn ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            value={`Verify Payment`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
