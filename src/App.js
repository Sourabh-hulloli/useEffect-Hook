import React, { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // On every Render
  useEffect(() => {
    // window.addEventListener("resize", updateWindowWidth);
    console.log("I re-rendered");
  });

  // On first Render/ Mount only! - componentDidMount Alternative
  useEffect(() => {
    console.log("The Component Mounted");
  }, []);

  // On first Render + whenever dependency changes! - componentDidUpdate Alternative
  useEffect(() => {
    // console.log(`The name changed: ${name}`);
  }, [name]);

  // Follows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      // when component unmounts, thiscleanup code runs....
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="App">
      <center>
        <h1>The UseEffect Hook</h1>
        <h2>The Window Width is: {windowWidth}</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </center>
    </div>
  );
};

export default App;
