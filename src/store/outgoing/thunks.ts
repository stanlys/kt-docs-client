import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";
import { ILetter } from "../../interfaces/letter";

export const getAllOutgoingLetter = createAsyncThunk<
  Array<ILetter>,
  void,
  { rejectValue: string }
>("outgoing/all", async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<ILetter[]> = await axiosInstance.get(API_ENDPOINTS.OUTGOING);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.message);
  }
});
