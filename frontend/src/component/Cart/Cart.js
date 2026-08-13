import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const totalMRP = Math.round(totalAmount * 1.25);
  const totalSavings = totalMRP - totalAmount;

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            {/* Flipkart Price Details Summary */}
            <div className="flipkartPriceDetailsCard">
              <h4>PRICE DETAILS</h4>
              <div className="priceDetailRow">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalMRP}</span>
              </div>
              <div className="priceDetailRow">
                <span>Discount</span>
                <span className="greenColor">-₹{totalSavings}</span>
              </div>
              <div className="priceDetailRow">
                <span>Delivery Charges</span>
                <span className="greenColor">FREE</span>
              </div>
              <div className="priceDetailTotalRow">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="savingsNoticeBox">
                <span>🎉 You will save ₹{totalSavings} on this order!</span>
              </div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Place Order</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
