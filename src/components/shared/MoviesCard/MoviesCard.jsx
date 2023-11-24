import { Link } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({card}) {

  const {
    country, created_at, description, director, duration,
    id, image, nameEN, nameRU,
    trailerLink, updates_at, year,
  } = card;

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;

  return (
    <li className="cards__item">
      <div className="cards__panel">
        <div className="cards__info">
          <h2 className="cards__name">{nameRU}</h2>
          <p className="cards__length">{durationHours}ч {durationMinutes}м</p>
        </div>
        <button type="button" className="cards__save"></button>
      </div>
      <Link to={trailerLink} className="cards__preview-link">
        <img src={'https://api.nomoreparties.co/' + image.url} alt="Превью" className="cards__preview" />
      </Link>
    </li>
  );
}

export default MoviesCard;