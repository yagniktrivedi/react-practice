import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Header = () => {
  console.log("Header rendered");
  const [btnName, setBtnName] = useState("Login");

  const updateBtnName = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button className="login" onClick={updateBtnName}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
