console.log("Starting Yun...")
const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");

let config;
function loadconfig() {
  const cfgloc = __dirname + "/config.json"
  const cfgfile = fs.readFileSync(cfgloc)
  try {config = JSON.parse(cfgfile)}
  catch(e){
    console.error(`Error while reading config ${cfgloc}: ${e}`)
    process.exit(1)
  }
  console.log(`Successfully loaded config ${cfgloc}.`)
}
function runCommand(input, message) {
  let args = input.split(' ')
  const cmd = args[0].toLowerCase()
  args.shift()
  let out;
  try {
    const path = `${__dirname}/commands/${cmd}.js`
    if(!fs.existsSync(path)) {
      let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(`!${cmd} is not a valid command.`)
        .setFooter("Maybe try !help?")
      message.channel.send(embed)
      return
    }
    // evalout = eval(fs.readFileSync(path).toString())
    const command = require(path)
    console.log(command.info)
    out = command.execute(message)
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

client.on('ready', function() {console.log(`Successfully connected to discord as ${client.user.tag}. (${client.user.id})`)});
client.on('message', function(message) {
  const m = message.toString()
  if(message.author === client.user) {return}
  if(m.startsWith('!')) {
    cmdout = runCommand(m.substr(1), message)
    console.log(`${message.author.tag}: ${m}\n${cmdout}`)
    if(cmdout === undefined) {return}
    message.channel.send(cmdout)
  }
})
client.login(config.token)
