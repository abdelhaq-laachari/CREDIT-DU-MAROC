import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import transactionReducer from "../features/transaction/transactionSlice";
import paymentReducer from "../features/payment/paymentSlice";
import cardReducer from "../features/card/cardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
    payment: paymentReducer,
    card: cardReducer,
  },
});
