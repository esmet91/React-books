import './scss/style.scss';

import Slider from './components/Slider';
import BanerSale from './components/BanerSale';
import Header from './components/Header';
import Categories from './components/Categories';

import books from './assets/books.json';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

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
                <Tabs books={books} />
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
