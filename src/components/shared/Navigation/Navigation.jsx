import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="menu__overlay">
      <nav className="header__menu menu menu_open menu_bg-dark">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/movies" className="menu__link menu__link_bg-dark">Фильмы</Link>
          </li>
          <li className="menu__item">
            <Link to="/saved-movies" className="menu__link menu__link_bg-dark">Сохраненные фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="menu__link-profile menu__link-profile_bg-dark ">Аккаунт</Link>
      </nav>
    </div>
  );
}

export default Navigation;