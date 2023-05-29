import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if(!message.includes(`${Player.getName()} joined the lobby!`)) return;
    if (config.qolSkyblockJoiner) ChatLib.command("play skyblock")
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
