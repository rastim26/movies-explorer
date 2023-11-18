import preview from '../../../images/previews/preview-1.jpeg';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <li className="cards__item">
      <div className="cards__panel">
        <div className="cards__info">
          <p className="cards__name">33 слова о дизайне</p>
          <p className="cards__length">1ч 47м</p>
        </div>
        <button type="button" className="cards__save"></button>
      </div>
      <img src={preview} alt="Превью" className="cards__preview" />
    </li>
  );
}

export default MoviesCard;