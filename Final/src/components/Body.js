import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";

// Filter the restaurant data according input type
function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants.info.name.toLowerCase().includes(searchInput)
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2181987&lng=72.9622965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }

  console.log("render");
  console.log(allRestaurants);

  const searchFunction = (searchInput, restaurants) => {
    if (searchInput !== "") {
      // need to filter the data
      const filteredData = filterData(searchInput, restaurants);
      // update the state - restraunts
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      // setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchInput}"`
        );
      } else {
        setErrorMessage("");
        setFilteredRestaurants(filteredData);
      }
    }
  };

  if (!allRestaurants) return null;

  return (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="search-input bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            searchFunction(e.target.value, allRestaurants);
          }}
        ></input>

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            searchFunction(searchInput, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}

      {allRestaurants?.length === 0 && setAllRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap ">
          {(filteredRestaurants === null
            ? setAllRestaurants
            : filteredRestaurants
          ).map((restaurants) => {
            return (
              <Link
                to={"/restaurants/" + restaurants?.info?.id}
                key={restaurants?.info?.id}
              >
                <RestaurantCard {...restaurants?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
