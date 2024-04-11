import './Techs.css';

function Techs() {
  return (
    <section className="tech">
      <div className="tech__container">
        <h2 className="section-title">Технологии</h2>

        <h3 className="tech__title">7 технологий</h3>
        <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__word-cloud word-cloud">
          <li className="word-cloud__item">HTML</li>
          <li className="word-cloud__item">CSS</li>
          <li className="word-cloud__item">JS</li>
          <li className="word-cloud__item">React</li>
          <li className="word-cloud__item">Git</li>
          <li className="word-cloud__item">Express.js</li>
          <li className="word-cloud__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;