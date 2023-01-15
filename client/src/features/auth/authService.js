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
  return response.data.token;
};

// check auth function
const checkAuth = async () => {
  const res = await axios.get('/client/checkAuth');
  if (res.status === 201 && res.data.message === "authorized") {
    return res.data.message;
  }
};



// Logout user
const logout = () => {
  Cookies.remove('token');
};

const authService = {
  register,
  logIn,
  checkAuth,
  logout,
};

export default authService;