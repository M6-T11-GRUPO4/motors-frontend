<<<<<<<< HEAD:src/services/api.ts
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
========
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const apiPrivate = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("@token")
    )}`,
  },
});
>>>>>>>> 6cc33489f040d809c64b1523c5ae9efead1c065e:src/services/api.js
