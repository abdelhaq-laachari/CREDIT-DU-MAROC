import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, makePayment } from "../../../features/payment/paymentSlice";
import Sidebar from "../../../components/Side bar/Sidebar";
import Nav from "../../../components/Top nav/Nav";
import MasterCard from "../../../components/Credit card/MasterCard";
import Spinner from "../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

const Transaction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    amount: "",
    accountNumber: "",
  });

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.payment
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
  const [accountNumber, setAccountNumber] = useState();
  const [payee, setPayee] = useState();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(newDate);

  const form = {
    amount,
    payee,
    description,
    date,
    bankAccountNumber: accountNumber,
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const getAmount = (e) => {
    if (isNaN(e.target.value)) {
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

  const getBenefit = (e) => {
    setPayee(e.target.value);
  };

  const getAccountNumber = (e) => {
    if (isNaN(e.target.value)) {
      setFormErrors({
        accountNumber: "Please enter a valid account number",
      });
    } else {
      setFormErrors({
        accountNumber: "",
      });
      setAccountNumber(e.target.value);
    }
  };

  const paymentFunction = (e) => {
    e.preventDefault();
    dispatch(makePayment(form));
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
      title: "Success!",
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
          Make Payment
        </span>
        <div className="flex lg:flex-row flex-col items-center space-x-8 w-full py-6 px-8 ">
          <div className="flex flex-col space-y-4">
            <span className="text-xl font-semibold ">My Cards</span>
            <MasterCard />
            <div className="flex justify-between">
              <span className="text-xl font-semibold ">My Balance</span>
              <span className="text-xl font-semibold w-1/3">
                {" "}
                {balance + " " + currency}
              </span>
            </div>
          </div>
          <div className="w-full">
            <form onSubmit={paymentFunction}>
              <div className="mb-6">
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...((formErrors.amount && {
                    className:
                      "bg-red-100 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  }) || {
                    className:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  })}
                  placeholder="1345 $"
                  required
                  onChange={getAmount}
                />
                {formErrors.amount && (
                  <span className="text-red-500 text-sm">
                    {formErrors.amount}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="benefit"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Benefit
                </label>
                <input
                  type="text"
                  name="benefit"
                  id="benefit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mr. John Doe"
                  required
                  onChange={getBenefit}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="accountNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...((formErrors.accountNumber && {
                    className:
                      "bg-red-100 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  }) || {
                    className:
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  })}
                  placeholder="123456789"
                  required
                  onChange={getAccountNumber}
                />
                {formErrors.accountNumber && (
                  <span className="text-red-500 text-sm">
                    {formErrors.accountNumber}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="Description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="By phone online"
                  required
                  onChange={getDescription}
                />
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
