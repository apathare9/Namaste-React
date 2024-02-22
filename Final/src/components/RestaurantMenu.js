import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_ITEM_URL } from "../Constants";
import Shimmer from "./Shimmer";
import { useRestaurant, useRestaurantMenu } from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
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

  const removeFoodItem = (e) => {
    dispatch(removeItem(e));
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
    // relative w-11/12 max-w-[900px] flex flex-col mx-auto pt-4
    <>
      <div className="flex flex-col mx-auto items-center">
        <div className=" w-full bg-[#171a29] text-white  ">
          {/* <h5>Testin</h5>
        <h1>Restaurant id: {id} </h1> 
        bg-[#171a29]*/}

          <div className="relative w-11/12 max-w-[900px] flex flex-row mx-auto pt-4 gap-5 pb-2">
            <img
              className="w-[220px] h-[220px] object-cover "
              src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            />

            <div className="my-auto font-Ginto flex flex-row gap-[190px] ">
              <div>
                <h2 className=" text-[45px]  font-semibold ">
                  {restaurant.name}
                </h2>

                <h2> {restaurant.cuisines[0]} </h2>

                <h2 className="flex flex-row gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  {restaurant.areaName}, {restaurant.sla.lastMileTravelString}
                </h2>

                {/* <h2> {restaurant.city} </h2> */}

                <h2> {restaurant.costForTwoMessage} </h2>

                <h2 className="flex flex-row gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    fill="currentColor"
                    class="bi bi-shop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                  </svg>
                  {restaurant.slugs.restaurant}{" "}
                </h2>

                <h2 className="flex flex-row gap-1">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="22"
                    fill="currentColor"
                    class="bi bi-bicycle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z" />
                  </svg>
                  {restaurant.sla.slaString}{" "}
                </h2>
              </div>

              <div className="mt-[105px] mb-[45px] border-white  border-[1px] flex flex-col gap-2 ">
                <h2 className="mx-auto items-center pt-2 flex flex-row gap-2">
                  <div>{restaurant.avgRating}</div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    role="img"
                    aria-hidden="true"
                    strokeColor="rgba(2, 6, 12, 0.92)"
                    fillColor="rgba(2, 6, 12, 0.92)"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                    ></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#21973B"></stop>
                        <stop offset="1" stop-color="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </h2>

                <span className=" w-[105px] h-[1px] bg-white mx-auto items-center"></span>

                <h2 className="mx-auto items-center mb-2">
                  {" "}
                  {restaurant.totalRatingsString}{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-11/12 max-w-[900px] flex flex-col mx-auto pt-4">
          {/* <div>
            <button
              className="p-2 m-2 bg-green-100"
              onClick={() => handleAddItem()}
            >
              Add Item
            </button>
          </div> */}

          <div className="font-Ginto">
            <h1 className="font-bold text-[20px] text-[#3e4152]">Menu</h1>
            <ul className="flex w-full flex-col">
              <span className="w-full h-[1px] mt-[2px] bg-grayText mx-auto"></span>
              {menu?.map((e) => (
                <>
                  <li className="pt-2 w-full grid grid-cols-2  " key={e?.id}>
                    <div className="my-auto  items-center  ">
                      {/* <div>{e.isVeg} </div> */}
                      <div>{e?.name}</div>
                      <div>{e.price / 100} Rs</div>
                      <div className="pt-2">{e.description}</div>
                    </div>

                    <div className=" my-auto mb-[55px] ml-[280px] items-center ">
                      <img
                        className="w-[170px] h-[150px] object-fill "
                        src={MENU_ITEM_URL + e.imageId}
                      />

                      <div className=" flex flex-row gap-2 mx-auto items-center relative pt-[7px]">
                        <button
                          className="p-1 bg-[#171a29]  text-white rounded-md font-mullish font-bold  hover:bg-lightBlue500 transition-all duration-200 py-auto px-[18px]"
                          onClick={() => addFoodItem(e)}
                        >
                          Add
                        </button>
                        <button
                          className="p-1 bg-[#171a29]  text-white rounded-md font-mullish font-bold  hover:bg-lightBlue500 transition-all duration-200 py-auto px-[18px]"
                          onClick={() => removeFoodItem(e)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                  <span className="w-full h-[1px] mt-[2px] bg-grayText mx-auto"></span>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
