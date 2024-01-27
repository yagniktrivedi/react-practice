import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Yagnik Trivedi");
  }, []);

  console.log("App Rendered");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery List ......</h1>}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// this is how you render React Component

/*
// this is how you render React Element 
root.render(jsxHeading);

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
