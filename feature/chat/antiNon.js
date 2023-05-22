import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (config.chatAntiNon === 0) return;
    if (message.includes("[") && message.includes("]")) {
      var pattern = /\[(\d+)\]/;
      var match = message.match(pattern)
      if (!match) return;
      if (config.chatAntiNon <= parseInt(match[1])) return;
      cancel(event)
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
