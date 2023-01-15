const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    age: {
      type: String,
      required: [true, "Please enter your age"],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    country: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phoneNumber"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Client", clientSchema);
