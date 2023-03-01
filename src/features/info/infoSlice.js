import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createInfoThunk } from "./infoThunk";
const initialState = {
  type: "",
  headerTr: "",
  headerEn: "",
  infoTr: "",
  infoEn: "",
  isLoading: false,
};

export const createInfo = createAsyncThunk(
  "info/createInfo",
  async (info, thunkAPI) => {
    createInfoThunk("infos/create", info, thunkAPI);
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Info Created Successfully");
      })
      .addCase(createInfo.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const {} = infoSlice.actions;
export default infoSlice.reducer;
