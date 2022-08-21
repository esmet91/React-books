import React from 'react';
import { useSelector } from 'react-redux';
function BookPage() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const item = useSelector((state) => state.item.item);

  return (
    <>
      <div className="breadcrumds">
        <nav>
          <ul className="breadcrumds__list">
            <li>Home</li>
            <li>Discounts and Clearance</li>
            <li>Sonatini Hippeastrum Alaska</li>
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
              <p className="price-book-info__pay-scure">Ваши покупки безопасны</p>
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
