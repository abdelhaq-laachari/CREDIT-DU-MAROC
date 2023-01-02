const express = require("express");
const router = express.Router();


router.route("/getClients").get(protect, getClients);

// export route file
module.exports = router;
