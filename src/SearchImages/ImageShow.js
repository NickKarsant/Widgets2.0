import React from "react";


export const ImageShow = ({src, alt}) => {

return (
    <img alt={alt}  
    // style={{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight:'200px', margin:'8px' }} 
    style={{width:'100%', marginBottom:'8px' }} 
    src={src} />
)

}