import './scss/style.scss';

import Slider from './components/Slider';
import BanerSale from './components/BanerSale';
import Header from './components/Header';
import Categories from './components/Categories';

import books from './assets/books.json';

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

function App() {
  return (
    <div className="App">
      <div className="wraper">
        <Header />

        <main className="main">
          <div className="main__container container">
            <section className="main__banner banner-main">
              {slides.length > 0 ? (
                <div className="banner-main__slider">
                  <Slider items={books} />
                </div>
              ) : (
                ''
              )}

              {maxSale && <BanerSale {...maxSale} />}
            </section>
            <section className="main__books-page books-page">
              <div className="books-page__categories categories-menu">
                <Categories items={books} />
              </div>
              <div className="books-page__book book-page">
                <ul className="book-page__nav">
                  <li className="book-page__tab-title">Best sellers</li>
                  <li className="book-page__tab-title active-tab">New Arrivals</li>
                  <li className="book-page__tab-title">Used Books</li>
                  <li className="book-page__tab-title">Special Offers</li>
                </ul>
                <div className="book-page__content">
                  <div className="book-page__item">
                    <div className="products">
                      <div className="products__item item-product">
                        <div className="item-product__sale">
                          <p>20%</p>
                          <span>Off</span>
                        </div>
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img
                            src="https://cv9.litres.ru/pub/c/pdf-kniga/cover_415/67230390-evgeniya-bocharova-saharnye-cvety-poshagovyy-gid-po-sozdaniu-cvet-67230390.webp"
                            alt=""
                          />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__sale">
                          <p>13%</p>
                          <span>Off</span>
                        </div>
                        <div className="item-product__image">
                          <img
                            src="https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/23997456-elena-valerevna-motova-moy-luchshiy-drug-zheludok-eda-dlya-umnyh-ludey.webp"
                            alt=""
                          />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img
                            src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/52270526-mariya-kardakova-snachala-sup-potom-desert.webp"
                            alt=""
                          />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                      <div className="products__item item-product">
                        <div className="item-product__image">
                          <img src="./src/images/01.png" alt="" />
                        </div>
                        <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                        <p className="item-product__price">$50</p>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul className="pagination__list">
                        <li className="current-page">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__top top-footer">
            <div className="top-footer__body container">
              <div className="top-footer__item">
                <h3 className="top-footer__title">Biography &amp; True Stories</h3>
                <ul className="top-footer__list">
                  <li>General</li>
                  <li>Diaries, Letters &amp; Journals</li>
                  <li>Memoirs</li>
                  <li>True Stories</li>
                  <li>Generic Exams</li>
                  <li>GK Titles</li>
                  <li>Medical Entrance</li>
                  <li>Other Entrance Exams</li>
                  <li>PG Entrance Examinations</li>
                  <li>Self-help Titles</li>
                  <li>Sociology</li>
                </ul>
              </div>
              <div className="top-footer__item">
                <h3 className="top-footer__title">Professional &amp; Reference</h3>
                <ul className="top-footer__list">
                  <li>Academic and Reference</li>
                  <li>Business Trade</li>
                  <li>Engineering and Computer Science</li>
                  <li>Humanities, Social Sciences and Languages</li>
                  <li>Introduction to Computers</li>
                  <li>Science and Maths</li>
                  <li>Trade Business</li>
                  <li>English Language &amp; Literature</li>
                  <li>English Language Teaching</li>
                  <li>Environment Awareness</li>
                  <li>Environment Protection</li>
                </ul>
              </div>
              <div className="top-footer__item">
                <h3 className="top-footer__title">Earth Sciences</h3>
                <ul className="top-footer__list">
                  <li>Earth Sciences</li>
                  <li>Geography</li>
                  <li>The Environment</li>
                  <li>Regional &amp; Area Planning</li>
                  <li>Fantasy</li>
                  <li>Gay</li>
                  <li>Humorous</li>
                  <li>Interactive</li>
                  <li>Legal</li>
                  <li>Lesbian</li>
                  <li>Men'S Adventure</li>
                </ul>
              </div>
              <div className="top-footer__item">
                <h3 className="top-footer__title">Mathematics</h3>
                <ul className="top-footer__list">
                  <li>Algebra</li>
                  <li>Differential Equations</li>
                  <li>Discrete Mathematics</li>
                  <li>Fourier Analysis</li>
                  <li>Numerical Analysis</li>
                  <li>Probability</li>
                  <li>Statistical Methods/data Analysis</li>
                  <li>Stochastic And Random Processes</li>
                  <li>Topology</li>
                  <li>Statistics</li>
                  <li>Mathematics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom bottom-footer">
            <div className="bottom-footer__body container">
              <p className="bottom-footer__text">
                We accept all major Credit Card/Debit Card/Internet Banking
              </p>
              <div className="bottom-footer__links">
                <ul className="bottom-footer__links-list">
                  <li>
                    <img src="./src/mc.png" alt="" />
                  </li>
                  <li>
                    <img src="./src/ae.png" alt="" />
                  </li>
                  <li>
                    <img src="./src/visa.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="bottom-footer__license">
                Conditions of Use Privacy Notice © 2012-2013, Booksonline, Inc. or its affiliates
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
