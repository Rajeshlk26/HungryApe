import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_ITEM_IMAGE } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines = [],
    avgRating,
  } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  const Categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-4 m-4 text-center">
      <div className="leading-2 font-medium border border-solid border-gray-400 rounded-xl">
        <h1 className="font-bold p-2 m-2">{name}</h1>
        <p className="p-2 m-2">
          {avgRating}-{costForTwoMessage}
        </p>
        <p className="p-2 m-2">{cuisines.join(", ")}</p>
      </div>
      <h2 className="font-bold p-2 m-2">Menu</h2>
      {Categories.map((category, index) => (
        <RestaurantCategory data={category?.card?.card} 
        showItems={index===showIndex?true:false}
        setShowIndex={() => setShowIndex(showIndex===index?null:index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
