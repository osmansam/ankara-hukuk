import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isLoading: false,
  haberler: [],
  haber: {},
  titleTr: "",
  titleEn: "",
  contentTr: "",
  contentEn: "",
  image: "",
  date: "",
};

const haberSlice = createSlice({
  name: "haber",
  initialState,
  reducers: {},
});

export const {} = haberSlice.actions;
export default haberSlice.reducer;
