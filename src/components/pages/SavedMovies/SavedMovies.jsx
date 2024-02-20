// import './SavedMovies.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import AddMore from '../../layout/AddMore/AddMore';
import Preloader from '../../shared/Preloader/Preloader';

function SavedMovies({cards, loadCards, isPreloaderOpen, message}) {
  return (
    <div className="saved-movies-page">
      <Header activeLink='saved-movies' />
      <main className="content">
        <SearchForm loadCards={loadCards} />
        {cards.length
        ? <MoviesCardList cards={cards} />
        : <p className="message-text">{message}</p> }
      </main>
      <Footer />
      <Preloader isOpen={isPreloaderOpen} />
    </div>
  );
}

export default SavedMovies;