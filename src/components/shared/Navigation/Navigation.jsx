import './Navigation.css';

function Navigation() {
  return (
    <nav className="header__menu menu menu_open menu_bg-dark">
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
  );
}

export default Navigation;