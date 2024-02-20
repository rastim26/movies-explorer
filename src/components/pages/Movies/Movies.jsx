import './Movies.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import AddMore from '../../layout/AddMore/AddMore';
import Preloader from '../../shared/Preloader/Preloader';

function Movies({cards, loadCards, loadMore, isPreloaderOpen, message, onSaveClick}) {
  return (
    <div className="movies-page">
      <Header activeLink='movies' />
      <main className="content">
        <SearchForm loadCards={loadCards} />
        {cards.length
        ? <>
            <MoviesCardList cards={cards} onSaveClick={onSaveClick} />
            <AddMore loadMore={loadMore}  />
          </>
        : <p className="message-text">{message}</p> }
      </main>
      <Footer />
      <Preloader isOpen={isPreloaderOpen} />
    </div>
  );
}

export default Movies;