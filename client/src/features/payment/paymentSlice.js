import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentService from "./paymentService";

// initial state
const initialState = {
  payments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all payments
export const getPayments = createAsyncThunk(
  "client/payments",
  async (_, thunkAPI) => {
    try {
      return await paymentService.allPayments();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Make payment
export const makePayment = createAsyncThunk(
  "client/payment",
  async (data, thunkAPI) => {
    try {
      return await paymentService.sendMoney(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// Slice
export const paymentSlice = createSlice({
  name: "Payments",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPayments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.payments = action.payload;
      })
      .addCase(getPayments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(makePayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
