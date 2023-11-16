import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="section-title">О проекте</h2>
        <div className="section-line"></div>

        <div className="about__table">
          <div className="about__column">
            <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
            <p className="about__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__column">
            <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="about__chart chart">
          <div className="chart__step chart__step_done">
            <p className="chart__period chart__period_done">1 неделя</p>
            <p className="chart__descr">Back-end</p>
          </div>
          <div className="chart__step">
            <p className="chart__period">4 недели</p>
            <p className="chart__descr">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;