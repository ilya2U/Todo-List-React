import React from 'react'
import './Theme.css'
const Theme = ({dark, setDark}) => {
  return (
    <div className='theme'>
        <img src={dark ? "/sun.svg" : "/lun.svg"} alt="theme" onClick={() => setDark(!dark)} className='icon-theme'/>
    </div>
  )
}

export default Theme