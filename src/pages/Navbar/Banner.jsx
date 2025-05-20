import React from 'react'
import Banner1 from '../images/banner1.webp'
import Banner2 from '../images/banner2.webp'
import Banner3 from '../images/banner3.webp'
import './Navbar.css'

const Banner = () => {
  return (
    <div class="slides">
    <div class="slide"><img src={Banner1} alt="Banner 1"/></div>
    <div class="slide"><img src={Banner2} alt="Banner 2"/></div>
    <div class="slide"><img src={Banner3} alt="Banner 3"/></div>
  </div>
  )
}

export default Banner
