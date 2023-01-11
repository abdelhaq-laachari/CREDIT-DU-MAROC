import axios from "axios";
import { config } from "../../getToken";

// get all transactions
const allTransactions = async () => {
  const response = await axios.get("/client/transactions",config);
  return response.data;
};

// Deposit money
const depositMoney = async (data) => {
  const response = await axios.post("/client/deposit", data, config);
  return response.data;
}

// Withdraw money
const withdrawMoney = async (data) => {
  const response = await axios.post("/client/withdraw", data, config);
  return response.data;
};

const transactionService = {
  allTransactions,
  depositMoney,
  withdrawMoney,
};

export default transactionService;
