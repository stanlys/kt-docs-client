import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoadLetter } from "../../interfaces/letter";
import { createOutgoingLetter, getAllOutgoingLetter } from "./thunks";

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
      })
      .addCase(createOutgoingLetter.pending, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(
        createOutgoingLetter.fulfilled,
        (state, action: PayloadAction<ILetter>) => {
          state.isLoading = false;
          state.letters.push(action.payload);
        }
      )
      .addCase(createOutgoingLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default OutgoingSlice.reducer;
