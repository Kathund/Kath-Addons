import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings

import { Promise } from '../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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


register("command", () => {
  try {
    var banID = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 8; i++) {
      banID += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    delay(800).then(() => {
      helperFunction.data.fakeBanned = true;
      helperFunction.data.banID = banID;
      helperFunction.data.banTimestamp = Math.floor(Date.now() / 1000)
      helperFunction.data.save()

      const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
      if (config.miscBanType === 0) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 1) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 2) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fExtreme Chat Infraction. \n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 3) {
        Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are currently blocked from joining this server!\n§r\n§7Reason: §fYour username, ${Player.getName()}, is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n§r\n§cPlease change your Minecraft username before trying to join again.\n§cIf you believe your name has been falsely blocked, contact §b§nhttps://support.hypixel.net`))
      }
    })
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("getbanned");


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
