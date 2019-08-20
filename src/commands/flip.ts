import { Command } from "discord-akairo";
export default class extends Command {
  constructor() {
    super("flip", {
      aliases: ["flip"],
      description: "Flips a coin.",
      editable: true
    });
  }
  public async exec() {
    const answers = ["Heads", "Tails"];
    const ra = Math.floor(Math.random() * answers.length);
    return `You flipped: ${answers[ra]}`
  }
}
