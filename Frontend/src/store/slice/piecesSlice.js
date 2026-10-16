import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api.js";

export const fetchPieces = createAsyncThunk("pieces/fetchPieces", async () => {
  const res = await axios.get(apiUrl("/authPiece/pieces"));
  return res.data;
});

const piecesSlice = createSlice({
  name: "pieces",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPieces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPieces.fulfilled, (state, action) => {
        state.items = action.payload.filter((item) => item.state === true);

        state.loading = false;
      })
      .addCase(fetchPieces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default piecesSlice.reducer;
