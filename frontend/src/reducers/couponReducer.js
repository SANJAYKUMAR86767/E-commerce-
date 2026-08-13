import {
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_FAIL,
  REMOVE_COUPON,
  CLEAR_ERRORS,
} from "../constants/couponConstants";

export const couponReducer = (state = { coupon: null, discount: 0 }, action) => {
  switch (action.type) {
    case APPLY_COUPON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPLY_COUPON_SUCCESS:
      return {
        loading: false,
        coupon: action.payload.couponCode,
        discount: action.payload.discountAmount,
        finalAmount: action.payload.finalAmount,
        success: true,
      };
    case APPLY_COUPON_FAIL:
      return {
        loading: false,
        coupon: null,
        discount: 0,
        error: action.payload,
        success: false,
      };
    case REMOVE_COUPON:
      return {
        loading: false,
        coupon: null,
        discount: 0,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
