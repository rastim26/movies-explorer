import './Profile.css';
import React from "react";
import Header from '../../layout/Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useForm } from '../../useForm';

function Profile({loggedIn, setLoggedIn, updateUser}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isDisabled, setDisabled] = React.useState(true);
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  
  React.useEffect(() => {
    isValid && setDisabled(false);
  }, [values])
  
  React.useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser, loggedIn]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(values);
    setDisabled(true);
  }

  const signout = () => {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <div className="profile-page">
      <Header />

      <main className="content">
        <section className="profile">
          <h1 className="page-title">Привет, {values.name}!</h1>

          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__form-label">
              Имя
              <input 
                id="user-name"
                className="profile__form-field"
                name="name"
                type="text"
                value={values.name || ''}
                onChange={handleChange}
              />
            </label>
          <span className="form__err-text">{errors.name}</span>

            <label className="profile__form-label">
              E-mail
              <input
                id="user-email"
                className="profile__form-field"
                name="email"
                type="email"
                value={values.email || ''}
                onChange={handleChange}
              />
            </label>
            <span className="form__err-text">{errors.email}</span>

            <div className="profile__form-control">
              <button type="submit" className="profile__form-btn"  disabled={isDisabled}>Редактировать</button>
              <Link to="/"  className="profile__form-btn profile__form-btn_danger" onClick={signout}>Выйти из аккаунта</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Profile;
