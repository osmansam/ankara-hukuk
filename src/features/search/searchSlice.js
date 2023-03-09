import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isLoading: false,
  page: 1,
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

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHabers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllHabers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalHabers = payload.totalHabers;
        state.numberOfPages = payload.numOfPages;
      })
      .addCase(getAllHabers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const {} = searchSlice.actions;

export default searchSlice.reducer;
