import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Navbar/Banner'
import ShowProduct from '../Product/ShowProduct'
import Newsletter from '../Components/Newsletter'
const Home = () => {
  return (
    <div>
     
      <section className='banner-slider'>
        <Banner/>
</section>
<section>
    <ShowProduct/>
</section>

    </div>
  )
}

export default Home
