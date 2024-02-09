import { useContext } from "react";
import { IMG_CDN_URL } from "../Constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);
  // console.log(restaurant);
  // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5 className="font-bold"> {user.name}</h5>
    </div>
  );
};

export default RestaurantCard;
