import { useContext } from "react";
import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} =props;
    console.log(resData)
    const {cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla} = resData?.info;
    return(
      <div className="h-[350px] w-[250px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="h-32 w-full object-cover rounded-lg" src={CDN_URL+ resData.info.cloudinaryImageId} alt="res-image" />
        <div className="flex flex-col leading-6 mt-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <h4>{"⭐"}{avgRating}{" - "}{sla.deliveryTime} minutes</h4>
        <h4></h4>
        <h4>{costForTwo}</h4>
        <h4 className="text-sm text-gray-500 mt-2 overflow-hidden text-ellipsis">{cuisines.join(", ")}</h4>
        </div>
      </div>
    )
  }

export default RestaurantCard;
