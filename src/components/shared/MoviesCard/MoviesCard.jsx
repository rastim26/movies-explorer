import preview from '../../../images/previews/preview-1.jpeg';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <li class="cards__item">
      <div class="cards__panel">
        <div class="cards__info">
          <div class="cards__name">33 слова о дизайне</div>
          <div class="cards__length">1ч 47м</div>
        </div>
        <button type="button" class="cards__save"></button>
      </div>
      <a href="#" class="cards__preview-link">
        <img src={preview} alt="Превью" class="cards__preview" />
      </a>
    </li>
  );
}

export default MoviesCard;