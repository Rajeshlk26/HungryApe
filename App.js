

       const heading=React.createElement("h1", {}, React.createElement("div", {className:"parent"}, 
        React.createElement("child", {className: "child"},
        React.createElement("grandchild", {className: "grandchild"}, "Hi from grandchild"))));
        
        const root = ReactDOM.createRoot(document.getElementById("root"))

        root.render(heading);