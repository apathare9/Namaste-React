import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";

// const About = () => {
//     return(
//         <div>
//             <h1> About Us Page </h1>
//             <p>
//                 This is the Namaste React Live Course Lecture - 9 - Finding the Path 
//             </p>

//             <ProfileFunctional name={"Jinks"} />
//             <Profile name={"Jinks Class"} />
//         </div>
//     );
// };

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - Constructor")
    }

    componentDidMount() {
        //Best place to make an API call
        console.log("Parent - componentDidMount")
    }

    render() {
        console.log("Parent - render")
        return (
            <div>
                <h1> About Us Page </h1>
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