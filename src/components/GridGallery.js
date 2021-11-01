import React from 'react';
import imagesList from './Gallery'
import './GridGallery.css'



function GridGallery() {
  return (
    <div>
      <h1>Gallery</h1>
      {imagesList.map((imgSrc , index) => (<img src={imgSrc.src} key={index} alt="img"/>))}

    </div>
  )
}

export default GridGallery 
