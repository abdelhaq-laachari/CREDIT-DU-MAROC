const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    client: {
        type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
