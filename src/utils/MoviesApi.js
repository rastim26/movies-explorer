class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse = (res) => { 
    return res.ok ? res.json() : Promise.reject(`Ошибка api: ${res.status}`);
  }

  getCards = () => {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this._checkResponse)
  }

}

export const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});