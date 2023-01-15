const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  }
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Transaction", transactionSchema);
