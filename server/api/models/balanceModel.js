const mongoose = require("mongoose");

const balanceSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Balance", balanceSchema);
