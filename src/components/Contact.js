import React from "react";
import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

/*

      {" "}
      <UserClass
        name={"Cary Coder"}
        location={"Earth"}
        contact={"+00 2389 369"}
      />
*/
