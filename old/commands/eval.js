const info = {
  helptext: "Runs arguments in eval()"
}

function execute(message) {
  m = message.toString()
  args = m.substr(m.split(" ")[0].length)
  return "for now its just going to say this until i fix stuff"//eval(args)
}

module.exports = {
  info: info,
  execute: execute
}
