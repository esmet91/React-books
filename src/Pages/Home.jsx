import React from 'react';

import Slider from '../components/Slider';
import BanerSale from '../components/BanerSale';

import Aside from '../components/Aside';

import Tabs from '../components/Tabs';

function Home({ books }) {
  /*------------получаем массив обьектов для слайдера--------------*/
  const slides = books.filter((obj) => obj.slider);

  /*------------/получаем массив обьектов для слайдера--------------*/

  /*------------получаем обьект с максимальной скидкой--------------*/
  const saleElements = books.filter((obj) => obj.sale);
  const maxSale =
    saleElements.length > 0
      ? saleElements.reduce((acc, curr) => (acc.sale > curr.sale ? acc : curr))
      : false;
  //console.log('baner', maxSale);
  /*------------/получаем обьект с максимальной скидкой--------------*/
  return (
    <>
      <section className="main__banner banner-main">
        {slides.length > 0 ? (
          <div className="banner-main__slider">
            <Slider items={slides} />
          </div>
        ) : (
          ''
        )}

        {maxSale && <BanerSale {...maxSale} />}
      </section>
      <section className="main__books-page books-page">
        <div className="books-page__categories categories-menu">
          <Aside items={books} />
        </div>
        <div className="books-page__book book-page">
          <Tabs books={books} />
        </div>
      </section>
    </>
  );
}

export default Home;
