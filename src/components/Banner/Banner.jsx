import React from 'react'
import './Banner.css'
import logo from '../../assets/images/Logo.png'


function Banner() {

    const titre = "La maison jungle"
    
  return (
    <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>{titre}</h1>
    </div>
  )
}

export default Banner