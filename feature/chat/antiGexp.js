import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiGexp) return;
  if (message.startsWith("You earned") && message.includes("from playing SkyBlock!")) cancel(event)
})
