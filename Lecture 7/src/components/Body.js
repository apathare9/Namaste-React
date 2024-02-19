
import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {

    const filterData = restaurants.filter((restaurants) => 
        restaurants?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );

    return filterData;

}

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState([]);

    useEffect( () => {
        // API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2181987&lng=72.9622965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    console.log("render");

    if (!allRestaurants) return null;

    if (filteredRestaurants?.length === 0) {
        return <h1> No Restaurants match your Filter!! </h1>;
    }

    return (allRestaurants?.length === 0) ? <Shimmer /> : (

        <>

        <div className="search-container" >
            <input type="text" 
            className="search-input"    
            placeholder="Search" 
            value={searchInput}
            onChange={(e) => { 
                setSearchInput(e.target.value);
            }} 
            />
            <button className="search-btn" 
            onClick={() => {
                // need to filter the data
                const data = filterData(searchInput, allRestaurants);

                // update the state - restraunts
                setFilteredRestaurants(data);
            }}> Search </button>
        </div>
        

        <div className="restaurant-list">
            {/* Write logic for no restaurants found here*/}
            {
                filteredRestaurants.map((restaurants) => {
                    return <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
                })
            }
        </div>
        </>


    );
}

export default Body;    