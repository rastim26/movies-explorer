import './App.css';
import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// import AboutProject from '../Main/AboutProject/AboutProject';
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../account/Profile/Profile";
// import Login from "../account/Login/Login";
// import Register from "../account/Register/Register";
// import NotFound404 from '../404/404';


// import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';

function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser} >
      <div className="page__container">
        {/* <Routes>
          <Route path="/" element={<AboutProject />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes> */}
        {/* <Main /> */}
        <Movies />
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
