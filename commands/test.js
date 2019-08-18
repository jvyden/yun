const info = {
  alias: ["test"],
  helptext: "Lorem ipsum dolor sit amet"
}

function execute(message) {
  return `It works, ${message.author.tag}!`
}

module.exports = {
  info: info,
  execute: execute
}
