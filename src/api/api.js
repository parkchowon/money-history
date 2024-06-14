import axios from "axios";
import AuthAPI from "./auth.api";
import MoneyAPI from "./money.api";

const BASE_URL = "https://easy-pacific-horn.glitch.me";
const AUTH_BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #axios;
  #authAxios;
  auth;
  money;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL });
    this.#authAxios = axios.create({ baseURL: AUTH_BASE_URL });

    this.auth = new AuthAPI(this.#authAxios);
    this.money = new MoneyAPI(this.#axios);
  }
}

const api = new API();

export default api;
