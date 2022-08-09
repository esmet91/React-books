import React from 'react';
import BookItem from './BookItem';

function Products({ books }) {
  return (
    <div className="products">
      <BookItem books={books} />
    </div>
  );
}

export default Products;
