import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setSelectItem } from '../../Redux/Slices/itemSlice';

function BookItem({ books }) {
  const dispatch = useDispatch();

  const selectingItem = (obj) => {
    dispatch(setSelectItem(obj));
  };
  return (
    <>
      {books.length > 0 &&
        books.map((obj) => (
          <Link
            to="/bookpage"
            key={obj.id}
            onClick={() => selectingItem(obj)}
            className="products__item item-product">
            {obj.sale > 0 && (
              <div className="item-product__sale">
                <p>{obj.sale}%</p>
                <span>Off</span>
              </div>
            )}

            <div className="item-product__image">
              <img src={obj.imageUrl} alt="" />
            </div>
            <h2 className="item-product__title">{obj.title}</h2>
            <p className="item-product__price">${obj.price}</p>
          </Link>
        ))}
    </>
  );
}

export default BookItem;
