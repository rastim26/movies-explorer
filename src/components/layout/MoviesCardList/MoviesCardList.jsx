import './MoviesCardList.css';
import MoviesCard from '../../shared/MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="cards__container">
        <ul className="cards__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;