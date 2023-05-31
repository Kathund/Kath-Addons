import * as helperFunction from "../../../helperFunctions.js";
import { Promise } from '../../../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../../../settings";
const config = Settings

register("chat", (event) => {
  try {
    if (!config.miscBanOnThrow) return;
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!message.includes("You were killed by")) return;
    var banID = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 8; i++) {
      banID += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    delay(800).then(() => {
      helperFunction.data.fakeBanned = true;
      helperFunction.data.banID = banID;
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
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
})

// ! user joins the server
register('chat', (event) => {
  try {
    
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!message.includes("Guild: Message Of The Day")) return;

    if (helperFunction.data.fakeBanned == true) {
      var banID = helperFunction.data.banID;
      const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");

      delay(300).then(() => {
        if (config.miscBanType === 0) {
          if (config.miscBanLength === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 1) {
          if (config.miscBanLength === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 2) {
          if (config.miscBanLength === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f${helperFunction.calculateRemainingTime(helperFunction.data.banTimestamp)}§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanLength === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fExtreme Chat Infraction. \n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are currently blocked from joining this server!\n§r\n§7Reason: §fYour username, ${Player.getName()}, is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n§r\n§cPlease change your Minecraft username before trying to join again.\n§cIf you believe your name has been falsely blocked, contact §b§nhttps://support.hypixel.net`))
        }
      })
    } else {
      helperFunction.data.fakeBanned = false;
      helperFunction.data.banID = "";
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
})