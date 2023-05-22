import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!config.chatAntiTip) return;
    if (!message.includes("tipped")) return;
    cancel(event)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
