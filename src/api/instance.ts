import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://kirushckin_alexei.lightboxapi.ru",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  },
  responseType: "json",
});
