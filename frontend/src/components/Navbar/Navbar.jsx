import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand fst-italic" href="/">ChicagoCafe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/"> Menu</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/">Contact Us</Link>
        </li>
        
      </ul>
      <div className="basket">
      <i class="fa-solid fa-cart-shopping fa-xl " style={{"color": "#e56d0b"}}></i></div>
      
      <Link className='btn-signup' to='/signup'>Sign Up</Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
