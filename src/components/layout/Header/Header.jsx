import logo from '../../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="site-logo" />

        <Navigation />

        <button className="burger .burger_open">
          <span className="burger__strip"></span>
        </button>

        <div className="header__profile header__profile_active">
           <Link to="/signup" className="header__profile-link">Регистрация</Link>
           <Link to="/signin" className="header__profile-link header__profile-link_button">Войти</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;