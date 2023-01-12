import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cardService from "./cardService";

// initial state
const initialState = {
  card: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get card details
export const getCard = createAsyncThunk(
  "client/getCard",
  async (_, thunkAPI) => {
    try {
      return await cardService.getCardDetails();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// card slice
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.card = action.payload;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cardSlice.actions;
export default cardSlice.reducer;
