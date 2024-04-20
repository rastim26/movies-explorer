import './Movies.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import AddMore from '../../layout/AddMore/AddMore';
import Preloader from '../../shared/Preloader/Preloader';

function Movies({cards, savedCards, loadCards, renderCards, loadMore, isPreloaderOpen, message, handleSaveClick}) {
  return (
    <div className="movies-page">
      <Header activeLink='movies' />
      <main className="content">
        <SearchForm loadCards={loadCards} renderCards={renderCards} />
        {cards.length
        ? <>
            <MoviesCardList cards={cards} savedCards={savedCards} handleSaveClick={handleSaveClick} />
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