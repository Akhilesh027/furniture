import React from 'react'
import './Footer.css'
const Newsletter = () => {
  return (
   
   <>
    <div class="newsletter">
    <div class="newsletter-content">
      <h1>Join the Premier Housewares VIP List</h1>
      <p>Sign up to our newsletter for free trend guides, special offers and exclusive access to new products.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="Enter your email address"/>
        <button>Sign up</button>
      </div>
      <small>To find more about how we use your data, read our privacy policy.</small>
    </div>
  </div>

  <footer>
    <div class="footer-container">
      <div class="footer-col logo-social">
        <img src="logo-placeholder.png" alt="Logo" class="footer-logo"/>
        <div class="social-icons">
          <span>▢</span><span>▢</span><span>▢</span><span>▢</span>
        </div>
      </div>

      <div class="footer-col">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy & Cookies</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>FAQ's</li>
        </ul>
      </div>

      <div class="footer-col">
        <ul>
          <li>My Account</li>
          <li>My Orders</li>
          <li>My Wishlist</li>
          <li>Newsletter</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div class="footer-col">
        <ul>
          <li>Our Showrooms</li>
          <li>Virtual Tour</li>
          <li>Catalogues</li>
          <li>About us</li>
          <li>Blog</li>
          <li>CSR</li>
          <li>Sitemap</li>
        </ul>
      </div>

      <div class="footer-col right-logo">
        <h2>PREMIER<br/>HOUSEWARES</h2>
        <p>EST. 1988</p>
        <div class="social-icons">
          <span>▢</span><span>▢</span><span>▢</span><span>▢</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2019 Premier Housewares</p>
      <p>Site by <a href="#">Best Response Media</a>.</p>
    </div>
  </footer></>

  )
}

export default Newsletter
