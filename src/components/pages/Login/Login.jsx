import logo from '../../../images/logo.svg';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <img src={logo} alt="logo" className="sign__site-logo site-logo" />

            <h1 className="sign__page-title page-title">Рады видеть!</h1>
            <form action="" className="sign__form form">
              <label for="" className="form__label">E-mail</label>
              <input type="email" className="form__field" />
              <label for="" className="form__label">Пароль</label>
              <input type="password" className="form__field" />
              <p className="form__err-text">Что-то пошло не так...</p>
              <button className="form__submit">Войти</button>
              <p className="form__proffer">Ещё не зарегистрированы? <a href="" className="bottom-link">Регистрация</a></p>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Login;
