import React, { useEffect } from 'react';
import { AppContext } from '../App';

import Products from '../components/Products';

import items from '../assets/books.json';

const SaerchResults = () => {
  const { searchValue } = React.useContext(AppContext);

  const search =
    searchValue === ''
      ? []
      : items
          .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((obj) => obj);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <h1 className="title-page">Результат поиска...</h1>
      {searchValue && <Products books={search} />}
    </div>
  );
};

export default SaerchResults;
