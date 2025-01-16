import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect((resId) => {
        fetchMenu();
    }, [])
    
    const fetchMenu = async() => {
        const menu = await fetch(MENU_API+resId);
        const json = await menu.json();
        setResInfo(json.data);
    }
return resInfo;

}

export default useRestaurantMenu;