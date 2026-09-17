import { AppState } from "../store";

export const selectUserState = (state: AppState) => state.user;
export const selectLoginInProgress = (state: AppState) => state.user.isLoading;
export const selectIsAuthenticated = (state: AppState) =>
  state.user.isAuthenticated;
export const selectUserData = (state: AppState) => state.user.userData;
