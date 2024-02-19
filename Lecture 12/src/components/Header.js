import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50    ">
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

          <li className="px-2 ">Cart</li>
        </ul>
      </div>

      <h1>{isOnline ? "🟢" : "🔴"}</h1>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
