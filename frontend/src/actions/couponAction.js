import axios from "axios";
import {
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_FAIL,
  REMOVE_COUPON,
  CLEAR_ERRORS,
} from "../constants/couponConstants";

// Apply Coupon
export const applyCoupon = (code, orderAmount) => async (dispatch) => {
  try {
    dispatch({ type: APPLY_COUPON_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/coupon/apply", { code, orderAmount }, config);

    dispatch({
      type: APPLY_COUPON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APPLY_COUPON_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Remove Coupon
export const removeCoupon = () => (dispatch) => {
  dispatch({ type: REMOVE_COUPON });
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
