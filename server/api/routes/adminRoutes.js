const express = require("express");
const router = express.Router();
const { getAdmin, registerAdmin, authAdmin } = require("../controller/adminController");
const { protect } = require("../middleware/authMiddleware");

// @desc    Register a new admin
router.route("/register").post(registerAdmin);

// @desc    Login a admin
router.route("/login").post(authAdmin);

// @desc    Get admin profile
router.route("/profile").get(protect, getAdmin);




// export route file
module.exports = router;
