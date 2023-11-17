import logo from '../../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="site-logo" />
        <nav className="header__menu menu .menu_open menu_bg-dark">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link menu__link_bg-dark">Фильмы</a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link menu__link_bg-dark">Сохраненные фильмы</a>
            </li>
          </ul>
          <a href="#" className="menu__profile menu__profile_bg-dark ">Аккаунт</a>
        </nav>

        <button className="burger .burger_open">
          <span className="burger__strip"></span>
        </button>

        <div className="header__profile">
           <a href="#" className="header__profile-link">Регистрация</a>
           <a href="#" className="header__profile-link header__profile-link_button">Войти</a>
        </div>
      </div>
    </header>
  );
}

export default Header;