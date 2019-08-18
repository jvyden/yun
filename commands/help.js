const fs = require("fs")
const Discord = require("discord.js")

const info = {
  helptext: "Shows you all the commands, and how to use them."
}

function execute(message, args) {
  if(args.length === 0) {
    let cmdlist = fs.readdirSync(__dirname)
    for(i=0; i<cmdlist.length; i++) {cmdlist[i] = cmdlist[i].replace(".js", "")}
    let embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`${cmdlist.join(", ")}`)
      .setFooter(`${cmdlist.length} commands`)
      .setTitle('All Commands')
    message.channel.send(embed)
  } else {
    const cmdloc = `${__dirname}/${args[0]}.js`
    if(!fs.existsSync(cmdloc)) {return}
    const helptext = require(cmdloc).info.helptext
    delete require.cache[require.resolve(cmdloc)]; // Unload module to allow for rapid development
    return helptext
  }
  return
}

module.exports = {
  info: info,
  execute: execute
}
