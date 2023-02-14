import React from "react";


export const ImageShow = ({src, alt}) => {

return (
    <img alt={alt}  
    style={{width:'100%', marginBottom:'8px' }} 
    src={src} />
)

}