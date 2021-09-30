import React from "react";

import "./App.css";
import UseStateHook from "./Components/UseStateHook/UseStateHook";
import UseStateHook2 from "./Components/UseStateHook/UseStateHook2";

function App() {
  return (
    <div className="App">
      <h1>TypeScript Hooks Practice</h1>
      <UseStateHook />
      <UseStateHook2 />
    </div>
  );
}

export default App;
