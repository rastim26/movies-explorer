import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="header__menu menu menu_open menu_bg-dark">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/movies" className="menu__link menu__link_bg-dark">Фильмы</Link>
        </li>
        <li className="menu__item">
          <Link to="/saved-movies" className="menu__link menu__link_bg-dark">Сохраненные фильмы</Link>
        </li>
      </ul>
      <Link to="/profile" className="menu__profile menu__profile_bg-dark ">Аккаунт</Link>
    </nav>
  );
}

export default Navigation;