const info = {
  helptext: "Quickly makes a poll using reactions."
}

function execute(message) {
  message.react('⬆')
  message.react('⬇')
}
module.exports = {
  info: info,
  execute: execute
}
