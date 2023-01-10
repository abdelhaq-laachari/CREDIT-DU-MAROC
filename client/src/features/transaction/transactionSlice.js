import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "./transactionService";
import { config } from "../../getToken";

// initial state
const initialState = {
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all transactions
export const getTransactions = createAsyncThunk(
  "client/transactions",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user;
      return await transactionService.allTransactions(token);
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

// Slice
export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    reset: (state) => initialState,
    // resetSuccess: (state) => {
    //   state.isSuccess = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = transactionSlice.actions;
export default transactionSlice.reducer;
