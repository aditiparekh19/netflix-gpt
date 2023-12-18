import { configureStore } from "@reduxjs/toolkit";
import userReduceer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReduceer,
  },
});

export default appStore;
