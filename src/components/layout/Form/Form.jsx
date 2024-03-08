import './Form.css';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../useForm';

function Form({hasName, submitText, profferText, profferLink, profferLinkLabel, handleLog}) {

  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    handleLog(values);
    resetForm();
  }

  return (
    <form onSubmit={onSubmit} className="sign__form form">
      {hasName && <>
          <label htmlFor="user-name" className="form__label">Имя</label>
          <input 
            value={values.name || ''} 
            onChange={handleChange}
            name="name"
            autoComplete="name"
            id="user-name" 
            type="text" 
            className="form__field" required 
          />
          <span className="form__err-text">{errors.name}</span>
        </>
      }
      <label htmlFor="user-email" className="form__label">E-mail</label>
      <input
        value={values.email || ''}
        onChange={handleChange}
        name="email"
        autoComplete="username"
        id="user-email"
        type="email"
        className="form__field" required 
      />
      <span className="form__err-text">{errors.email}</span>

      <label htmlFor="user-password" className="form__label">Пароль</label>
      <input
        value={values.password || ''}
        onChange={handleChange}
        name="password"
        autoComplete="current-password"
        id="user-password"
        type="password"
        className="form__field"
        required
      />
      <span className="form__err-text">{errors.password}</span>
      
      <span className="form__err-text">Что-то пошло не так...</span>
      <button type="submit" className={`form__submit ${!isValid && 'form__submit_disabled'}`} disabled={!isValid} >{submitText}</button>
      <p className="form__proffer">
        {profferText} <Link to={'/' + profferLink} className="bottom-link">{profferLinkLabel}</Link>
      </p>
    </form>
  );
}

export default Form;
