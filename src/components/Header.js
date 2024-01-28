import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);
  const updateBtnName = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="flex justify-between shadow-md m-2 bg-pink-300 sm:bg-green-300">
      {/* backgound color will be green if screen size bigger den sm - means small devices */}
      <Title />
      <div className="items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isOnline ? "🍐" : "🍓"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - {cartItems?.length} items</Link>
          </li>
          <li className="px-4">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="px-4">
            <button className="login" onClick={updateBtnName}>
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
