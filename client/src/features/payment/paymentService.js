import axios from "axios";
import { config } from "../../getToken";

// get all payments
const allPayments = async () => {
  const response = await axios.get("/client/payments",config);
  return response.data;
};

// make payment
const sendMoney = async (data) => {
  const response = await axios.post("/client/makePayment", data, config);
  return response.data;
};



const paymentService = {
  allPayments,
  sendMoney,
};

export default paymentService;
