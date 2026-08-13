const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const Coupon = require("../models/couponModel");

// Create Coupon -- Admin
exports.createCoupon = catchAsyncErrors(async (req, res, next) => {
  const { code, discountType, discountValue, minPurchase, expiryDate } = req.body;

  const coupon = await Coupon.create({
    code: code.toUpperCase(),
    discountType,
    discountValue,
    minPurchase: minPurchase || 0,
    expiryDate,
  });

  res.status(201).json({
    success: true,
    coupon,
  });
});

// Get All Coupons -- Admin
exports.getAllCoupons = catchAsyncErrors(async (req, res, next) => {
  const coupons = await Coupon.find();

  res.status(200).json({
    success: true,
    coupons,
  });
});

// Delete Coupon -- Admin
exports.deleteCoupon = catchAsyncErrors(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new ErrorHander("Coupon not found", 404));
  }

  await coupon.deleteOne();

  res.status(200).json({
    success: true,
    message: "Coupon deleted successfully",
  });
});

// Apply Coupon -- User
exports.applyCoupon = catchAsyncErrors(async (req, res, next) => {
  const { code, orderAmount } = req.body;

  if (!code) {
    return next(new ErrorHander("Please enter a coupon code", 400));
  }

  const coupon = await Coupon.findOne({
    code: code.toUpperCase(),
    isActive: true,
  });

  if (!coupon) {
    return next(new ErrorHander("Invalid or expired coupon code", 404));
  }

  if (new Date(coupon.expiryDate) < new Date()) {
    return next(new ErrorHander("Coupon has expired", 400));
  }

  if (orderAmount < coupon.minPurchase) {
    return next(
      new ErrorHander(
        `Minimum purchase amount for this coupon is $${coupon.minPurchase}`,
        400
      )
    );
  }

  let discountAmount = 0;
  if (coupon.discountType === "percentage") {
    discountAmount = (orderAmount * coupon.discountValue) / 100;
  } else {
    discountAmount = coupon.discountValue;
  }

  // Ensure discount does not exceed total order amount
  discountAmount = Math.min(discountAmount, orderAmount);

  res.status(200).json({
    success: true,
    couponCode: coupon.code,
    discountAmount,
    finalAmount: orderAmount - discountAmount,
  });
});
