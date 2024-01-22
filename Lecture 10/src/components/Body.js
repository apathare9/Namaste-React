// Business dev,  channel and distribution , product management and enterprise account management,  e commerce 
// Industry : IT telecom, hardware software and serivces and solution,  e commerce




// import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {

    const filterData = restaurants.filter(
        (restaurants) => restaurants.info.name.includes(searchInput)
    );

    return filterData;

}


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    // const [hotelIds, setOutletIds] = useState([]);

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

        // const outletIdArray = await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // const outletIds = await outletIdArray?.map(e => e)

        // setOutletIds(outletIdArray);
        
    }

    console.log("render");
    console.log(allRestaurants);

    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length === 0) {
    //     return <h1> No Restaurants match your Filter!! </h1>;
    // }

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
                    return ( 
                        <Link to={"/restaurants/" + restaurants.info.id} key={restaurants.info.id}>
                            <RestaurantCard {...restaurants.info}  />
                        </Link>
                    );
                })
            }

            {/* {
                filteredRestaurants.map((restaurants) => {
                    return <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
                })
            } */}

            {/* {console.log(restaurants.info.id)} */}
        </div>
        </>


    );
}

export default Body;    