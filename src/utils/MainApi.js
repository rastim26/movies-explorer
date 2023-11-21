class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }


}

export const api = new MainApi({
  baseUrl: 'https://api.rastim.nomoredomainsrocks.ru/',
});