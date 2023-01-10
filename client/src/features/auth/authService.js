import axios from "axios";

// Register user
const register = async (userData) => {
  const response = await axios.post("client/register", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.Token));
  }
  return response.data;
};

// Sign in user
const logIn = async (userData) => {
  const response = await axios.post("client/login", userData);
  if (response.data) {
    localStorage.setItem("user", response.data.Token);
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