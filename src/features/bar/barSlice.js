import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createBarThunk } from "./barThunk";
const initialState = {
  type: "",
  categoryTr: "",
  categoryEn: "",
  isLoading: false,
  activeTab: "1",
};

export const createBar = createAsyncThunk(
  "bar/createBar",
  async (bar, thunkAPI) => {
    createBarThunk("bars/create", bar, thunkAPI);
  }
);

const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBar.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Bar Created Successfully");
      })
      .addCase(createBar.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { setActiveTab } = barSlice.actions;
export default barSlice.reducer;
