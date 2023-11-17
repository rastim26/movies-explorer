import logo from '../../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <div className="register-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <img src={logo} alt="logo" className="sign__site-logo site-logo" />

            <h1 className="sign__page-title page-title">Добро пожаловать!</h1>
            <form action="" className="sign__form form">
              <label for="" className="form__label">Имя</label>
              <input type="text" className="form__field" />
              <label for="" className="form__label">E-mail</label>
              <input type="email" className="form__field" />
              <label for="" className="form__label">Пароль</label>
              <input type="password" className="form__field" />
              <p className="form__err-text">Что-то пошло не так...</p>
              <button className="form__submit">Зарегистрироваться</button>
              <p className="proffer">Уже зарегистрированы? <a href="" className="bottom-link">Войти</a></p>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Register;
