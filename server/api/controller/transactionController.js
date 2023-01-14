const Transaction = require("../models/transactionModel");
const Card = require("../models/cardModel");
const asyncHandler = require("express-async-handler");

// @desc    Get all client transactions
// @route   GET /client/transactions
// @access  Private

const myTransactions = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const transactions = await Transaction.find({ client: clientId });
  res.send(transactions);
});

// @desc    Deposit money
// @route   POST /client/deposit
// @access  Private

const deposit = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const { amount, date, description } = req.body;
  if (!amount || !date || !description) {
    res.status(400).json({ message: "Please fill in all fields" });
  }
  const transaction = new Transaction({
    client: clientId,
    amount,
    date,
    description,
    type: "deposit",
  });
  const createdTransaction = await transaction.save();
  const balance = await Card.findOne({ client: clientId });
  const newBalance = balance.balance + amount;
  balance.balance = newBalance;
  await balance.save();
  res.status(201).json({
    message: `Thank you for your deposit of ${amount} MAD. Your current account balance is ${newBalance} MAD. Please keep your transaction receipt for your records.`,
  });
});

// @desc    Withdraw money
// @route   POST /client/withdraw
// @access  Private

const withdraw = asyncHandler(async (req, res) => {
  const clientId = req.client;
  const { amount, date, description } = req.body;
  const transaction = new Transaction({
    client: clientId,
    amount,
    date,
    description,
    type: "withdraw",
  });
  const createdTransaction = await transaction.save();
  const balance = await Card.findOne({ client: clientId });
  if (balance.balance < amount) {
    res.status(400).json({
      message: `You have insufficient funds to withdraw ${amount} MAD. Your current account balance is ${balance.balance} MAD. Please deposit more funds to your account.`,
    });
  } else {
    const newBalance = balance.balance - amount;
    balance.balance = newBalance;
    await balance.save();
    res.status(201).json({
      message: `Thank you for your withdrawal of ${amount} MAD. Your current account balance is ${newBalance} MAD. Please keep your transaction receipt for your records.`,
    });
  }
});

// @desc    Get a all transactions
// @route   GET /admin/transactions
// @access  Private

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).populate("client", "firstName lastName");
  res.send(transactions);
});


// @desc    Get total transactions
// @route   GET /admin/totalTransactions
// @access  Private

const totalTransactions = asyncHandler(async (req, res) => {
  const total = await Transaction.countDocuments();
  res.status(200).json(total);
});

// export
module.exports = {
  myTransactions,
  getTransactions,
  deposit,
  withdraw,
  totalTransactions,
};
