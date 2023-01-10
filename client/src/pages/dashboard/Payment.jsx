import React, { useEffect } from "react";
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/Side bar/Sidebar";
import Nav from "../../components/Top nav/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {reset, getPayments} from "../../features/payment/paymentSlice";
import Spinner from "../../components/Spinner/Spinner";

const Transaction = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { payments, isLoading, isError, message } = useSelector(
    (state) => state.payment
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!user) {
      navigate('/signin')
    }

    dispatch(getPayments())

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
        <Datatable data={payments} title="All Transactions" />
      </div>
    </div>
  );
};

export default Transaction;
