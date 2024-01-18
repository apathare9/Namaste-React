// Business dev,  channel and distribution , product management and enterprise account management,  e commerce 
// Industry : IT telecom, hardware software and serivces and solution,  e commerce




import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {

    const filterData = restaurants.filter(
        (restaurants) => restaurants.info.name.includes(searchInput)
    );

    return filterData;

}


const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");

    return (

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
                const data = filterData(searchInput, restaurants);

                // update the state - restraunts
                setRestaurants(data);
            }}> Search </button>
        </div>
        

        <div className="restaurant-list">
            {
                restaurants.map((restaurantList) => {
                    return <RestaurantCard {...restaurantList.info} key={restaurantList.info.id} />
                })
            }
        </div>
        </>


    );
}

export default Body;    