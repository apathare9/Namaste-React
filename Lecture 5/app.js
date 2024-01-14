import React from "react";
import ReactDOM from "react-dom/client";

/* 
    Header
        - Logo
        - Nav Items(Rights Side)
        - Cart
    Body 
        - Search Bar
        - RestrauntList
          - Restraunt Card
            - Image
            - Name
            - Ratings
            - Cuisine
    Footer
        - links
        - copyright
        
*/

const Title = () => {
    return (
        <a href="/">
            <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo" className="logo" />
        </a>
    );
}

const Header = () => {
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
        </div>

    );
}

const restrautList = [{
    name : "Burger King",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines : ["Burger", "American"],
    rating: "4.42"
}, 
{
    name : "Burger King",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines : ["Burger", "American"],
    rating: "4.42"
}]


const RestaurantCard = () => {
    return (
        <div className="card">
            <img src = {burgerKing.image} />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    );
}


const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}



const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


