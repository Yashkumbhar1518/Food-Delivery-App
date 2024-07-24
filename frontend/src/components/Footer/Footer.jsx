import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footleft">
      <a className="navbar-brand fst-italic" to="/">ChicagoCafe</a> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt amet sit quod eos, quibusdam inventore facere velit quia reprehenderit recusandae iure at omnis molestias error mollitia voluptate dicta voluptatem?</p>
        <div className="icons">
        <i class="fa-brands fa-facebook" style={{"color": "#ff932e"}}></i>
        <i class="fa-brands fa-instagram" style={{"color": "#ff932e"}}></i>
        <i class="fa-brands fa-twitter" style={{"color": "#ff932e"}}></i>
        </div>  
      </div>
      <div className="foot-center">
        <h5>Comapny</h5>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="foot-right">
        <h5>Get In Touch  </h5>
        <ul>
          <li>+21212121</li>
          <li>contact@chicago.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
