import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createInfoThunk } from "./infoThunk";
import axios from "axios";
const initialState = {
  type: "",
  headerTr: "",
  headerEn: "",
  infoTr: "",
  infoEn: "",
  isLoading: false,
  infos: [],
};

export const createInfo = createAsyncThunk(
  "info/createInfo",
  async (info, thunkAPI) => {
    createInfoThunk("infos/create", info, thunkAPI);
  }
);
//get infos by type
export const getInfos = createAsyncThunk(
  "info/getInfos",
  async (type, thunkAPI) => {
    try {
      const resp = await axios.post(`api/v1/infos/`, { type });
      return resp.data;
    } catch (error) {
      console.log(error);
    }
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
      })
      .addCase(getInfos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInfos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.infos = payload.info;
      })
      .addCase(getInfos.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const {} = infoSlice.actions;
export default infoSlice.reducer;
