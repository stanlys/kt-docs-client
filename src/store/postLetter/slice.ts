import { createSlice } from "@reduxjs/toolkit";
import { getAllPostLetters } from "./thunk";

export const PostLetterSlice = createSlice({
  name: "postLetter",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPostLetters.pending, (state) => {})
      .addCase(getAllPostLetters.fulfilled, (state) => {})
      .addCase(getAllPostLetters.rejected, (state) => {});
  },
});

export default PostLetterSlice.reducer;
