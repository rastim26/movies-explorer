import photo from '../../../images/student_photo.jpeg'
import './AboutMe.css';
import { Link } from 'react-router-dom';


function AboutMe() {
  return (
    <section className="student">
      <div className="student__container">
        <h2 className="section-title">Студент</h2>
        <div className="student__content">
          <div className="student__info">
            <h3 className="student__name">Виталий</h3>
            <p className="student__descr">Фронтенд-разработчик, 30 лет</p>
            <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <Link to="https://github.com/rastim26" target="_blank" className="student__link">Github</Link>
          </div>
          <img src={photo} alt="фото студента" className="student__photo" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;