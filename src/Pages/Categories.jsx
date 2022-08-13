import React from 'react';

import Aside from '../components/Aside';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

import { AppContext } from '../App';

const Categories = ({ books }) => {
  const { category } = React.useContext(AppContext);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [category]);

  const booksSort =
    category === ''
      ? []
      : category === 'ALL'
      ? books
      : books
          .filter((obj) => {
            if (obj.category === category || obj.subCategory === category) {
              return true;
            }
            return false;
          })
          .map((obj) => obj);

  console.log(booksSort);

  /**==================== Пагинация =================================== */

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = booksSort.slice(indexOfFirstPost, indexOfLastPost);

  const pagesCount = Math.ceil(booksSort.length / postsPerPage);

  const paginate = (PageNumber) => setCurrentPage(PageNumber);

  /**======================= /Пагинация ================================ */

  return (
    <section className="main__books-page books-page">
      <div className="books-page__categories categories-menu">
        <Aside items={books} />
      </div>
      <div className="books-page__book book-page">
        <div className="book-page__content">
          <h2 className="book-page__title">{category}</h2>
          <div className="book-page__item">
            <Products books={currentItem} />
            <Pagination pagesCount={pagesCount} paginate={paginate} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
