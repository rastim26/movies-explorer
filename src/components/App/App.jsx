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
  const [restCards, setRestCards] = React.useState([]);
  const [renderedCards, setRenderedCards] = React.useState([]);
  const [isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const [viewportWidth, setViewportWidth] = React.useState();


  React.useEffect(() => {
    setWidth();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  function setWidth() {
    const getWindowWidth = () => window.innerWidth;
    const width = getWindowWidth();
    setViewportWidth(width);
  }  

  function handleResize() {
    setTimeout(setWidth, 1000);
  }

  function loadCards() {
    setPreloaderOpen(true);

    moviesApi.getCards()
    .then((moviesData) => {
      let cardList;
      switch (true) {
        case viewportWidth > 870:
          cardList = moviesData.splice(0, 12);
          break;
          case viewportWidth > 580 && viewportWidth <= 870:
            cardList = moviesData.splice(0, 8);
            break;
            default: 
            cardList = moviesData.splice(0, 5);
          }
          setRenderedCards(cardList);
          setRestCards(moviesData);
      setPreloaderOpen(false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function loadMore() {
    let cardList;
    switch (true) {
      case viewportWidth > 870:
        cardList = restCards.splice(0, 3);
          break;
      case viewportWidth > 580 && viewportWidth <= 870:
        cardList = restCards.splice(0, 2);
          break;
      default: 
        cardList = restCards.splice(0, 2);
    }

    const cardListSum = renderedCards.concat(cardList);
    setRenderedCards(cardListSum);
  }

  return (
    // <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />}/>

          <Route path="/movies" element={<ProtectedRouteElement
              element={Movies}
              cards={renderedCards}
              loggedIn={loggedIn}
              loadCards={loadCards}
              loadMore={loadMore}
              isPreloaderOpen={isPreloaderOpen}
          />} />

          <Route path="/saved-movies" element={<ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
          />} />

          <Route path="/profile" element={<ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
          />} />

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
