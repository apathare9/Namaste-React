import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurantList) => {
                    return <RestaurantCard {...restaurantList.info} key={restaurantList.info.id} />
                })
            }
        </div>


    );
}

export default Body;