import './NavTab.css';

function NavTab() {
  return (
    <ul className="portfolio__link-list">
      <li className="portfolio__link-item">
        <a href="#" className="portfolio__link">Статичный сайт</a>
      </li>
      <li className="portfolio__link-item">
        <a href="#" className="portfolio__link">Адаптивный сайт</a>
      </li>
      <li className="portfolio__link-item">
        <a href="#" className="portfolio__link">Одностраничное приложение</a>
      </li>
    </ul>
  );
}

export default NavTab;