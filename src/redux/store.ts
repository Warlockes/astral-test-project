import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import cardsReducer from "./cards/cardsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
