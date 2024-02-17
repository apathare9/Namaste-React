import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State Variables
    this.state = {
      UserInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor" + this.props.name);
  }

  async componentDidMount() {
    // API Calls

    const data = await fetch("https://api.github.com/users/apathare9");
    const json = await data.json();
    console.log(json);

    this.setState({
      UserInfo: json,
    });

    console.log("Child - componentDidMount" + this.props.name);

    this.timer = setInterval(() => {
      console.log("Namaste React OP -- Class");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.timer);
  }

  render() {
    console.log("Child - Render" + this.props.name);
    const git = this.state?.UserInfo;
    return (
      <div>
        <h2>Profile Class Component</h2>
        <img src={git?.avatar_url} />
        <h3>Name : {git?.name} </h3>
        <h3>Git Id : {git?.id} </h3>
      </div>
    );
  }
}

export default Profile;

// Sequence of Execution
// Constructor --> Render --> componentDidMount
