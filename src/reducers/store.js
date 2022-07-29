import { configureStore } from "@reduxjs/toolkit";
import URCOLOR from "./URCOLOR";

export default configureStore({
  reducer: {
    URCOLOR,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});