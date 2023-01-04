const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc    Register a new client
// @route   POST /client/register
// @access  Public

const registerClient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    phoneNumber,
    email,
    password,
  } = req.body;

  //   check if any of the fields are empty

  if (
    !firstName ||
    !lastName ||
    !age ||
    !phoneNumber ||
    !email ||
    !password
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the client already exists

  const clientExist = await Client.findOne({ email });
  if (clientExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //   hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   create client
  const client = await Client.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    age,
    phoneNumber,
  });

  if (client) {
    res.status(201).json({
      Token: generateToken(client._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authentication a client
// @route   POST /client/login
// @access  Public

const loginClient = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for client email
  const client = await Client.findOne({ email });
  if (client) {
    // check for password
    const isMatch = await bcrypt.compare(password, client.password);
    if (isMatch) {
      res.status(201).json({
        // client,
        Token: generateToken(client._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get a single client
// @route   GET /client/singleClient/:id
// @access  Private
const singleClient = asyncHandler(async (req, res) => {
  const idClient = req.client;
  const client = await Client.findById(idClient).select("-password");
  if (client) {
    res.send(client);
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

// @desc    Get all clients
// @route   GET /client/clients
// @access  Private

const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

// @desc    Get total clients
// @route   GET /client/totalClients
// @access  Private

const totalClients = asyncHandler(async (req, res) => {
  const total = await Client.countDocuments();
  res.status(200).json(total);
});

// @desc Generate token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerClient,
  loginClient,
  singleClient,
  getClients,
  totalClients,
};
