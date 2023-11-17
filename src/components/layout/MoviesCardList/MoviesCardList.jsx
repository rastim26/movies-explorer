import './MoviesCardList.css';
import MoviesCard from '../../shared/MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section class="cards">
      <div class="cards__container">
        <ul class="cards__list">
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