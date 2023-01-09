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
            {/* <Route path="single" element={<User />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            /> */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default routes;
