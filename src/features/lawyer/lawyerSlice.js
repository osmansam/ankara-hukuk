import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createLawyerThunk } from "./lawyerThunk";

const initialState = {
  isLoading: false,
  type: "Lawyer",
  typeOptions: ["Lawyer", "Dealer"],
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

export const { handleChange, clearForm, setImage, setLoading } =
  lawyerSlice.actions;
export default lawyerSlice.reducer;
