import './MoviesCardList.css';
import MoviesCard from '../../shared/MoviesCard/MoviesCard';

function MoviesCardList({cards, savedCards, handleSaveClick}) {
  
  return (
    <section className="cards">
      <div className="cards__container">
        <ul className="cards__list">
          {cards.map((card) => (
            <MoviesCard card={card} key={card.movieId} savedCards={savedCards} handleSaveClick={handleSaveClick} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;