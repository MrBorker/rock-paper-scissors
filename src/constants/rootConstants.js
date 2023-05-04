const themes = {
  type: { rock: "rock", paper: "paper", scissors: "scissors" },
  size: { huge: "huge", normal: "normal" },
  state: { waiting: "waiting", winner: "winner" },
};

const rules = {
  rock: ["paper", "scissors"],
  paper: ["scissors", "rock"],
  scissors: ["rock", "paper"],
};

export { themes, rules };
