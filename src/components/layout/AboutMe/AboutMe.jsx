import photo from '../../../images/student_photo.jpeg'
import './AboutMe.css';

function AboutMe() {
  return (
    <section class="student">
      <div class="student__container">
        <h2 class="section-title">Студент</h2>
        <div class="section-line"></div>
        <div class="student__content">
          <div class="student__info">
            <h3 class="student__name">Виталий</h3>
            <p class="student__descr">Фронтенд-разработчик, 30 лет</p>
            <p class="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="#" class="student__link">Github</a>
          </div>
          <img src={photo} alt="фото студента" class="student__photo" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;