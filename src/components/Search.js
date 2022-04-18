import React, {useState} from 'react';

export const Search = () => {

  const [term, setTerm] =useState('');

  return (
  <div className='ui form'>
    <div className='field'>
    <label>
      Enter Search Term
    </label>
    <input
    onChange={event => setTerm(event.target.value)}
      value={term}
      className='input' />
    </div>  

  </div>  
  )
}

