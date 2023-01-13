const express = require("express");
const router = express.Router();
const { getAdmin, registerAdmin, authAdmin } = require("../controller/adminController");
const { getClients, singleClient } = require("../controller/clientController");
const { allPayments } = require("../controller/paymentConrtroller");
const { getTransactions } = require("../controller/transactionController");
const { protect } = require("../middleware/authMiddleware");

// @desc    Register a new admin
router.route("/register").post(registerAdmin);

// @desc    Login a admin
router.route("/login").post(authAdmin);

// @desc    Get admin profile
router.route("/profile").get(protect, getAdmin);

// @desc    Get all clients
router.route("/clients").get(protect, getClients);

// @desc    Get single client
router.route("/singleClient/:id").get(protect, singleClient);

// @desc    Get all transactions
router.route("/transactions").get(protect, getTransactions);

// @desc    Get all payments
router.route("/payments").get(protect, allPayments);





// export route file
module.exports = router;
