import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

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
        <header>
          <Link to="/">
            Adopt Me!
            {/* <h1 id="something-important">Adopt Me!</h1> */}
          </Link>
        </header>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" /> */}
        {/* <Pet name="Pepper" animal="Bird" breed="Cockatiel" /> */}
        {/* <Pet name="Doink" animal="Cat" breed="Mixed" /> */}

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
