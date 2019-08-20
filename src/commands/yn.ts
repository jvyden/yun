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
    const answers = ["Yes.", "No."];
    const ra = Math.floor(Math.random() * answers.length);
    return message.channel.send(answers[ra])
  }
}
