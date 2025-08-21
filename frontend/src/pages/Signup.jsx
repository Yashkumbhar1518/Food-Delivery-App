import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials , setcredentials] = useState({name:'' , email:'',password:''})
  const API_URL = process.env.REACT_APP_BASE_URL;
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
    const response = await fetch(`${API_URL}/api/createuser`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({name:credentials.name , email:credentials.email , password:credentials.password})
    })
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      toast.warn(json.message,{
        position: "bottom-center",
        
      })
    }
    else{
      toast.success(json.message,{
        position: "bottom-center",
        
      })
    }
  }
  catch(err){
    console.log(err)
  }
}


  const onChange =(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className="form-container ">
      <form className="form-contain" onSubmit={handleSubmit}>
        <h1 className="fst-italic heading">ChicagoCafe</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}></input>
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
          Sign Up
        </button>
        <p className="para">
          Registered Customer?<span> </span>
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
