import React from "react";
import ReactDOM from "react-DOM/client"

       const heading=React.createElement("h1", {}, React.createElement("div", {className:"parent"}, 
        React.createElement("child", {className: "child"},
        React.createElement("grandchild", {className: "grandchild"}, "Hi from grandchild"))));
        
        console.log(parent)
        const root = ReactDOM.createRoot(document.getElementById("root"))

        root.render(heading);