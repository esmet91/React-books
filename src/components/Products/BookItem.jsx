import React from 'react';

function BookItem({ books }) {
  return (
    <>
      {books.length > 0 &&
        books.map((obj) => (
          <div key={obj.id} className="products__item item-product">
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
          </div>
        ))}
    </>
  );
}

export default BookItem;
