import './App.css';
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound404 from '../pages/404/404';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);



  return (
    // <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>

      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
