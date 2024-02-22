import { IMG_CDN_URL, MENU_ITEM_URL } from "../Constants";

const FoodItem = ({
  name,
  cloudinaryImageId,
  price,
  defaultPrice,
  imageId,
}) => {
  // console.log(restaurant);
  // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 font-Whitney text-[#3e4152]">
      <img src={MENU_ITEM_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      {/* <h3>{cuisines.join(", ")}</h3> */}
      {/* <h4>{description}</h4> */}
      <h5 className="text-lg font-semibold">Rupees: {price / 100}</h5>
    </div>
  );
};

export default FoodItem;
