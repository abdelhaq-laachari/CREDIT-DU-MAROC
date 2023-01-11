import axios from "axios";
import { config } from "../../getToken";

// get card details

const getCardDetails = async () => {
  const response = await axios.get("/client/card", config);
  return response.data;
};


const cardService = {
  getCardDetails,
};

export default cardService;
