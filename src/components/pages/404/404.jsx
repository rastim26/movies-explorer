import './404.css';

function NotFound404() {
  return (
    <div className="not-found-page">
      <main className="content">
        <section className="not-found">

          <h1 className="not-found__title">404</h1>
          <p className="not-found__message">Страница не найдена</p>

          <a href="" class="not-found__bottom-link bottom-link">Назад</a>

        </section>
      </main>
    </div>
  );
}

export default NotFound404;
