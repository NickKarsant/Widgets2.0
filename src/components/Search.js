import axios from 'axios';
import React, {useState, useEffect} from 'react';

export const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState('');



  useEffect(() => { 
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*', 
          format:'json',
          srsearch: term,
        },
      });
     setResults(data.query.search)
    }

    if (term && !results.length){
      search();

    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000 )
  
      return () => {
        clearTimeout(timeoutId)
       };
    }

  }, [term])


let dataDisplay;
  if (results){
   dataDisplay = results?.map((result) => {
    return (
      <div className='item' key={result?.pageid}>
      <div className='right floated content'>
        <a className='ui button' target='_blank' rel="noreferrer" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
      </div>
        <div className='content'>
          <div className='header'>
            {result?.title}
          </div>
          <span dangerouslySetInnerHTML={{__html:result?.snippet}}></span>
        </div>
      </div>
    )
  })
}
  

  return (
    <div className='search'>

      <div className='ui form'>
        <div className='field'>
        <label>Enter Search Term</label>
        <input
          onChange={event => setTerm(event.target.value)}
          value={term}
          className='input' />
        </div>  
      </div>  

      <div className='ui celled list'>
        {dataDisplay}
      </div>

    </div>
  )
}

