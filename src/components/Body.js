// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "Data",
      json.data.cards[4]
      // json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const filerResList = () => {
    console.log("inside callback");
    const filerRes = listOfRestaurants?.filter((res) => res.info.avgRating > 4);
    // console.log("filterd values", filerRes);
    setListOfRestaurants(filerRes);
  };

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const onSearchClick = () => {
    // listOfRestaurants
    console.log("searchText", searchText);

    const filteredRest = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredRest);
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1>
        Looks like you are Offline. Please check your internet connection.{" "}
      </h1>
    );
  }

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filer flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={onSearchChange}
          />
          <button
            className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={onSearchClick}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 ">
          <button
            className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={filerResList}
          >
            {" "}
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant, i) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
