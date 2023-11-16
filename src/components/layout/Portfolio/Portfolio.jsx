import './Portfolio.css';

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="portfolio__container">
        <h2 class="portfolio__title">Портфолио</h2>
        <ul class="portfolio__link-list">
          <li class="portfolio__link-item">
            <a href="#" class="portfolio__link">Статичный сайт</a>
          </li>
          <li class="portfolio__link-item">
            <a href="#" class="portfolio__link">Адаптивный сайт</a>
          </li>
          <li class="portfolio__link-item">
            <a href="#" class="portfolio__link">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;