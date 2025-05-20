import React from 'react'
import brand1 from '../images/brand1.webp'
import brand2 from '../images/brand2.webp'
import brand3 from '../images/brand3.webp'
import Banner4 from '../images/banner4.webp'
import Banner5  from '../images/Banner5.webp'
import Banner6 from '../images/banner6.webp'
import './ShowProduct.css'
import ProductCarousel from './Product'
import Vector from '../Components/Vector'
import TrendingCategories from '../Components/Cat'
import Cat from '../Components/Cat'
import Catalogues from '../Components/catalog'
import Newsletter from '../Components/Newsletter'
const ShowProduct = () => {
  return (
    <div className='containerProduct'>
    <div className='brandshow'>
      <div className="brand">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
      </div>
      
    </div>
    <div>
        <ProductCarousel/>
    </div>
    <div className='banner'>
        <img src={Banner4} alt="Banner4" />
    </div>
    <div>
      <Vector/>
    </div>
    <div className='banner'>
        <img src={Banner5} alt="Banner5" />
    </div>
    <div>
      <Cat/>
    </div>
     <div className='banner'>
        <img src={Banner6} alt="Banner4" />
    </div>
    <div>
      <Catalogues/>
    </div>
    <div>
      <ProductCarousel/>
    </div>
    <div>
        <Newsletter/>
    </div>
    </div>
  )
}

export default ShowProduct
