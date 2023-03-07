import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { checkForUnauthorizedResponse } from "../../utils/axios";
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
//create haber
export const createHaber = createAsyncThunk(
  "haber/createHaber",
  async (haber, thunkAPI) => {
    try {
      const resp = await axios.post(`api/v1/habers/`, haber);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const haberSlice = createSlice({
  name: "haber",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearForm: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHaber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHaber.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Haber başarıyla oluşturuldu.");
      })
      .addCase(createHaber.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleChange, clearForm } = haberSlice.actions;
export default haberSlice.reducer;
