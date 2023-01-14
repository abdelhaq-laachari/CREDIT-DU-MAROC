import axios from "axios";
import Cookies from 'js-cookie';


// Register user
const register = async (userData) => {
  const response = await axios.post("client/register", userData);
  if (response.data) {
    Cookies.set('token', response.data.token);
  }
  return response.data;
};

// Sign in user
const logIn = async (userData) => {
  const response = await axios.post("client/login", userData);
  if (response.data) {
    Cookies.set('token', response.data.token, {
      expires: 1,
    });
  }
  return response.data;
};

// Logout user
const logout = () => {
  // localStorage.removeItem("user");
  localStorage.clear()
};

const authService = {
  register,
  logIn,
  logout,
};

export default authService;