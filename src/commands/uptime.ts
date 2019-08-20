import { Command } from "discord-akairo";
import { Message } from "discord.js";
const HHMMSS = function (now: number) {
  return new Date(now * 1000).toISOString().substr(11, 8);
}
export default class extends Command {
  constructor() {
    super("uptime", {
      aliases: ["uptime"],
      description: "Shows the uptime of the bot.",
      editable: true
    });
  }
  public async exec(message: Message) {
    return message.channel.send("Yun Uptime: " + HHMMSS(process.uptime()))
  }
}
