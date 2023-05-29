import * as helperFunction from "../../../helperFunctions.js";
import { Promise } from '../../../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../../../settings";
const config = Settings

const indungeon = false;

register("chat", (event) => {
   var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
   if(message.includes("entered The Catacombs")) {
    ChatLib.chat("it works your in a dungeon")
    indungeon = true;
   }
})

register("chat", (event) => {
  try {
    if (!config.miscLeaveOnThrow) return
    if (!indungeon == true) return
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (message.includes("You were killed by")) {
      ChatLib.say("/pc I THROWING!! I am So bad I am legit a troll. I would recommend ignore adding me because how bad I am. Since I am SOOOOO BAD I am going to leave the party bye bye")
      delay(300).then(() => ChatLib.say("/p leave")).then(() => {
        indungeon = false;
        if (Math.floor(Math.random() * 50) == 49) {
          var text = "";
          var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    
          for (var i = 0; i < 8; i++) {
            text += charset.charAt(Math.floor(Math.random() * charset.length));
          }
    
          delay(8000).then(() => {
            const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanemtly banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }) 
        }
      })
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
