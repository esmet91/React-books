import React from 'react';
import { AppContext } from '../App';

const Pagination = ({ pagesCount, paginate, currentPage }) => {
  const { category } = React.useContext(AppContext);

  const pageNumbers = [];
  for (let index = 1; index <= pagesCount; index++) {
    pageNumbers.push(index);
  }

  const [arrOfPageNumbers, setArrOfPageNumbers] = React.useState([]);
  // const didMount = React.useRef(false);
  React.useEffect(() => {
    // if (didMount.current) {
    // window.scrollTo({
    //   top: 340,
    //   behavior: 'smooth',
    // });
    // } else didMount.current = true;

    let tempPageNumbers = [...pageNumbers];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (pageNumbers.length < 6) {
      tempPageNumbers = pageNumbers;
    } else if (currentPage >= 1 && currentPage <= 2) {
      tempPageNumbers = [1, 2, 3, dotsInitial, pagesCount];
    } else if (currentPage === 3) {
      const sliced = pageNumbers.slice(0, 4);
      tempPageNumbers = [...sliced, dotsInitial, pagesCount];
    } else if (currentPage > 3 && currentPage < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
      const sliced2 = pageNumbers.slice(currentPage, currentPage + 1);
      tempPageNumbers = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentPage > pageNumbers.length - 3) {
      const sliced = pageNumbers.slice(pageNumbers.length - 4);
      tempPageNumbers = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      paginate(arrOfPageNumbers[arrOfPageNumbers.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      paginate(arrOfPageNumbers[3] + 2);
    } else if (currentPage === dotsLeft) {
      paginate(arrOfPageNumbers[3] - 2);
    }

    setArrOfPageNumbers(tempPageNumbers);
  }, [currentPage, pagesCount, category]);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {arrOfPageNumbers.length > 1 &&
          arrOfPageNumbers.map((count) => (
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
