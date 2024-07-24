import React from "react";
import './Foodcard.css'


const Foodcard = () => {
  return (
        <div className="services">
            <h2 className="services-heading">Our Menu</h2>
      <div className="card" style={{"width": "18rem"}}>
        <img src="" className="card-img-top" alt="...">
          
        </img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           This is important text
          </p>
          <div className="container quant w-100">
            <select className="m-2 h-100">
                {Array.from(Array(10),(e , i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>
            <select className=" option m-2 h-100">
                <option value="half">Half</option>
                <option value="full">Full</option>
            </select>
            <div className=" tp d-inline h-100 fs-5 mt-5">
                Total Price :
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Foodcard;
