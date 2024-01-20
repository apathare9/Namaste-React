import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";

const RestaurantMenu = () => {

    // to read dynamic url parameters
    const { id } = useParams();

    // Use proper names
    const [ restaurant, setRestaurant, setMenu] = useState({});
    const [ resmenu,  setResMenu] = useState({});
    

    useEffect( () => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2181987&lng=72.9622965&restaurantId=749876&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json(); 
        console.log(json);

        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card);
    }

    return (
        <div>
            <div>
                <h1>Restaurant id: {id}  </h1>
                <h2> {restaurant.name} </h2>
                <img src={ IMG_CDN_URL + restaurant.cloudinaryImageId} /> 

                <h2> {restaurant.areaName} </h2>
                <h2> {restaurant.city} </h2>
                <h2> {restaurant.avgRating} </h2>
                <h2> {restaurant.costForTwoMessage} </h2>
            </div>

            <div>
                <h1>Menu</h1>
                {/* <ul>
                    {Object.values(resmenu.itemCards).map((item) => (
                        <li key={item.id}> {item.name}</li>
                    ))}
                </ul> */}
            </div>


        </div>
    );
};

export default RestaurantMenu;