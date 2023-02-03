import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDelivery, ILoadingDelivery } from "../../interfaces/delivery";
import { getAllDeliveryOrganization } from "./thunk";



const initialState: ILoadingDelivery = {
  isLoading: false,
  error: null,
  organization: [],
};

export const PostLetterSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllDeliveryOrganization.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllDeliveryOrganization.fulfilled,
        (state, action: PayloadAction<Array<IDelivery>>) => {
          state.isLoading = false;
          state.organization = action.payload;
        }
      )
      .addCase(getAllDeliveryOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      })
  },
});

export default PostLetterSlice.reducer;
