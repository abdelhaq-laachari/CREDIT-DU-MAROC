const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

const protectClient = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Get Client from token
      req.client = await Client.findById(decode.id).select("-password");
      if (req.client) next();
      else {
        throw new Error("Not authorized");
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protectClient };
