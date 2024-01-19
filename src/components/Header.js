import { useState } from "react";
import Title from "./Title";

const Header = () => {
  console.log("Header rendered");
  const [btnName, setBtnName] = useState("Login");

  const updateBtnName = () => {
    btnName === "Login " ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
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
