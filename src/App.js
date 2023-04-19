import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Header, GameArea } from "./components";

function App() {
  return (
    <div className="root">
      <Header />
      <GameArea />
    </div>
  );
}

export default App;
