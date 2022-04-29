import React, {useState, useEffect}  from 'react'
import { firstPart, secondPart} from '../data/database.js'
import axios from 'axios'



export const Convert = ({text, language}) => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
      {}, 
      {
        params: {
          q: text,
          target: language.value,
          key: `${firstPart}${secondPart}`
        },
      });
      setTranslatedText(data.data.translations[0].translatedText)
    }





    if (text && language){
      doTranslation();

    } else {
      const timeoutId = setTimeout(() => {
        if (text) {
          doTranslation();
        }
      }, 5000 )
  
      return () => {
        clearTimeout(timeoutId)
      };
    }


  }, [text, language])
  

  return (
  <div>
    <h1 className='ui header'>
      {translatedText}
    </h1>
  </div>
  );
}

