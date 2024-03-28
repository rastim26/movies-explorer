import './App.css';
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { moviesApi } from "../../utils/MoviesApi";
import { api } from "../../utils/MainApi";

import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PageNotFound from '../pages/404/404';
import ProtectedRouteElement from '../ProtectedRoute';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [restCards, setRestCards] = React.useState([]);
  const [renderedCards, setRenderedCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const [viewportWidth, setViewportWidth] = React.useState();
  const [message, setMessage] = React.useState('');
  const [serverErrMsg, setServerErrMsg] = React.useState('');
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const width = findWidth();
    renderCards(width);
    window.addEventListener('resize', handleResize);
    tokenCheck();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // React.useEffect(() => {
  //   if (loggedIn) {
  //     api.getUserInfo()
  //     .then((user) => {
  //       setCurrentUser(user);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   }
  // }, [loggedIn]);


  function findWidth() {
    const width = window.innerWidth;
    setViewportWidth(width);
    return width;
  }  

  function handleResize() {
    setTimeout(findWidth, 1000);
  }

  function loadCards({queryText, isShort}) {
    setPreloaderOpen(true);
    moviesApi.getCards()
    .then((cards) => {
      if (cards.length) {
        localStorage.setItem("foundItems", JSON.stringify(cards));
        localStorage.setItem("queryText", queryText);
        localStorage.setItem("isShort", JSON.stringify(isShort));
      } else {
        setMessage('Ничего не найдено');
      }
    })
    .then(() => renderCards(viewportWidth))
    .catch(err => {
      console.log(err);
      setMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
    })
    .finally(() => {
      setPreloaderOpen(false);
    });
  }

  function loadSavedCards() {
    api.getSavedMovies()
    .then((cards) => {
      if (cards.length) {
        setSavedCards(cards);
      } else {
        setMessage('Ничего не найдено');
      }
    })
    .catch(err => {
      console.log(err);
      setMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
    })
    .finally(() => {
      setPreloaderOpen(false);
    });
  }

  function renderCards(viewportWidth) {
    const cards = JSON.parse(localStorage.getItem("foundItems"));
    if (!cards) {setMessage('Ничего не найдено'); return}
    let cardList;
    switch (true) {
      case viewportWidth > 870:
        cardList = cards.splice(0, 12);
        break;
      case viewportWidth > 580 && viewportWidth <= 870:
        cardList = cards.splice(0, 8);
        break;
      default: 
        cardList = cards.splice(0, 5);
      }

    setRenderedCards(cardList);
    setRestCards(cards);
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

  function handleSaveClick(card) {
    // const isSaved = savedCards.some(i => i.id === card.id);
    // (!isSaved ? api.createMovie(card) : api.deleteMovie(card))
    api.createMovie(card);
  }

  function handleLogin({email, password}) {
    return api.authorize(email, password)
    .then(({user, token}) => {
      if (token){
        localStorage.setItem('jwt', token);
        setLoggedIn(true);
        setCurrentUser(user);
        navigate('/movies', {replace: true})
      }
    })
    .catch(err => {
      console.log(err);
      setServerErrMsg(err);
    });
  }

  function handleRegister({name, email, password}) {
    return api.register(name, email, password)
    .then(() => {
      setLoggedIn(true);
      navigate('/movies', {replace: true});
    })
    .catch(err => {
      console.log(err);
      setServerErrMsg(err);
    });
  }

  function updateUser({name, email}) {
    return api.patchUserInfo({name, email})
    .then(() => {
      console.log("Данные пользователя обновлены!")
    })
    .catch(err => {
      console.log(err);
      setServerErrMsg(err);
    });
  }

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage, 
    // эта функция проверит, действующий он или нет
    const token = localStorage.getItem('jwt');

    if (token){ 
      api.getUserInfo() // проверим токен
      .then((user) => {
        if (user){
          setLoggedIn(true);  // авторизуем пользователя
          setCurrentUser(user);
        }
      })
      .catch(err => console.log(err))
    }
  } 

  return (
    <CurrentUserContext.Provider value={currentUser} >
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
              message={message}
              onSaveClick={handleSaveClick}
          />} />

          <Route path="/saved-movies" element={<ProtectedRouteElement
              element={SavedMovies}
              cards={savedCards}
              loggedIn={loggedIn}
              loadCards={loadSavedCards}
              loadMore={loadMore}
              isPreloaderOpen={isPreloaderOpen}
              message={message}
              onSaveClick={handleSaveClick}
          />} />

          <Route path="/profile" element={<ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              updateUser={updateUser}
          />} />

          <Route path="/main" element={<Main loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} serverErrMsg={serverErrMsg} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} serverErrMsg={serverErrMsg} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
