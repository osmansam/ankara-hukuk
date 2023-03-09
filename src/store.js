import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import barSlice from "./features/bar/barSlice";
import infoSlice from "./features/info/infoSlice";
import lawyerSlice from "./features/lawyer/lawyerSlice";
import linkSlice from "./features/link/linkSlice";
import muvekkilSlice from "./features/muvekkil/muvekkilSlice";
import haberSlice from "./features/haber/haberSlice";
import searchSlice from "./features/search/searchSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    bar: barSlice,
    info: infoSlice,
    lawyer: lawyerSlice,
    link: linkSlice,
    muvekkil: muvekkilSlice,
    haber: haberSlice,
    search: searchSlice,
  },
});
