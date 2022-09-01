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

  return (
    <div className="search">
      <form action="#" className="search__form">
        <input value={serchOnClick} onChange={showInput} type="text" className="search__input" />
        <Link to={serchOnClick ? '/searchresult' : '#'}>
          <button className="search__button" onClick={() => dispatch(setSearchValue(serchOnClick))}>
            <svg className="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="icons">
                <path
                  d="M22.4,19.6l-4.8-4.8c0.9-1.4,1.4-3,1.4-4.8c0-5-4-9-9-9s-9,4-9,9s4,9,9,9c1.8,0,3.4-0.5,4.8-1.4l4.8,4.8   c0.4,0.4,0.9,0.6,1.4,0.6c1.1,0,2-0.9,2-2C23,20.4,22.8,19.9,22.4,19.6z M5,10c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S5,12.8,5,10z"
                  id="search"
                />
              </g>
            </svg>
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;

{
  /* <form action="#" className="search__form">
  <input type="text" className="search__input" />
  <Link to={serchOnClick ? '/searchresult' : '#'}>
    <button className="search__button" onClick={() => dispatch(setSearchValue(serchOnClick))}>
      <svg className="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="icons">
          <path
            d="M22.4,19.6l-4.8-4.8c0.9-1.4,1.4-3,1.4-4.8c0-5-4-9-9-9s-9,4-9,9s4,9,9,9c1.8,0,3.4-0.5,4.8-1.4l4.8,4.8   c0.4,0.4,0.9,0.6,1.4,0.6c1.1,0,2-0.9,2-2C23,20.4,22.8,19.9,22.4,19.6z M5,10c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S5,12.8,5,10z"
            id="search"
          />
        </g>
      </svg>
      Search
    </button>
  </Link>
</form>; */
}
