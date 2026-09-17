import { AppState } from "../store";

export const selectCardsState = (state: AppState) => state.cards;
export const selectCardsIsLoading = (state: AppState) => state.cards.isLoading;
export const selectCardsData = (state: AppState) => state.cards.data;
