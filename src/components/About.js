import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
     }
     componentDidMount(){
        // console.log("parent mount")
      }

    render(){
        // console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <h2>Welcome to food explorer</h2>
                <div>
                    LoggedIn User :
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"rajesh function"}/> */}
                <UserClass name={"first"} location={"JP"}/>
            </div>
        )
    }
}


export default About;