import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("yn", {
      aliases: ["yn"],
      description: "Randomly picks yes or no for the indecisive.",
      editable: true
    });
  }
  public async exec(message: Message) {
    const res = (Math.random() > 0.5) ? "Yes." : "No."
    return message.channel.send(res)
  }
}
