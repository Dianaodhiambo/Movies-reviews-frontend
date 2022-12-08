import React from 'react'

const Card = ({title, description,category, image_url}) => {
  return (
    <div className='box'>
        <h1>{title}</h1>
     <div className="Poster">
        <img src={image_url} alt={title} height="800"/>
      </div>
      <div className="description">
        {description}
        </div>
        <p>{category}</p>

    </div>
  )
}

export default Card
