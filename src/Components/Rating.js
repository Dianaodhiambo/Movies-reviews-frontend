import React from 'react'
import PropTypes from 'prop-types'
import { FaStar} from "react-icons/fa";

const Rating = ({value, text, color}) => {
  return (
    <div className='rating'>
              <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? <FaStar/>
              : value >= 0.5
              ? 'FaStar-half-alt'
              : <FaStar/>
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? <FaStar/>
              : value >= 1.5
              ? 'FaStar-half-alt'
              : <FaStar/>
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? <FaStar/>
              : value >= 2.5
              ? 'FaStar-half-alt'
              : <FaStar/>
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? <FaStar/>
              : value >= 3.5
              ? 'FaStar-half-alt'
              : <FaStar/>
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? <FaStar/>
              : value >= 4.5
              ? 'FaStar-half-alt'
              : <FaStar/>
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
    color:'#f8e825',
  }
  
  Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
  }

export default Rating
