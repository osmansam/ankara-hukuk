import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createLawyerThunk } from "./lawyerThunk";

const initialState = {
  isLoading: false,
  name: "",
  email: "",
  image: "",
  dutyTr: "",
  dutyEn: "",
  educationTr: "",
  educationEn: "",
  barAssociationTr: "",
  barAssociationEn: "",
  languagesTr: "",
  languagesEn: "",
  expertiseTr: "",
  expertiseEn: "",
};

export const createLawyer = createAsyncThunk(
  "lawyer/createLawyer",
  async (lawyer, thunkAPI) => {
    createLawyerThunk("lawyers/", lawyer, thunkAPI);
  }
);

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLawyer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLawyer.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Lawyer Created Successfully");
      })
      .addCase(createLawyer.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const {} = lawyerSlice.actions;
export default lawyerSlice.reducer;
