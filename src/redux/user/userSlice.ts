import { createSlice } from "@reduxjs/toolkit";

import { fetchLogin } from "./asyncThunks/fetchLogin";
import { OrNull, UserData } from "../../types/types";

type UserState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  userData: OrNull<UserData>;
};

const initialState: UserState = {
  isLoading: false,
  isAuthenticated: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.userData = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.userData = payload;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userData = null;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
