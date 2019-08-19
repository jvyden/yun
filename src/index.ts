import dotenv from 'dotenv'
dotenv.config()
import "./startup"
import { AkairoClient } from "discord-akairo";
import { handleEvents } from "./events";

const prefix = process.env.PREFIX || "!";
const owners = process.env.OWNERS || "";

const client = new AkairoClient({
  prefix,
  ownerID: owners.split(","),
  commandDirectory: "./dist/commands/",
},{
  disableEveryone: true,
});

handleEvents(client);

client.login(process.env.TOKEN!)