import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("poll", {
      aliases: ["poll"],
      description: "Quickly makes a poll using arrow reactions.",
      editable: true
    });
  }
  public async exec(message: Message) {
    await message.react('⬆')
    return await message.react('⬇')
  }
}
