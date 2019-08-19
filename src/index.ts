import discord from "discord.js"
import dotenv from 'dotenv'
dotenv.config()
import "./startup"

const token = process.env.TOKEN!

const client = new discord.Client();

console.log(token)