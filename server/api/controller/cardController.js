const asyncHandler = require("express-async-handler");
const Card = require("../models/cardModel");

// @desc   Get Balance
// @route  GET /client/balance
// @access Private

const getBalance = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const balance = await Card.findOne({ client: clientId });
  if (balance) {
    res.json(balance);
  } else {
    res.status(404);
    throw new Error(" Something went wrong");
  }
});

module.exports = {
  getBalance,
};
