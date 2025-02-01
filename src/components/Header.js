import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logbtn, setLogbtn] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">OnlineStatus:{OnlineStatus ? "✔" : "❌"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">GroceryMart</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 ">
            <Link to={"/cart"}>Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="p-2"
            onClick={() => {
              logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
            }}
          >
            {logbtn}
          </button>
          {logbtn === "Login" ? (
            <li className="p-4">{<h4>{loggedInUser || "Guest"}</h4>}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Header;
