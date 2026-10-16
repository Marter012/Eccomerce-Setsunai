// overlaySlice.js
import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    active: false,
  },
  reducers: {
    openOverlay: (state) => {
      state.active = true;
    },
    closeOverlay: (state) => {
      state.active = false;
    },
    toggleOverlay: (state) => {
      state.active = !state.active;
    },
  },
});

export const { openOverlay, closeOverlay, toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
