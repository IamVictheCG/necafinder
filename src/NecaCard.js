import React from 'react'
import "./NecaCard.css"


function NecaCard({name, name1, username, username1, github, github1, image, image1}) {
  return (
      <div className='div2'>
    
          <div className='Image'>
            <img src={image} alt="" />
            </div>
            <div className='Imagem'>
            <img src={image1} alt="" />
          </div>

          <div className='Text'>
            <h2>{name1}</h2>
            <h2>{name}</h2>
            <h4>{username1}</h4>
            <h4>{username}</h4>
            <h3><a href={github1}>{github1}</a></h3>
            <h2><a href={github}>{github}</a></h2>
          </div>             
      </div>
  )
}

export default NecaCard
