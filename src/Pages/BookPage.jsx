import React from 'react';

function BookPage() {
  return (
    <>
      <div class="breadcrumds">
        <nav>
          <ul class="breadcrumds__list">
            <li>Home</li>
            <li>Discounts and Clearance</li>
            <li>Sonatini Hippeastrum Alaska</li>
          </ul>
        </nav>
      </div>
      <div class="book-info">
        <div class="book-info__instock">
          <img src="./src/In Stock.png" alt="" />
        </div>
        <div class="book-info__image">
          <img src="./src/star-wars.png" alt="" />
        </div>
        <div class="book-info__body body-book-info">
          <h1 class="body-book-info__title">Star Wars Episode I</h1>
          <p class="body-book-info__text">
            The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and
            published on April 21, 1999 by Del Rey. It is based on the script of the movie of the
            same name. Narration for the abridged audio version was performed by Michael Cumpsty.
            The unabridged version was performed by Alexander Adams. On January 31, 2012, a new
            paperback edition
          </p>
          <div class="body-book-info__price price-book-info">
            <div class="price-book-info__price">
              <div class="price-book-info__item">
                <p class="price-book-info__item-price">
                  Our price : <span>$150</span>
                </p>
                <p class="price-book-info__sale-info">Was $ 200 Save 20%</p>
              </div>
              <div class="price-book-info__item">
                <button class="price-book-info__button btn">Add to cart</button>
              </div>
            </div>
            <div class="price-book-info__pay">
              <p class="price-book-info__pay-scure">Safe, Secure Shopping</p>
              <ul class="price-book-info__pay-list">
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
