import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("revoke", {
      aliases: ["revoke"],
      description: "Revoke's a users naenae privileges.",
      args: [{
        id: "target"
      }, {
        id: "rest",
        match: "rest"
      }]
    });
  }
  
  public async exec(message: Message, { target, rest }: any) {
    if (!target) { target = message.author.username }
    return message.channel.send(`${target}'s naenae privileges have been revoked.`)
  }
}
