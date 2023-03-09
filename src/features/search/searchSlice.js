import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllHabersThunk } from "./searchThunk";
import axios from "axios";

const initialState = {
  isLoading: false,
  page: 1,
  habers: [],
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  page: 1,
  totalHabers: 0,
  numberOfPages: 1,
  isLoading: true,
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

//get all habers
export const getAllHabers = createAsyncThunk(
  "search/getAllHabers",
  getAllHabersThunk
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHabers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllHabers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.habers = payload.habers;
        state.totalHabers = payload.totalHabers;
        state.numberOfPages = payload.numOfPages;
      })
      .addCase(getAllHabers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { changePage } = searchSlice.actions;

export default searchSlice.reducer;
