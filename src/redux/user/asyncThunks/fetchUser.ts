import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserApi } from "../../../api/userApi";
import { FetchLoginDto } from "../../../api/types";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (dto: FetchLoginDto, { rejectWithValue }) => {
    try {
      const { username, password } = dto;

      if (username !== "admin" || password !== "admin") {
        throw new Error("Вход невозможен! Неверный логин или пароль!");
      }

      return await UserApi.getUser(dto);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Ошибка аутентификации";

      alert(errorMessage);
      console.warn("fetchUserError", error);
      return rejectWithValue("fetchUserError");
    }
  }
);
