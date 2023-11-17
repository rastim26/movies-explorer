import logo from '../../../images/logo.svg';
import Navigation from '../../shared/Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="site-logo" />

        <Navigation />

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