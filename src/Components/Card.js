import React from 'react'

const Card = ({title, description,category, image_url}) => {
  return (
    <div className='Box'>
      <div className="Poster">
        <img src={image_url} alt={title} height="600"/>
      </div>
      <div className="kuhusu">
        <div className="details">
          <h4 className='title'>{title}</h4>
          <p className='Category'>{category}</p>
        </div> 
        <div className="description">
          <h1>Overview</h1>
            {description}
        </div>
       </div>
        

    </div>
  )
}
export default Card
