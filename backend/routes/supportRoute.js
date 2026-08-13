const express = require("express");
const { sendSupportMessage } = require("../controllers/supportController");

const router = express.Router();

router.route("/support/message").post(sendSupportMessage);

module.exports = router;
