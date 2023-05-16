import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (config.chatAntiNon === 0) return;
  if (!message.includes("[") && message.includes("]")) return;
  var pattern = /\[(\d+)\]/;
  var match = message.match(pattern)
  if (!match) return;
  if (config.chatAntiNon <= parseInt(match[1])) return;
  cancel(event)
})
