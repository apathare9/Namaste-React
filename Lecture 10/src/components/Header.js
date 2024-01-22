import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";


const loggedInUser = () => {
    // API Call to check authentication
    return false;
}

const Title = () => {
    return (
        <a href="/">
            {/* <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo" className="logo" /> */}
            <img src={logo} alt="logo" className="logo" />
        </a>
    );
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                    
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn?  (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
                ) : ( 
                <button onClick={() => setIsLoggedIn(true)}>Login</button> 
            )}
        </div>

    );
}

export default Header; 