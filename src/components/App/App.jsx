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
import Header from '../layout/Header/Header';
import Footer from "../layout/Footer/Footer"
import AboutProject from '../layout/AboutProject/AboutProject';
import Techs from '../layout/Techs/Techs';
import AboutMe from '../layout/AboutMe/AboutMe';
import Portfolio from '../layout/Portfolio/Portfolio';
import Promo from '../layout/Promo/Promo';

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

        <Header />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />

      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
