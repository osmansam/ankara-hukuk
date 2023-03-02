import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createLinkThunk, getLinksThunk } from "./linkThunk";

const initialState = {
  en: "",
  tr: "",
  isLoading: false,
  image: "",
  link: "",
  links: [],
};
// create link
export const createLink = createAsyncThunk(
  "link/createLink",
  async (link, thunkAPI) => {
    createLinkThunk("links/", link, thunkAPI);
  }
);

const linkSlice = createSlice({
  name: "link",
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
    setLinks: (state, { payload }) => {
      state.links = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLink.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Link Created Successfully");
      })
      .addCase(createLink.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { handleChange, clearForm, setLoading, setImage, setLinks } =
  linkSlice.actions;
export default linkSlice.reducer;
