import { createSlice } from "@reduxjs/toolkit";
import { ILoadLetter } from "../../interfaces/letter";
import { getAllOutgoingLetter } from "./thunks";

const initialState: ILoadLetter = {
  error: null,
  isLoading: false,
  letters: [],
};

export const OutgoingSlice = createSlice({
  name: "outgoing",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllOutgoingLetter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllOutgoingLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
      })
      .addCase(getAllOutgoingLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default OutgoingSlice.reducer;
