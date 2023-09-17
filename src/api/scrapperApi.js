/** Libraries */
import axios from "axios";

/** Helpers */
import { getEnvironmets } from "../utils";

const { VITE_API_URL } = getEnvironmets();

const scrapperApi = axios.create({
  baseURL: VITE_API_URL + "/api",
});

scrapperApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default scrapperApi;
