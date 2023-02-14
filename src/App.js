import React, {useEffect, useState} from 'react';
import {items, colors} from './data/database.js'
import {Search, Accordion, EnhancedTable, Dropdown, Translate} from './components/'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { AnimalApp }  from './ShowAnimal/AnimalApp.js'
import { SearchImagesApp }  from './SearchImages/SearchImagesApp'
import { BookListApp }  from './BookList/BookListApp'



export const App = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [results, setResults] = useState('');
  const [selected, setSelected] = useState(colors[0])
  const [showDropdown, setShowDropdown] = useState(true)


  useEffect(() => { 
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*', 
          format:'json',
          srsearch: searchValue,
        },
      });
     setResults(data.query.search)
    }

    if (searchValue && !results.length){
      search();

    } else {
      const timeoutId = setTimeout(() => {
        if (searchValue) {
          search();
        }
      }, 1000 )
  
      return () => {
        clearTimeout(timeoutId)
      };
    }

  }, [searchValue, results.length])



  return (
    <>
      


    {/* <div className="app">
      <div className='widgets'>

        <SearchImagesApp/>
        <AnimalApp />
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
        <EnhancedTable data={results} filterTerm={searchValue}/>
      </div>
      <div className='dropdown'>
      <button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle Dropdowns</button>
      { showDropdown &&
      <>
        <Dropdown selected={selected}  onSelectedChange={setSelected} options={colors}/>
        <Translate/>
      </>
      }
      </div>
    </div> */}

    <BookListApp />




    </>
  );
}

 export default App;

