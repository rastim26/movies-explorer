import logo from '../../../images/logo.svg';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <main class="content">
      
        <section class="sign">
          <div class="sign__container">
            <img src={logo} alt="logo" class="sign__site-logo site-logo" />

            <h1 class="sign__page-title page-title">Рады видеть!</h1>
            <form action="" class="sign__form form">
              <label for="" class="form__label">E-mail</label>
              <input type="email" class="form__field" />
              <label for="" class="form__label">Пароль</label>
              <input type="password" class="form__field" />
              <p class="form__err-text">Что-то пошло не так...</p>
              <button class="form__submit">Войти</button>
              <p class="form__proffer">Ещё не зарегистрированы? <a href="" class="form__link">Регистрация</a></p>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Login;
