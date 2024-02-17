import { useState, useContext } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  // API Call to check authentication
  return false;
};

const Title = () => {
  return (
    <a href="/">
      {/* <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo" className="logo" /> */}
      <img src={logo} alt="logo" className="h-28 p-2" />
    </a>
  );
};

const Header = () => {
  const isOnline = useOnline();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { user } = useContext(UserContext);

  const { user, setUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 px-3">
          <li className="px-2 ">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 ">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 ">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2 ">
            <Link to="/instamart">Instamart</Link>
          </li>

          <li className="px-2 ">
            <Link to="/cart"> Cart- {cartItems.length} </Link>
          </li>
        </ul>
      </div>

      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900"> {user.name} </span>
      {isLoggedIn ? (
        <Link to="/">
          <button
            onClick={(e = "") =>
              setIsLoggedIn(false) &
              setUser({
                name: e.target.value,
                email: "",
              })
            }
          >
            Logout
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button onClick={() => setIsLoggedIn(true)}> Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
