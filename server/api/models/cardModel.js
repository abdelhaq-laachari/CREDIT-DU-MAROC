const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Client'
    },
    balance: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      // required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
