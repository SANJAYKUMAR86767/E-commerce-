import React, { Fragment, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { applyCoupon, removeCoupon } from "../../actions/couponAction";
import { useAlert } from "react-alert";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const ConfirmOrder = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { coupon, discount, error: couponError } = useSelector(
    (state) => state.coupon
  );

  const [couponCode, setCouponCode] = useState("");

  // Dynamic Date Generation (Next 4 Days)
  const getNextDays = () => {
    const days = [];
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      let label = date.toLocaleDateString('en-US', options);
      if (i === 0) label = "Today";
      else if (i === 1) label = "Tomorrow";
      days.push({
        rawDate: date.toDateString(),
        formatted: label
      });
    }
    return days;
  };

  const daysList = getNextDays();
  const [selectedDate, setSelectedDate] = useState(daysList[0].formatted);

  const timeSlots = [
    "08:00 AM - 12:00 PM (Morning)",
    "12:00 PM - 04:00 PM (Afternoon)",
    "04:00 PM - 08:00 PM (Evening)"
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);

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
      deliveryDate: selectedDate,
      deliveryTimeSlot: selectedTimeSlot
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      
      <div className="confirmOrderPage">
        <div className="confirmLeftArea">
          
          {/* Shipping Info Card */}
          <div className="confirmCard confirmshippingArea">
            <div className="cardHeader">
              <LocalShippingIcon className="headerIcon" />
              <Typography variant="h6">Shipping Details</Typography>
            </div>
            
            <div className="confirmshippingAreaBox">
              <div className="shippingRow">
                <span className="shippingLabel">Name:</span>
                <span className="shippingValue">{user.name}</span>
              </div>
              <div className="shippingRow">
                <span className="shippingLabel">Phone:</span>
                <span className="shippingValue">{shippingInfo.phoneNo}</span>
              </div>
              <div className="shippingRow">
                <span className="shippingLabel">Address:</span>
                <span className="shippingValue">{address}</span>
              </div>
            </div>
          </div>

          {/* Delivery Slot Scheduler Card */}
          <div className="confirmCard deliveryScheduleArea">
            <div className="cardHeader">
              <CalendarTodayIcon className="headerIcon" />
              <Typography variant="h6">Schedule Delivery Slot</Typography>
            </div>
            <p className="sectionSubtitle">Select your preferred delivery date and time window:</p>
            
            <div className="scheduleContainer">
              {/* Date Options */}
              <div className="datePickerGrid">
                {daysList.map((day) => (
                  <button
                    key={day.formatted}
                    type="button"
                    className={`dateSlotButton ${selectedDate === day.formatted ? "active" : ""}`}
                    onClick={() => setSelectedDate(day.formatted)}
                  >
                    <span className="dateText">{day.formatted}</span>
                    <span className="statusDot"></span>
                  </button>
                ))}
              </div>

              {/* Time Options */}
              <div className="timePickerGrid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`timeSlotButton ${selectedTimeSlot === slot ? "active" : ""}`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    <AccessTimeIcon className="slotTimeIcon" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Items Card */}
          <div className="confirmCard confirmCartItems">
            <div className="cardHeader">
              <ShoppingCartIcon className="headerIcon" />
              <Typography variant="h6">Items in Order</Typography>
            </div>
            
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div className="confirmCartItem" key={item.product}>
                    <div className="itemImgWrapper">
                      <img src={item.image} alt="Product" />
                    </div>
                    <div className="itemNameWrapper">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div className="itemPriceWrapper">
                      <span>{item.quantity} X ₹{item.price} = </span>
                      <b>₹{item.price * item.quantity}</b>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right Order Summary Area */}
        <div className="confirmRightArea">
          <div className="orderSummary">
            <Typography variant="h5" className="summaryTitle">Order Summary</Typography>
            
            {/* Coupon Application Block */}
            <div className="couponSection">
              <div className="couponHeader">
                <LocalOfferIcon className="couponIcon" />
                <span>Apply Promo Code</span>
              </div>
              <form onSubmit={handleApplyCoupon} className="couponForm">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. SAVE20)"
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

            {/* Price Details */}
            <div className="summaryDetails">
              <div className="summaryRow">
                <p>Subtotal</p>
                <span>₹{subtotal}</span>
              </div>
              <div className="summaryRow">
                <p>Shipping Charges</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div className="summaryRow">
                <p>GST (18%)</p>
                <span>₹{tax}</span>
              </div>
              
              {/* Delivery info display */}
              <div className="summaryRow deliverySelectedRow">
                <p>Scheduled For</p>
                <span className="deliveryPill">{selectedDate} ({selectedTimeSlot.split(" ")[0]}...)</span>
              </div>

              {discountAmount > 0 && (
                <div className="summaryRow discountRow">
                  <p>Coupon Discount ({coupon})</p>
                  <span className="discountText">-₹{discountAmount}</span>
                </div>
              )}
            </div>

            <div className="orderSummaryTotal">
              <p>Total amount</p>
              <span>₹{totalPrice}</span>
            </div>

            <button className="checkoutProceedBtn" onClick={proceedToPayment}>
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
