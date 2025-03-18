import React from 'react'
import './Banner.css'
import logo from '../../assets/images/Logo.png'


function Banner({ children }) {  
  return (
    <div className='lmj-banner'>{children}</div>
  )
}

export default Banner