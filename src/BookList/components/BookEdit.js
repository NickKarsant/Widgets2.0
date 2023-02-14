import React, {useState} from 'react';




export const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleEdit = (event) => { 
    event.preventDefault();
    onSubmit(title, author, book.id)
  }

return (
    <form className='book-edit' onSubmit={handleEdit}>
      <label>Title</label>
      <input
        onChange={(event) => setTitle(event.target.value)}
        defaultValue={title}
        className='input' />
      
      <label>Author</label>
      <input
        onChange={(event) => setAuthor(event.target.value)}
        defaultValue={author}
        className='input'/>
      <button onClick={(event) => handleEdit(event)} className='button is-primary'>Save</button>
    </form>
);

}