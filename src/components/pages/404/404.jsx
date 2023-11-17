import './404.css';
import { Link } from 'react-router-dom';

function NotFound404() {
  return (
    <div className="not-found-page">
      <main className="content">
        <section className="not-found">

          <h1 className="not-found__title">404</h1>
          <p className="not-found__message">Страница не найдена</p>

          <Link to="/" className="not-found__bottom-link bottom-link">Назад</Link>

        </section>
      </main>
    </div>
  );
}

export default NotFound404;
