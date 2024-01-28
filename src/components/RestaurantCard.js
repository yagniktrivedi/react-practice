// Restaurant card component: Image, name, cuisine
import { CDN_URL } from "../utils/constans";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div
      data-testid="resCard"
      className="p-4 m-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300"
    >
      <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla?.slaString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
