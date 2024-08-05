import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic" href="/">
            ChicagoCafe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-white p-0" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  {" "}
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="basket">
              <i
                class="fa-solid fa-cart-shopping fa-xl "
                style={{ color: "#e56d0b" }}
              ></i>
            </div>

            <Link className="btn-signup" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
