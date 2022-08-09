import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  React.useEffect(() => {
    window.scrollTo({
      top: 340,
      behavior: 'smooth',
    });
  }, [currentPage]);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pageNumbers.length > 1 &&
          pageNumbers.map((count) => (
            <li
              key={count}
              onClick={() => paginate(count)}
              className={currentPage === count ? 'current-page' : ''}>
              {count}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
