class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }
  
  _checkResponse = (res) => { 
    return res.ok ? res.json() : Promise.reject(`Ошибка api: ${res.status}`);
  }

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  patchUserInfo = ({ name, email }) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email }),
    })
      .then(this._checkResponse)
  }

  getSavedMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this._checkResponse)
  }

  createMovie = (movie) => {
    return fetch(`${this._baseUrl}/movies`, {
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
    return fetch(`${this._baseUrl}/movies/${movie.movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(this._checkResponse)
  };
  
  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      // credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse)
  }; 

}

export const api = new MainApi({
  baseUrl: 'https://api.rastim.nomoredomainsrocks.ru',
  // baseUrl: 'http://localhost:3000',
});