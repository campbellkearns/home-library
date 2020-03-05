import React from 'react';

const Book = (props) => (
  <section>
    <h4>{props.book.title}</h4>
    <img src={props.book.picture} />
    <p>by<span>{props.book.author}</span></p>
  </section>
)


export default Book;