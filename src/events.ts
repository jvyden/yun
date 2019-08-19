import { AkairoClient } from "discord-akairo";
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

export const handleEvents = (client: AkairoClient) => {
  client.on("ready", () => onReady(client));

}