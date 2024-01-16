import React from "react";
import ReactDOM from "react-dom";

// this is how you create React element using JSX
// JSX element
const Title = () => (
  <h1 id="heading" tabIndex="5">
    This is a Title Component
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1 id="heading" tabIndex="5">
      Heading Component React
    </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// this is how you render React Component

/*
// this is how you render React Element 
root.render(jsxHeading);

this is how you create React element using core react
JSX is HTML-like or XML-like syntax
const heading = React.createElement("h1", { id: "heading" }, "Sunday Morning");
const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "test params" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);

root.render(heading);


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h1", {}, "I am h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 of second child"),
    React.createElement("h1", {}, "I am h1 of second child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/
