import React from 'react';

function BookDetails() {
  const books = [
    { name: "Master React", price: 670 },
    { name: "Deep Dive into Angular 11", price: 800 },
    { name: "Mongo Essentials", price: 450 }
  ];

  return (
    <div style={{ borderLeft: '4px solid green', paddingLeft: '10px', width: '30%' }}>
      <h2>Book Details</h2>
      {books.map((book, i) => (
        <div key={i}>
          <h3>{book.name}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
