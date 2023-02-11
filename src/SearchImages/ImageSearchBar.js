import React, {useState} from 'react';


export const ImageSearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');

const handleFormSubmit = (event) => { 
  event.preventDefault();
  onSubmit(term)
}

return (
 
  
    <div style={{padding:'8px', borderRadius:'5px', margin: '16px', border: '2px solid lightgrey', width:'fit-content'}}>
      {/* <label>Enter Search Term</label> */}
      
      <form onSubmit={handleFormSubmit}>
      <input
        onChange={event => setTerm(event.target.value)}
        value={term}
        className='input' />
      <button onClick={(event) => handleFormSubmit(event)}>Search</button>
      </form>
      {term.length < 3 && 'Term must be longer' }
    </div>  



)

}