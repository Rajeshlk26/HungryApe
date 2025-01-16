import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
     }
     componentDidMount(){
        console.log("parent mount")
      }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <h2>Welcome to food explorer</h2>
                {/* <User name={"rajesh function"}/> */}
                <UserClass name={"first"} location={"JP"}/>
            </div>
        )
    }
}


export default About;