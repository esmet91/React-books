import React from 'react';

function Aside({ items }) {
  /* ----------------------Получаем категории и подкатегории из JSONа------------*/
  function categoriesFromObject(arr, cat, subCat) {
    let result = { ALL: [] };

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

  const [checkedCategory, setCheckedCategory] = React.useState('');
  console.log(checkedCategory);
  return (
    <div className="categories-menu__container">
      <div className="categories-menu__header">Categories</div>
      <nav className="categories-menu__body">
        <div className="categories-menu__category">
          {categoriesTitles.map((value, index) => (
            <div key={index} className="categories-menu__category">
              <p
                className={value === checkedCategory ? 'active-link' : ''}
                onClick={() => setCheckedCategory(value)}>
                {value}
              </p>
              <ul className="categories-menu__subcategory">
                {categories[value].length > 0 &&
                  categories[value].map((subCategory, index) => (
                    <li
                      className={subCategory === checkedCategory ? 'active-link' : ''}
                      onClick={() => setCheckedCategory(subCategory)}
                      key={index}>
                      {subCategory}
                    </li>
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
