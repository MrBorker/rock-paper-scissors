import "./reset.css";
import "./App.css";
import { Header, GameArea } from "./components";
import { useState } from "react";
import { ScoreContext } from "./context";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score }}>
      <div className="root">
        <div className="content-wrapper">
          <Header />
          <GameArea setScore={setScore} score={score} />
        </div>
      </div>
    </ScoreContext.Provider>
  );
}

export default App;
