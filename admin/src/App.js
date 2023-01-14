import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./components/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { carInputs, orderInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile/Profile";
import User from "./pages/single user/User";
import Users from "./pages/all users/Users";
import Payments from "./pages/payments/Payments";
import Transactions from "./pages/transactions/Transactions";
import Transaction from "./pages/single transactions/Transaction";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const token = localStorage.getItem("accessToken");

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        {token ? (
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="single" element={<User />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="payments">
                <Route index element={<Payments />} />
                <Route path=":productId" element={<Single />} />
              </Route>
              <Route path="transactions">
                <Route index element={<Transactions />} />
                <Route
                  path="single"
                  element={<Transaction inputs={orderInputs} title="Transaction details" />}
                />
              </Route>
            </Route>
          </Routes>
        ) : (
          window.location.pathname !== "/login" && <Login /> &&
          window.location.pathname !== "/register" && <Register />
        )}
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
