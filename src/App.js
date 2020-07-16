import React from "react";
import "./App.css";
import Person from "./Person";
import ClassPerson from "./ClassPerson";
function App() {
  return (
    <div className="App">
      <div>
        <h1>hello</h1>
      </div>

      <Person age="1" name="ha"></Person>
      <Person age="2" name="duy"></Person>

      <Person age="4" name="lam"></Person>
      <Person age="8" name="truong"></Person>

      <ClassPerson age="3"></ClassPerson>

      <ClassPerson age="5"></ClassPerson>
    </div>
  );
}

export default App;
