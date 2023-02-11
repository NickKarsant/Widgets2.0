import React, {useState} from 'react'
import Show from './show'
import './animal.css'
import {
  Grid,
  Typography,
} from '@mui/material';


function getRandomAnimal() {
  const animals = ['cow', 'bird', 'horse', 'dog','gator', 'cat']

  return animals[Math.floor(Math.random() * animals.length)]
}

export const AnimalApp = () => {

  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <Show type={animal} key={index} />
  })

  return (
    <React.Fragment>
    <div sx={{m: 2}} className='animalApp'>
      <button  className='addButton' onClick={handleClick}>Add Animal</button>
      <Typography>Animals to Show:</Typography>
      <Grid container className='animalList'>
        {renderedAnimals}
      </Grid>
    </div>
    </React.Fragment>
  );
}

