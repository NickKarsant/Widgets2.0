import React, {useState} from 'react';
import {items} from './data/database.js'
import {Accordion} from './components/Accordion'
import {Search} from './components/Search'
import {EnhancedTable} from './components/Datatable'
import TextField from '@mui/material/TextField';


export const App = () => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <>
      
    <div className="app">

      <div className='widgets'>
        <Accordion items={items}/>
        <Search />

      </div>
<hr/>
      <div className='filterDataTable'  style={{marginTop: '3em'}}>
        <TextField sx={{ width:'50%' }}
          onChange={(event) => {
          if (typeof event.target.value === 'string') {
            setSearchValue(event.target.value);
          }
        }} label="Filter Data Table" />
        <EnhancedTable filterTerm={searchValue}/>
      </div>
    
    </div>
 




    </>
  );
}

 export default App;

