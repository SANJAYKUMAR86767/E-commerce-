import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  recommendationsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";
import { couponReducer } from "./reducers/couponReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  recommendations: recommendationsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  coupon: couponReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
});

let initialState = {
  cart: {
    cartItems: (() => {
      try {
        const item = localStorage.getItem("cartItems");
        return item && item !== "undefined" ? JSON.parse(item) : [];
      } catch (e) {
        return [];
      }
    })(),
    shippingInfo: (() => {
      try {
        const info = localStorage.getItem("shippingInfo");
        return info && info !== "undefined" ? JSON.parse(info) : {};
      } catch (e) {
        return {};
      }
    })(),
  },
  wishlist: {
    wishlistItems: (() => {
      try {
        const item = localStorage.getItem("wishlistItems");
        return item && item !== "undefined" ? JSON.parse(item) : [];
      } catch (e) {
        return [];
      }
    })(),
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
