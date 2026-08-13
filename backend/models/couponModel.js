const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Please enter coupon code"],
    unique: true,
    trim: true,
    uppercase: true,
  },
  discountType: {
    type: String,
    required: true,
    enum: ["percentage", "fixed"],
    default: "percentage",
  },
  discountValue: {
    type: Number,
    required: [true, "Please enter discount value"],
  },
  minPurchase: {
    type: Number,
    default: 0,
  },
  expiryDate: {
    type: Date,
    required: [true, "Please enter expiry date"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
