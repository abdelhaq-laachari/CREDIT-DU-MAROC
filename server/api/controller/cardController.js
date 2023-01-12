const asyncHandler = require("express-async-handler");
const Card = require("../models/cardModel");
const Client = require("../models/clientModel")

// @desc   Get Balance
// @route  GET /client/balance
// @access Private

const getBalance = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const cardDetails = await Card.findOne({ client: clientId }).populate(
    "client",
    "firstName lastName"
  );
  if (cardDetails) {
    res.json(cardDetails);
  } else {
    res.status(404);
    throw new Error(" Something went wrong");
  }
});

module.exports = {
  getBalance,
};
