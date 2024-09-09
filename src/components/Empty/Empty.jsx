import React from 'react'
import './Empty.css'
const Empty = () => {
  return (
    <div className='empty'>
       <img
          src="/Detective-check-footprint 1.svg"
          alt="Empty"
          className="icon-empty"
        />
        <span className='emty-text'>Empty...</span>
    </div>
  )
}

export default Empty