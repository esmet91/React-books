import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import Categories from './Pages/Categories';

import books from './assets/books.json';
import BookPage from './Pages/BookPage';
import Cart from './Pages/Cart';
import SaerchResults from './Pages/SaerchResults';

export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [category, setCategory] = React.useState('');

  return (
    <div className="App">
      <div className="wraper">
        <AppContext.Provider value={{ searchValue, setSearchValue, category, setCategory }}>
          <Header />
          <main className="main">
            <div className="main__container container">
              <Routes>
                <Route path="/" element={<Home books={books} />} />
                <Route path="/categories" element={<Categories books={books} />} />
                <Route path="/bookpage" element={<BookPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/searchresult" element={<SaerchResults />} />
                <Route path="*" element={<div>NOT FOUND</div>} />
              </Routes>
            </div>
          </main>
          <Footer />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
