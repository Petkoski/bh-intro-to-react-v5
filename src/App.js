import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "sth-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  // ]);

  return (
    <React.StrictMode>
      <div>
        <h1 id="sth-important">Adopt Me!</h1>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" /> */}
        {/* <Pet name="Pepper" animal="Bird" breed="Cockatiel" /> */}
        {/* <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
