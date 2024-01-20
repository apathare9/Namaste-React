import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import 

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


// Config Driven UI





// props - properties 
// no key --> index key --> unique key




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


