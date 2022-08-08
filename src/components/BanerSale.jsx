import React from 'react';

function BanerSale({ title, imageUrl, sale, price }) {
  return (
    <div className="banner-main__sale-block sale-block">
      <div className="sale-block__container">
        <h2 className="sale-block__title">Deal of the Month</h2>
        <h3 className="sale-block__subtitle">{title}</h3>
        <div className="sale-block__image">
          <img src={imageUrl} alt="" />
        </div>
        <p className="sale-block__sale">Save {sale}% Today</p>
        <p className="sale-block__price">{price} ₽</p>
        <button className="sale-block__button btn">Buy now</button>
      </div>
    </div>
  );
}

export default BanerSale;
