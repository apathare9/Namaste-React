import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const Instamart = lazy( () => import("./components/Instamart"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                    path: "profile",
                    element: <Profile />    
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />} >
                            <Instamart />
                        </Suspense>
            },
        ], 
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);













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



