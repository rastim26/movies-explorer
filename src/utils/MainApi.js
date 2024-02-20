class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }
  
  _checkResponse = (res) => { 
    return res.ok ? res.json() : Promise.reject(`Ошибка api: ${res.status}`);
  }

  createMovie = (movie) => {
    return fetch(`${this._baseUrl}/movies/`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie),
    })
      .then(this._checkResponse)
  }

  deleteMovie = (movie) => {
    return fetch(`${this._baseUrl}/movies/${movie.id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

}

export const api = new MainApi({
  baseUrl: 'https://api.rastim.nomoredomainsrocks.ru/',
});