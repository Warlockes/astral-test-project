import { API_METHODS } from "../constants";
import { UserData } from "../types/types";
import { axiosInstance } from "./instance";
import { FetchLoginDto } from "./types";

export const UserApi = {
  async getUser(dto: FetchLoginDto) {
    const { data } = await axiosInstance.post<UserData>(
      API_METHODS.GET_USER,
      dto
    );

    return data;
  },
};
