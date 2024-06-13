import axios from "axios";
import AuthAPI from "./auth.api";

const BASE_URL = "http://localhost:4000/";
const AUTH_BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #axios;
  #authAxios;
  auth;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL, withCredentials: true });
    this.#authAxios = axios.create({ baseURL: AUTH_BASE_URL });

    this.auth = new AuthAPI(this.#authAxios);
  }
}

const api = new API();

export default api;
