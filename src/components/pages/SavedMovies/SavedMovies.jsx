// import './SavedMovies.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import AddMore from '../../layout/AddMore/AddMore';

function SavedMovies() {
  return (
    <div className="saved-movies-page">
      <Header />
      <main className="content">
        <SearchForm />
        <MoviesCardList />
        <AddMore />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;