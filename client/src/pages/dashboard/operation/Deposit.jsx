import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  makeDeposit,
} from "../../../features/transaction/transactionSlice";
import Sidebar from "../../../components/Side bar/Sidebar";
import Nav from "../../../components/Top nav/Nav";
import MasterCard from "../../../components/Credit card/MasterCard";
import Spinner from "../../../components/Spinner/Spinner";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Transaction = () => {
  const [formErrors, setFormErrors] = useState({
    amount: "",
    description: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.transaction
  );
  const { card } = useSelector((state) => state.card);

  const myDate = new Date();
  const newDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(myDate);

  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(newDate);

  const form = {
    amount,
    description,
    date,
  };

  const getDescription = (e) => {
    if (e.target.value === "") {
      setFormErrors({
        description: "This field is required",
      });
    } else {
      setFormErrors({
        description: "",
      });
      setDescription(e.target.value);
    }
  };

  const getAmount = (e) => {
    // check if the amount input is empty or not
    if (e.target.value === "") {
      setFormErrors({
        amount: "This field is required",
      });
    }
    // check if the amount is a number or not
    else if (isNaN(e.target.value) || e.target.value <= 0) {
      setFormErrors({
        amount: "Please enter a valid amount",
      });
    } else {
      setFormErrors({
        amount: "",
      });
      setAmount(parseFloat(e.target.value));
    }
  };

  const paymentFunction = (e) => {
    e.preventDefault();
    if (amount || description) {
      dispatch(makeDeposit(form));
    } else {
      setFormErrors({
        amount: "This field is required",
        description: "This field is required",
      });
    }
  };
  
  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "Oops!",
        text: message,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });
    }

    if (!user) {
      navigate("/signin");
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, message, user, navigate, dispatch]);

  if (isSuccess) {
    Swal.fire({
      title: "Great!",
      text: message,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay",
    });
  }

  if (card) {
    var balance = card.balance;
    var currency = card.currency;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Nav />
        <span className="p-6 h-20 flex items-center text-3xl font-semibold w-full bg-[#F8F8F8]">
          Deposit money
        </span>
        <div className="flex lg:flex-row flex-col items-center space-x-8 w-full py-6 px-8 ">
          <div className="flex flex-col space-y-4">
            <span className="text-xl font-semibold ">My Cards</span>
            <MasterCard />
            <div className="flex justify-between">
              <span className="text-xl font-semibold ">My Balance</span>
              <span className="text-xl font-semibold w-1/3">
                {balance + " " + currency}{" "}
              </span>
            </div>
          </div>
          <div className="w-full">
            <form onSubmit={paymentFunction}>
              <div className="mb-6">
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...((formErrors.amount && {
                    className:
                      "bg-red-100 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  }) || {
                    className:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  })}
                  placeholder="1345 $"
                  // required
                  onChange={getAmount}
                />
                {formErrors.amount && (
                  <p className="text-red-500 text-sm">{formErrors.amount}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="Description"
                  // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...((formErrors.description && {
                    className:
                      "bg-red-100 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  }) || {
                    className:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  })}
                  placeholder="Deposit"
                  // required
                  onChange={getDescription}
                />
                {formErrors.description && (
                  <p className="text-red-500 text-sm">{formErrors.description}</p>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
