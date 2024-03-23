import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./Slices/ProjectSlice";

const store = configureStore({
  reducer: {
    project:ProjectReducer,
  },
});

export default store;
