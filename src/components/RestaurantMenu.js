import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);
   console.log(resInfo);

    if(resInfo===null)return <Shimmer />

    const {name, costForTwoMessage, cuisines =[], avgRating}=
    resInfo?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || []

  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{avgRating}-{costForTwoMessage}</p>
        <p>{cuisines.join(", ")}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    <div className="menu-card">
                        <h4>{item.card.info.name}</h4>
                        <h5>{item.card.info.price/100 || item.card.info.defaultPrice/100}</h5>
                        <p>{item.card.info.description}</p>                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default RestaurantMenu