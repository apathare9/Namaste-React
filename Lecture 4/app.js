import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => Object => HTML(DOM)

const heading1 = React.createElement("h1", {id : "title"}, "Heading 1");

// using JSX => React.createElement => Object => HTML(DOM)

const heading2 = (<h1 id="title" key="h2" >Heading 2</h1>);

// React Component
// - Functional - NEW
// - Class Based Component  - OLD

// Functional : -
// Name of the component starts with capital letter -- not mandatory

const HeaderComponent = () => {
    return (
        <div>
            <h1> Namaste React Functional Component</h1>
            <h2> This is h2 tag</h2>
        </div>
    );
}

const HeaderComponent2 = () => {
    return (
        <div>
            <h1> Namaste React Functional Component 2 </h1>
            <h2> This is h2 tag</h2>
        </div>
    );
}

// *** Calling React Element inside a react component ***
// Component Composition

const Element = () => (
    <h1>elem inside comp</h1>
);


const Component = () => {
    return (
        <div> 

            <Element />
            <h1> Comp </h1>
            
        </div>
        
    )

}



const container = React.createElement("div", {id: "container"}, [heading1, heading2, <HeaderComponent/>,<HeaderComponent2/>, <Component/>]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

