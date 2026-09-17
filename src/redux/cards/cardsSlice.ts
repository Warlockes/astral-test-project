import { createSlice } from "@reduxjs/toolkit";

import { CardData } from "../../types/types";
import { fetchCards } from "./asyncThunks/fetchCards";

type CardsState = {
  isLoading: boolean;
  data: CardData[];
};

const initialState: CardsState = {
  isLoading: false,
  data: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
      state.data = [];
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
    });
  },
});

export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
