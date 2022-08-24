import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectItem } from '../Redux/Slices/itemSlice';

import { Link } from 'react-router-dom';

function BanerSale({ item }) {
  const dispatch = useDispatch();

  const selectingItem = (obj) => {
    dispatch(setSelectItem(obj));
  };
  return (
    <div className="banner-main__sale-block sale-block">
      <div className="sale-block__container">
        <h2 className="sale-block__title">Deal of the Month</h2>
        <h3 className="sale-block__subtitle">{item.title}</h3>
        <div className="sale-block__image">
          <img src={item.imageUrl} alt="" />
        </div>
        <p className="sale-block__sale">Save {item.sale}% Today</p>
        <p className="sale-block__price">{item.price} ₽</p>
        <Link onClick={() => selectingItem(item)} to="/bookpage" className="sale-block__button btn">
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default BanerSale;
