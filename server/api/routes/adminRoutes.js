const express = require("express");
const router = express.Router();
const { getAdmin } = require("../controller/adminController");
const { protect } = require("../middleware/authMiddleware");


router.route("/getAdmin").get(protect, getAdmin);

// export route file
module.exports = router;
