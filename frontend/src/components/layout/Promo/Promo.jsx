import globe from '../../../images/globe.svg';
import NavTab from '../../shared/NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="hero__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <NavTab />
        </div>
        <img src={globe} alt="globe" className="hero__image" />
      </div>
    </section>
  );
}

export default Promo;