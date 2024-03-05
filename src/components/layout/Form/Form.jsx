import './Form.css';
import { Link } from 'react-router-dom';

function Form({hasName, submitText, profferText, profferLink, profferLinkLabel}) {
  return (

    <form className="sign__form form">
      {hasName && <>
          <label htmlFor="user-name" className="form__label">Имя</label>
          <input id="user-name" type="text" className="form__field" required />
        </>
      }
      <label htmlFor="user-email" className="form__label">E-mail</label>
      <input id="user-email" type="email" className="form__field" required />
      <label htmlFor="user-password" className="form__label">Пароль</label>
      <input id="user-password" type="password" className="form__field" required />
      <span className="form__err-text">Что-то пошло не так...</span>
      <button type="submit" className="form__submit">{submitText}</button>
      <p className="form__proffer">
        {profferText} <Link to={'/' + profferLink} className="bottom-link">{profferLinkLabel}</Link>
      </p>
    </form>
  );
}

export default Form;
