import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import barSlice from "./features/bar/barSlice";
import infoSlice from "./features/info/infoSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    bar: barSlice,
    info: infoSlice,
  },
});
