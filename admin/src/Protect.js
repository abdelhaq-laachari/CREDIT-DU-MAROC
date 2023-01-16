import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner/Spinner";

const Protect = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const token = Cookies.get("token");
 
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    const checkAuth = async () => {
      try {
        const res = await axios.get("/admin/checkAuth");
        if (
          mounted &&
          res.status === 201 &&
          res.data.message === "authorized"
        ) {
          setIsLoading(false);
          setIsSuccess(true);
          setIsError(false);
          return res.data.message;
        } else {
          setIsLoading(false);
          setIsSuccess(false);
          // setIsError(true);
          setMessage(res.data);
          return res.data;
        }
      } catch (error) {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
        setMessage(error);
        return error.response.data;
      }
    };
    if (token) {
      checkAuth();
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      setMessage("Unauthorized access");
      return;
    }
    return () => {
      mounted = false;
    };
  }, [token]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    toast.error("Not authorized");
    navigate("/login");
  }

  return <Outlet />;
};

export default Protect;
