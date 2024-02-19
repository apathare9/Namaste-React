import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // console.log(restaurant);
  // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
