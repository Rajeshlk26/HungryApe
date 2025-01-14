import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] =useState(null)

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async() => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }

    if(resInfo===null)return <Shimmer />

    const {name, costForTwoMessage, cuisines =[], avgRating}=
    resInfo?.data?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || []

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
                        <h5>{item.card.info.price / 100}</h5>
                        <p>{item.card.info.description}</p>                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default RestaurantMenu