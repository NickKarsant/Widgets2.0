import React, {useState} from 'react'
import './animal.css'
import {
  CardMedia,
} from '@mui/material';
import bird from '../data/svg/bird.svg'
import gator from '../data/svg/gator.svg'
import horse from '../data/svg/horse.svg'
import cat from '../data/svg/cat.svg'
import dog from '../data/svg/dog.svg'
import cow from '../data/svg/cow.svg'
import heart from '../data/svg/heart.svg'

const svgMap = {
  gator, cat, dog, horse, bird, cow
}

const Show = ({onClick, type}) => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    if (clicks < 16){
      setClicks(clicks + 1)
    }
  }

  return (
      <div onClick={handleClick} className='animalShow'>
        <CardMedia
        className='animal'
        component="img"
        height="100"
        image={svgMap[type]}
        alt={type}
      />
      <img  className = 'heart' alt='heart' src={heart}  
      style={{width: 10 + 10 * clicks + 'px', height: 10+ 10 * clicks + 'px'       }}/>
      </div>
  );
}


export default Show;


