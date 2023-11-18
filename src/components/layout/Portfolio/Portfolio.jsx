import './Portfolio.css';
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__link-list">
          <li className="portfolio__link-item">
            <Link target="_blank" to="https://github.com/rastim26/how-to-learn" className="portfolio__link">Статичный сайт</Link>
          </li>
          <li className="portfolio__link-item">
            <Link target="_blank" to="https://github.com/rastim26/russian-travel" className="portfolio__link">Адаптивный сайт</Link>
          </li>
          <li className="portfolio__link-item">
            <Link target="_blank" to="https://rastimesto.nomoredomainsrocks.ru/" className="portfolio__link">Одностраничное приложение</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;