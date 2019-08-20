import { AkairoClient, Command, CommandHandler } from "discord-akairo";
import { Message, RichEmbedOptions } from "discord.js";
import { boxContents } from "./utils";

const logStartup = (client: AkairoClient) => {
  const stat = `Logged in as ${client.user.tag} [id:${client.user.id}]`;
  const commands = client.commandHandler.modules.map(
    (mod) => `${process.env.PREFIX || "!"}${mod.id}: ${mod.description}`
  );
  const out = boxContents("Started Up!", stat, commands.join("\n"));
  console.log(out);
};

const onReady = (client: AkairoClient) => {
  logStartup(client)
  /* if you need anything else */
}
//const errorMsg = `\`\`\`js\n${error.stack}\`\`\``
/*const onError = (error: Error, message: Message, command: Command) => {
  const embed: RichEmbedOptions = {
    color: 0xFF0000,
    description: `${command.prefix}${command} is not a valid command.`,
    footer: {
      text: `Maybe try ${command.prefix}?`
    }
  }
  message.channel.send({ embed })
}*/

export const handleEvents = (client: AkairoClient) => {
  //const commandHandler = new CommandHandler(client, {});

  client.on("ready", () => onReady(client));
  /*commandHandler.on("error", 
    (error: Error, message: Message, command: Command) => 
      onError(error, message, command));*/
}