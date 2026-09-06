import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Tracking</Typography>
              <div className="orderStatusTimeline">
                <div
                  className={`timelineStep ${
                    order.orderStatus === "Processing" ||
                    order.orderStatus === "Shipped" ||
                    order.orderStatus === "Delivered"
                      ? "completed"
                      : ""
                  }`}
                >
                  <div className="stepIcon">1</div>
                  <p>Processing</p>
                </div>
                <div
                  className={`timelineLine ${
                    order.orderStatus === "Shipped" || order.orderStatus === "Delivered"
                      ? "completed"
                      : ""
                  }`}
                ></div>
                <div
                  className={`timelineStep ${
                    order.orderStatus === "Shipped" || order.orderStatus === "Delivered"
                      ? "completed"
                      : ""
                  }`}
                >
                  <div className="stepIcon">2</div>
                  <p>Shipped</p>
                </div>
                <div
                  className={`timelineLine ${
                    order.orderStatus === "Delivered" ? "completed" : ""
                  }`}
                ></div>
                <div
                  className={`timelineStep ${
                    order.orderStatus === "Delivered" ? "completed" : ""
                  }`}
                >
                  <div className="stepIcon">3</div>
                  <p>Delivered</p>
                </div>
              </div>

              {/* REAL-TIME LIVE DELIVERY RADAR BANNER */}
              <div style={{ marginTop: "1.2rem", marginBottom: "1.2rem" }}>
                <Link
                  to={`/order/track/${order._id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    color: "#ffffff",
                    padding: "1rem 1.4rem",
                    borderRadius: "14px",
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.2)",
                    border: "1px solid #334155"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "1.8rem" }}>🛵</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.98rem", color: "#38bdf8" }}>
                        Real-Time Live Delivery Radar (कहाँ पहुँचा मेरा ऑर्डर)
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                        Live GPS tracking • Estimated arrival time • Delivery Partner Telemetry
                      </div>
                    </div>
                  </div>
                  <span style={{ background: "#22c55e", color: "white", padding: "6px 14px", borderRadius: "20px", fontWeight: 800, fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                    Track Live ➔
                  </span>
                </Link>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
