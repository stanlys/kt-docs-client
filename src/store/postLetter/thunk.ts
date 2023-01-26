import { createAsyncThunk } from "@reduxjs/toolkit";
import { RejectedWithValueActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { Axios, AxiosError, AxiosResponse } from "axios";
import { string } from "yup";
import { axiosInstance } from "../../api/letter";
import { URL } from "../../api/URL";
import { ICreatedPostLetter, IPostLetter } from "../../interfaces/postLetter";

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
    return rejectWithValue(err.message);
  }
});

export const addPostLetter = createAsyncThunk(
  "postLetter/add",
  async (letter: ICreatedPostLetter, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IPostLetter, unknown> =
        await axiosInstance.post(URL.LETTER, letter);
      return response;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

