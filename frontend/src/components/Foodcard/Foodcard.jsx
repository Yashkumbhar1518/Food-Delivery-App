import React, { useEffect, useState } from "react";
import "./Foodcard.css";

const Foodcard = () => {
  const [menu, setMenu] = useState([]);
  const [category , setCategory] = useState("All");

  useEffect(() => {
    async function fetchMenu() {
      console.log(process.env);
      try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/getmenu`);
        const data = await res.json();
        setMenu(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMenu();
  }, []);
  return (
    <div className="services" id="menu">
      <h2 className="services-heading">Our Menu</h2>
      <ul className="d-flex justify-content-center list-category">
      <li className={`list-button ${category === "All" ? "active" : ""}`} onClick={()=>setCategory('All')}>All </li>
      <li className={`list-button ${category === "Starter" ? "active" : ""}`} onClick={()=>setCategory('Starter')}>Starters</li>
      <li className={`list-button ${category === "Biryani/Rice" ? "active" : ""}`} onClick={()=>setCategory('Biryani/Rice')}>Biryani / Rice</li>
      <li className={`list-button ${category === "Pizza" ? "active" : ""}`} onClick={()=>setCategory('Pizza')}>Pizzas</li>
      </ul>
      <ul className="menu-list-container">
        {menu.map((item) => (category === "All" || item.CategoryName === category) && (
          <li className="card" style={{ width: "18rem" }}>
            <img
              src={item.img}
              className="card-img-top item-img"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="container quant w-100">
                <select className="m-2 h-100">
                  {Array.from(Array(10), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className=" option m-2 h-100">
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
              </div>
              <div className=" total tp  h-100 fs-5 ">Total Price :</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foodcard;
