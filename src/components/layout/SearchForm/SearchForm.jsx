import './SearchForm.css';
import React from "react";

function SearchForm({loadCards}) {

  const [values, setValues] = React.useState({});

  // React.useEffect(() => {
  //   setValues({
  //     name: currentUser.name,
  //     description: currentUser.about,
  //   })
  // }, []);

  const handleChange = (event) => { 
    const { requestText, isChecked } = event.target
      setValues({ requestText, isChecked, })
  }

  function hadleSubmit(e) {
    e.preventDefault();
    loadCards();
  }

  return (
    <section onSubmit={hadleSubmit} className="search">
      <form action="submit" className="search__form">
        <div className="search__finder">
          <label htmlFor="search-input" className="search__input-label"></label>
          <input value={values.requestText || ''} onChange={handleChange} type="text" placeholder="Фильм" name="search-input" id="search-input" className="search__input" />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__control">
          <input value={values.isChecked || ''} onChange={handleChange} type="checkbox" id="is-short-films" className="search__checkbox" />
          <label htmlFor="is-short-films" className="search__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
