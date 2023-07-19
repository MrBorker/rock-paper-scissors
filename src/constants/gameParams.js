const themes = {
  actionType: { rock: "rock", paper: "paper", scissors: "scissors" },
  size: { huge: "huge", normal: "normal" },
  state: { winner: "winner", modal: "modal" },
};

const rules = {
  rock: ["paper", "scissors"],
  paper: ["scissors", "rock"],
  scissors: ["rock", "paper"],
};

export { themes, rules };
