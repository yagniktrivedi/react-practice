// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const filerResList = () => {
    const filerRes = listOfRestaurants?.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRes(filerRes);
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
            data-testid="searchInput"
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
        <div className="search m-4 p-4 flex items-center">
          <label>User Name : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant, i) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
            >
              {restaurant.info.avgRating > 4.4 ? (
                <RestaurantCardPromoted {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

// avgRating
