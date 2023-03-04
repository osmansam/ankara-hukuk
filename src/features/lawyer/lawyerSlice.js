import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createLawyerThunk } from "./lawyerThunk";
import axios from "axios";

const initialState = {
  isLoading: false,
  type: "Avukat",
  typeOptions: ["Avukat", "Arabulucu"],
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
  lawyers: [],
};

export const createLawyer = createAsyncThunk(
  "lawyer/createLawyer",
  async (lawyer, thunkAPI) => {
    createLawyerThunk("lawyers/", lawyer, thunkAPI);
  }
);
//get lawyers
export const getLawyers = createAsyncThunk(
  "lawyer/getLawyers",
  async (type, thunkAPI) => {
    try {
      const resp = await axios.get(`api/v1/lawyers/`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
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
      })
      .addCase(getLawyers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLawyers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lawyers = payload.lawyers;
      })
      .addCase(getLawyers.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { handleChange, clearForm, setImage, setLoading } =
  lawyerSlice.actions;
export default lawyerSlice.reducer;
