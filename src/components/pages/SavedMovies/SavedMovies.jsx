// import './SavedMovies.css';
import React from "react";
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import Preloader from '../../shared/Preloader/Preloader';

function SavedMovies({cards, savedCards, loadSavedCards, applyfilter, isPreloaderOpen, message, handleSaveClick}) {

  React.useEffect(() => {
    loadSavedCards();
  }, [savedCards.length])

  return (
    <div className="saved-movies-page">
      <Header activeLink="saved-movies" />
      <main className="content">
        <SearchForm applyfilter={applyfilter} />
        {cards.length
        ? <MoviesCardList cards={cards} savedCards={savedCards} handleSaveClick={handleSaveClick} />
        : <p className="message-text">{message}</p> }
      </main>
      <Footer />
      <Preloader isOpen={isPreloaderOpen} />
    </div>
  );
}

export default SavedMovies;