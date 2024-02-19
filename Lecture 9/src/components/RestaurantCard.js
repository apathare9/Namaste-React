import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({ id, cloudinaryImageId, name, cuisines, avgRating }) => {
    // console.log(restaurant);
    // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info 
    return (
        <div className="card">
            <h1>{id} </h1>
            <img src={ IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

export default RestaurantCard;
