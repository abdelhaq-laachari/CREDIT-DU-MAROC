const Payment = require("../models/paymentModel");
const Card = require("../models/cardModel");
const asyncHandler = require("express-async-handler");


// @desc    Send money
// @route   POST /client/payment
// @access  Private

const send = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const { amount, date, description, payee, bankAccountNumber } = req.body;
  const payment = new Payment({
    client: clientId,
    amount,
    date,
    description,
    payee,
  });
  const createdPayment = await payment.save();
  const findUser = await Card.findOne({ bankAccountNumber });
  if (findUser) {
    const balance = await Card.findOne({ client: clientId });
    if (balance.balance < amount) {
      res.status(400).json({
        message: `You have insufficient funds to send ${amount}. Your current account balance is ${balance.balance}. Please deposit more funds to your account.`,
      });
    } else {
      const newBalance = balance.balance - amount;
      findUser.balance = findUser.balance + amount;
      await findUser.save();
      balance.balance = newBalance;
      await balance.save();
      res.status(201).json({
        message: `Thank you for your payment of ${amount} to ${payee}. Your current account balance is ${newBalance}. Please keep your transaction receipt for your records.`,
      });
    }
  } else {
    res
      .status(404)
      .json({ message: "There is no user with this account number" });
  }
});

// @desc    Get my payments
// @route   GET /client/payment
// @access  Private

const myPayments = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const payments = await Payment.find({ client: clientId });
  res.json(payments);
});

// @desc    Get all payments
// @route   GET /admin/payments
// @access  Private

const allPayments = asyncHandler(async (req, res) => {
  const payments = await Payment.find({}).populate(
    "client",
    "firstName lastName"
  );
  res.json(payments);
});

// @desc    Get total payments
// @route   GET /admin/totalPayments
// @access  Private

const totalPayments = asyncHandler(async (req, res) => {
  const total = await Payment.countDocuments();
  res.status(200).json(total);
});

module.exports = {
  send,
  myPayments,
  allPayments,
  totalPayments,
};
