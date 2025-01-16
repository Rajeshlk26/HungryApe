import {useState} from "react";

const User = ({name}) => {
    const[count, setCount]=useState(0);
    return( 
    <div className="user-card">
        <h2>Count={count}</h2>
        <button onClick={() => {
            setCount(count+1);
        }}>Count increase</button>
        <h2>Name:{name}</h2>
        <h3>Location: Banglore</h3>
        <h4>Contact: @rajeshlk26</h4>
    </div>
    )
}

export default User;