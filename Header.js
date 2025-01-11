import React from "react";
import ReactDOM from "react-DOM/client";
import logoImage from "./Public/download.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', backgroundColor:'#333', color:'white'}}>
            <div className="logo">
                <img src={logoImage} alt="" />
            </div>
            <div className="search-bar input">
                <input type="text" placeholder="Search anything"/>
            </div>
            <div className="user-icon">Icon</div>
        </div>
    )
}

//root.render(<Header />)