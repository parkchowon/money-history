class AuthAPI {
  #axios;
  //api에서 넣어준 authAxios를 넣어줌
  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(data) {
    const path = "/register";
    const response = await this.#axios.post(path, data);
    const result = response.data;
    return result;
  }

  async login(data) {
    const path = "/login";
    const response = await this.#axios.post(path, data);
    const result = response.data;
    return result;
  }

  async checkUser(accessToken) {
    const path = "/user";
    const response = await this.#axios.get(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const result = response.data;
    return result;
  }

  async updateUser(data) {
    const path = "/profile";
    const response = await this.#axios.patch(path, data.updateProfile, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${data.token}`,
      },
    });
    const result = response.data;
    return result;
  }
}

export default AuthAPI;
