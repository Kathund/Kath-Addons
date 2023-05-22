import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!config.chatCyberBully) return;
    if (message.startsWith(" ☠") && message.includes("was killed by")) {
      ChatLib.command(`pc ${message}`);
      ChatLib.command(`ac ${message}`);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
