import React, {lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-DOM/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const GroceryMart = lazy(() => import("./components/GroceryMart"))


const AppLayout = () =>{

  const [userName, setUserName] = useState();

   //authentication
   useEffect(() => {
    //make an API call and send the userdata
    const data = {
      name: "Rajesh Korishettar"
    }
    setUserName(data.name)
   }, [])

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Be in line, getting a cart for you</h1>}>
          <GroceryMart />
        </Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
  },
  ,
])

// const heading=React.createElement("h1", {id:"heading"}, "Welcome to Raect")

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
