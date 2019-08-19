const info = {
  helptext: "Gives you a response from teh magic 8ball:tm:"
}

function execute() {
  const answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
  const ra = Math.floor(Math.random() * answers.length);
  returnanswers[ra];
}

module.exports = {
  info: info,
  execute: execute
}
