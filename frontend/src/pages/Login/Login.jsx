import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="form-container ">
       <form className="form-contain">
        <h1 className="fst-italic heading">ChicagoCafe</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <button type="submit" className="submit">
          Log In
        </button>
        <p className="para">
          New Customer?<span> </span>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
