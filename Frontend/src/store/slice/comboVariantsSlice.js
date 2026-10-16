import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api.js";

export const fecthcomboVariants = createAsyncThunk(
  "combinedPieces/fecthcomboVariants",
  async () => {
    const res = await axios.get(apiUrl("/authCombinedPieces/comboVariants"));
    return res.data;
  }
);

const comboVariantsSlice = createSlice({
  name: "comboVariants",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthcomboVariants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fecthcomboVariants.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fecthcomboVariants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default comboVariantsSlice.reducer;
