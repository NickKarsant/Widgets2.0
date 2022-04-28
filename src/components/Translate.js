import React, {useState, useEffect}  from 'react'
import {Dropdown} from './Dropdown'
import {languages} from '../data/database.js'



export const Translate = ({options}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])






// const renderedOptions = options.filter((item => item.value !== selected.value )).map((option) => {
//   return (
//   <div key={option.value} style={{color:`#${option.hex}`}} onClick={() => {makeSelection(option)}} className="item">
//   {option.label}
//   </div>
//   );
// });





return (
  <div className=""   style={{width: '60%', paddingBottom: '2em'}}>
  <Dropdown selected={selectedLanguage}  onSelectedChange={setSelectedLanguage} options={languages}/>
    </div>
  );
}

