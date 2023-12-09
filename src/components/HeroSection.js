import React from 'react'
import ProfileImage from '../assets/images/image.jpeg'
import '../assets/styles/HeroSec.css'
const HeroSection = () => {
  return (
    <div className='row'>
      <div className='container col-sm-12 col-md-12 col-lg-6'>
        <h1 className={'text-heading'}>Hi, Maheera here.</h1>
        <p className={'text-subheading'}>To be Software Engineer!</p>
      </div>
      <div className='container col-sm-12 col-md-12 col-lg-6'>
        <img src={ProfileImage} alt='Profile' className='profile-pic' />
      </div>
    </div>
  )
}

export default HeroSection
