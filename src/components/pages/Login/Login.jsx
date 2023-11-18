import logo from '../../../images/logo.svg';
// import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <Link to="/">
              <img src={logo} alt="logo" className="sign__site-logo site-logo" />
            </Link>

            <h1 className="sign__page-title page-title">Рады видеть!</h1>
            <form className="sign__form form">
              <label for="user-email" className="form__label">E-mail</label>
              <input id="user-email" type="email" className="form__field" />
              <label for="user-password" className="form__label">Пароль</label>
              <input id="user-password" type="password" className="form__field" />
              <span className="form__err-text">Что-то пошло не так...</span>
              <button type="submit" className="form__submit">Войти</button>
              <p className="form__proffer">Ещё не зарегистрированы? <Link to="/signup" className="bottom-link">Регистрация</Link></p>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Login;
