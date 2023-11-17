import './Profile.css';
import Header from '../../layout/Header/Header';

function Profile() {
  return (
    <div className="profile-page">
      <Header />

      <main className="content">
        <section className="profile">
          <h1 className="page-title">Привет, Виталий!</h1>

          <table className="profile__table table">
            <tbody>
              <tr>
                <th className="table__th table__first-row">Имя</th>
                <td className="table__td table__first-row">Виталий</td>
              </tr>
              <tr>
                <th className="table__th table__second-row">E-mail</th>
                <td className="table__td table__second-row">pochta@yandex.ru</td>
              </tr>
            </tbody>
          </table>

          <ul className="profile__control-list">
            <li className="profile__control-item">
              <a href="" className="profile__control-link">Редактировать</a>
            </li>
            <li className="profile__control-item">
              <a href="" className="profile__control-link profile__control-link_danger">Выйти из аккаунта</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Profile;
