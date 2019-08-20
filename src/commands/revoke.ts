import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("revoke", {
      aliases: ["revoke"],
      description: "Revoke's a users naenae privileges.",
      editable: true
    });
  }
  public async exec(message: Message) {
    let username = message.toString().split(" ")[1]
    if(!username) {username = message.author.username}
    return `${username}'s naenae privileges have been revoked.`
  }
}
