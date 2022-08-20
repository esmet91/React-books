import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../Redux/Slices/categorySlice';
import { setCurrentPage } from '../Redux/Slices/paginationSlice';

import { Link } from 'react-router-dom';

function Aside({ items }) {
  /* ----------------------Получаем категории и подкатегории из JSONа------------*/
  function categoriesFromObject(arr, cat, subCat) {
    let result = { ВСЕ: [] };

    const categoryKeys = arr
      .map((obj) => obj[cat])
      .reduce((accumulator, value) => {
        return { ...accumulator, [value]: '[]' };
      }, {});

    for (let key in categoryKeys) {
      const subs = arr.filter((item) => item[cat] === key).map((item) => item[subCat]);
      result[key] = [...new Set(subs)];
    }
    return result;
  }
  const categories = categoriesFromObject(items, 'category', 'subCategory');

  /* ----------------------/Получаем категории и подкатегории из JSONа------------*/

  const categoriesTitles = Object.keys(categories);

  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  //функция перевода пагинации на первую страницу
  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };

  console.log(category);
  return (
    <div className="categories-menu__container">
      <div className="categories-menu__header">Categories</div>
      <nav className="categories-menu__body">
        <div className="categories-menu__category">
          {categoriesTitles.map((value, index) => (
            <div key={index} className="categories-menu__category">
              <Link to="/categories">
                <p
                  className={value === category ? 'active-link' : ''}
                  onClick={() => dispatch(setCategory(value), paginate(1))}>
                  {value}
                </p>
              </Link>
              <ul className="categories-menu__subcategory">
                {categories[value].length > 0 &&
                  categories[value].map((subCategory, index) => (
                    <Link key={index} to="/categories">
                      <li
                        className={subCategory === category ? 'active-link' : ''}
                        onClick={() => dispatch(setCategory(subCategory), paginate(1))}>
                        {subCategory}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Aside;
