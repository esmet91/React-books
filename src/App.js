import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import Categories from './Pages/Categories';

import books from './assets/books.json';

function App() {
  return (
    <div className="App">
      <div className="wraper">
        <Header />
        <main className="main">
          <div className="main__container container">
            <Routes>
              <Route path="/" element={<Home books={books} />} />
              <Route path="/categories" element={<Categories books={books} />} />
              <Route path="*" element={<div>NOT FOUND</div>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
