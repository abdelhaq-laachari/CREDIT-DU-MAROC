const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    balance: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
    expDate:{
      type: String,
      required: true,
    },
    bankAccountNumber: {
      type: Number,
      required: true,
    },
  },
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Card", cardSchema);
