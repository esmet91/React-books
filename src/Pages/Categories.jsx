import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../Redux/Slices/categorySlice';
import { setCurrentPage } from '../Redux/Slices/paginationSlice';

import Aside from '../components/Aside';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

const Categories = ({ books }) => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (category === '') {
      dispatch(setCategory('ВСЕ'));
    }
  }, [category]);

  React.useEffect(() => {
    return () => {
      dispatch(setCategory(''));
      paginate(1);
    };
  }, []);

  const booksSort =
    category === ''
      ? []
      : category === 'ВСЕ'
      ? books
      : books
          .filter((obj) => {
            if (obj.category === category || obj.subCategory === category) {
              return true;
            }
            return false;
          })
          .map((obj) => obj);

  //console.log(booksSort);

  /**==================== Пагинация =================================== */
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };

  const [postsPerPage] = React.useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = booksSort.slice(indexOfFirstPost, indexOfLastPost);
  const pagesCount = Math.ceil(booksSort.length / postsPerPage);

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
