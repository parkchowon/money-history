class MoneyAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async getMoneyList() {
    const path = "/moneys";
    const response = await this.#axios.get(path);
    const result = await response.data;
    return result;
  }

  async addMoneyList(data) {
    const path = "/moneys";
    const response = await this.#axios.post(path, data);
    const result = response.data;
    return result;
  }

  async updateMoneyList(data) {
    const path = `/moneys/${data.postId}`;
    const response = await this.#axios.put(path, data.changeDetail);
    const result = response.data;
    return result;
  }

  async deleteMoneyList(postId) {
    const path = `/moneys/${postId}`;
    const response = await this.#axios.delete(path);
    const result = response.data;
    return result;
  }
}

export default MoneyAPI;
