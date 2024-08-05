import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/loginuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        toast.warn(json.message, {
          position: "bottom-center",
          
        });
      } else {
        toast.success(
          json.message + " wait for few seconds it will redirect to home",
          {
            position: "bottom-center",
           
            onClose: () => {
              localStorage.setItem("authToken" ,json.authToken)
              console.log(localStorage.getItem("authToken"))
              navigate("/");
            },
            
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container " onSubmit={handleSubmit}>
      <form className="form-contain">
        <h1 className="fst-italic heading">ChicagoCafe</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
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
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Login;
