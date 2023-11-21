import logo from '../../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';


function Header({isLight = true, loggedIn = true}) {

  // console.log('isLight: ', isLight);
  console.log('loggedIn: ', loggedIn);

  return (
    <header className={`header ${isLight && 'header_light'}`}>
      <div className="header__container">
        <Link to="/" className="header__link">
          <img src={logo} alt="logo" className="site-logo" />
        </Link>

        {loggedIn 
        ?
          <Navigation isLight={isLight} />
         
        :
          <nav className="header__profile">
            <ul className="header__profile-list">
              <li>
                <Link to="/signup" className="header__profile-link">Регистрация</Link>
              </li>
              <li>
                <Link to="/signin" className="header__profile-link header__profile-link_button">Войти</Link>
              </li>
            </ul>
          </nav>
        }

      </div>
    </header>
  );
}

export default Header;