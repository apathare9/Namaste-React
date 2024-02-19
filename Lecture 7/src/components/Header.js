import { useState } from "react";


const loggedInUser = () => {
    // API Call to check authentication
    return false;
}

const Title = () => {
    return (
        <a href="/">
            <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo" className="logo" />
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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