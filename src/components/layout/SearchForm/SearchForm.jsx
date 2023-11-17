import './SearchForm.css';

function SearchForm() {
  return (
    <section class="search">
      <div class="search__container">
        <form action="submit" class="search__form">
          <label for="search-input" class="search__input-label"></label>
          <input type="text" placeholder="Фильм" name="search-input" id="search-input" class="search__input" />
          <button type="submit" class="search__submit"></button>
        </form>
        <div class="search__control">
          <input type="checkbox" id="is-short-films" class="search__checkbox" />
          <label for="is-short-films" class="search__checkbox-label">Короткометражки</label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
