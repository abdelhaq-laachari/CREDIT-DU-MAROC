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
      required: [true, "Please enter your Address"],
    },
    city: {
      type: String,
      required: [true, "Please enter your City"],
    },
    zipCode: {
      type: Number,
      required: [true, "Please enter your zip code"],
    },
    country: {
      type: String,
      required: [true, "Please enter your Country"],
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
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);