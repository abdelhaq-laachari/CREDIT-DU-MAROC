import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";

function Modal({ setOpenModal }) {
  const navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Choose the transaction type</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              navigate("deposit");
            }}
            id="cancelBtn"
          >
            Deposit
          </button>
          <button
            id="withdraw"
            onClick={() => {
              navigate("deposit");
            }}
          >
            {" "}
            Withdraw
          </button>
          <button
            id="payment"
            onClick={() => {
              navigate("makePayment");
            }}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
