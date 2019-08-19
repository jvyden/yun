const info = {
  helptext: "Runs arguments in eval()"
}

function execute(message) {
  m = message.toString()
  args = m.substr(m.split(" ")[0].length)
  return eval(args)
}

module.exports = {
  info: info,
  execute: execute
}
