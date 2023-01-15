const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");
const Card = require("../models/cardModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generator = require("creditcard-generator");

// @desc    Register a new client
// @route   POST /client/register
// @access  Public

const registerClient = asyncHandler(async (req, res) => {
  const { firstName, lastName, age, phoneNumber, email, password } = req.body;

  //   check if any of the fields are empty

  if (!firstName || !lastName || !age || !phoneNumber || !email || !password) {
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
    const balance = await Card.create({
      client: client._id,
      balance: 0,
      currency: "MAD",
      expDate: generateExpirationDate(),
      cardNumber: generator.GenCC().toString(),
      bankAccountNumber: generateAccountNumber(12),
    });

    const token = generateToken(client._id);
    res.status(201).json({ token });
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
  // const test = generator.GenCC();

  //   check if any of the fields are empty

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // check for client email
  const client = await Client.findOne({ email });
  if (client) {
    // check for password
    const isMatch = await bcrypt.compare(password, client.password);
    if (isMatch) {
      const token = generateToken(client._id);
      res.json({ token });
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
  const idClient = req.params.id;
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

// @desc    Update a client
// @route   PUT /client/updateClient
// @access  Private

const updateClient = asyncHandler(async (req, res) => {
  const idClient = req.client;
  const client = await Client.findById(idClient);

  if (client) {
    const updatedClient = await Client.findByIdAndUpdate(idClient, req.body, {
      new: true,
    });
    res.send(updatedClient);
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

// @desc    Get total clients
// @route   GET /admin/totalClients
// @access  Private

const totalClients = asyncHandler(async (req, res) => {
  const total = await Client.countDocuments();
  res.status(200).json(total);
});

// @desc Generate token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// generate random account number

const generateAccountNumber = (length) => {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
};

// @desc   Generate expiration date
const generateExpirationDate = () => {
  // Get the current date and time
  let now = new Date();

  // Add 4 years to the current date
  let expirationDate = new Date(
    now.getFullYear() + 4,
    now.getMonth(),
    now.getDate()
  );

  // Format the expiration date as MM/YY
  let formattedExpirationDate = expirationDate.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "2-digit",
  });
  return formattedExpirationDate;
};

module.exports = {
  registerClient,
  loginClient,
  singleClient,
  getClients,
  updateClient,
  totalClients,
  generateExpirationDate,
};
