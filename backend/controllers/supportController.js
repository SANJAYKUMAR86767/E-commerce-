const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const sendEmail = require("../utils/sendEmail");

// Post Live Chat / Support Message
exports.sendSupportMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return next(
      new ErrorHander("Please provide your name, email, and message", 400)
    );
  }

  const emailSubject = subject || `Support Inquiry from ${name}`;
  const emailContent = `Support Request Received:\n\nFrom: ${name} (${email})\n\nMessage:\n${message}\n\nTimestamp: ${new Date().toISOString()}`;

  try {
    const supportEmail = process.env.SMPT_MAIL || "support@ecommerce.com";
    await sendEmail({
      email: supportEmail,
      subject: emailSubject,
      message: emailContent,
    });
  } catch (error) {
    console.error("Failed to forward support email:", error.message);
  }

  res.status(200).json({
    success: true,
    message: "Thank you! Your message has been sent to our customer support team.",
  });
});
