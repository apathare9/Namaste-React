import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    //Best place to make an API call
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1> About Us Page </h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {" "}
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>
          This is the Namaste React Live Course Lecture - 9 - Finding the Path
        </p>
        <ProfileFunctional name={"First Child"} xyz="abc" />
        {/* <Profile name={"Second Child"} xyz="abc" /> */}
      </div>
    );
  }
}

export default About;
