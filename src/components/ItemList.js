import React from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constans";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const onAddClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            id={item.card.info.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span> - ₹ {item?.card?.info?.price / 100}</span>
              </div>
              <p className="tetx-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="w-12 rounded-lg bg-black text-white shadow-lg absolute"
                  onClick={() => onAddClick(item)}
                >
                  {" "}
                  Add +{" "}
                </button>
              </div>
              {item.card.info.showImage && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
