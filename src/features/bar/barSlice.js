import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  type: "",
  categoryTr: "",
  categoryEn: "",
};

const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    addBar: (state, { payload }) => {
      state.type = payload.type;
      state.categoryTr = payload.categoryTr;
      state.categoryEn = payload.categoryEn;
    },
  },
});

export const { addBar } = barSlice.actions;
export default barSlice.reducer;
