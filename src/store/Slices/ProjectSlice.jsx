import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectName: localStorage.getItem("projectName")
  ? JSON.parse(localStorage.getItem("projectName"))
  : null,
  project: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.course = action.payload;
      },
    resetProjectState: (state) => {
      state.project = null;
    },
  },
});

export const { setProject, resetProjectState } = projectSlice.actions;

export default projectSlice.reducer;
