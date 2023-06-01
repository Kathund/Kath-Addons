import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings


// ! GUI
register("command", () => config.openGUI()).setName("kath");

// ! Limbo
register("command", () => ChatLib.say('§')).setName("limbo");

// ! Fast Transfer
register("command", (...args) => {
  try {
    if (args.length === 0) {
      throw new Error("You cannot transfer to no one");
    } else if (args[0] === Player.getName()) {
      throw new Error("You cannot transfer to yourself");
    } else {
      ChatLib.chat(`/p transfer ${args[0]}`);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("pt");

// ! Wiki Search
register("command", (...args) => {
  try {
    let url = "";

    if (config.chatWikiSwapper == true) {
      url = `https://hypixel-skyblock.fandom.com/wiki/Special:Search?query=${args.join("+")}`;
    } else if (config.chatWikiSwapper == false) {
      url = `https://wiki.hypixel.net/index.php?search=${args.join("+")}`;
    }

    const wikiMessage = new Message(
      new TextComponent(`Searched for ${args.join(" ")} using ${config.chatWikiSwapper ? "Fandom Wiki" : "Official Wiki"}`).setClick("open_url", url).setHover("show_text", url)
    );
    ChatLib.chat(wikiMessage)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("wikisearch");


// ! Discord commands
// ? off
register("command", () => {
  helperFunction.data.discordWarningMessage = false
  helperFunction.data.save();
  ChatLib.chat(`&dkath &6>&7 Turned&l&c off&r&7 discord warning message`)
}).setName("discordwarningoff");

// ? on 
register("command", () => {
  helperFunction.data.discordWarningMessage = true
  helperFunction.data.save();
  ChatLib.chat(`&dkath &6>&7 Turned&l&a on&r&7 the discord warning message`)
}).setName("discordwarningon");

// ! limbo command hider
register("chat", (e) => cancel(e)).setCriteria(/^Illegal characters in chat$/)
