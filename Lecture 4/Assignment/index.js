import React from "react";
import ReactDOM from "react-dom/client";

import "./Assignment.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";

//  ************** Question 1 **************

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

// const heading1 = React.createElement("h1", {id : "title"}, "Heading 1");
// const heading2 = React.createElement("h2", {id : "title"}, "Heading 2");
// const heading3 = React.createElement("h3", {id : "title"}, "Heading 3");

// const header = React.createElement("div", {id : "header"}, [heading1, heading2, heading3]);

// const container = React.createElement("div", {id:"container"}, [header]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);



// Create the same element using JSX

// const header = ( <div id="header">  
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div> );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// Create a functional component of the same with JSX
// const Header = () => {
//     return (
//     <div id="header">  
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);

// Pass attributes into the tag in JSX

// const Header = () => {
//     return (

//         <div id="header">
//             <h1 style={{color:"blue"}} key="h1" >Heading 1</h1>
//             <h2 style={{color:"blue"}} key="h2" >Heading 2</h2>
//             <h3 style={{color:"blue"}} key="h3" >Heading 3</h3>
//         </div>


//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);

// Composition of Component(Add a component inside another)

// const Component2 = () => {
//     return (
//         <h2 key="h2">Component 2</h2>
//     );
// }

// const Component1 = () => {
//     return (
//         <div>
//             <h1 key="h1" >Component 1</h1>
//             <Component2/>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component1/>);

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//   return <h2 style={{ color: "red" }}>Title Element</h2>;
// }; // This is Title Component

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {/* This is {TitleComponent} */}
//       {TitleElement}
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       {/* This is {<TitleComponent/>} */}
//       <TitleElement/>
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       {/* This is {<TitleComponent></TitleComponent>}*/}
//       <TitleElement></TitleElement>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>)

//  ************** Question 2 **************

// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left

const Header = () => {
    return (
      <>
        <header className="header">
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="center">
            <input
              className="input"
              type="text"
              placeholder="Search anything you want..."
            />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div className="right">
            <img src={userIcon} alt="User Icon" />
          </div>
        </header>
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />); // we can also write like this for functional component root.render(Header())
