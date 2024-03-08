import logo from '../../../images/logo.svg';
// import './Login.css';
import { Link } from 'react-router-dom';
import Form from '../../layout/Form/Form';


function Login({handleLogin}) {
  return (
    <div className="login-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <Link to="/">
              <img src={logo} alt="logo" className="sign__site-logo site-logo" />
            </Link>

            <h1 className="sign__page-title page-title">Рады видеть!</h1>
            <Form 
              submitText="Войти"
              profferText="Ещё не зарегистрированы?"
              profferLink="signup"
              profferLinkLabel="Регистрация"
              handleLog={handleLogin}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

export default Login;
