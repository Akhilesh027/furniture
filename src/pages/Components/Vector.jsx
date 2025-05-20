import React from 'react'
import v1 from '../images/Vector-1.webp'
import v2 from '../images/Vector-2.webp'
import v3 from '../images/vector-3.webp'
import v4 from '../images/vector4.webp'
import v5 from '../images/vector5.webp'
import './vector.css'
const Vector = () => {
  return (
    <div>
      
  <div class="features-section">
    <div class="feature">
     <p>Over 100 new products<br/>added every month</p>
      <img src={v1} alt="New Products Icon"/>

    </div>
    <div class="feature">
      <p>Over 16,000 unique<br/>products in stock</p>
            <img src={v2} alt="Stock Icon"/>

    </div>
    <div class="feature">
      <p>Unrivalled 3–5 day<br/>order fulfillment</p>
            <img src={v3} alt="Delivery Icon"/>

    </div>
    <div class="feature">
      <p>Dedicated multilingual<br/>export team</p>
            <img src={v4} alt="Export Team Icon"/>

    </div>
    <div class="feature">
      <p>Supporter of small<br/>businesses</p>
            <img src={v5} alt="Support Icon"/>

    </div>
  </div>

    </div>
  )
}

export default Vector
