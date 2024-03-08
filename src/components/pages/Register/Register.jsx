import logo from '../../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import Form from '../../layout/Form/Form';


function Register({handleRegister}) {
  return (
    <div className="register-page">
      <main className="content">
      
        <section className="sign">
          <div className="sign__container">
            <Link to="/">
              <img src={logo} alt="logo" className="sign__site-logo site-logo" />
            </Link>

            <h1 className="sign__page-title page-title">Добро пожаловать!</h1>
            <Form 
              hasName={true}
              submitText="Зарегистрироваться"
              profferText="Уже зарегистрированы?"
              profferLink="signin"
              profferLinkLabel="Войти"
              handleLog={handleRegister}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

export default Register;
