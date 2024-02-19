import { useState, useEffect } from "react";

const Profile = (props) => {

    // Create State Variables
    const [count, setCount]  = useState(0);

    useEffect(() => {
        // API Call
        console.log("Child - UseEffect");

        const timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000);

        return() => {
            clearInterval(timer);
            console.log("componentWillUnmount")
        }
    });



    console.log("Child - Render");

    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Name : {props.name} </h3>
            <h3>Name : {count} </h3>   
            <button 
                onClick={() => {
                    setCount(1);
                }}
            > Count </button>
        </div>
    );
};

export default Profile;


// Sequence of Execution 
// Render --> UseEffect