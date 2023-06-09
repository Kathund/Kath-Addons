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
  try {
    helperFunction.data.discordWarningMessage = false
    helperFunction.data.save();
    ChatLib.chat(`&dkath &6>&7 Turned&l&c off&r&7 discord warning message`)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("discordwarningoff");

// ? on 
register("command", () => {
  try {
    helperFunction.data.discordWarningMessage = true
    helperFunction.data.save();
    ChatLib.chat(`&dkath &6>&7 Turned&l&a on&r&7 the discord warning message`)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("discordwarningon");

// ! limbo command hider
register("chat", (e) => cancel(e)).setCriteria(/^Illegal characters in chat$/)

// ! EMOJIS
register("command", () => {
  try {
    ChatLib.chat(helperFunction.divider)
    ChatLib.chat('')
    ChatLib.chat(`&dkath &6> &cWARNING &6- &7Anyone that already has emojis turned on will have an issue with this example. &r&7To fix this, turn off emojis in the kath settings and then run the command again.`)
    ChatLib.chat('')
    ChatLib.chat('&dkath &6>&7 INTRODUCING emojis in minecraft!')
    ChatLib.chat('&dkath &6>&7 These emojis work by converting :skull: to 婓 client side')
    ChatLib.chat('&dkath &6>&7 Then by using the custom texture pack it will convert 婓 into a skull emoji')
    ChatLib.chat('&dkath &6>&7 The texture pack is made to be fully customizable so this means you can change what the emojis look like')
    ChatLib.chat('&dkath &6>&7 The texture pack download can be found in the gui &6- &7/kath &6-> &7emojis &6-> &7Texture Pack Download')
    ChatLib.chat('')
    ChatLib.chat(helperFunction.divider)
  } catch (error) {
    console.log(error)
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("emojiinfo");