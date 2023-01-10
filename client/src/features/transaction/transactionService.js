import axios from "axios";
import { config } from "../../getToken";

// get all transactions
const allTransactions = async (token) => {
  const response = await axios.get("/client/transactions",config);
  return response.data;
};



const transactionService = {
  allTransactions,
};

export default transactionService;
