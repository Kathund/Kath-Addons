import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatCyberBully) return;
  if (!message.startsWith(" ☠") && message.includes("was killed by")) return;
  ChatLib.command(`pc ${message}`);
  ChatLib.command(`ac ${message}`);
})
