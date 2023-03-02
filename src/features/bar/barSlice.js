import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createBarThunk } from "./barThunk";
import axios from "axios";
const initialState = {
  type: "",
  categoryTr: "",
  categoryEn: "",
  isLoading: false,
  activeTab: "1",
  language: "tr",
  isSideBar: false,
  activeNav: "",
  bars: [],
};

export const createBar = createAsyncThunk(
  "bar/createBar",
  async (bar, thunkAPI) => {
    createBarThunk("bars/create", bar, thunkAPI);
  }
);
//get bars by type
export const getBars = createAsyncThunk(
  "bar/deneme",
  async (type, thunkAPI) => {
    try {
      const resp = await axios.post(`api/v1/bars/`, { type });
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setActiveNav: (state, { payload }) => {
      state.activeNav = payload;
    },
    closeSideBar: (state) => {
      state.isSideBar = false;
    },
    openSideBar: (state) => {
      state.isSideBar = true;
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
      })

      .addCase(getBars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bars = payload.bar;
      })
      .addCase(getBars.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const {
  setActiveTab,
  setLanguage,
  setActiveNav,
  closeSideBar,
  openSideBar,
} = barSlice.actions;
export default barSlice.reducer;
