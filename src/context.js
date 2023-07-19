import { createContext, useState } from "react";

export const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);

  const value = { score, setScore };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

export default ScoreProvider;
