import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios, AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../../api/letter";
import { URL } from "../../api/URL";
import { IPostLetter } from "../../interfaces/postLetter";

export const getAllPostLetters = createAsyncThunk<
  Array<IPostLetter>,
  void,
  { rejectValue: string }
>("postLetter/all", async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await axiosInstance.get(URL.LETTER);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err as unknown as string);
  }
});
