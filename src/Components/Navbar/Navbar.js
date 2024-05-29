import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <> 
   
      <nav className="navbar">
       
        <div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experties</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Why Me</a>
            </li>
           
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              {" "}
              
            
            </li>
          </ul>
        </div>
        
         
            
      </nav>
    
    </>
  );
};

export default Navbar;
