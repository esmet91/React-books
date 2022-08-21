import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../Redux/Slices/searchSlice';

import { Link } from 'react-router-dom';

const Search = () => {
  const [serchOnClick, setSearchOnClick] = React.useState('');

  const dispatch = useDispatch();

  const showInput = (event) => {
    setSearchOnClick(event.target.value);
  };

  const inputSearch = React.useRef();

  // const test = (e) => {
  //   if (!serchOnClick) {
  //     if (!e.path.includes(inputSearch.current)) {
  //       console.log('клик вне инпута');
  //       setSearchOnClick('');
  //     }
  //   }
  // };
  // React.useEffect(() => {
  //   document.body.addEventListener('click', test);
  // }, []);

  return (
    <form action="#" className="body-header__search search-header">
      <label ref={inputSearch} className="search-header__label">
        <input
          value={serchOnClick}
          type="text"
          className="search-header__input"
          onChange={showInput}
        />
        <Link to={serchOnClick ? '/searchresult' : '#'}>
          <button
            onClick={() => dispatch(setSearchValue(serchOnClick))}
            className="search-header__button">
            <svg height="25px" viewBox="0 0 512 512" width="25px">
              <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"></path>
            </svg>
            Поиск
          </button>
        </Link>
      </label>
    </form>
  );
};

export default Search;
