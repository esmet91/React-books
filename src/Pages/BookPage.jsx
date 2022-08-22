import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../Redux/Slices/categorySlice';

import { Link } from 'react-router-dom';

function BookPage() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const item = useSelector((state) => state.item.item);
  const dispatch = useDispatch();

  const selectedCategory = (categoryName) => {
    dispatch(setCategory(categoryName));
  };

  return (
    <>
      <div className="breadcrumds">
        <nav>
          <ul className="breadcrumds__list">
            <li>
              <Link className="breadcrumds__link" to="/">
                Главная страница
              </Link>
            </li>
            <li>
              <Link
                onClick={() => selectedCategory(item.category)}
                className="breadcrumds__link"
                to="/categories">
                {item.category}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => selectedCategory(item.subCategory)}
                className="breadcrumds__link"
                to="/categories">
                {item.subCategory}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="book-info">
        <div className="book-info__instock">
          <img src="./src/In Stock.png" alt="" />
        </div>
        <div className="book-info__image">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="book-info__body body-book-info">
          <h1 className="body-book-info__title">{item.title}</h1>
          <p className="body-book-info__text">{item.description}</p>
          <div className="body-book-info__price price-book-info">
            <div className="price-book-info__price">
              <div className="price-book-info__item">
                <p className="price-book-info__item-price">
                  Цена : <span>{item.price}₽</span>
                </p>
                {item.sale && (
                  <p className="price-book-info__sale-info">
                    Скидка {item.sale}%. Старая цена{' '}
                    {Number(item.price) + (Number(item.price) * Number(item.sale)) / 100}{' '}
                  </p>
                )}
              </div>
              <div className="price-book-info__item">
                <button className="price-book-info__button btn">В корзину</button>
              </div>
            </div>
            <div className="price-book-info__pay">
              <p className="price-book-info__pay-scure">Безопасные платежи</p>
              <ul className="price-book-info__pay-list">
                <li>
                  <img src="./src/paypal.png" alt="" />
                </li>
                <li>
                  <img src="./src/mc.png" alt="" />
                </li>
                <li>
                  <img src="./src/visa.png" alt="" />
                </li>
                <li>
                  <img src="./src/ae.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
