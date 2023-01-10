const express = require("express"); // Import express
const router = express.Router(); // Create a router

// Import controllers
const { registerClient, loginClient, singleClient, updateClient } = require("../controller/clientController");
const { send, payments } = require("../controller/paymentConrtroller");
const { getTransactions, deposit, withdraw } = require("../controller/transactionController");

// Import middleware
const { protectClient } = require("../middleware/clientMiddleware");

// @desc    Register a new client
router.route("/register").post(registerClient);

// @desc    Login a client
router.route("/login").post(loginClient);

// @desc    Get client profile
router.route("/profile").get(protectClient, singleClient);

// @desc    Update client profile
router.route("/update").put(protectClient, updateClient);

// @desc   get all transactions
router.route("/transactions").get(protectClient, getTransactions);

// @desc  make a deposit
router.route("/deposit").post(protectClient, deposit);

// @desc  make a withdrawal
router.route("/withdraw").post(protectClient, withdraw);

// @desc  Gat all payment
router.route("/payments").get(protectClient, payments);

// @desc  Make payment
router.route("/makePayment").post(protectClient, send);

module.exports = router;
