const info = {
  helptext: "Flips a coin."
}

function execute() {
  const answers = ["Heads", "Tails"];
  const ra = Math.floor(Math.random() * answers.length);
  return `You flipped: ${answers[ra]}`
}
module.exports = {
  info: info,
  execute: execute
}
