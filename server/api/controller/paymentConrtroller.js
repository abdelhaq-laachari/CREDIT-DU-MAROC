const Payment = require("../models/paymentModel");
const Card = require("../models/cardModel");
const asyncHandler = require("express-async-handler");

// @desc    Send money
// @route   POST /client/payment
// @access  Private

const send = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const { amount, date, description, payee } = req.body;
  const payment = new Payment({
    client: clientId,
    amount,
    date,
    description,
    payee,
  });
  const createdPayment = await payment.save();
  const balance = await Card.findOne({ client: clientId });
  if (balance.balance < amount) {
    res.status(400).json({
      message: `You have insufficient funds to send ${amount}. Your current account balance is ${balance.balance}. Please deposit more funds to your account.`,
    });
  } else {
    const newBalance = balance.balance - amount;
    balance.balance = newBalance;
    await balance.save();
    res.status(201).json({
      message: `Thank you for your payment of ${amount} to ${payee}. Your current account balance is ${newBalance}. Please keep your transaction receipt for your records.`,
    });
  }
});

// @desc    Get all payments
// @route   GET /client/payment
// @access  Private

const payments = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const payments = await Payment.find({ client : clientId });
  res.json(payments);
})

module.exports = {
  send,
  payments,
};
