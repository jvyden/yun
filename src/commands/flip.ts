import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("flip", {
      aliases: ["flip"],
      description: "Flips a coin.",
      editable: true
    });
  }
  public async exec(message: Message) {
    const res = (Math.random() > 0.5) ? "Heads" : "Tails"
    return message.channel.send(`You flipped: ${res}`)
  }
}
