import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form action="submit" className="search__form">
          <label for="search-input" className="search__input-label"></label>
          <input type="text" placeholder="Фильм" name="search-input" id="search-input" className="search__input" />
          <button type="submit" className="search__submit"></button>
        </form>
        <div className="search__control">
          <input type="checkbox" id="is-short-films" className="search__checkbox" />
          <label for="is-short-films" className="search__checkbox-label">Короткометражки</label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
