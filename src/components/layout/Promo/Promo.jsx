import globe from '../../../images/globe.svg';
import './Promo.css';

function Promo() {
  return (
    <section class="hero">
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p class="hero__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#" class="hero__button">Узнать больше</a>
        </div>
        <img src={globe} alt="globe" class="hero__image" />
      </div>
    </section>
  );
}

export default Promo;