import React from 'react'
import style from '../styles/landing.css'
import {Link} from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='landpage-container'>
        
            <div className='brand-name'>
                <h1>My</h1> 
                <h1>InstaClone</h1>
            </div>
            <div className='child'>
                <Link className='link-container' to="/Postview"><button className='btn-container'>Enter</button></Link>
            </div>
        </div>
        
  )
}

export default LandingPage