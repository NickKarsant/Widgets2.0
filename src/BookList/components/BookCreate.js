import React, {useState} from 'react';




export const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleBookCreate = (event) => { 
    event.preventDefault();
    onCreate(title, author)
    setTitle('')
    setAuthor('')
  }


return (
  <div className='book-create'>
  <h3>Add a Book</h3>
  <form  onSubmit={handleBookCreate}>
    <label>
      Title
    </label> 
    <input
      onChange={(event) => setTitle(event.target.value)}
      value={title}
      className='input' />
      <label>
      Author
    </label> 
    <input
      onChange={(event) => setAuthor(event.target.value)}
      value={author}
      className='input' />
    <button className='button' onClick={(event) => handleBookCreate(event)}>Add Book</button>
  </form>
  </div>
);

}