import './App.css';
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PageNotFound from '../pages/404/404';
import ProtectedRouteElement from '../ProtectedRoute';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  // React.useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([moviesApi.getCards()])
  //     .then(([moviesData]) => {
  //       setCards(moviesData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   }
  // }, [loggedIn]);

  React.useEffect(() => {
    moviesApi.getCards()
    .then((moviesData) => {
      setCards(moviesData);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    // <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />}/>

          <Route path="/movies" element={<ProtectedRouteElement element={Movies} cards={cards} loggedIn={loggedIn}/>} />
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn}/>} />
          <Route path="/profile" element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn}/>} />

          <Route path="/main" element={<Main loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
