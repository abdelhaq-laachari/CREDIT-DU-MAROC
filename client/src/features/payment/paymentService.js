import axios from "axios";
import { config } from "../../getToken";

// get all payments
const allPayments = async () => {
  const response = await axios.get("/client/payments",config);
  return response.data;
};



const paymentService = {
  allPayments,
};

export default paymentService;
