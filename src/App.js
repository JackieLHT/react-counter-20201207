import React from "react";
import './App.css';
import MultiCounter from "./Components/MultiCounter";

function App() {
  const size = 100;
  return (
    <div className="App">
      <header className="App-header">
        <MultiCounter />
      </header>
    </div>
  );
}

export default App;
