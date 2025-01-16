import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        userInfo:{
            name:"dummyname",
            location: "default",
        },
    }
    console.log("child constructor")
  }
 async componentDidMount(){
    console.log("child mount")
    //API call
    const data = await fetch("https://api.github.com/users/rajeshlk26")
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo:json,
    });
  }

  componentDidUpdate(){
    console.log("component updated")
  }

  componentWillUnmount(){
    console.log("component destroyed")
  }

  render() {
    const { name, location } = this.state.userInfo;
    console.log(name+" "+"child render")
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rajeshlk26</h4>
      </div>
    );
  }
}

export default UserClass;
