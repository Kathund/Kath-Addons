import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (config.chatAntiMysteryBox && message.includes("✦") && message.includes("Mystery Box")) cancel(event)
})
