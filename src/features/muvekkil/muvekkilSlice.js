import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createMuvekkilThunk, updateMuvekkilThunk } from "./muvekkilThunk";
const initialState = {
  isLoading: false,
  muvekkil: {},
  muvekkils: [],
  ad: "",
  soyad: "",
  tc: "",
  telefon: "",
  email: "",
  adres: "",
  dosyaMahkemesi: "",
  dosyaNo: "",
  toplamBorc: "",
  vekaletUcreti: "",
  masraf: "",
  alinanVekalet: "",
  kalanTutar: "",
  vadeTarihi: "",
  yapilanMasraf: "",
  isEditing: false,
};

export const createMuvekkil = createAsyncThunk(
  "muvekkil/createMuvekkil",
  async (muvekkil, thunkAPI) => {
    createMuvekkilThunk("muvekkils/", muvekkil, thunkAPI);
  }
);
export const updateMuvekkil = createAsyncThunk(
  "muvekkil/updateMuvekkil",
  async (muvekkil, thunkAPI) => {
    updateMuvekkilThunk(`muvekkils/${muvekkil._id}`, muvekkil, thunkAPI);
  }
);

const muvekkilSlice = createSlice({
  name: "muvekkil",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditing: (state, { payload }) => {
      state.isEditing = payload;
    },
    clearMuvekkil: (state) => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createMuvekkil.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMuvekkil.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Muvekkil Created Successfully");
      })
      .addCase(createMuvekkil.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});
export const { handleChange, setEditing, clearMuvekkil } =
  muvekkilSlice.actions;
export default muvekkilSlice.reducer;
