import logo from '../../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img src={logo} alt="logo" className="site-logo" />
        </Link>

        <Navigation />

        <button type="button" className="burger .burger_open">
          <span className="burger__strip"></span>
        </button>

        <nav className="header__profile header__profile_active">
          <ul className="header__profile-list">
            <li>
              <Link to="/signup" className="header__profile-link">Регистрация</Link>
            </li>
            <li>
              <Link to="/signin" className="header__profile-link header__profile-link_button">Войти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;