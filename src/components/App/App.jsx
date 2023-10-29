import './App.css';
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import AboutProject from '../Main/AboutProject/AboutProject';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../account/Profile/Profile";
import Login from "../account/Login/Login";
import Register from "../account/Register/Register";
import Footer from "../shared/Footer/Footer"
import NotFound404 from '../404/404';

function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser} >
      <div className="page__container">
        <Routes>
          <Route path="/" element={<AboutProject />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>

        <Footer />

      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
