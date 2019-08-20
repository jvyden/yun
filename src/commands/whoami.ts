import { Command } from "discord-akairo";
import { Message, RichEmbedOptions, GuildMember } from "discord.js";
import { isMod, isOwner } from "../utils"

export default class extends Command {
  constructor() {
    super("whoami", {
      aliases: ["whoami"],
      description: "What is your member status?",
    });
  }

  public status = (member: GuildMember) => {
    if (isOwner(member.id)) {
      return {type: "Owner!", n: "n", color: 0xF1C40F}
    } else if (isMod(member)) {
      return {type: "Moderator!", n: "", color: 0xD04BDB}
    } else {
      return {type: "Member!", n: "", color: 0xB9BBBE}
    }
  }

  public async exec(message: Message) {
    const out = this.status(message.member)
    const embed: RichEmbedOptions = {
      author: { name: message.author.username, icon_url: message.author.avatarURL },
      description: `You are a${out.n} ${out.type}`,
      color: out.color
    }

    return message.channel.send({ embed })
  }
}
