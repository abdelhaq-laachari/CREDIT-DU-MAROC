import React, { useEffect, useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/Side bar/Sidebar";
import Nav from "../../components/Top nav/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getTransactions,
  reset,
} from "../../features/transaction/transactionSlice";
import Spinner from "../../components/Spinner/Spinner";

const Transaction = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { transactions, isLoading, isError, message } = useSelector(
    (state) => state.transaction
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
      toast.error(message)
    }

    if (!user) {
      navigate('/signin')
    }

    dispatch(getTransactions())

    return () => {
      dispatch(reset())
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Nav />
        <Datatable data={transactions} title="All Transactions" />
      </div>
    </div>
  );
};

export default Transaction;
