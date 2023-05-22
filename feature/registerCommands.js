import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings


// ! GUI
register("command", () => config.openGUI()).setName("kath");

// ! Limbo
register("command", () => ChatLib.say('§')).setName("limbo");

// ! Wiki Search
register("command", (...args) => {
  let url = `${config.chatWikiSwapper ? `https://hypixel-skyblock.fandom.com/wiki/Special:Search?query=${args.join("+")}` : ""}`;
  const wikiMessage = new Message(
    new TextComponent(`Searched for ${args.join(" ")} using ${config.chatWikiSwapper ? "Fandom Wiki" : "Official Wiki"}`).setClick("open_url", url).setHover("show_text", url)
  );
  ChatLib.chat(wikiMessage)
}).setName("wikisearch");


// ! Discord commands
// ? off
register("command", () => {
  helperFunction.data.discordWarningMessage = false
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] &7Turned&l&c off&r&7 discord warning message`)
}).setName("discordwarningoff");

// ? on
register("command", () => {
  helperFunction.data.discordWarningMessage = true
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] &7Turned&l&a on&r&7 the discord warning message`)
}).setName("discordwarningon");
