import './Profile.css';
import Header from '../../layout/Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile-page">
      <Header isLight="true" />

      <main className="content">
        <section className="profile">
          <h1 className="page-title">Привет, Виталий!</h1>

          <form className="profile__form">
            <label className="profile__form-label">
              Имя
              <input id="user-name" className="profile__form-field" value="Виталий" />
            </label>

            <label className="profile__form-label">
              E-mail
              <input id="user-email" className="profile__form-field" value="pochta@yandex.ru" />
            </label>

            <div className="profile__form-control">
              <button type="button" className="profile__form-btn">Редактировать</button>
              <Link to="/" className="profile__form-btn profile__form-btn_danger">Выйти из аккаунта</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Profile;
