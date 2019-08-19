console.log("Starting Yun...")
const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");

let config;
function loadconfig(reloading = false) {
  const cfgloc = __dirname + "/config.json"
  const cfgfile = fs.readFileSync(cfgloc)
  let confignew;
  try {
    confignew = JSON.parse(cfgfile)
  }
  catch(e){
    console.error(`Error while reading config ${cfgloc}: ${e}`)
    if(!reloading) {process.exit(1)} else {console.error(`Config will not be updated until the error is fixed.`)}
    return
  }
  config = confignew
  console.log(`Successfully loaded config ${cfgloc}.`)
}
Date.prototype.unixTime = function() {return Math.round(this.valueOf() / 1000)}
let lastWatch = new Date(0).unixTime()
fs.watch(__dirname + "/config.json", (event, filename) => {
  const now = new Date().unixTime()
  if(!filename) {return}
  if(lastWatch === now) {return}
  lastWatch = now
  if(event === "change") {loadconfig(true)}
})
function runCommand(input, message) {
  let args = input.split(' ')
  const cmd = args[0].toLowerCase()
  args.shift()
  let out;
  try {
    const path = `${__dirname}/commands/${cmd}.js`
    if(!fs.existsSync(path)) {
      if(config.commandNotFoundEmbed) {
        let embed = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(`${config.prefix}${cmd} is not a valid command.`)
          .setFooter("Maybe try !help?")
        message.channel.send(embed)
      }
      return
    }
    const command = require(path)
    out = command.execute(message, args)
  }
  catch(e) {
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle("An unexpected error occured. Tell a developer:")
      .setDescription("```js\n" + e.stack + "```")
    message.channel.send(embed)
    console.error(e)
    return
  }
  return out
}
loadconfig()

client.on('ready', function() {console.log(`Connected to discord as ${client.user.tag}. (${client.user.id})`)});
client.on('message', function(message) {
  const m = message.toString()
  if(message.author === client.user) {return}
  if(m.startsWith(config.prefix)) {
    cmdout = runCommand(m.substr(1), message)
    console.log(`${message.author.tag}: ${m}`)
    if(cmdout === undefined) {return}
    console.log(cmdout)
    message.channel.send(cmdout)
  }
})
client.login(config.token)
