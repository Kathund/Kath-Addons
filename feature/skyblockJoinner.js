import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!message.includes("Guild: Message Of The Day")) return;
  if (!config.generalSkyblockJoinner) return;
  ChatLib.command("play skyblock")
})
