import React from 'react';
import Pagination from '../Pagination';
import Products from '../Products';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/Slices/paginationSlice';

const Tabs = ({ books }) => {
  /*Из всех обьектов книг фильтруем по наличию свойства tab и 
    создаем массив значений свойства "tab" отсекая повторяющиеся элементы */
  const tabTitles = Array.from(
    new Set(books.filter((obj) => obj.tab).map((obj) => obj.tab)),
  ).sort();
  /*/--------------------------------------------------------- */

  //const tabTitles = ['Best sellers', 'New Arivals', 'Used Books', 'Special Offers'];

  /*----Создаем состояние, в котором храним текущую вкладку Таба */
  const [activeTab, setActiveTab] = React.useState('Best sellers');
  const changeActiveTab = (value) => {
    setActiveTab(value);
  };
  /*-------------------------------------------------------------- */

  /*получаем все книги, которые относятся к свойству таба */
  const currentBooks = books.filter((obj) => obj.tab === activeTab);
  /**=============================================================== */

  /**==================== Пагинация =================================== */

  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };

  const [postsPerPage] = React.useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = currentBooks.slice(indexOfFirstPost, indexOfLastPost);
  const pagesCount = Math.ceil(currentBooks.length / postsPerPage);

  /**======================= /Пагинация ================================ */
  return (
    <>
      <ul className="book-page__nav">
        {tabTitles.map((tabName, i) => (
          <li
            onClick={() => (changeActiveTab(tabName), paginate(1))}
            key={i}
            className={
              activeTab === tabName ? 'book-page__tab-title active-tab' : 'book-page__tab-title'
            }>
            {tabName}
          </li>
        ))}
      </ul>
      <div className="book-page__content">
        <div className="book-page__item">
          <Products books={currentItem} />
          <Pagination pagesCount={pagesCount} paginate={paginate} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default Tabs;
