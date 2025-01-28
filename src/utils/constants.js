const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"

const LOGO_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_mLV1R0U7LZxJXac9Yv5j8Aohtk-rzZO2A&s"

const RestaurantCard_API = `${CORS_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

const MENU_API=`${CORS_PROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=`

const MENU_ITEM_IMAGE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

export {CDN_URL, LOGO_URL, MENU_API, RestaurantCard_API, MENU_ITEM_IMAGE}