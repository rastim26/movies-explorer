import NavTab from '../../shared/NavTab/NavTab';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        
        <NavTab />
      </div>
    </section>
  );
}

export default Portfolio;