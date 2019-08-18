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
loadconfig()
