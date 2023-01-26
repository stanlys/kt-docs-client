import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoadPostLetter, IPostLetter } from "../../interfaces/postLetter";
import { getAllPostLetters } from "./thunk";

const initialState: ILoadPostLetter = {
  isLoading: false,
  error: null,
  postLetters: [],
};

export const PostLetterSlice = createSlice({
  name: "postLetter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPostLetters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllPostLetters.fulfilled,
        (state, action: PayloadAction<Array<IPostLetter>>) => {
          state.isLoading = false;
          state.postLetters = action.payload;
        }
      )
      .addCase(getAllPostLetters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      });
  },
});

export default PostLetterSlice.reducer;
