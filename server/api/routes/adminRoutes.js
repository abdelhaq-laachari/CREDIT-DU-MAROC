const express = require("express");
const router = express.Router();
const { getAdmin, registerAdmin, authAdmin } = require("../controller/adminController");
const { getClients, singleClient, totalClients } = require("../controller/clientController");
const { allPayments, totalPayments } = require("../controller/paymentController");
const { getTransactions, totalTransactions } = require("../controller/transactionController");
const { protect } = require("../middleware/authMiddleware");
const { checkAdmin } = require("../middleware/checkAuth");

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

// @desc    Get total clients
router.route("/totalClients").get(protect, totalClients);

// @desc    Get total payments
router.route("/totalPayments").get(protect, totalPayments);

// @desc    Get total transactions
router.route("/totalTransactions").get(protect, totalTransactions);

// @desc    Check admin
router.route("/checkAuth").get(checkAdmin);



// export route file
module.exports = router;
