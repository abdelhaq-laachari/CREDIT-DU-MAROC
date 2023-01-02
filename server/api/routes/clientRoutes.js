const express = require("express"); // Import express
const router = express.Router(); // Create a router

// Import controllers
const { registerClient, loginClient, singleClient } = require("../controller/clientController");

// Import middleware
const { protectClient } = require("../middleware/clientMiddleware");

// @desc    Register a new client
router.route("/register").post(registerClient);

// @desc    Login a client
router.route("/login").post(loginClient);

// @desc    Get client profile
router.route("/profile").get(protectClient, singleClient);

module.exports = router;
