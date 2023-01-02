const express = require("express"); // Import express
const router = express.Router(); // Create a router

// Import controllers
const { registerClient, loginClient } = require("../controller/clientController");

// Import middleware
const { protectClient } = require("../middleware/clientMiddleware");

// @desc    Register a new client
// @route   POST /client/register
// @access  Public
router.route("/register").post(registerClient);

// @desc    Login a client
// @route   POST /client/login
// @access  Public
router.route("/login").post(loginClient);

module.exports = router;
