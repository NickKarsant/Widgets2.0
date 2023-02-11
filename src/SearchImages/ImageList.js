import React from 'react';
import { ImageShow } from './ImageShow'

export const ImageList = ({data}) => {

  console.log(data)

const renderedImages = data.length > 2 && data?.map((image) => {
  return (
  <ImageShow key={image?.id} alt={image.description} src={image?.urls?.thumb}/>
)
})

return (

  <div 
  // style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap: 'wrap'}}
  style={{columns: '6 200px', columnGap: '10px'}}
  >
    {renderedImages}  
  </div>




)

}