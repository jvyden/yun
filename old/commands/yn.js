const info = {
  helptext: "Randomly picks yes or no for the indecisive."
}

function execute() {
  answers = ["Yes.", "No."];
  ra = Math.floor(Math.random() * answers.length);
  return answers[ra];
}
module.exports = {
  info: info,
  execute: execute
}
