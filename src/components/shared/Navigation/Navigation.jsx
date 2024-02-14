import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({isLight, activeLink}) {
  return (
    <>
      <nav className={`header__menu menu .menu_open ${!isLight && 'menu_bg-dark'}`}>
        <button className="menu__close"></button>
        <ul className="menu__list">
          <li className="menu__item menu__item_tab">
            <Link to="/" className={`menu__link ${!isLight && 'menu__link_bg-dark'} ${activeLink === 'main' && 'menu__link_active'}`}>Главная</Link>
          </li>
          <li className="menu__item">
            <Link to="/movies" className={`menu__link ${!isLight && 'menu__link_bg-dark'} ${activeLink === 'movies' && 'menu__link_active'}`}>Фильмы</Link>
          </li>
          <li className="menu__item">
            <Link to="/saved-movies" className={`menu__link ${!isLight && 'menu__link_bg-dark'} ${activeLink === 'saved-movies' && 'menu__link_active'}`}>Сохраненные фильмы</Link>
          </li>
          <li className="menu__item">
            <Link to="/profile" className={`menu__link-profile ${!isLight && 'menu__link-profile_bg-dark'}`}>Аккаунт</Link>
          </li>
        </ul>
      </nav>
      <button type="button" className="burger .burger_open"></button>
    </>
  );
}

export default Navigation;