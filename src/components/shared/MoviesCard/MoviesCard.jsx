import './MoviesCard.css';
import { Link } from 'react-router-dom';
import React from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard({card, savedCards, onSaveClick}) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setSaved] = React.useState(false);
  
  React.useEffect(() => {
    setSaved(savedCards.some(c => c.movieId === card.movieId));
  }, [savedCards.length])

  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameEN,
    nameRU,
  } = card;

  const handleSaveClick = () => {
    onSaveClick(card);
    setSaved(!isSaved);
  }

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;

  return (
    <li className="cards__item">
      <div className="cards__panel">
        <div className="cards__info">
          <h2 className="cards__name">{nameRU}</h2>
          <p className="cards__length">{durationHours}ч {durationMinutes}м</p>
        </div>
        <button onClick={handleSaveClick} type="button" className={`cards__save ${isSaved && 'cards__save_active'}`}></button>
      </div>
      <Link to={trailerLink} className="cards__preview-link">
        <img src={thumbnail} alt={nameRU} className="cards__preview" />
      </Link>
    </li>
  );
}

export default MoviesCard;