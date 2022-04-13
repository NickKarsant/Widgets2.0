import React, { useEffect, useState} from 'react';
import {items, options} from './database.js'
import {Accordion} from './Accordion'
import {EnhancedTable} from './Datatable'
import TextField from '@mui/material/TextField';


export const App = () => {

  const [searchValue, setSearchValue] = useState(null);




  


  return (
    <>
      
    <div className="app">
      <Accordion items={items}/>
      </div>

    <div className='search'  style={{marginTop: '3em'}}>
    <TextField sx={{ width:'50%' }}
        onChange={(event) => {
        if (typeof event.target.value === 'string') {
          console.log(event.target.value)
          setSearchValue(event.target.value);
        }
      }} label="Filter Data Table" />
      </div>

    <div className='table'>
      <EnhancedTable filterTerm={searchValue}/>
    </div>
    </>
  );
}

 export default App;

