import React from 'react';
import { useSelector } from 'react-redux';

import Products from '../components/Products';

import items from '../assets/books.json';

const SaerchResults = () => {
  const searchValue = useSelector((state) => state.search.value);

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
      {searchValue &&
        (search.length > 0 ? (
          <Products books={search} />
        ) : (
          <div className="title-page">По вашему запросу ничего не найдено :(</div>
        ))}
    </div>
  );
};

export default SaerchResults;
