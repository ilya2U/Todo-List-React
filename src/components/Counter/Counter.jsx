import React from 'react'
import './Counter.css'

const Counter = ({countTodos}) => {
  return (
    <div className='counter'>Counter: {countTodos}</div>
  )
}

export default Counter