import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import { useRestaurant, useRestaurantMenu } from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  const menu = useRestaurantMenu(id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  const addFoodItem = (e) => {
    dispatch(addItem(e));
  };

  // async function getRestaurantMenu() {
  //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2181987&lng=72.9622965&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
  //     const json = await data.json();

  //     const itemCardsArray = await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  //     const resMenuItems = await itemCardsArray?.map(itemCard => itemCard?.card?.info);
  //     setResMenu(resMenuItems);

  // }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div>
        <h5>Testin</h5>
        <h1>Restaurant id: {id} </h1>
        <h2> {restaurant.name} </h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />

        <h2> {restaurant.areaName} </h2>
        <h2> {restaurant.city} </h2>
        <h2> {restaurant.avgRating} stars </h2>
        <h2> {restaurant.costForTwoMessage} </h2>
      </div>

      <div>
        <button
          className="p-2 m-2 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {menu?.map((e) => (
            <li key={e?.id}>
              {e?.name} -
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(e)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
