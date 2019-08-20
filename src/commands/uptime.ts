import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("uptime", {
      aliases: ["uptime"],
      description: "Shows the uptime of the bot.",
    });
  }
  public async exec(message: Message) {
    return message.channel.send("Yun Uptime: " + new Date(process.uptime() * 1000).toISOString().substr(11, 8))
  }
}
