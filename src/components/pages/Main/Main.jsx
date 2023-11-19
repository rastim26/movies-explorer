// import './Main.css';
import Header from '../../layout/Header/Header';
import Promo from '../../layout/Promo/Promo';
import AboutProject from '../../layout/AboutProject/AboutProject';
import Techs from '../../layout/Techs/Techs';
import AboutMe from '../../layout/AboutMe/AboutMe';
import Portfolio from '../../layout/Portfolio/Portfolio';
import Footer from "../../layout/Footer/Footer";

function Main() {
  return (
    <div className="main-page">
      <Header isLight={false} />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
