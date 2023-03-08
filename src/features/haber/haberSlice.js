import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const initialState = {
  isLoading: false,
  habers: [],
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
//get all habers
export const getAllHabers = createAsyncThunk(
  "haber/getAllHabers",
  async (type, thunkAPI) => {
    try {
      const resp = await axios.get(`api/v1/habers/`);
      return resp.data;
    } catch (error) {
      console.log(error);
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
    setImage: (state, { payload }) => {
      state.image = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
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
      })
      .addCase(getAllHabers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHabers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.habers = payload.habers;
      })
      .addCase(getAllHabers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleChange, clearForm, setImage, setLoading } =
  haberSlice.actions;
export default haberSlice.reducer;