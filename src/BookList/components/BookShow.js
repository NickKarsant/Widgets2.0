import React, {useState}  from 'react';
import { BookEdit } from './BookEdit'

export const BookShow = ({book, onDelete, onEdit}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  }

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm)
  }

  const handleSubmit = (title, author, id) => {
    setShowEditForm(false)
    onEdit(title, author, id)
  }

  let content= (<>
    <h3>{book.title}</h3>
    <h5>{book.author}</h5>
  </>)

  if (showEditForm){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

return (
  <div className='book-show'>
  <div className='actions'>

    <button className='edit' onClick={toggleEditForm}>Edit</button>
    <button className='delete' onClick={handleDelete}>Delete</button>
  </div>
    <img src={`https://picsum.photos/seed/${book.id}/150/150`}/>
    {content}
  </div>
);

}