import React from 'react';
import Products from '../Products';

const Tabs = ({ books }) => {
  /*Из всех обьектов книг фильтруем по наличию свойства tab и 
    создаем массив значений свойства "tab" отсекая повторяющиеся элементы */
  const tabTitles = Array.from(
    new Set(books.filter((obj) => obj.tab).map((obj) => obj.tab)),
  ).sort();
  /*/--------------------------------------------------------- */

  //const tabTitles = ['Best sellers', 'New Arivals', 'Used Books', 'Special Offers'];

  /*----Создаем состояние, в котором хранис текущую вкладку Таба */
  const [activeTab, setActiveTab] = React.useState('Best sellers');
  const changeActiveTab = (value) => {
    setActiveTab(value);
  };
  /*-------------------------------------------------------------- */

  const currentBooks = books.filter((obj) => obj.tab === activeTab);

  return (
    <>
      <ul className="book-page__nav">
        {tabTitles.map((tabName, i) => (
          <li
            onClick={() => changeActiveTab(tabName)}
            key={i}
            className={
              activeTab === tabName ? 'book-page__tab-title active-tab' : 'book-page__tab-title'
            }>
            {tabName}
          </li>
        ))}
        {/* <li className="book-page__tab-title">Best sellers</li>
        <li className="book-page__tab-title active-tab">New Arrivals</li>
        <li className="book-page__tab-title">Used Books</li>
        <li className="book-page__tab-title">Special Offers</li> */}
      </ul>
      <div className="book-page__content">
        <div className="book-page__item">
          <Products books={currentBooks} />
          <div className="pagination">
            <ul className="pagination__list">
              <li className="current-page">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
