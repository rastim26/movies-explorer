import logo from '../../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="register-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <Link to="/">
              <img src={logo} alt="logo" className="sign__site-logo site-logo" />
            </Link>

            <h1 className="sign__page-title page-title">Добро пожаловать!</h1>
            <form className="sign__form form">
              <label for="user-name" className="form__label">Имя</label>
              <input id="user-name" type="text" className="form__field" />
              <label for="user-email" className="form__label">E-mail</label>
              <input id="user-email" type="email" className="form__field" />
              <label for="user-password" className="form__label">Пароль</label>
              <input id="user-password" type="password" className="form__field" />
              <span className="form__err-text">Что-то пошло не так...</span>
              <button type="submit" className="form__submit">Зарегистрироваться</button>
              <p className="form__proffer">Уже зарегистрированы? <Link to="/signin" className="bottom-link">Войти</Link></p>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Register;
