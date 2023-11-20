// import './Movies.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SearchForm from '../../layout/SearchForm/SearchForm';
import MoviesCardList from '../../layout/MoviesCardList/MoviesCardList';
import AddMore from '../../layout/AddMore/AddMore';
import Preloader from '../../shared/Preloader/Preloader';

function Movies() {
  return (
    <div className="movies-page">
      <Header />
      <main className="content">
        <SearchForm />
        <MoviesCardList />
        <AddMore />
      </main>
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;