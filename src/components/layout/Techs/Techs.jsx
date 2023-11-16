import './Techs.css';

function Techs() {
  return (
    <section class="tech">
      <div class="tech__container">
        <h2 class="section-title">Технологии</h2>
        <div class="section-line"></div>

        <h3 class="tech__title">7 технологий</h3>
        <p class="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul class="tech__word-cloud word-cloud">
          <li class="word-cloud__item">HTML</li>
          <li class="word-cloud__item">CSS</li>
          <li class="word-cloud__item">JS</li>
          <li class="word-cloud__item">React</li>
          <li class="word-cloud__item">Git</li>
          <li class="word-cloud__item">Express.js</li>
          <li class="word-cloud__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;