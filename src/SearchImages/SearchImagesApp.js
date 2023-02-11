import axios from 'axios';
import React, {useState} from 'react';
import {ImageSearchBar} from './ImageSearchBar';
import {ImageList} from './ImageList'



export const SearchImagesApp = () => {
  const [results, setResults] = useState('');



  const search = async (term) => {
    const response = await axios.get('https://api.unsplash.com/photos/', {
      headers: {
        Authorization: 'Client-ID lbmwJHLWewqzD0RPrYdn7bDYV6NPinlsD8T0JyoDaec',
      },
        params: {
        query: term,
      },
    });
  return(response.data)
  }

  const handleSubmit = async (term) => {
   const data = await search(term)
   setResults(data)

  }




return (
  <React.Fragment>
  <div>
    <ImageSearchBar onSubmit={handleSubmit} />
  </div>

  <ImageList data={results}/>

  </React.Fragment>
);

}