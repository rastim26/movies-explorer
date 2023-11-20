import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form action="submit" className="search__form">
        <div className="search__finder">
          <label htmlFor="search-input" className="search__input-label"></label>
          <input type="text" placeholder="Фильм" name="search-input" id="search-input" className="search__input" />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__control">
          <input type="checkbox" id="is-short-films" className="search__checkbox" />
          <label htmlFor="is-short-films" className="search__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
