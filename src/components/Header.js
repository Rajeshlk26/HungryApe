import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const[logbtn, setLogbtn] = useState("Login")
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" 
          src={LOGO_URL} alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
            <li>Profile</li>
            <button className="login"
            onClick={() => {
            logbtn==="Login"? setLogbtn("Logout"):setLogbtn("Login")
            }}
            >{logbtn}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;