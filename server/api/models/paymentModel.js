const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
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
    payee: {
        type: String,
        required: true,
    }
  },
  // {
  //   timeStamps: true,
  // }
);

module.exports = mongoose.model("Payment", paymentSchema);