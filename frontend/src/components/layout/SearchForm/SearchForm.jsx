import './SearchForm.css';
import React from "react";

function SearchForm({loadCards, renderCards}) {

  const [searchInputValue, setSearchInputValue] = React.useState('');
  const [isShortOnly, setShortOnly] = React.useState(false);

  React.useEffect(() => {
    const queryText = localStorage.getItem('queryText');
    queryText && setSearchInputValue(queryText);

    const isShort = JSON.parse(localStorage.getItem('isShort'));
    isShort && setShortOnly(isShort);
  }, []);


  function handleSearchInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleChangeCheckbox(e) {
    const isChecked = e.target.checked;
    localStorage.setItem('isShort', isChecked);
    setShortOnly(isChecked);
    renderCards();
  }

  function hadleSubmit(e) {
    e.preventDefault();
    loadCards({    // Передаём значения управляемых компонентов во внешний обработчик
      queryText: searchInputValue,
      isShort: isShortOnly,
    });
  }

  return (
    <section onSubmit={hadleSubmit} className="search">
      <form action="submit" className="search__form">
        <div className="search__finder">
          <label htmlFor="search-input" className="search__input-label"></label>
          <input value={searchInputValue} onChange=
          {handleSearchInputChange} type="text" placeholder="Фильм" name="searchInput" id="search-input" className="search__input" />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__control">
          <input checked={isShortOnly} onChange={handleChangeCheckbox} type="checkbox" name="isShortCheckbox" id="is-short-films" className="search__checkbox" />
          <label htmlFor="is-short-films" className="search__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
