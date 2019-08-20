import { AkairoClient } from "discord-akairo";
import { GuildMember } from "discord.js";
import R = require("ramda");
import { chain } from "ramda";

export const boxContents = (...texts: string[]) => {
  const getLines = (text: string) => text.split("\n").map((line) => line.length);
  const splitTexts = chain(getLines);
  const maxLength = Math.max(...splitTexts(texts));
  const [head, ...tail] = texts;

  const spacer = "-".repeat(maxLength);
  return tail.reduce((all, text) => [...all, text, spacer], [spacer, head, spacer]).join("\n");
};

export const isOwner = (id: string) => (process.env.OWNERS || "140862798832861184")
  .split(",")
  .some(R.equals(id));

export const isMod = (member: GuildMember) =>
  member.hasPermission("KICK_MEMBERS") || isOwner(member.id);

export const countMembers = (client: AkairoClient) =>
  client.guilds.reduce((all, guild) => guild.memberCount + all, 0);
