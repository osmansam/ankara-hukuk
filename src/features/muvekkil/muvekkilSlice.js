import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createMuvekkilThunk,
  updateMuvekkilThunk,
  deleteMuvekkilThunk,
} from "./muvekkilThunk";
import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";
const initialState = {
  id: "",
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
  editMuvekkilId: "",
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
    updateMuvekkilThunk(`muvekkils/${muvekkil.id}`, muvekkil, thunkAPI);
  }
);
export const deleteMuvekkil = createAsyncThunk(
  "muvekkil/deleteMuvekkil",
  async (muvekkil, thunkAPI) => {
    deleteMuvekkilThunk(`muvekkils/${muvekkil._id}`, muvekkil, thunkAPI);
  }
);

export const getMuvekkils = createAsyncThunk(
  "muvekkil/getMuvekkils",
  async (muvekkil, thunkAPI) => {
    try {
      const resp = await axios.get("/api/v1/muvekkils");
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
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
    setId: (state, { payload }) => {
      state.id = payload;
    },
    setEditMuvekkil: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
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
      })
      .addCase(updateMuvekkil.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMuvekkil.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Muvekkil Updated Successfully");
      })
      .addCase(updateMuvekkil.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(getMuvekkils.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMuvekkils.fulfilled, (state, action) => {
        state.isLoading = false;
        state.muvekkils = action.payload.muvekkils;
      })
      .addCase(getMuvekkils.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(deleteMuvekkil.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMuvekkil.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Muvekkil Deleted Successfully");
      })
      .addCase(deleteMuvekkil.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});
export const {
  handleChange,
  setEditing,
  clearMuvekkil,
  setEditMuvekkil,
  setId,
} = muvekkilSlice.actions;
export default muvekkilSlice.reducer;
