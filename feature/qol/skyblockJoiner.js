import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!message.includes("Guild: Message Of The Day")) return;
  if (config.qolSkyblockJoiner) ChatLib.command("play skyblock")
})
