import dotenv from 'dotenv'
dotenv.config()
import "./startup"
import discord from "discord.js"
import { AkairoClient } from "discord-akairo";

const prefix = process.env.PREFIX || "!";
const owners = process.env.OWNERS || "";

const client = new AkairoClient({
  prefix,
  ownerID: owners.split(","),
  commandDirectory: "./dist/commands/"
},{
  disableEveryone: true,
});

client.login(process.env.TOKEN!)