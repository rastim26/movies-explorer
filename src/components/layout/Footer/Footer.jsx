import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2020</p>
          <nav className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item"><Link target="_blank" to="https://practicum.yandex.ru" className="footer__link">Яндекс.Практикум</Link></li>
              <li className="footer__item"><Link target="_blank" to="https://github.com/rastim26" className="footer__link">Github</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
