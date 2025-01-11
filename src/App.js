import React from "react";
import ReactDOM from "react-DOM/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () =>{
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const heading=React.createElement("h1", {id:"heading"}, "Welcome to Raect")

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)
