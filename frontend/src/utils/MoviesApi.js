class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse = (res) => { 
    return res.ok ? res.json() : Promise.reject(`Ошибка api: ${res.status}`);
  }

  getMovies = () => {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this._checkResponse)
  }

}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
});