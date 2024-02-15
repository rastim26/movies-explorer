import './SearchForm.css';
import React from "react";

function SearchForm({loadCards}) {

  const [searchInputValue, setSearchInputValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  React.useEffect(() => {
    const queryText = localStorage.getItem('queryText');
    const isShort = localStorage.getItem('isShort');
    queryText && setSearchInputValue(queryText);
    isShort && setCheckboxValue(JSON.parse(isShort));
  }, [])

  // const checkboxValue = document.querySelector('#is-short-films').checked;
  
  function handleSearchInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleChangeCheckbox(e) {
    setCheckboxValue(e.target.checked);
    localStorage.clear();
  }

  function hadleSubmit(e) {
    e.preventDefault();
    loadCards({    // Передаём значения управляемых компонентов во внешний обработчик
      queryText: searchInputValue,
      isShort: checkboxValue,
    });
  }

  return (
    <section onSubmit={hadleSubmit} className="search">
      <form action="submit" className="search__form">
        <div className="search__finder">
          <label htmlFor="search-input" className="search__input-label"></label>
          <input value={searchInputValue} onChange={handleSearchInputChange} type="text" placeholder="Фильм" name="searchInput" id="search-input" className="search__input" />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__control">
          <input checked={checkboxValue} onChange={handleChangeCheckbox} type="checkbox" name="isShortCheckbox" id="is-short-films" className="search__checkbox" />
          <label htmlFor="is-short-films" className="search__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
