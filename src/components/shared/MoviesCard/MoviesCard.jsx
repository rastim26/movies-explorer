import './MoviesCard.css';
import { Link } from 'react-router-dom';
import React from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard({card, onSaveClick}) {
  
  const [isSaved, setSaved] = React.useState(false);
  
  const currentUser = React.useContext(CurrentUserContext);
  // const isSaved = card.likes.some(i => i === currentUser._id); // Определяем, есть ли у карточки лайк, поставленный текущим пользователем


  const {
    country, created_at, description, director, duration,
    id, image, nameEN, nameRU,
    trailerLink, updates_at, year,
  } = card;

  const handleSaveClick = () => {
    // onSaveClick(card);
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
        <img src={'https://api.nomoreparties.co/' + image.url} alt="Превью" className="cards__preview" />
      </Link>
    </li>
  );
}

export default MoviesCard;