import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "../App";
import Error from "../pages/Error";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp.jsx";
import Services from "../pages/Services";
import About from "../pages/About";
import Home from "../pages/dashboard/Home";
import Transaction from "../pages/dashboard/Transaction";
import Profile from "../pages/dashboard/Profile";
import Payment from "../pages/dashboard/Payment";
import Deposit from "../pages/dashboard/operation/Deposit";
import Withdraw from "../pages/dashboard/operation/Withdraw";
import Send from "../pages/dashboard/operation/Send";



const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard">
            <Route index element={<Home />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="payments" element={<Payment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="makePayment" element={<Send />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default routes;
