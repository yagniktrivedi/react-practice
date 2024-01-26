import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constans";
import useRestaurants from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const restInfo = useRestaurants(restId);

  if (restInfo === null) return <Shimmer />;

  const { name, city, costForTwoMessage, cuisines } =
    restInfo?.cards[0]?.card?.card?.info;

  const catagories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {catagories.map((catagory, index) => (
        <RestaurantCategory
          id={catagory?.card?.card.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
