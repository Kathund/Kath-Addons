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

register("command", (...args) => {
  try {
    if (!["add", "remove"].includes(args[0].toLowerCase())) throw new Error("Invalid argument (add/remove)");
    if (args[0].toLowerCase() === "add") {
      helperFunction.getUUID(args[1]).then((uuid) => {
        helperFunction.data.ignoreList.push(uuid);
        helperFunction.data.save();
        ChatLib.chat(`&2[&dKath&2] &7Added &a${args[1]} &7to the list of client side blocked users`)
      }).catch((error) => { throw new Error(error) })
    } else if (args[0].toLowerCase() === "remove") {
      helperFunction.getUUID(args[1]).then((uuid) => {
        helperFunction.data.ignoreList.splice(helperFunction.data.ignoreList.indexOf(uuid), 1);
        helperFunction.data.save();
        ChatLib.chat(`&2[&dKath&2] &7Removed &c${args[1]} &7from the list of client side blocked users`)
      }).catch((error) => { throw new Error(error) })
    }
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&2[&dKath&2] &c${error}`)
  }
}).setName("hideuser")

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
