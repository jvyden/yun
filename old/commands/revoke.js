const info = {
  helptext: "Revoke's a users naenae privileges."
}

function execute(message, args) {
  let username = args[0]
  if(!username) {username = message.author.username}
  return `${username}'s naenae privileges have been revoked.`
}

module.exports = {
  info: info,
  execute: execute
}
