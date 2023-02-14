import React, {useState} from 'react';
import {BookCreate} from './components/BookCreate'
import {BookList} from './components/BookList'




export const BookListApp = () => {
const [books, setBooks] = useState([]);
const [count, setCount] = useState(0);

const createBook = (title, author) => {
  const newBook = {title, author, id: count }
  setCount(count + 1)
  const updatedBooks =  [...books, newBook ]
  setBooks(updatedBooks)
}



const editBookById = (newTitle, newAuthor, id) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id){
      return  { ...book, title: newTitle, author: newAuthor}
    }
    return book
  })
  setBooks(updatedBooks)
  
}

const deleteBookById = (idToRemove) => {
  const booksAfterOneRemoved = books.filter((book) => {
  return book.id !== idToRemove
})

setBooks(booksAfterOneRemoved)
}





return (
  <div className='app'>
    <BookList onEdit={editBookById} onDelete={deleteBookById} books={books}/>
    <BookCreate onCreate={createBook}/>
  </div>
  
 
);

}