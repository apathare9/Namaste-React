import { useState, useEffect } from "react";

export const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2181987&lng=72.9622965&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);

    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
  }

  return restaurant;
};

export const useRestaurantMenu = (id) => {
  const [resmenu, setResMenu] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2181987&lng=72.9622965&restaurantId=" +
        id
    );
    const json = await data.json();

    // const itemCardsArray = await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const itemCardsArray = await json?.data?.cards[4]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const resMenuItems = await itemCardsArray?.map(
      (itemCard) => itemCard?.card?.info
    );
    setResMenu(resMenuItems);
  }

  return resmenu;
};
