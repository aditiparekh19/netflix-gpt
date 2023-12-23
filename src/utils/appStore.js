import { configureStore } from "@reduxjs/toolkit";
import userReduceer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReduceer,
    movies: moviesReducer,
  },
});

export default appStore;
