import React from 'react';
import '../index.css'
import {BookShow} from './BookShow'


export const BookList = ({books, onDelete, onEdit}) => {

  const renderedBooks = books?.map((book) => {
    return (
    <BookShow onEdit={onEdit} onDelete={onDelete} book={book} key={book.id}/>
    )
  })


return (
  <div className='book-list'>
  {renderedBooks}
  </div>
);

}