import "./reset.css";
import "./App.css";
import { Header, GameArea, Modal, Shadow } from "components";
import ScoreProvider from "context";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(0);

  const handleClick = () => {
    setModal(1);
  };

  return (
    <ScoreProvider>
      <div className="root">
        <div className="content-wrapper">
          <Header setModal={setModal} />
          <GameArea />
          <div className="rules">
            <button className="rules-btn" onClick={handleClick}>
              rules
            </button>
          </div>
        </div>
        {modal ? <Modal setModal={setModal} /> : ""}
        {modal ? <Shadow setModal={setModal} /> : ""}
      </div>
    </ScoreProvider>
  );
}

export default App;
