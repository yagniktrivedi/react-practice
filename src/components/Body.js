// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  console.log("listOfRestaurants", listOfRestaurants);
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

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filer">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={onSearchChange}
          />
          <button onClick={onSearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={filerResList}>
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant, i) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
