import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantCard_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredrestaurant] = useState([]);

  const [searchtext, setSearchtext] = useState("");
  const OnlineStatus=useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantCard_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfRestaurants(restaurants);
    setFilteredrestaurant(restaurants);
    // console.log(restaurants);
  };

  if(OnlineStatus===false){
    return <h1>Oops, no internet connection</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchtext);
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredrestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filterdList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.2            );
            setFilteredrestaurant(filterdList);
            // console.log(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
