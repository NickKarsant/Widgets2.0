import React, {useState}  from 'react'
import {Dropdown} from './Dropdown'
import {Convert} from './Convert'
import {languages} from '../data/database.js'



export const Translate = ({options}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [text, setText] = useState('')

return (
  <div className=""   style={{width: '60%', paddingBottom: '2em'}}>
  
  <div className='ui form'>
    <div className='field'>
      <label className='label'>
        Enter text to translate
      </label>
      <input value ={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
  <Dropdown selected={selectedLanguage}  onSelectedChange={setSelectedLanguage} options={languages}/>
  <hr/>
  <h3 className='ui header'> Output</h3>
  <Convert  text={text} language={selectedLanguage}/>
    </div>
  );
}

