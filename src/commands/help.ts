import { Command } from "discord-akairo";
import { Message, RichEmbedOptions } from "discord.js";

export default class extends Command {
  constructor() {
    super("help", {
      aliases: ["help"],
      description: "Lists all the commands",
    });

  }

  public exec(message: Message) {
    const cstr = this.client.commandHandler.modules.map((command) =>
      `$${command.id}: ${command.description}`
    );

    const embed: RichEmbedOptions = {
      title: "Yun",
      description: "",
      fields: [{
        name: "Commands",
        value: cstr.join("\n")
      }],
      color: 0x3498Db
    };

    message.channel.send({ embed });
  }
}
