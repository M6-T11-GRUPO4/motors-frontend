import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/",
});

export const apiPrivate = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: `Bearer ${JSON.parse(
      JSON.stringify(localStorage.getItem("@token"))
    )}`,
  },
});