import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constans";
import useRestaurants from "../utils/useRestaurants";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const restInfo = useRestaurants(restId);

  if (restInfo === null) return <Shimmer />;

  const { name, city, costForTwoMessage, cuisines } =
    restInfo?.cards[0]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines?.join(", ")}</h3>
    </div>
  );
};

export default RestaurantMenu;
