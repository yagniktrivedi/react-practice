/*
const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "test params" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);

root.render(heading);
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h1", {}, "I am h1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 of second child"),
        React.createElement("h1", {}, "I am h1 of second child")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
