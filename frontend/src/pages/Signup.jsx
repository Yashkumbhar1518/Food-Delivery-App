import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="form-container ">
      <form className="form-contain">
        <h1 className="fst-italic heading">ChicagoCafe</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" />
        </div>
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
          Sign Up
        </button>
        <p className="para">
          Registered Customer?<span> </span>
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
