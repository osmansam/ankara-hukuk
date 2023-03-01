import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import barSlice from "./features/bar/barSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    bar: barSlice,
  },
});
