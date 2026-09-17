import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardsApi } from "../../../api/cardsApi";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async (_, { rejectWithValue }) => {
    try {
      return await CardsApi.getCards();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Ошибка получения карточек";

      alert(errorMessage);
      console.warn("fetchCardsError", error);
      return rejectWithValue("fetchCardsError");
    }
  }
);
