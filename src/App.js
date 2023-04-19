import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Modal, GameArea } from "./components";

function App() {
  return (
    <div className="root">
      <GameArea />
    </div>
  );
}

export default App;
