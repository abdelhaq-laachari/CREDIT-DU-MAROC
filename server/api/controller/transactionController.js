const Transaction = require("../models/transactionModel");
const Balance = require("../models/balanceModel");
const asyncHandler = require("express-async-handler");

// @desc    Get all transactions
// @route   GET /client/transactions
// @access  Private

const getTransactions = asyncHandler(async (req, res) => {
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
  const transaction = new Transaction({
    client: clientId,
    amount,
    date,
    description,
  });
  const createdTransaction = await transaction.save();
  const balance = await Balance.findOne({ client: clientId });
  const newBalance = balance.balance + amount;
  balance.balance = newBalance;
  await balance.save();
  res.status(201).json({
    message: `Thank you for your deposit of ${amount}. Your current account balance is ${newBalance}. Please keep your transaction receipt for your records.`,
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
  });
  const createdTransaction = await transaction.save();
  const balance = await Balance.findOne({ client: clientId });
  if (balance.balance < amount) {
    res.status(400).json({
      message: `You have insufficient funds to withdraw ${amount}. Your current account balance is ${balance.balance}. Please deposit more funds to your account.`,
    });
  } else {
    const newBalance = balance.balance - amount;
    balance.balance = newBalance;
    await balance.save();
    res.status(201).json({
      message: `Thank you for your withdrawal of ${amount}. Your current account balance is ${newBalance}. Please keep your transaction receipt for your records.`,
    });
  }
});

// export
module.exports = {
  getTransactions,
  deposit,
  withdraw,
};
