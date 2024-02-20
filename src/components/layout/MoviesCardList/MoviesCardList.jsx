import './MoviesCardList.css';
import MoviesCard from '../../shared/MoviesCard/MoviesCard';

function MoviesCardList({cards, onSaveClick}) {
  
  return (
    <section className="cards">
      <div className="cards__container">
        <ul className="cards__list">
          {cards.map((card) => (
            <MoviesCard card={card} key={card.id} onSaveClick={onSaveClick} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;